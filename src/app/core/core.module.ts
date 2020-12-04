import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManejadorError } from './interceptor/manejador-error';

@NgModule({
  declarations: [ManejadorError],
  imports: [CommonModule],
})
export class CoreModule {}
