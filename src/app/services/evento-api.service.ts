import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventosI } from '../models/eventos.interface';
import { ResponseI } from '../models/response.interface';
import { SalasI } from '../models/salas.interface';
@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private httpClient: HttpClient) { }
  //servicio para consultar las salas de eventos
  obtenerSalas(){
    return this.httpClient.get(environment.salas_url+ '/')
    .pipe(
      map((resultados:any)=>{
        console.log(resultados)
        return resultados;
      })
    );
  }

  // servicio para consultar una sala de eventos en espefico
  getSala(id:any){
    return this.httpClient.get(environment.salas_url+ '/' + id)
    .pipe(
      map((resultados:any)=>{
        console.log(resultados);
        return resultados;
      })
      
    );
    
  }
 //servicio para consultar los eventos
 obtenerEventos(){
    return this.httpClient.get(environment.evento_url+'/')
    .pipe(
      map((resultados:any)=>{
        console.log(resultados)
        return resultados;
      })
    );
}
//servicio para obtener los detalles del evento
  obtenerDetalleEvento(id_evento:any){
    return this.httpClient.get(environment.evento_url+'/'+id_evento)
    .pipe(
      map((resultados:any)=>{
        console.log(resultados)
        return resultados;
      })
    );
  }
  //servicio para guardar evento
  postEvento(form:any):Observable<ResponseI> {
    return this.httpClient.post<ResponseI>(environment.evento_url+'/new', form)
  }
  //servicio para guardar sala
  postSala(form:SalasI):Observable<ResponseI> {
    return this.httpClient.post<ResponseI>(environment.salas_url+'/new', form)
  }
  //servicio para editar la sala de eventos
  editarSala(form:SalasI, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.salas_url+ '/'+id+'/edit', form)
  }
  //servicio para eliminar la sala
  eliminarSala(id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.salas_url+ '/' + id,"")
  }
  //servicio para guardar la categoría 
  postCategoria(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.categoria_url+ '/new', form)
  }
  //metodo para guardar la celda
  postCelda(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.celda_url+ '/'+id+'/new', form)
  }

}
