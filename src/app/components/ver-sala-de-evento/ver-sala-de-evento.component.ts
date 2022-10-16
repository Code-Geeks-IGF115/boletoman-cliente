import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
//importando services
import { EventoService } from 'src/app/services/evento-api.service';
//importando Interface
import { SalasI } from 'src/app/models/salas.interface';
//  listaUsuarios: PeriodicElement[] = [];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-ver-sala-de-evento',
  templateUrl: './ver-sala-de-evento.component.html',
  styleUrls: ['./ver-sala-de-evento.component.css']
})
export class VerSalaDeEventoComponent implements OnInit {
  salaList:any;
  // salaList:SalasI[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  constructor(private eventosApiService:EventoService,private _snackBar: MatSnackBar,
              private reouter:Router) { }

  ngOnInit(): void {
    this.getListSala();
  }
  //Metodo para consultar las salas de eventos
  getListSala() {
    this.eventosApiService.obtenerEventos()
    .subscribe({
      next:(resultado:any)=>{
        this.salaList=resultado.salas.map((sala:any)=>{
          return{
            nombre:sala.nombre,
            direccion:sala.direccion,
            telefono:sala.telefono,
            correo:sala.email
          }
        })
        console.log(this.salaList)
      }
    })
  }
}
