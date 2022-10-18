import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vista-previa',
  templateUrl: './vista-previa.component.html',
  styleUrls: ['./vista-previa.component.css']
})
export class VistaPreviaComponent implements OnInit, OnChanges {
  @Input() columnas:any;
  @Input() fila:any;

  @Input() columnaCategoria:any;
  @Input() filaCategoria:any;
  @Input() butacas:any;

  @Input() formaSala:any;

  cols:number[]=[];
  filas:number[]=[];
  butacaArray: number[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.formaSala='2';
    // this.cols=[1,2,3,4];
    // this.filas=[1,2,3];
  }

  ngOnChanges(): void {
    if (this.columnas && this.filas){
      this.cols = Array(Number(this.columnas)).fill(1).map((x,i)=>i+1);
      this.filas = Array(Number(this.fila)).fill(1).map((x,i)=>i+1);
    }

    if (this.columnaCategoria && this.filaCategoria && this.butacas){
      this.butacaArray = Array(Number(this.butacas)).fill(1).map((x,i)=>i+1);
    }
  }

}
