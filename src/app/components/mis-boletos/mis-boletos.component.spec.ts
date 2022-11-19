import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisBoletosComponent } from './mis-boletos.component';

describe('MisBoletosComponent', () => {
  let component: MisBoletosComponent;
  let fixture: ComponentFixture<MisBoletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisBoletosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
