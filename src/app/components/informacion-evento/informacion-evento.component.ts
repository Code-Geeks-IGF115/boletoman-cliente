import { Component, OnInit } from '@angular/core';

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

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.Importe).reduce((acc, value) => acc + value, 0);
  }

  getTotalCost1() {
    return this.compras.map(t => t.Importe).reduce((acc, value) => acc + value, 0);
  }

}
