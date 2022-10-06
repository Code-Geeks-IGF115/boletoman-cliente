import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SocialAuthService,} from '@abacritt/angularx-social-login';
import { SocialUser } from "angularx-social-login"
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SocialLoginModule, AuthService]
})
export class LoginComponent implements OnInit {
  user:any;
  loggedIn:any;
  //input password
  hide = true;
  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
    if(this.loggedIn == null){
      this.router.navigate(['/creaEvento'])
    }
  }
}
