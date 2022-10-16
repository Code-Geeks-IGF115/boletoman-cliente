import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SocialAuthService,} from '@abacritt/angularx-social-login';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
//importando services
import { EventoService } from 'src/app/services/evento-api.service';
//importando Interface
import { EventosI } from 'src/app/models/eventos.interface';
@Component({
  selector: 'app-crea-evento',
  templateUrl: './crea-evento.component.html',
  styleUrls: ['./crea-evento.component.css']
})
export class CreaEventoComponent implements OnInit {
  //definiendo variable
  eventosList:any;
  creaEventoForms = new FormGroup({
    evento_id: new FormControl(''),
    tituloEvento: new FormControl('', Validators.required),
    organizador: new FormControl('', Validators.required),
    tipoEvento: new FormControl('', Validators.required),
    catEvento: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    fechaInicio: new FormControl('', Validators.required),
    horaInicio: new FormControl('', Validators.required),
    fechaFin: new FormControl('', Validators.required),
    horaFin: new FormControl('', Validators.required),
    concurencia: new FormControl('', Validators.required),
    /* lunes: new FormControl(''),
    martes: new FormControl(''),
    miercoles: new FormControl(''),
    jueves: new FormControl(''),
    viernes: new FormControl(''),
    sabado: new FormControl(''),
    domingo: new FormControl(''), */
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private authService: SocialAuthService, private router: Router, private eventosApiService:EventoService,private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.getListEventos();
  }
//Metodo para consultar las salas de eventos
  getListEventos() {
    this.eventosApiService.obtenerEventos()
    .subscribe({
      next:(resultado:any)=>{
        this.eventosList=resultado.salas.map((sala:any)=>{
          return{
            nombre:sala.nombre,
            direccion:sala.direccion,
            telefono:sala.telefono,
            correo:sala.email
          }
        })
        console.log(this.eventosList)
      }
    })
  }
  //Metodo para guardar el evento
  guardarEvento(form: any){
    this.eventosApiService.postEvento(form).subscribe(data =>{
      console.log(data)
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['blue-snackbar']
      });
    })
  }


}

