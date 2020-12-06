import { SharedModule } from './../../shared/shared.module';
import { ResponsableMascotaService } from './shared/service/responsable-mascota.service';
import { ResponsableMascotaRoutingModules } from './responsable-mascota-routing.module';

import { NgModule } from '@angular/core';
import { ResponsableMascotaComponent } from './components/responsable-mascota/responsable-mascota.component';
import { ListarResponsableMascotaComponent } from './components/listar-responsable-mascota/listar-responsable-mascota.component';
import { GuardarResponsableMascotaComponent } from './components/guardar-responsable-mascota/guardar-responsable-mascota.component';



@NgModule({
  declarations: [ResponsableMascotaComponent, ListarResponsableMascotaComponent, GuardarResponsableMascotaComponent],
  imports: [
    ResponsableMascotaRoutingModules,
    SharedModule
  ],
  providers: [ResponsableMascotaService]
})
export class ResponsableMascotaModule { }
