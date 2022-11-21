import { Component, OnInit } from '@angular/core';

export interface MisBoletos  {
  nombreEvento: string;
  fecha: string;
  hora: string;
}

const ELEMENT_DATA: MisBoletos [] = [
  {nombreEvento: 'Graduación 2022, Escuela Ingeniería Civil', fecha: '27 de diciembre de 2022', hora: '2:00 pm - 3:00 pm'},
];

@Component({
  selector: 'app-mis-boletos',
  templateUrl: './mis-boletos.component.html',
  styleUrls: ['./mis-boletos.component.css']
})
export class MisBoletosComponent implements OnInit {

  constructor() { }
  
  displayedColumns: string[] = ['nombreEvento', 'fecha', 'hora', 'descarga'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
