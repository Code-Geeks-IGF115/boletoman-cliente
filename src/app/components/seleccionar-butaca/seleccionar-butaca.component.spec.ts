import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarButacaComponent } from './seleccionar-butaca.component';

describe('SeleccionarButacaComponent', () => {
  let component: SeleccionarButacaComponent;
  let fixture: ComponentFixture<SeleccionarButacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarButacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionarButacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
