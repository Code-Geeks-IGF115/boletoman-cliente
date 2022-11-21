import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento-api.service';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
interface Transaction {
  Categoria: string;
  TButacas: number;
  VButacas: number;
  PrecioU: number;
  Importe: number;
}

interface Compra {
  Categoria: string;
  DButacas: number;
  PrecioU: number;
  Importe: number;
}

@Component({
  selector: 'app-informacion-evento',
  templateUrl: './informacion-evento.component.html',
  styleUrls: ['./informacion-evento.component.css']
})
export class InformacionEventoComponent {
  displayedColumns: string[] = ['Categoria', 'TButacas', 'VButacas', 'PrecioU', 'Importe'];
  transactions: Transaction[] = [
    {Categoria: 'VIP', TButacas: 100, VButacas: 85, PrecioU: 25, Importe: 2125},

  ];

  displayedColumns1: string[] = ['Categoria', 'DButacas', 'PrecioU', 'Importe'];
  compras: Compra[] = [
    {Categoria: 'VIP', DButacas: 3, PrecioU: 25, Importe: 75},

  ];
  detallesEvento:any;
  idEvento:any;
  constructor( private router:Router,private eventosApiService:EventoService,private _snackBar: MatSnackBar,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.idEvento =this.route.snapshot.paramMap.get('idEvento');
    this.getDetalleEvento(this.idEvento);
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.Importe).reduce((acc, value) => acc + value, 0);
  }

  getTotalCost1() {
    return this.compras.map(t => t.Importe).reduce((acc, value) => acc + value, 0);
  }
  getDetalleEvento(id_evento:any){
    this.eventosApiService.obtenerDetalleEvento(id_evento)
    .subscribe((resultado:any) => {
        console.log(resultado);
        this.detallesEvento = {
            id_evento:resultado.evento.id,
            nombre:resultado.evento.nombre,
            descripcion:resultado.evento.descripcion,
            tipoDeEvento: resultado.evento.tipoDeEvento,
            fechaInicio:resultado.evento.fechaInicio,
            horaInicio:resultado.evento.horaInicio,
            fechaFin:resultado.evento.fechaFin,
            horaFin:resultado.evento.horaFin,
            id_categoria:resultado.evento.categoria.id,
            categoria:resultado.evento.categoria.nombre
        }
        console.log(this.detallesEvento)
      })
  }

}
