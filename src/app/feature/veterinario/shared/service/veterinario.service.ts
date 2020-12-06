import { Veterinario } from './../model/veterinario';
import { Observable } from 'rxjs';
import { UiService } from '@core/service/ui.service';
import { HttpService } from '@core/service/http.service';
import { AppConstants as Constant } from '@shared/app.constants';
import { Injectable } from '@angular/core';

@Injectable()
export class VeterinarioService {

  private comandoPath = 'operador/' + Constant.PATH_VETERINARIO;
  private consultaPath = 'consulta/' + Constant.PATH_VETERINARIO;


  constructor(private httpService: HttpService, private uiService: UiService) { }

  consultar(): Observable<Veterinario[]> {
    return this.httpService.getRequest<Veterinario[]>(this.consultaPath);
  }

  consultarPorId(id: number): Promise<Veterinario> {
    return this.httpService
      .getRequest<Veterinario>(`${this.consultaPath}/${id}`)
      .toPromise();
  }

  crear(data: Veterinario): void {
    this.uiService
      .configurarSnackBar(this.httpService.postRequest(this.comandoPath, data), 'Se ha creado veterinario con éxito')
      .subscribe((exito) => {
        if (exito) {
          this.volverAListar();
        }
      });
  }

  modificar(data: Veterinario, idVeterinario: number): void {
    this.uiService
      .configurarSnackBar(
        this.httpService.patchRequest(`${this.comandoPath}/${idVeterinario}`, data), 'Se ha modificado veterinario con éxito'
      ).subscribe((exito) => {
        if (exito) {
          this.volverAListar();
        }
      });
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
    this.uiService.volverAListar('veterinarios');
  }
}
