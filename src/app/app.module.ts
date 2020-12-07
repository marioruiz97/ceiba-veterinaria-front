import { CitaVeterinariaModule } from './feature/cita-veterinaria/cita-veterinaria.module';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@feature/home/home.component';
import { TipoCitaModule } from '@feature/tipo-cita/tipo-cita.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsableMascotaModule } from '@feature/responsable-mascota/responsable-mascota.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    TipoCitaModule,
    ResponsableMascotaModule,
    CitaVeterinariaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
