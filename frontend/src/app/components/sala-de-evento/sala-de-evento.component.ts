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
  selector: 'app-sala-de-evento',
  templateUrl: './sala-de-evento.component.html',
  styleUrls: ['./sala-de-evento.component.css']
})
export class SalaDeEventoComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'direccion', 'telefono', 'correo', 'editar'];
  dataSource = listaUsuarios;
  constructor() { }

  ngOnInit(): void {
  }

}

