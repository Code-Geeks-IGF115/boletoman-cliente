import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { EventoService } from '../../services/evento-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
export interface Configuracion {
  categoria?: string;
  codigo?: string;
  precio?: number;
  fila?: number;
  columna?:number;
  mesas?:number;
  butacas?: number;
}

const ELEMENT_DATA: Configuracion[] = [];
@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  //definiendo variables
  creaCategoriaForms = new FormGroup({
    nombre: new FormControl('', Validators.required),
    codigo: new FormControl('', Validators.required),
    precioUnitario: new FormControl('', Validators.required),
    salaDeEventos: new FormControl(''),
  });

  configuracionForms = new FormGroup({
    idCategoria: new FormControl(''),
    categoria: new FormControl('', Validators.required),
    fila: new FormControl('', Validators.required),
    columna: new FormControl('', Validators.required),
    numButacas: new FormControl('', Validators.required),
  });
  columnas: string[] = ['categoria', 'codigo', 'precio','fila','columna','butacas'];
  dataSource = ELEMENT_DATA;
  idSala: any;
  columnaSala: any;
  filaSala: any;
  formaSala: any;
  categorias: {[key:string]:any} = {};
  configuraciones: any[] = [];
  idCat:any;
  celdasArray:any = {
    celdas: []
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private eventosApiService:EventoService, private activatedRoute: ActivatedRoute,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.idSala = this.activatedRoute.snapshot.paramMap.get('idSala');
    this.getSalaInfo(this.idSala); 
  }
  //metodo para agregar una categoria
  agregarCategoria(form:any){
    this.categorias[form.codigo] = { nombre:form.nombre, precio: form.precioUnitario};
  }
  //metodo para agregar la configuración
  agregarConfiguracion(form:any)
  {
    this.celdasArray.celdas.push({
      fila: form.fila,
      columna: form.columna,
      cantidadButacas: form.numButacas
    });

    console.log(this.celdasArray);

    this.dataSource.push({
      categoria: this.categorias[form.categoria].nombre,
      fila: form.fila,
      columna: form.columna,
      butacas: form.numButacas,
      codigo: form.categoria,
      precio: this.categorias[form.categoria].precio,
    });
    this.dataSource = [...this.dataSource];
  }
    //Método para obtener datos de la sala
    getSalaInfo(id:any){
      this.eventosApiService.getSala(id).subscribe(data => {
        this.columnaSala=data.salaDeEvento.columnas;
        this.filaSala=data.salaDeEvento.filas;
        this.formaSala=data.salaDeEvento.forma;
      });
    }
  //metodo para agregar la categoria
  guardarCategoria(form:any){
    form.salaDeEventos = Number(this.idSala);
    console.log(form);
    this.eventosApiService.postCategoria(form).subscribe(data =>{
      this.idCat=data.id;
      console.log(data);
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
  }
  //metodo para guardar una celda
  guardarCelda(){
    this.eventosApiService.postCelda(this.celdasArray,this.idCat).subscribe(data =>{
      console.log(data);
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
  }

}

