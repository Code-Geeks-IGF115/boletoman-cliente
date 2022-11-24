import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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
  tableData:any
  displayedColumns: string[] = ['nombre', 'direccion', 'telefono', 'correo','action'];
  clickedRows = new Set<SalasI>();
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  idEvento:any;
  constructor(
    private eventosApiService:EventoService,
    private _snackBar: MatSnackBar,
    private router:Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getListSala();
    this.idEvento =this.route.snapshot.paramMap.get('idEvento');
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
        // console.log(this.tableData)
      }
    })
  }
  //Metodo para guardar la sala seleccionada
  guardarSala(creaSalaForms: any){
    creaSalaForms.forma=Number(creaSalaForms.forma);
    this.eventosApiService.postSala(creaSalaForms).subscribe(data =>{
      // console.log(data)
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
    // console.log(creaSalaForms)
  }

  //Método para eliminar una sala
  eliminarSala(id:any){
    this.eventosApiService.eliminarSala(id).subscribe(data =>{
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
    this.getListSala(); 
  }
  seleccionarSala(idSalaDeEventos:any){
    this.eventosApiService.seleccionarSala(this.idEvento,idSalaDeEventos).subscribe(data =>{
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
    // this.getListSala(); 
  }


}

