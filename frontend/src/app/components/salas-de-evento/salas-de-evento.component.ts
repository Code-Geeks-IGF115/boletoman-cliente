import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salas-de-evento',
  templateUrl: './salas-de-evento.component.html',
  styleUrls: ['./salas-de-evento.component.css']
})
export class SalasDeEventoComponent implements OnInit {
  //Definiendo variables
  creaSalaForms = new FormGroup({
    nombreSala: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    formaSala: new FormControl('', Validators.required),
    columnas: new FormControl('', Validators.required),
    filas: new FormControl('', Validators.required),
  });
 
  constructor( private router:Router) { }
  
  ngOnInit(): void {
  }

  //Metodo para recuperar datos de la sala
  guardarSala(form:any){
    console.log(form)
  }
}
