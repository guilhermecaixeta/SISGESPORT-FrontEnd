import { ManterPadraoModule } from './../../manter-padrao/manter-padrao.module';
import { BaseModule } from './../../../base/base.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoPontoRoutingModule } from './tipo-ponto-routing.module';
import { TipoPontoComponent } from './tipo-ponto.component';
import { TipoPontoCrudComponent } from './tipo-ponto-crud/tipo-ponto-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesFormularioModule } from '../../componentes-formulario/componentes-formulario.module';
import { InsercaoComponent } from './tipo-ponto-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './tipo-ponto-crud/visualizacao/visualizacao.component';

@NgModule({
  imports: [
    CommonModule,
    TipoPontoRoutingModule,
    ManterPadraoModule,
    NgbModule.forRoot(),
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesFormularioModule
  ],
  declarations: [TipoPontoComponent, TipoPontoCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class TipoPontoModule { }
