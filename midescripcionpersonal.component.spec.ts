import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidescripcionpersonalComponent } from './midescripcionpersonal.component';

describe('MidescripcionpersonalComponent', () => {
  let component: MidescripcionpersonalComponent;
  let fixture: ComponentFixture<MidescripcionpersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidescripcionpersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidescripcionpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
