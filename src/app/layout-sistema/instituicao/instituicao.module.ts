import { BaseModule } from './../../base/base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituicaoRoutingModule } from './instituicao-routing.module';
import { InstituicaoComponent } from './instituicao.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManterPadraoModule } from '../manter-padrao/manter-padrao.module';
import { InstituicaoCrudComponent } from './instituicao-crud/instituicao-crud.component';
import { InsercaoComponent } from './instituicao-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './instituicao-crud/visualizacao/visualizacao.component';

@NgModule({
  imports: [
    CommonModule,
    InstituicaoRoutingModule,
    NgbModule.forRoot(),
    ManterPadraoModule,
    BaseModule
  ],
  declarations: [InstituicaoComponent, InstituicaoCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class InstituicaoModule { }
