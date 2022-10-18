import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { EventoService } from '../../services/evento-api.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    nuevaCategoria: new FormControl('', Validators.required),
    codigoCategoria: new FormControl('', Validators.required),
    precioCategoria: new FormControl('', Validators.required),
  });

  configuracionForms = new FormGroup({
    categoria: new FormControl('', Validators.required),
    fila: new FormControl('', Validators.required),
    columna: new FormControl('', Validators.required),
    numButacas: new FormControl('', Validators.required),
  });
  columnas: string[] = ['categoria', 'codigo', 'precio','fila','columna','butacas'];
  dataSource = ELEMENT_DATA;
  idSala: any;

  categorias: {[key:string]:any} = {};
  configuraciones: any[] = [];

  constructor(private eventoApi: EventoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idSala = this.activatedRoute.snapshot.paramMap.get('idSala');
  }
  //metodo para agregar una categoria
  agregarCategoria(form:any){
    this.categorias[form.codigoCategoria] = { nombre:form.nuevaCategoria, precio: form.precioCategoria};
  }
  //metodo para agregar la configuración
  agregarConfiguracion(form:any)
  {
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

  guardarConfiguracion(){
    this.eventoApi.guardarConfiguracion(this.dataSource, this.idSala).subscribe((res:any)=>{
      console.log(res);
    });
  }

}

