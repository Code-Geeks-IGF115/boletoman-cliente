import { Component, OnInit } from '@angular/core';

export interface Prueba {
  categoria: string;
  butaca: string;
  precio: number;  
}

const ELEMENT_DATA: Prueba[] = [
  {categoria: 'CATEGORIA 1', butaca: 'CAT02#21', precio: 25.00},  
  {categoria: 'CATEGORIA 1', butaca: 'CAT02#22', precio: 25.00}, 
];


@Component({
  selector: 'app-realizar-pago',
  templateUrl: './realizar-pago.component.html',
  styleUrls: ['./realizar-pago.component.css'],
})
export class RealizarPagoComponent implements OnInit {
  displayedColumns: string[] = ['categoria', 'butaca', 'precio','acciones'];
  dataSource = ELEMENT_DATA;
  columnas=[
    {titulo: "Categoria", name:"categoria"},
    {titulo: "Butaca", name:"butaca"},
    {titulo: "Precio $", name:"precio"},
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
}
