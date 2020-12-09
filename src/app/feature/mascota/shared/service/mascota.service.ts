import { Mascota } from './../model/mascota';
import { Observable, Subject } from 'rxjs';
import { UiService } from '@core/service/ui.service';
import { HttpService } from '@core/service/http.service';
import { Injectable } from '@angular/core';
import { AppConstants as Constant } from '@shared/app.constants';

@Injectable()
export class MascotaService {
  private comandoPath = 'operador/' + Constant.PATH_MASCOTA;
  private consultaPath = 'consulta/' + Constant.PATH_MASCOTA;

  public debeRecargarse = new Subject<boolean>();

  constructor(private httpService: HttpService, private uiService: UiService) { }

  consultar(): Observable<Mascota[]> {
    return this.httpService.getRequest<Mascota[]>(this.consultaPath);
  }

  consultarPorResponsable(responsable: number): Observable<Mascota[]> {
    return this.httpService.getRequest<Mascota[]>(`${this.consultaPath}/${responsable}`);
  }

  /*  consultarPorId(id: number): Promise<Mascota> {
     return this.httpService
       .getRequest<Mascota>(`${this.consultaPath}/${id}`)
       .toPromise();
   } */

  crear(data: Mascota): void {
    this.uiService
      .configurarSnackBar(
        this.httpService.postRequest(this.comandoPath, data), 'Se ha creado mascota con éxito'
      )
      .subscribe((exito) => {
        if (exito) {
          this.debeRecargarse.next(true);
        }
      });
  }

  modificar(data: Mascota, idResponsable: number): void {
    this.uiService
      .configurarSnackBar(
        this.httpService.putRequest(`${this.comandoPath}/${idResponsable}`, data), 'Se ha modificado mascota con éxito'
      )
      .subscribe((exito) => {
        if (exito) {
          this.debeRecargarse.next(true);
        }
      });
  }


}
