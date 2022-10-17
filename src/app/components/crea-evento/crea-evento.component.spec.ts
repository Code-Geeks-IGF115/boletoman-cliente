import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaEventoComponent } from './crea-evento.component';

describe('CreaEventoComponent', () => {
  let component: CreaEventoComponent;
  let fixture: ComponentFixture<CreaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
