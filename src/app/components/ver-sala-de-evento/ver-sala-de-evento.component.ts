import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
//importando services
import { EventoService } from 'src/app/services/evento-api.service';
//importando Interface
import { SalasI } from 'src/app/models/salas.interface';



@Component({
  selector: 'app-ver-sala-de-evento',
  templateUrl: './ver-sala-de-evento.component.html',
  styleUrls: ['./ver-sala-de-evento.component.css']
})
export class VerSalaDeEventoComponent implements OnInit {
  // tableData !: MatTableDataSource<any>;
  tableData:any
  // salaList:SalasI[];
  displayedColumns: string[] = ['nombre', 'direccion', 'telefono', 'correo','action'];
  // dataSource = this.tableData;
  clickedRows = new Set<SalasI>();
  constructor(private eventosApiService:EventoService,private _snackBar: MatSnackBar,
              private reouter:Router) { }

  ngOnInit(): void {
    this.getListSala();
  }
  //Metodo para consultar las salas de eventos
  getListSala() {
    this.eventosApiService.obtenerSalas()
    .subscribe({
      next:(resultado:any)=>{
        this.tableData =resultado.salas.map((sala:any) =>{
          return{
            id_sala:sala.id,
            nombre:sala.nombre,
            direccion:sala.direccion,
            telefono: sala.telefono,
            correo:sala.email
          }
        }) 
        console.log(this.tableData)
      }
    })
  }
}

