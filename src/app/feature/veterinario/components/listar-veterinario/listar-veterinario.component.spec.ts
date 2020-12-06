import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVeterinarioComponent } from './listar-veterinario.component';

describe('ListarVeterinarioComponent', () => {
  let component: ListarVeterinarioComponent;
  let fixture: ComponentFixture<ListarVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
