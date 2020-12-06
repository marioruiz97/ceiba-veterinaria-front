import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarResponsableMascotaComponent } from './listar-responsable-mascota.component';

describe('ListarResponsableMascotaComponent', () => {
  let component: ListarResponsableMascotaComponent;
  let fixture: ComponentFixture<ListarResponsableMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarResponsableMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarResponsableMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
