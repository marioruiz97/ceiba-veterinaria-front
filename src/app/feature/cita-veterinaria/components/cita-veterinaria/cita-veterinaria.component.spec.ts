import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaVeterinariaComponent } from './cita-veterinaria.component';

describe('CitaVeterinariaComponent', () => {
  let component: CitaVeterinariaComponent;
  let fixture: ComponentFixture<CitaVeterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaVeterinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
