import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { IconOptions } from '@angular/material/icon';

import { Router } from '@angular/router';


export interface PeriodicElement {
  nombreDeEvento: string;
  fecha: string;
  hora: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombreDeEvento: "GRADUACION 2022 ESCUELA INGENIERIA INDUSTRIAL", fecha: "25 DE DICIEMBRE DE 2022" ,hora: "2:00 PM - 3:00 PM",}
  
  
];

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent implements OnInit {

  displayedColumns: string[] = ['nombreDeEvento', 'fecha', 'hora', 'listaDeAsistentes'];
  dataSource = ELEMENT_DATA;
  constructor( private router:Router) { }


  ngOnInit(): void {
  }

}
