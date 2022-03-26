import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugardenacimientoComponent } from './lugardenacimiento.component';

describe('LugardenacimientoComponent', () => {
  let component: LugardenacimientoComponent;
  let fixture: ComponentFixture<LugardenacimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugardenacimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugardenacimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
