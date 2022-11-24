import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento-api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { IconOptions } from '@angular/material/icon';

import { Router, ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  categoria: string;
  precio: number;
  cantidad: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {categoria: "Categoria 1", precio: 10.50 ,cantidad: 100,}
  
  
];


@Component({
  selector: 'app-seleccionar-butaca',
  templateUrl: './seleccionar-butaca.component.html',
  styleUrls: ['./seleccionar-butaca.component.css']
  
})


export class SeleccionarButacaComponent implements OnInit {

  displayedColumns: string[] = ['categoria', 'precio', 'cantidad', 'borrar'];
  dataSource = ELEMENT_DATA;
  idEvento:any;
  constructor( 
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private eventoService:EventoService
    ) { }
  
  ngOnInit(): void {
    this.idEvento = this.activatedRoute.snapshot.paramMap.get('idEvento');
    this.eventoService.obtenerDetalleEvento(this.idEvento).subscribe((resultado:any)=>{
      console.log(resultado);
    });
  }

 

}
