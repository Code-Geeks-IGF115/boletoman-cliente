import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-salas-de-evento',
  templateUrl: './salas-de-evento.component.html',
  styleUrls: ['./salas-de-evento.component.css']
})
export class SalasDeEventoComponent implements OnInit {

 
  constructor( private router:Router) { }
  
  ngOnInit(): void {
  }

}
