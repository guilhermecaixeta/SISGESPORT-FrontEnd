import { TabelaBasicaModule } from './../componentes/tabela-basica/tabela-basica.module';
import { BaseModule } from './../../base/base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManterPadraoComponent } from './manter-padrao.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    TabelaBasicaModule,
    RouterModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    ManterPadraoComponent
  ],
  exports: [
    ManterPadraoComponent
  ]
})
export class ManterPadraoModule { }
