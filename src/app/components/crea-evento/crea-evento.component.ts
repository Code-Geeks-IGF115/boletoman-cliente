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
  idEvento:any;
  creaEventoForms = new FormGroup({
    // evento_id: new FormControl(''),
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    tipoDeEvento: new FormControl('', Validators.required),
    categoria:new FormControl('', Validators.required) ,
    fechaInicio: new FormControl('', Validators.required),
    horaInicio: new FormControl('', Validators.required),
    fechaFin: new FormControl('', Validators.required),
    horaFin: new FormControl('', Validators.required),
    concurrencia: new FormControl('', Validators.required),
    lunes: new FormControl(''),
    martes: new FormControl(''),
    miercoles: new FormControl(''),
    jueves: new FormControl(''),
    viernes: new FormControl(''),
    sabado: new FormControl(''),
    domingo: new FormControl(''),
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private authService: SocialAuthService, private router: Router, private eventosApiService:EventoService,private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    
  }

  //Método para guardar el evento
  guardarEvento(eventoform: any){
    eventoform.concurrencia=Number(eventoform.concurrencia);
    eventoform.categoria=Number(eventoform.categoria);
    this.eventosApiService.postEvento(eventoform).subscribe(data =>{
      this.idEvento=data.id;
      console.log(data);
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
  }

  
}

