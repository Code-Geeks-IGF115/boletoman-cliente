import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventosI } from '../models/eventos.interface';
import { ResponseI } from '../models/response.interface';
@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private httpClient: HttpClient) { }
  //servicio para consultar las salas de eventos
  obtenerEventos(){
    return this.httpClient.get(environment.evento_url+'sala/de/eventos/')
    .pipe(
      map((resultados:any)=>{
        console.log(resultados)
        return resultados;
      })
    );
  }

  postEvento(form:EventosI):Observable<ResponseI> {
    return this.httpClient.post<ResponseI>(environment.evento_url+'evento/new', form)
  }
}
