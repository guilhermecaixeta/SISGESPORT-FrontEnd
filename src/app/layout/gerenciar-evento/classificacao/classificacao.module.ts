import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificacaoRoutingModule } from './classificacao-routing.module';
import { ClassificacaoComponent } from './classificacao.component';
import { ManterPadraoModule } from '../../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../../base/base.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentesFormularioModule } from '../../componentes-formulario/componentes-formulario.module';

@NgModule({
  imports: [
    CommonModule,
    ClassificacaoRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ComponentesFormularioModule
  ],
  declarations: [ClassificacaoComponent],
  exports: [ClassificacaoComponent]
})
export class ClassificacaoModule { }
