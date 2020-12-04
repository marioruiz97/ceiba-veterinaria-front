import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManejadorError } from './interceptor/manejador-error';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule],
  exports: [],
  providers: [{ provide: ErrorHandler, useClass: ManejadorError }],
})
export class CoreModule {}
