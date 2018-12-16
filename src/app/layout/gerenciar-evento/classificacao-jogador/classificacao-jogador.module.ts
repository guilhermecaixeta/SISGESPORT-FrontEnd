import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificacaoJogadorRoutingModule } from './classificacao-jogador-routing.module';
import { ClassificacaoJogadorComponent } from './classificacao-jogador.component';
import { ManterPadraoModule } from '../../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../../base/base.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentesFormularioModule } from '../../componentes-formulario/componentes-formulario.module';

@NgModule({
  imports: [
    CommonModule,
    ClassificacaoJogadorRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ComponentesFormularioModule
  ],
  declarations: [ClassificacaoJogadorComponent]
})
export class ClassificacaoJogadorModule { }
