import { TipoCita } from '@feature/tipo-cita/shared/model/tipo-cita';
import { ComandoCitaVeterinaria } from './../model/comando-cita-veterinaria';
import { Observable } from 'rxjs';
import { UiService } from '@core/service/ui.service';
import { TipoCitaService } from '@feature/tipo-cita/shared/service/tipo-cita.service';
import { VeterinarioService } from '@feature/veterinario/shared/service/veterinario.service';
import { MascotaService } from '@feature/mascota/shared/service/mascota.service';
import { AppConstants as Constant } from '@shared/app.constants';
import { HttpService } from '@core/service/http.service';
import { Injectable } from '@angular/core';
import { CitaVeterinaria } from '../model/cita-veterinaria';
import { Mascota } from '@feature/mascota/shared/model/mascota';
import { Veterinario } from '@feature/veterinario/shared/model/veterinario';

@Injectable()
export class CitaVeterinariaService {

  private comandoPath = Constant.PATH_CITA + '/asignar';
  private consultaPath = 'consulta/' + Constant.PATH_CITA;

  constructor(
    private httpService: HttpService,
    private mascotaService: MascotaService,
    private veterinarioService: VeterinarioService,
    private tipoCitaService: TipoCitaService,
    private uiService: UiService
  ) { }

  consultar(): Observable<CitaVeterinaria[]> {
    return this.httpService.getRequest<CitaVeterinaria[]>(this.consultaPath);
  }

  asignar(data: ComandoCitaVeterinaria): void {
    this.uiService
      .configurarSnackBar(this.httpService.postRequest(this.comandoPath, data), 'Se ha asignado cita veterinaria con éxito')
      .subscribe((exito) => {
        if (exito) {
          this.volverAListar();
        }
      });
  }

  obtenerMascotas(): Observable<Mascota[]> {
    return this.mascotaService.consultar();
  }

  obtenerMedicos(): Observable<Veterinario[]> {
    return this.veterinarioService.consultar();
  }

  obtenerTiposCitas(): Observable<TipoCita[]> {
    return this.tipoCitaService.consultar();
  }

  mostrarError(err: any): void {
    const message = err.error ? err.error.mensaje : 'No se han podido obtener datos';
    this.uiService.mostrarError({
      title: 'Error',
      message,
      confirm: 'Ok',
    });
    this.volverAListar();
  }

  volverAListar(): void {
    this.uiService.volverAListar('citas');
  }

}
