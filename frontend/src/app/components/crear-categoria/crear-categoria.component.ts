import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/** 

export interface CategoriaT {
  categoria: string;
  codigo: string;
  precio: string;
  fila: number;
  columna: number;
  meses: number;
  boletoman: number;

}

const ELEMENT_DATA: CategoriaT[] = [
  { categoria: 'Categoria 1', codigo: 'CAT1', precio: '$25.00',   fila: 1, columna: 1, meses: 4, boletoman: 12},
  { categoria: 'Categoria 2', codigo: 'CAT2', precio: '$15.00', fila: 2, columna: 1, meses: 0, boletoman: 24}
  
];


 @title Basic use of `<table mat-table>`
 
@Component({
  selector: 'crear-categoria.component',
  styleUrls: ['crear-categoria.component.html'],
  templateUrl: 'crear-categoria.component.css',
})
export class TableCategoria {
  displayedColumns: string[] = ['categoria', 'codigo', 'precio', 'fila', 'columna', 'meses', 'boletoman'];
  dataSource = ELEMENT_DATA;
}

*/

