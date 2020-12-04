import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { TipoCitaRoutingModule } from './tipo-cita-routing.module';
import { TipoCitaComponent } from './components/tipo-cita/tipo-cita.component';
import { ListarTipoCitaComponent } from './components/listar-tipo-cita/listar-tipo-cita.component';


@NgModule({
  declarations: [TipoCitaComponent, ListarTipoCitaComponent],
  imports: [
    SharedModule,
    TipoCitaRoutingModule
  ]
})
export class TipoCitaModule { }
