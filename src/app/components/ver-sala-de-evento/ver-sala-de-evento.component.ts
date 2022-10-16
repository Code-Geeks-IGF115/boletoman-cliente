import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  nombre: string;
  direccion: string;
  telefono: string;
  correo: string;
}
const listaUsuarios: PeriodicElement[] = [
  {nombre: 'Clavo & Canela Olímpica', direccion: 'Avenida Olímpica y, 67 Avenida Sur, San Salvador', telefono: '2500 0520', correo: 'clavo&canela@gmail.com'},
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
