import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vista-previa',
  templateUrl: './vista-previa.component.html',
  styleUrls: ['./vista-previa.component.css']
})
export class VistaPreviaComponent implements OnInit, OnChanges {
  @Input() columnas:any;
  @Input() fila:any;
  cols:number[]=[];
  filas:number[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.columnas && this.filas){
      this.cols = Array(Number(this.columnas)).fill(1).map((x,i)=>i+1);
      this.filas = Array(Number(this.fila)).fill(1).map((x,i)=>i+1);
    }
  }

}
