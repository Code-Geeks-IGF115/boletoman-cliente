import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from 'src/app/services/evento-api.service';

@Component({
  selector: 'app-ver-detalle-evento',
  templateUrl: './ver-detalle-evento.component.html',
  styleUrls: ['./ver-detalle-evento.component.css']
})


export class VerDetalleEventoComponent implements OnInit {
//definiendo variables
id_evento:any;
detallesEvento:any;
  constructor(private route: ActivatedRoute,private eventosApiService:EventoService) { }

  ngOnInit(): void {
    this.id_evento =this.route.snapshot.paramMap.get('idEvento');
    this.getDetalleEvento(this.id_evento);
  }

  getDetalleEvento(id_evento:any){
    this.eventosApiService.obtenerDetalleEvento(id_evento)
    .subscribe((resultado:any) => {
        console.log(resultado);
        this.detallesEvento = {
            id_evento:resultado.evento.id,
            nombre:resultado.evento.nombre,
            descripcion:resultado.evento.descripcion,
            tipoDeEvento: resultado.evento.tipoDeEvento,
            fechaInicio:resultado.evento.fechaInicio,
            horaInicio:resultado.evento.horaInicio,
            fechaFin:resultado.evento.fechaFin,
            horaFin:resultado.evento.horaFin,
            id_categoria:resultado.evento.categoria.id,
            categoria:resultado.evento.categoria.nombre
        }
        console.log(this.detallesEvento)
      })
  }
}


