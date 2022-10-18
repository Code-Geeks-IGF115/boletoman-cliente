
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
  selector: 'app-editar-sala',
  templateUrl: './editar-sala.component.html',
  styleUrls: ['./editar-sala.component.css']
})
export class EditarSalaComponent implements OnInit {
  //Definiendo variables
  
  creaSalaForms = new FormGroup({
    nombre: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    forma: new FormControl('', Validators.required),
    filas: new FormControl(''),
    columnas: new FormControl('', Validators.required),
  });
  columnas:any;
  filas:any;
  resultado:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor( private router:Router,private eventosApiService:EventoService,private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
  }

  //Método para guardar la sala
  guardarSala(creaSalaForms: any){
    creaSalaForms.forma=Number(creaSalaForms.forma);
    this.eventosApiService.postSala(creaSalaForms).subscribe(data =>{
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

