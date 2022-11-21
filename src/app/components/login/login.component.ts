import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SocialAuthService,} from '@abacritt/angularx-social-login';

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
  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      localStorage.setItem('idToken',user.idToken);
      this.loggedIn = (user != null);
      console.log(this.user);
      this.router.navigate(['/creaEvento'])
    }); 
  }
}
