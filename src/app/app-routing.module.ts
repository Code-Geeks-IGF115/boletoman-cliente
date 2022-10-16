import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importando componentes
import { LoginComponent } from './components/login/login.component';
import { CreaEventoComponent } from './components/crea-evento/crea-evento.component';
import { VerSalaDeEventoComponent } from './components/ver-sala-de-evento/ver-sala-de-evento.component';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';
import { SalasDeEventoComponent } from './components/salas-de-evento/salas-de-evento.component';
import { BaseComponent } from './base/base.component';
import { VerEventosComponent } from './components/ver-eventos/ver-eventos.component';
import { SeleccionarButacaComponent } from './components/seleccionar-butaca/seleccionar-butaca.component';
import { VerDetalleEventoComponent } from './components/ver-detalle-evento/ver-detalle-evento.component';


const routes: Routes = [

  {path:'login', component: LoginComponent},
  {path: '',
    component: BaseComponent,
    children: [
      {
        path:'', 
        redirectTo:'creaEvento',
        pathMatch: 'full'}, 
      {
        path:'creaEvento', 
        component: CreaEventoComponent
      },
      {
        path:'crearCategoria', 
        component: CrearCategoriaComponent
      },
      {
        path:'crearSala/:id_evento', 
        component: SalasDeEventoComponent
      },
      {
        path:'verEventos', 
        component: VerEventosComponent
      },
      {
        path:'verSalaEvento/:id_evento', 
        component: VerSalaDeEventoComponent
      },
      {
        path:'seleccionarButaca', 
        component: SeleccionarButacaComponent
      },
      {
        path:'verDetalleEvento', 
        component: VerDetalleEventoComponent
      },
      {
        path:'', 
        component: BaseComponent
      }
    ]
  },
  {
    path:'**', redirectTo:'creaEvento',pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

