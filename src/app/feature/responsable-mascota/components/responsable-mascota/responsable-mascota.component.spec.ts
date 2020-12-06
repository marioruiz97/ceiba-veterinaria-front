import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableMascotaComponent } from './responsable-mascota.component';

describe('ResponsableMascotaComponent', () => {
  let component: ResponsableMascotaComponent;
  let fixture: ComponentFixture<ResponsableMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsableMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
