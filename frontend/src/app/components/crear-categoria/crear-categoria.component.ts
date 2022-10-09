import { Component, OnInit } from '@angular/core';
export interface Configuracion {
  categoria: string;
  codigo: string;
  precio: number;
  fila: number;
  columna:number;
  mesas:number;
  butacas: number;
}

const ELEMENT_DATA: Configuracion[] = [
  {categoria:'Categoria 1', codigo: 'CAT1', precio: 12, fila: 1,columna: 1,mesas: 3,butacas: 1},
];
@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  
  columnas: string[] = ['categoria', 'codigo', 'precio','fila','columna','mesas','butacas'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

