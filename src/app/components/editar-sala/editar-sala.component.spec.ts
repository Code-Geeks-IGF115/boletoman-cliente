import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSalaComponent } from './editar-sala.component';

describe('EditarSalaComponent', () => {
  let component: EditarSalaComponent;
  let fixture: ComponentFixture<EditarSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
