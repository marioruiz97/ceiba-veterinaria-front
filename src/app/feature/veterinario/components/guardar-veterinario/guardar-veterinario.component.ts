import { Veterinario } from './../../shared/model/veterinario';
import { VeterinarioService } from './../../shared/service/veterinario.service';
import { UiService } from '@core/service/ui.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guardar-veterinario',
  templateUrl: './guardar-veterinario.component.html',
  styleUrls: ['./guardar-veterinario.component.css']
})
export class GuardarVeterinarioComponent implements OnInit, OnDestroy {

  private curId!: number;
  private subscripciones: Subscription[] = [];
  veterinarioForm!: FormGroup;
  isUpdate = false;
  isWaiting = false;

  constructor(private activatedRoute: ActivatedRoute, private uiService: UiService, private service: VeterinarioService) { }

  ngOnInit(): void {
    this.iniciarFormulario();
    this.subscripciones.push(this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id && id !== '0') {
        this.obtenerPorId(parseInt(id, 10));
      }
    }));
    this.subscripciones.push(this.uiService.loadingState.subscribe(state => this.isWaiting = state));
  }

  iniciarFormulario(): void {
    this.veterinarioForm = new FormGroup({
      idPersona: new FormControl({ value: '', disabled: true }),
      identificacion: new FormControl('', [Validators.required, Validators.pattern('\\d{7,15}')]),
      nombre: new FormControl('', [Validators.required]),
      apellido1: new FormControl('', [Validators.required]),
      apellido2: new FormControl('', [Validators.pattern('[A-Za-z]*')]),
      telefonoContacto: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('([3]\\d{9})|(\\d{7})')]),
    });
    this.veterinarioForm.markAsTouched();
  }

  private obtenerPorId(id: number): void {
    this.service.consultarPorId(id)
      .then(res => this.setForm(res))
      .catch(err => this.service.mostrarError(err)
      );
  }

  private setForm(veterinario: Veterinario): void {
    this.curId = veterinario.idVeterinario;
    this.isUpdate = true;
    this.veterinarioForm.setValue({
      idPersona: veterinario.idVeterinario,
      identificacion: veterinario.identificacion,
      nombre: veterinario.nombre,
      apellido1: veterinario.apellido1,
      apellido2: veterinario.apellido2,
      telefonoContacto: veterinario.telefonoContacto,
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
      this.service.modificar(this.veterinarioForm.value, this.curId);
    } else {
      this.service.crear(this.veterinarioForm.value);
    }
  }

  ngOnDestroy(): void {
    if (this.subscripciones) { this.subscripciones.forEach(sub => sub.unsubscribe()); }
  }

}
