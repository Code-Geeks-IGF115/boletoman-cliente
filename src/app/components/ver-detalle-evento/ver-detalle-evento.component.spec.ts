import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleEventoComponent } from './ver-detalle-evento.component';

describe('VerDetalleEventoComponent', () => {
  let component: VerDetalleEventoComponent;
  let fixture: ComponentFixture<VerDetalleEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDetalleEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDetalleEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
