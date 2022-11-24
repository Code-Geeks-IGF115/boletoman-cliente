import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventosI } from '../models/eventos.interface';
import { ResponseI } from '../models/response.interface';
import { SalasI } from '../models/salas.interface';
import { LocalAuthService } from 'src/app/services/local-auth.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(
    private httpClient: HttpClient, 
    private authService:LocalAuthService,
    private cookieServico:CookieService
    ) { }
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
    // this.authService.checkSesion();
    form.idUsuario=this.cookieServico.get('idUsuario');
    console.log(form);
    return this.httpClient.post<ResponseI>(environment.evento_url+'/new', form)
  }
  //servicio para editar la sala de eventos
  editarEvento(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.evento_url+ '/'+id+'/edit', form)
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
  //servicio para eliminar la sala
  seleccionarSala(idEvento:any,idSalaDeEventos:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.evento_url+ '/' + idEvento+"/sala/de/eventos",{"salaDeEventosId":idSalaDeEventos});
  }
  //servicio para guardar la categoría 
  postCategoria(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.categoria_url+ '/new', form)
  }
  //metodo para guardar la celda
  postCelda(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.celda_url+ '/categoria/'+id, form)
  }
  //metodo para asignar una sala a un evento
  postSalaEvento(idEvento:any, idSala:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.reservaciones_host+ '/evento/'+idEvento+'/sala/'+idSala,{})
  }
  async getMisEventos():Promise<any>{  
      await this.authService.checkSesion();
      let id=this.authService.getUsuarioId();
      return this.httpClient.get<ResponseI>(environment.eventos_host+'/evento/eventosdeusuarios/'+id);
  }


}
