import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento-api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { LocalAuthService } from 'src/app/services/local-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  //input password
  hide = true;
  iniciarSesionForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private eventosApiService:EventoService, 
    private router: Router,
    private auth:LocalAuthService
    ) { }

  ngOnInit() {

  }
  //Método para guardar el evento
  iniciarSesion(loginForm: any){
    loginForm.email=loginForm.email;
    loginForm.password=loginForm.password;
    this.auth.checkSession(loginForm).subscribe(data =>{
        if(data){
          // console.log(data);
          this.auth.setCredentials(data.token,loginForm.email);
          this.router.navigate(['/verEventos']);
        }
    });
  }
}
