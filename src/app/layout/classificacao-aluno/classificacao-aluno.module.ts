import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificacaoAlunoRoutingModule } from './classificacao-aluno-routing.module';
import { ClassificacaoAlunoComponent } from './classificacao-aluno.component';
import { ManterPadraoModule } from '../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../base/base.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentesFormularioModule } from '../componentes-formulario/componentes-formulario.module';
import { ClassificacaoModule } from '../gerenciar-evento/classificacao/classificacao.module';

@NgModule({
  imports: [
    CommonModule,
    ClassificacaoAlunoRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ComponentesFormularioModule,
    ClassificacaoModule
  ],
  declarations: [ClassificacaoAlunoComponent]
})
export class ClassificacaoAlunoModule { }
