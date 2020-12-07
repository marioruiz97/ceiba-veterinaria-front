import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCitaVeterinariaComponent } from './asignar-cita-veterinaria.component';

describe('AsignarCitaVeterinariaComponent', () => {
  let component: AsignarCitaVeterinariaComponent;
  let fixture: ComponentFixture<AsignarCitaVeterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarCitaVeterinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarCitaVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
