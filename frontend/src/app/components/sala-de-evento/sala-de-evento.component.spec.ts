import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDeEventoComponent } from './sala-de-evento.component';

describe('SalaDeEventoComponent', () => {
  let component: SalaDeEventoComponent;
  let fixture: ComponentFixture<SalaDeEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaDeEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaDeEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
