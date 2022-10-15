import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private httpClient: HttpClient) { }

  obtenerEventos(){
    return this.httpClient.get(environment.evento_url+'evento/')
    .pipe(
      map((resultados:any)=>{
        return resultados;
      })
    );
  }
}
