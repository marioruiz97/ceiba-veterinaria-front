import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarVeterinarioComponent } from './guardar-veterinario.component';

describe('GuardarVeterinarioComponent', () => {
  let component: GuardarVeterinarioComponent;
  let fixture: ComponentFixture<GuardarVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
