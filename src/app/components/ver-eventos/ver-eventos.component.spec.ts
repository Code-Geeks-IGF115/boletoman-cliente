import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEventosComponent } from './ver-eventos.component';

describe('VerEventosComponent', () => {
  let component: VerEventosComponent;
  let fixture: ComponentFixture<VerEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
