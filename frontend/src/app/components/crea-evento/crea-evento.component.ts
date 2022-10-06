import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import {SocialAuthService,} from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-crea-evento',
  templateUrl: './crea-evento.component.html',
  styleUrls: ['./crea-evento.component.css']
})
export class CreaEventoComponent implements OnInit {

  constructor(private authService: SocialAuthService, private router: Router) { }
  
  ngOnInit(): void {
    
  }
}
