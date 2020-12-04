import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoCitaComponent } from './listar-tipo-cita.component';

describe('ListarTipoCitaComponent', () => {
  let component: ListarTipoCitaComponent;
  let fixture: ComponentFixture<ListarTipoCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
