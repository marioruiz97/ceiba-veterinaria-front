import { AsignarCitaVeterinariaComponent } from './components/asignar-cita-veterinaria/asignar-cita-veterinaria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitaVeterinariaComponent } from './components/cita-veterinaria/cita-veterinaria.component';
import { ListarCitaVeterinariaComponent } from './components/listar-cita-veterinaria/listar-cita-veterinaria.component';

const routes: Routes = [
  {
    path: '',
    component: CitaVeterinariaComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'citas/listar' },
      { path: 'listar', component: ListarCitaVeterinariaComponent },
      { path: 'asignar', component: AsignarCitaVeterinariaComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitaVeterinariaRoutingModule { }
