import { ListarTipoCitaComponent } from './components/listar-tipo-cita/listar-tipo-cita.component';
import { TipoCitaComponent } from './components/tipo-cita/tipo-cita.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TipoCitaComponent,
    children: [
      {
        path: 'listar',
        component: ListarTipoCitaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoCitaRoutingModule {}
