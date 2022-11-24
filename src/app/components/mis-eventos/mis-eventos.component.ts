import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { IconOptions } from '@angular/material/icon';
import { EventoService } from 'src/app/services/evento-api.service';
import { Router, ActivatedRoute } from '@angular/router';


export interface Evento {
  nombreDeEvento: string;
  fecha: string;
  hora: string;
}


@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent implements OnInit{
  
  idEvento:any;
  displayedColumns: string[] = ['nombreDeEvento', 'fecha', 'hora', 'editar' ,'listaDeAsistentes'];
  dataSource:any[]=[];
  constructor( 
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private eventosApiService: EventoService) { }

  ngOnInit(): void {
    this.idEvento = this.activatedRoute.snapshot.paramMap.get('idEvento');
    this.misEventos();
  }

  async misEventos(){
    await this.eventosApiService.getMisEventos().then(async (resultado:any)=>{
      await resultado.subscribe((eventos:any)=>{
        if(eventos){
          eventos.forEach((evento:any) => {
            this.dataSource.push({
              id:evento.id,
              nombre: evento.nombre,
              fecha:evento.fechaInicio,
              hora:evento.horaInicio
            })
          });
          this.dataSource=[...this.dataSource]
          // console.log(this.dataSource);
        }
      })
    });
  }
}
