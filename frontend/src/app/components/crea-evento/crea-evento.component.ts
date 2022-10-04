import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crea-evento',
  templateUrl: './crea-evento.component.html',
  styleUrls: ['./crea-evento.component.css']
})
export class CreaEventoComponent implements OnInit {
  sesionActiva = true;
  constructor(public auth: AuthService, private router:Router) { }
  
  ngOnInit(): void {
    
  }
  //metodo para cerrar secion
  logOut(){
    this.auth.logout();
  }
}
