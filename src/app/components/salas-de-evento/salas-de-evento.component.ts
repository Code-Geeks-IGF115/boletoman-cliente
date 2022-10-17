
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
//importando services
import { EventoService } from 'src/app/services/evento-api.service';
import { SalasI } from 'src/app/models/salas.interface';
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
  columnas:any;
  filas:any;
  resultado:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor( private router:Router,private eventosApiService:EventoService,private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
  }

  //Método para guardar el evento
  guardarSala(creaSalaForms: any){
    this.eventosApiService.postEvento(creaSalaForms).subscribe(data =>{
      console.log(data)
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
    console.log(creaSalaForms)
  }

   vistaPreviaSala(){
    let i, j;
    this.columnas=this.creaSalaForms.controls['columnas']
    this.filas=this.creaSalaForms.controls['filas']
    this.resultado= this.filas*this.columnas
  } 
}
