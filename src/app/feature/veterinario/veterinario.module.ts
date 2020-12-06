import { VeterinarioService } from './shared/service/veterinario.service';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import { VeterinarioRoutingModule } from './veterinario-routing.module';
import { VeterinarioComponent } from './components/veterinario/veterinario.component';
import { ListarVeterinarioComponent } from './components/listar-veterinario/listar-veterinario.component';
import { GuardarVeterinarioComponent } from './components/guardar-veterinario/guardar-veterinario.component';


@NgModule({
  declarations: [VeterinarioComponent, ListarVeterinarioComponent, GuardarVeterinarioComponent],
  imports: [
    SharedModule,
    VeterinarioRoutingModule
  ],
  providers: [VeterinarioService]
})
export class VeterinarioModule { }
