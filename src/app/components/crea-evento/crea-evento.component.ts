import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SocialAuthService,} from '@abacritt/angularx-social-login';
import {FormGroup, FormControl, Validators} from '@angular/forms';
//importando services
import { EventoService } from 'src/app/services/evento-api.service';

@Component({
  selector: 'app-crea-evento',
  templateUrl: './crea-evento.component.html',
  styleUrls: ['./crea-evento.component.css']
})
export class CreaEventoComponent implements OnInit {
  //definiendo variable
  eventosList:any;
  creaEventoForms = new FormGroup({
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
    lunes: new FormControl(''),
    martes: new FormControl(''),
    miercoles: new FormControl(''),
    jueves: new FormControl(''),
    viernes: new FormControl(''),
    sabado: new FormControl(''),
    domingo: new FormControl(''),
  });

  constructor(private authService: SocialAuthService, private router: Router, private eventosApiService:EventoService) { }
  
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
    console.log(form)
  }


}

