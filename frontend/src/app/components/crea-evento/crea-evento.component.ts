import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SocialAuthService,} from '@abacritt/angularx-social-login';
//importando services
import { EventoService } from 'src/app/services/evento-api.service';

@Component({
  selector: 'app-crea-evento',
  templateUrl: './crea-evento.component.html',
  styleUrls: ['./crea-evento.component.css']
})
export class CreaEventoComponent implements OnInit {
  //definiendo variable
  eventosList:any[]=[];
  constructor(private authService: SocialAuthService, private router: Router, private eventosApiService:EventoService) { }
  
  ngOnInit(): void {
    this.getListEventos();
  }

  getListEventos() {
    this.eventosApiService.obtenerEventos().subscribe({
      next: (resultado: any) => {
        this.eventosList = resultado.map((evento: any) => {
          return {
            nombreEvento:evento.nombre,
            descripcionEvento:evento.descripcion
          };
        });
        console.log(this.eventosApiService)
      },
      error: (error) => {},
      complete: () => {},
    });
  }
}
