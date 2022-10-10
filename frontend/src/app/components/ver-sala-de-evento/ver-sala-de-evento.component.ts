import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  nombre: string;
  direccion: string;
  telefono: string;
  correo: string;
}
const listaUsuarios: PeriodicElement[] = [
  {nombre: '', direccion: '', telefono: '', correo: ''},
]
@Component({
  selector: 'app-ver-sala-de-evento',
  templateUrl: './ver-sala-de-evento.component.html',
  styleUrls: ['./ver-sala-de-evento.component.css']
})
export class VerSalaDeEventoComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'direccion', 'telefono', 'correo', 'editar'];
  dataSource = listaUsuarios;
  constructor() { }

  ngOnInit(): void {
  }

}
