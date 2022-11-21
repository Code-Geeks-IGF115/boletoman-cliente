import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento-api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { LocalAuthService } from 'src/app/services/local-auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
//input password
hide = true;
registroForm = new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
  password2: new FormControl('', Validators.required),
});
constructor(
  private router: Router,
  private auth:LocalAuthService
  ) { }

ngOnInit() {

}
//Método para guardar el evento
registrarse(loginForm: any){
  loginForm.email=loginForm.email;
  loginForm.password=loginForm.password;
  if(loginForm.password==loginForm.password2){
    this.auth.registrarse(loginForm).subscribe(data =>{
        if(data){
          this.auth.setCredentials(data.token,loginForm.email);
          this.router.navigate(['/verEventos']);
        }
    });
  }
}
}
