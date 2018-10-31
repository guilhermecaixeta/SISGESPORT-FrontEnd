import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsporteRoutingModule } from './esporte-routing.module';
import { EsporteComponent } from './esporte.component';

@NgModule({
  imports: [
    CommonModule,
    EsporteRoutingModule,
  ],
  declarations: [EsporteComponent]
})
export class EsporteModule { }
