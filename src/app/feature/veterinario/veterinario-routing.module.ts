import { GuardarVeterinarioComponent } from './components/guardar-veterinario/guardar-veterinario.component';
import { ListarVeterinarioComponent } from './components/listar-veterinario/listar-veterinario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinarioComponent } from './components/veterinario/veterinario.component';

const routes: Routes = [
  {
    path: '',
    component: VeterinarioComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/veterinarios/listar' },
      { path: 'listar', component: ListarVeterinarioComponent },
      { path: 'guardar', component: GuardarVeterinarioComponent },
      { path: 'guardar/:id', component: GuardarVeterinarioComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeterinarioRoutingModule { }
