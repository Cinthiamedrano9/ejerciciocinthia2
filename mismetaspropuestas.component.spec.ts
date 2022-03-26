import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MismetaspropuestasComponent } from './mismetaspropuestas.component';

describe('MismetaspropuestasComponent', () => {
  let component: MismetaspropuestasComponent;
  let fixture: ComponentFixture<MismetaspropuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MismetaspropuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MismetaspropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
