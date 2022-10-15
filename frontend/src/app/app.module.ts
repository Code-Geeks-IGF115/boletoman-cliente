
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {GalleriaModule} from 'primeng/galleria';


import { HttpClientModule } from '@angular/common/http';
/* Angular Material */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
// Importando componentes
import { AuthModule } from '@auth0/auth0-angular';
import { CreaEventoComponent } from './components/crea-evento/crea-evento.component';
import { SalasDeEventoComponent } from './components/salas-de-evento/salas-de-evento.component';
import { LoginComponent } from './components/login/login.component';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';
import { VerSalaDeEventoComponent } from './components/ver-sala-de-evento/ver-sala-de-evento.component';

//Social media
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { BaseComponent } from './base/base.component';
import { VerDetalleEventoComponent } from './components/ver-detalle-evento/ver-detalle-evento.component';


@NgModule({
  declarations: [
    AppComponent,
    CreaEventoComponent,
    SalasDeEventoComponent,
    LoginComponent,
    VerSalaDeEventoComponent,
    CrearCategoriaComponent,
    BaseComponent,
    VerDetalleEventoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    FormsModule, 
    ReactiveFormsModule,
    SocialLoginModule,
    MatTableModule,
    HttpClientModule,
    GalleriaModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '573091350225-98cajt278f660kel7soed9b35p8ec548.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }