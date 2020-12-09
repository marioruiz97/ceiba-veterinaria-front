import { ResponsableMascotaService } from './../../shared/service/responsable-mascota.service';
import { UiService } from '@core/service/ui.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResponsableMascota } from '@feature/responsable-mascota/shared/model/responsable-mascota';

@Component({
  selector: 'app-guardar-responsable-mascota',
  templateUrl: './guardar-responsable-mascota.component.html',
  styleUrls: []
})
export class GuardarResponsableMascotaComponent implements OnInit, OnDestroy {
  private curId!: number;
  private subscripciones: Subscription[] = [];
  responsableForm!: FormGroup;
  isUpdate = false;
  isWaiting = false;

  constructor(private activatedRoute: ActivatedRoute, private uiService: UiService, private service: ResponsableMascotaService) { }

  ngOnInit(): void {
    this.iniciarFormulario();
    this.subscripciones.push(this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id && id !== '0') {
        this.obtenerPorID(parseInt(id, 10));
      }
    }));
    this.subscripciones.push(this.uiService.loadingState.subscribe(state => this.isWaiting = state));
  }

  iniciarFormulario(): void {
    this.responsableForm = new FormGroup({
      idPersona: new FormControl({ value: '', disabled: true }),
      identificacion: new FormControl('', [Validators.required, Validators.pattern('\\d{7,15}')]),
      nombre: new FormControl('', [Validators.required]),
      apellido1: new FormControl('', [Validators.required]),
      apellido2: new FormControl('', [Validators.pattern('[A-Za-z]*')]),
      telefonoContacto: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('([3]\\d{9})|(\\d{7})')]),
    });
    this.responsableForm.markAsTouched();
  }

  private obtenerPorID(id: number): void {
    this.service.consultarPorId(id)
      .then(res => this.setForm(res))
      .catch(err => this.service.mostrarError(err)
      );
  }

  private setForm(responsable: ResponsableMascota): void {
    this.curId = responsable.idResponsable;
    this.isUpdate = true;
    this.responsableForm.setValue({
      idPersona: responsable.idResponsable,
      identificacion: responsable.identificacion,
      nombre: responsable.nombre,
      apellido1: responsable.apellido1,
      apellido2: responsable.apellido2,
      telefonoContacto: responsable.telefonoContacto,
    });
  }

  goBack(): void {
    const data = {
      title: '¿Cancelar progreso?',
      message: 'Si vuelves perderás los avances del formulario de ingreso',
      confirm: 'Sí, deseo regresar'
    };
    const dialogRef = this.uiService.mostrarConfirmDialog(data);
    this.subscripciones.push(dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        this.service.volverAListar();
      }
    }));
  }

  onSubmit(): void {
    if (this.curId && this.curId !== 0) {
      this.service.modificar(this.responsableForm.value, this.curId);
    } else {
      this.service.crear(this.responsableForm.value);
    }
  }

  ngOnDestroy(): void {
    if (this.subscripciones) { this.subscripciones.forEach(sub => sub.unsubscribe()); }
  }

}
