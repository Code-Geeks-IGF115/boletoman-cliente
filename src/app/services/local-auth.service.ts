import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LocalAuthService {

  token:any;
  email:any;
  logeado:boolean=false;
  constructor(private httpClient: HttpClient, 
    private cookieService: CookieService) { }

  //iniciar sesión
  checkSession(form:any):Observable<any>{
    return this.httpClient.post<any>(environment.usuarios_host+ '/api/login_check', form);
  }
  registrarse(form:any):Observable<any>{
    return this.httpClient.post<any>(environment.usuarios_host+ '/api/registro', form);
  }
  setCredentials(token:any, email:any){
    this.token=token;
    this.email=email;
    this.logeado=true;
    this.cookieService.set('token', token);
  
    // console.log(`credentials ${token}, ${email}`);
  }

  estaLogeado(){
    return this.token!=null;
  }
}
