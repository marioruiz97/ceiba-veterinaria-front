import { SharedModule } from '@shared/shared.module';
import { TipoCitaModule } from './../tipo-cita/tipo-cita.module';
import { VeterinarioModule } from './../veterinario/veterinario.module';
import { CitaVeterinariaService } from './shared/service/cita-veterinaria.service';
import { NgModule } from '@angular/core';

import { CitaVeterinariaRoutingModule } from './cita-veterinaria-routing.module';
import { CitaVeterinariaComponent } from './components/cita-veterinaria/cita-veterinaria.component';
import { ListarCitaVeterinariaComponent } from './components/listar-cita-veterinaria/listar-cita-veterinaria.component';
import { AsignarCitaVeterinariaComponent } from './components/asignar-cita-veterinaria/asignar-cita-veterinaria.component';
import { MascotaModule } from '@feature/mascota/mascota.module';


@NgModule({
  declarations: [CitaVeterinariaComponent, ListarCitaVeterinariaComponent, AsignarCitaVeterinariaComponent],
  imports: [
    SharedModule,
    CitaVeterinariaRoutingModule,
    MascotaModule,
    VeterinarioModule,
    TipoCitaModule
  ],
  providers: [CitaVeterinariaService]
})
export class CitaVeterinariaModule { }
