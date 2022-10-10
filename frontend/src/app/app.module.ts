import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { CreaEventoComponent } from './components/crea-evento/crea-evento.component';
import { SalaDeEventoComponent } from './components/sala-de-evento/sala-de-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreaEventoComponent,
    SalaDeEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'boletoman.us.auth0.com',
      clientId: 'IOyYxoB4HkW78TfqTn72FR8KhuF3RDRS'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
