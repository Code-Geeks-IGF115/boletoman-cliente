import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSalaDeEventoComponent } from './ver-sala-de-evento.component';

describe('VerSalaDeEventoComponent', () => {
  let component: VerSalaDeEventoComponent;
  let fixture: ComponentFixture<VerSalaDeEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerSalaDeEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerSalaDeEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
