import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
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
  //definiendo variables
  creaCategoriaForms = new FormGroup({
    nuevaCategoria: new FormControl('', Validators.required),
    codigoCategoria: new FormControl('', Validators.required),
    precioCategoria: new FormControl('', Validators.required),
  });

  configuracionForms = new FormGroup({
    categoria: new FormControl('', Validators.required),
    fila: new FormControl('', Validators.required),
    columna: new FormControl('', Validators.required),
    numButacas: new FormControl('', Validators.required),
  });
  columnas: string[] = ['categoria', 'codigo', 'precio','fila','columna','mesas','butacas'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
  //metodo para agregar una categoria
  agregarCategoria(form:any){
    console.log(form)
  }
  //metodo para agregar la configuración
  agregarConfiguracion(form:any)
  {
    console.log(form)
  }
}

