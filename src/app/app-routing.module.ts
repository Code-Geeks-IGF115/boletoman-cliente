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
import { EditarSalaComponent } from './components/editar-sala/editar-sala.component';
//import { detalleCompra } from './components/detalle-compra/detalle-compra.component';


const routes: Routes = [

  {path:'login', component: LoginComponent},
  {path: '',
    component: BaseComponent,
    children: [
      {
        path:'', 
        redirectTo:'/login',
        pathMatch: 'full'}, 
      {
        path:'creaEvento', 
        component: CreaEventoComponent
      },
      {
        path:'crearCategoria/:idSala', 
        component: CrearCategoriaComponent
      },
      {
        path:'verSalaEvento/:crud', 
        component: SalasDeEventoComponent
      },
      {
        path:'verSalaEvento/:crud/:idSala', 
        component: SalasDeEventoComponent
      },
      // {
      //   path:'verSalaEvento/crearSala', 
      //   component: SalasDeEventoComponent
      // },
      // {
      //   path:'verSalaEvento/editarSala', 
      //   component: EditarSalaComponent 
      // },
      {
        path:'verEventos', 
        component: VerEventosComponent
      },
      {
        path:'verSalas/:idEvento', 
        component: VerSalaDeEventoComponent
      },
      {
        path:'seleccionarButaca', 
        component: SeleccionarButacaComponent
      },
      {
        path:'verDetalleEvento/:idEvento', 
        component: VerDetalleEventoComponent
      },
      {
        path:'', 
        component: BaseComponent
      },
    /* {
        path:'detalleCompra/:idEvento', 
        component: detalleCompraComponent
      }*/
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

