import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialAuthService, } from '@abacritt/angularx-social-login';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate  } from '@angular/common';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
//importando services
import { EventoService } from 'src/app/services/evento-api.service';


@Component({
  selector: 'app-crea-evento',
  templateUrl: './crea-evento.component.html',
  styleUrls: ['./crea-evento.component.css']
})


export class CreaEventoComponent implements OnInit {
  //definiendo variable
  eventosList: any;
  idEvento: any;
  creaEventoForms = new FormGroup({
    // evento_id: new FormControl(''),
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    tipoDeEvento: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
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
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private eventosApiService: EventoService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    try {
      let message = sessionStorage.getItem('message');
      if (message) {
        this._snackBar.open(message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        sessionStorage.removeItem('message');
      }
      this.idEvento = this.activatedRoute.snapshot.paramMap.get('idEvento');
      if (this.idEvento) {
        this.eventosApiService.obtenerDetalleEvento(this.idEvento).subscribe((resultado: any) => {
          console.log(resultado);
          let evento=resultado.evento;
          evento.concurrencia = evento.concurrencia;
          evento.categoria = evento.categoria.id;
          evento.fechaFin=formatDate(evento.fechaFin, "yyyy-MM-dd",'es');
          evento.fechaInicio=formatDate(evento.fechaInicio, "yyyy-MM-dd",'es');
          evento.horaFin=formatDate(evento.horaFin, "HH:mm",'es');
          evento.horaInicio=formatDate(evento.horaInicio, "HH:mm",'es');
          this.creaEventoForms.patchValue(evento);
        });
      }
    } catch (e: any) {
      console.log(e.message);
    }
  }

  //Método para guardar el evento
  guardarEvento(eventoform: any) {
    if (this.idEvento) {
      eventoform.concurrencia = Number(eventoform.concurrencia);
      eventoform.categoria = Number(eventoform.categoria);
      this.eventosApiService.editarEvento(eventoform, this.idEvento).subscribe(data => {
        this.idEvento = data.id;
        sessionStorage.setItem('message', data.message);
        this.router.navigate(['/evento/' + this.idEvento]);

      })
    } else {
      eventoform.concurrencia = Number(eventoform.concurrencia);
      eventoform.categoria = Number(eventoform.categoria);
      this.eventosApiService.postEvento(eventoform).subscribe(data => {
        this.idEvento = data.id;
        sessionStorage.setItem('message', data.message);
        this.router.navigate(['/evento/' + this.idEvento]);

      })
    }
  }


}

