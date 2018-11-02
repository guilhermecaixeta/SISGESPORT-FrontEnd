import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosicaoRoutingModule } from './posicao-routing.module';
import { PosicaoComponent } from './posicao.component';
import { PosicaoCrudComponent } from './posicao-crud/posicao-crud.component';
import { InsercaoComponent } from './posicao-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './posicao-crud/visualizacao/visualizacao.component';
import { ManterPadraoModule } from '../../manter-padrao/manter-padrao.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseModule } from '../../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesFormularioModule } from '../../componentes-formulario/componentes-formulario.module';

@NgModule({
  imports: [
    CommonModule,
    PosicaoRoutingModule,
    ManterPadraoModule,
    NgbModule.forRoot(),
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesFormularioModule
  ],
  declarations: [PosicaoComponent, PosicaoCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class PosicaoModule { }
