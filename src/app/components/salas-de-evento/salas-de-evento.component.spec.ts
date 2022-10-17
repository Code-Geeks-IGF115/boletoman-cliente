import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasDeEventoComponent } from './salas-de-evento.component';

describe('SalasDeEventoComponent', () => {
  let component: SalasDeEventoComponent;
  let fixture: ComponentFixture<SalasDeEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalasDeEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasDeEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
