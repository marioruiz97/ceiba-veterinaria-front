import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarResponsableMascotaComponent } from './guardar-responsable-mascota.component';

describe('GuardarResponsableMascotaComponent', () => {
  let component: GuardarResponsableMascotaComponent;
  let fixture: ComponentFixture<GuardarResponsableMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarResponsableMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarResponsableMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
