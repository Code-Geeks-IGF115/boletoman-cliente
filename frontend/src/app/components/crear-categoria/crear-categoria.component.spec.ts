import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCategoriaComponent } from './crear-categoria.component';

describe('CrearCategoriaComponent', () => {
  let component: CrearCategoriaComponent;
  let fixture: ComponentFixture<CrearCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/*
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialCategoria} from '.angular';
import {TableCategoria} from './crear-categoria.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [TableCategoria],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialCategoria,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [TableCategoria],
})
export class AppModule {}
*/
