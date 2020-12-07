import { TipoCita } from '@feature/tipo-cita/shared/model/tipo-cita';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UiService } from '@core/service/ui.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CitaVeterinariaService } from '@feature/cita-veterinaria/shared/service/cita-veterinaria.service';
import { Subscription } from 'rxjs';
import { Veterinario } from '@feature/veterinario/shared/model/veterinario';
import { Mascota } from '@feature/mascota/shared/model/mascota';

@Component({
  selector: 'app-asignar-cita-veterinaria',
  templateUrl: './asignar-cita-veterinaria.component.html',
  styleUrls: ['./asignar-cita-veterinaria.component.css'],
})
export class AsignarCitaVeterinariaComponent implements OnInit, OnDestroy {

  private subscripciones: Subscription[] = [];
  citaForm!: FormGroup;
  isWaiting = false;
  minDate = new Date();

  // variables para los listados de objetos
  veterinarios: Veterinario[] = [];
  mascotas: Mascota[] = [];
  tiposCita: TipoCita[] = [];

  constructor(
    private uiService: UiService,
    private service: CitaVeterinariaService
  ) { }

  ngOnInit(): void {
    this.iniciarFormulario();
    this.obtenerTiposCita();
    this.obtenerMascotas();
    this.obtenerVeterinarios();
    this.subscripciones.push(
      this.uiService.loadingState.subscribe((state) => (this.isWaiting = state))
    );
  }

  iniciarFormulario(): void {
    this.citaForm = new FormGroup({
      codigoCita: new FormControl({ value: '', disabled: true }),
      fechaCita: new FormControl('', [Validators.required]),
      idVeterinario: new FormControl('', [Validators.required]),
      idMascota: new FormControl('', [Validators.required]),
      idTipoCita: new FormControl('', [Validators.required]),
    });
    this.citaForm.markAsTouched();
  }

  private obtenerTiposCita(): void {
    this.subscripciones.push(this.service.obtenerTiposCitas().subscribe(list => this.tiposCita = list));
  }

  private obtenerMascotas(): void {
    this.subscripciones.push(this.service.obtenerMascotas().subscribe(list => this.mascotas = list));
  }

  private obtenerVeterinarios(): void {
    this.subscripciones.push(this.service.obtenerMedicos().subscribe(list => this.veterinarios = list));
  }

  goBack(): void {
    const data = {
      title: '¿Cancelar progreso?',
      message: 'Si vuelves perderás los avances del formulario de ingreso',
      confirm: 'Sí, deseo regresar',
    };
    const dialogRef = this.uiService.mostrarConfirmDialog(data);
    this.subscripciones.push(
      dialogRef.afterClosed().subscribe((resultado) => {
        if (resultado) {
          this.service.volverAListar();
        }
      })
    );
  }

  onSubmit(): void {
    this.service.asignar(this.citaForm.value);
  }

  ngOnDestroy(): void {
    if (this.subscripciones) {
      this.subscripciones.forEach((sub) => sub.unsubscribe());
    }
  }
}
