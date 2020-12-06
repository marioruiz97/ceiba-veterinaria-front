import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardarResponsableMascotaComponent } from './components/guardar-responsable-mascota/guardar-responsable-mascota.component';
import { ListarResponsableMascotaComponent } from './components/listar-responsable-mascota/listar-responsable-mascota.component';
import { ResponsableMascotaComponent } from './components/responsable-mascota/responsable-mascota.component';

const routes: Routes = [
  {
    path: '',
    component: ResponsableMascotaComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/responsables/listar' },
      { path: 'listar', component: ListarResponsableMascotaComponent },
      { path: 'guardar', component: GuardarResponsableMascotaComponent },
      { path: 'guardar/:id', component: GuardarResponsableMascotaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsableMascotaRoutingModules { }
