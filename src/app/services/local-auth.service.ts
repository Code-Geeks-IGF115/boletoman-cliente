import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LocalAuthService {

  token:any;
  email:any;
  constructor(private httpClient: HttpClient) { }

  //iniciar sesión
  checkSession(form:any):Observable<any>{
    return this.httpClient.post<any>(environment.usuarios_host+ '/api/login_check', form);
  }
  setCredentials(token:any, email:any){
    this.token=token;
    this.email=email;
    console.log(`credentials ${token}, ${email}`);
  }
}
