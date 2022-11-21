import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento-api.service';
import { LocalAuthService } from 'src/app/services/local-auth.service';
@Component({
  selector: 'app-ver-eventos',
  templateUrl: './ver-eventos.component.html',
  styleUrls: ['./ver-eventos.component.css']
})
export class VerEventosComponent implements OnInit {
  //definiendo variables
  eventosList:any;
  constructor(private eventosApiService:EventoService,
    private authService:LocalAuthService) { }

  ngOnInit(): void {
    this.getListEventos()
    // console.log(`Esta logeado: ${this.authService.estaLogeado()}`);
  }
  //Metodo para consultar los eventos
  getListEventos() {
    this.eventosApiService.obtenerEventos()
    .subscribe({
      next:(resultado:any)=>{
        this.eventosList =resultado.eventos.map((evento:any) =>{
          return{
            id_evento:evento.id,
            nombre:evento.nombre,
            descripcion:evento.descripcion,
            tipoDeEvento: evento.tipoDeEvento,
            fechaInicio:evento.fechaInicio,
            horaInicio:evento.horaInicio,
            fechaFin:evento.fechaFin,
            horaFin:evento.horaFin,
            id_categoria:evento.categoria.id,
            categoria:evento.categoria.nombre
          }
        }) 
        console.log(this.eventosList)
      }
    })
  }

}
