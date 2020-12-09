import { ResponsableMascota } from './../model/responsable-mascota';
import { Observable } from 'rxjs';
import { UiService } from '@core/service/ui.service';
import { HttpService } from '@core/service/http.service';
import { Injectable } from '@angular/core';
import { AppConstants as Constant } from '@shared/app.constants';

@Injectable()
export class ResponsableMascotaService {

  private comandoPath = 'operador/' + Constant.PATH_RESPONSABLE;
  private consultaPath = 'consulta/' + Constant.PATH_RESPONSABLE;


  constructor(private httpService: HttpService, private uiService: UiService) { }

  consultar(): Observable<ResponsableMascota[]> {
    return this.httpService.getRequest<ResponsableMascota[]>(this.consultaPath);
  }

  consultarPorId(id: number): Promise<ResponsableMascota> {
    return this.httpService
      .getRequest<ResponsableMascota>(`${this.consultaPath}/${id}`)
      .toPromise();
  }

  crear(data: ResponsableMascota): void {
    this.uiService
      .configurarSnackBar(this.httpService.postRequest(this.comandoPath, data), 'Se ha creado responsable con éxito')
      .subscribe((exito) => {
        if (exito) {
          this.volverAListar();
        }
      });
  }

  modificar(data: ResponsableMascota, idResponsable: number): void {
    this.uiService
      .configurarSnackBar(
        this.httpService.putRequest(`${this.comandoPath}/${idResponsable}`, data), 'Se ha modificado responsable con éxito'
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
    this.uiService.volverAListar('responsables');
  }

}
