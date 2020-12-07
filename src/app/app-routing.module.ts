import { HomeComponent } from '@feature/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'tipo-citas',
    loadChildren: () =>
      import('@feature/tipo-cita/tipo-cita.module').then(
        (mod) => mod.TipoCitaModule
      ),
  },
  {
    path: 'responsables',
    loadChildren: () =>
      import('@feature/responsable-mascota/responsable-mascota.module').then(
        (mod) => mod.ResponsableMascotaModule
      ),
  },
  {
    path: 'veterinarios',
    loadChildren: () =>
      import('@feature/veterinario/veterinario.module').then(
        (mod) => mod.VeterinarioModule
      ),
  },
  {
    path: 'citas',
    loadChildren: () =>
      import('@feature/cita-veterinaria/cita-veterinaria.module').then(
        (mod) => mod.CitaVeterinariaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
