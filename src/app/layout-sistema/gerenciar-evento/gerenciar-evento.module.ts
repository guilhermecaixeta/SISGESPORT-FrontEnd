import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciarEventoRoutingModule } from './gerenciar-evento-routing.module';
import { GerenciarEventoComponent } from './gerenciar-evento.component';

@NgModule({
  imports: [
    CommonModule,
    GerenciarEventoRoutingModule
  ],
  declarations: [GerenciarEventoComponent]
})
export class GerenciarEventoModule { }
