import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importando componentes
import { LoginComponent } from './components/login/login.component';
import { CreaEventoComponent } from './components/crea-evento/crea-evento.component';

const routes: Routes = [
  {path:' ', redirectTo:'creaEvento',pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'creaEvento', component: CreaEventoComponent},
  {path:'**', redirectTo:'login',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
