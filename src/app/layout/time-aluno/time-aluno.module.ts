import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeAlunoRoutingModule } from './time-aluno-routing.module';
import { TimeAlunoComponent } from './time-aluno.component';
import { ManterPadraoModule } from '../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentesFormularioModule } from '../componentes-formulario/componentes-formulario.module';
import { TimeAlunoCrudComponent } from './time-aluno-crud/time-aluno-crud.component';
import { InsercaoComponent } from './time-aluno-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './time-aluno-crud/visualizacao/visualizacao.component';

@NgModule({
  imports: [
    CommonModule,
    TimeAlunoRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ComponentesFormularioModule
  ],
  declarations: [TimeAlunoComponent, TimeAlunoCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class TimeAlunoModule { }
