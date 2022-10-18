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
    .subscribe({
      next:(resultado:any) => {
        this.detallesEvento=resultado.map((evento:any)=>{
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
        });
      }
    })
    console.log(this.detallesEvento)

  }

}


