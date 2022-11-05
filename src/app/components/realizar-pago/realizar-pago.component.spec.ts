import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarPagoComponent } from './realizar-pago.component';

describe('RealizarPagoComponent', () => {
  let component: RealizarPagoComponent;
  let fixture: ComponentFixture<RealizarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});