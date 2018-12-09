import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidaAlunoRoutingModule } from './partida-aluno-routing.module';
import { PartidaAlunoComponent } from './partida-aluno.component';
import { PartidaModule } from '../gerenciar-evento/partida/partida.module';
import { ManterPadraoModule } from '../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../base/base.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponentesFormularioModule } from '../componentes-formulario/componentes-formulario.module';

@NgModule({
  imports: [
    CommonModule,
    PartidaAlunoRoutingModule,
    PartidaModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    ComponentesFormularioModule
  ],
  declarations: [PartidaAlunoComponent]
})
export class PartidaAlunoModule { }
