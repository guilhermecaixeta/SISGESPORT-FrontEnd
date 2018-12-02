import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoAlunoRoutingModule } from './evento-aluno-routing.module';
import { EventoAlunoComponent } from './evento-aluno.component';
import { ManterPadraoModule } from '../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentesFormularioModule } from '../componentes-formulario/componentes-formulario.module';

@NgModule({
  imports: [
    CommonModule,
    EventoAlunoRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ComponentesFormularioModule
  ],
  declarations: [EventoAlunoComponent]
})
export class EventoAlunoModule { }
