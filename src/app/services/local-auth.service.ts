import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LocalAuthService {

  constructor(private httpClient: HttpClient, 
    private cookieService: CookieService,
    private router:Router) { }

  //iniciar sesión
  checkSession(form:any):Observable<any>{
    return this.httpClient.post<any>(environment.usuarios_host+ '/api/login_check', form);
  }
  registrarse(form:any):Observable<any>{
    return this.httpClient.post<any>(environment.usuarios_host+ '/api/registro', form);
  }
  setCredentials(token:any, email:any){
    this.cookieService.set('token', token);
    this.cookieService.set('email', email);
  }

  checkSesion(){

      if(this.estaLogeado()){
        let token=this.cookieService.get('token');
        // console.log(token);
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
        this.httpClient.post<any>(environment.usuarios_host+'/api/check',undefined, { headers: headers, withCredentials: true })
        .subscribe((resultado:any)=>{
            this.cookieService.set('token',resultado.token);
            this.cookieService.set('idUsuario', resultado.id);
        }, (err:any) =>{
          this.cookieService.deleteAll();
          this.router.navigate(['/login']);
        });
      }else{
        this.router.navigate(['/login']);
      }

  }
  estaLogeado(){
    return this.cookieService.check('token');
  }
  cerrarSesion(){
    this.cookieService.delete('token');
  }
  getUsuarioId(){
    return this.cookieService.get('idUsuario');
  }
}


// url: string, body: any, options?: {
//   headers?: HttpHeaders | {
//       [header: string]: string | string[];
//   } | undefined;
//   context?: HttpContext | undefined;
//   observe?: "body" | undefined;
//   params?: HttpParams | ... 1 more ... | undefined;
//   reportProgress?: boolean | undefined;
//   responseType?: "json" | undefined;
//   withCredentials?: boolean | undefined;
// } | undefined