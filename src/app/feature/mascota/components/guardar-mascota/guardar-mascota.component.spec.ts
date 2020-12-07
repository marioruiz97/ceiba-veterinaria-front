import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarMascotaComponent } from './guardar-mascota.component';

describe('GuardarMascotaComponent', () => {
  let component: GuardarMascotaComponent;
  let fixture: ComponentFixture<GuardarMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
