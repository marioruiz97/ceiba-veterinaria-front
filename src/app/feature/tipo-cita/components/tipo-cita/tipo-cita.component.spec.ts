import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCitaComponent } from './tipo-cita.component';

describe('TipoCitaComponent', () => {
  let component: TipoCitaComponent;
  let fixture: ComponentFixture<TipoCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
