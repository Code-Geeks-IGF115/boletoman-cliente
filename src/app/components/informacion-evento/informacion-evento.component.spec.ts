import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionEventoComponent } from './informacion-evento.component';

describe('InformacionEventoComponent', () => {
  let component: InformacionEventoComponent;
  let fixture: ComponentFixture<InformacionEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
