import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LocalAuthService } from 'src/app/services/local-auth.service';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit, OnChanges {
  logeado:any;
  estaLogeado: boolean = this.cookieService.check('token');
  constructor(
  private authService:LocalAuthService,
  private router: Router,
  private cookieService:CookieService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.estaLogeado==false){
    }
  }
  
  ngOnInit(): void {
    this.logeado=this.estaLogeado;
  }
  
  cerrarSesion(){
    this.authService.cerrarSesion();
    const url=(this.router.url=='/verEventos') ?  window.location.reload() :this.router.navigate(['/verEventos']);
  }
}
