import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { IconOptions } from '@angular/material/icon';
import { EventoService } from 'src/app/services/evento-api.service';
import { Router, ActivatedRoute } from '@angular/router';


export interface PeriodicElement {
  nombreDeEvento: string;
  fecha: string;
  hora: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombreDeEvento: "GRADUACION 2022 ESCUELA INGENIERIA INDUSTRIAL", fecha: "25 DE DICIEMBRE DE 2022" ,hora: "2:00 PM - 3:00 PM",}
  
];
@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent implements OnInit {
  
  idEvento:any;
  displayedColumns: string[] = ['nombreDeEvento', 'fecha', 'hora', 'listaDeAsistentes'];
  dataSource = ELEMENT_DATA;
  constructor( 
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private eventosApiService: EventoService) { }


  ngOnInit(): void {
    this.idEvento = this.activatedRoute.snapshot.paramMap.get('idEvento');
    this.eventosApiService.getMisEventos(this.idEvento).then(
      (val)=>{
        console.log(val);
      },
      (err) => console.log(err.message)
    );
  }

}
