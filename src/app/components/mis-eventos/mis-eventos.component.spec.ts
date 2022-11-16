import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisEventosComponent } from './mis-eventos.component';

describe('MisEventosComponent', () => {
  let component: MisEventosComponent;
  let fixture: ComponentFixture<MisEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
