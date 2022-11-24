import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { IconOptions } from '@angular/material/icon';

import { Router } from '@angular/router';

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
  columnaSala=4;
  filaSala=4;
  formaSala='1';
  constructor( private router:Router) { }
  
  ngOnInit(): void {
  }


}
