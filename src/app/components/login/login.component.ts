import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SocialAuthService,} from '@abacritt/angularx-social-login';
import { EventoService } from 'src/app/services/evento-api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { LocalAuthService } from 'src/app/services/local-auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  user:any;
  loggedIn:any;
  //input password
  hide = true;
  iniciarSesionForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private authService: SocialAuthService, 
    private eventosApiService:EventoService, 
    private router: Router,
    private auth:LocalAuthService
    ) { }

  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   localStorage.setItem('idToken',user.idToken);
    //   this.loggedIn = (user != null);
    //   console.log(this.user);
    //   this.router.navigate(['/creaEvento'])
    // }); 
  }
  //Método para guardar el evento
  iniciarSesion(loginForm: any){
    loginForm.email=loginForm.email;
    loginForm.password=loginForm.password;
    this.auth.checkSession(loginForm).subscribe(data =>{
        if(data){
          this.auth.setCredentials(data.token,loginForm.email);
        }
    });
  }
}
