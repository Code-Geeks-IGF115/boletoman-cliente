import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPreviaComponent } from './vista-previa.component';

describe('VistaPreviaComponent', () => {
  let component: VistaPreviaComponent;
  let fixture: ComponentFixture<VistaPreviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPreviaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPreviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
