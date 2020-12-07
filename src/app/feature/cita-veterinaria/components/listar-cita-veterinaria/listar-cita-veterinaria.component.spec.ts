import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCitaVeterinariaComponent } from './listar-cita-veterinaria.component';

describe('ListarCitaVeterinariaComponent', () => {
  let component: ListarCitaVeterinariaComponent;
  let fixture: ComponentFixture<ListarCitaVeterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCitaVeterinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitaVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
