
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
//importando services
import { EventoService } from 'src/app/services/evento-api.service';
import { SalasI } from 'src/app/models/salas.interface';


@Component({
  selector: 'app-salas-de-evento',
  templateUrl: './salas-de-evento.component.html',
  styleUrls: ['./salas-de-evento.component.css']
})
export class SalasDeEventoComponent implements OnInit {
  //Definiendo variables

  accionCrud: any;
  
  creaSalaForms = new FormGroup({
    nombre: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    forma: new FormControl('', Validators.required),
    filas: new FormControl(''),
    columnas: new FormControl('', Validators.required),
  });
  columnas:any;
  filas:any;
  resultado:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  idSala:any;
  constructor( private router:Router,private eventosApiService:EventoService,private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
    ) { }
  
  ngOnInit(): void {
    this.accionCrud = this.activatedRoute.snapshot.paramMap.get('crud');
    this.idSala = this.activatedRoute.snapshot.paramMap.get('idSala');
    if((this.accionCrud != 'editar' && (typeof this.idSala !== null || typeof this.idSala != undefined) )&& this.accionCrud != 'crear') this.router.navigate(['/verSalas']);
    if(this.accionCrud === 'editar') this.getSalaInfo(this.idSala);

  }

  //Método para guardar la sala
  guardarSala(creaSalaForms: any){
    creaSalaForms.forma=Number(creaSalaForms.forma);
    if(creaSalaForms.forma==1){
      creaSalaForms.filas=creaSalaForms.columnas
    }
    if(this.accionCrud === 'crear'){
      this.eventosApiService.postSala(creaSalaForms).subscribe(data =>{
        this.idSala=data.id;
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })
    }else if(this.accionCrud === 'editar'){
      this.eventosApiService.editarSala(creaSalaForms,this.idSala ).subscribe(data =>{
        console.log(data)
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })
    }
    
    console.log(creaSalaForms)
  }

  //Método para obtener datos de la sala
  getSalaInfo(id:any){
    this.eventosApiService.getSala(id).subscribe(data => {
      console.log(data);
      this.creaSalaForms.patchValue(data.salaDeEvento);
    });
  }


   vistaPreviaSala(){
    let i, j;
    this.columnas=this.creaSalaForms.controls['columnas']
    this.filas=this.creaSalaForms.controls['filas']
    this.resultado= this.filas*this.columnas
  } 
}
