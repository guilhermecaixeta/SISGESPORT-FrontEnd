import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogadorRoutingModule } from './jogador-routing.module';
import { JogadorComponent } from './jogador.component';
import { JogadorCrudComponent } from './jogador-crud/jogador-crud.component';
import { InsercaoComponent } from './jogador-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './jogador-crud/visualizacao/visualizacao.component';
import { ManterPadraoModule } from '../../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentesFormularioModule } from '../../componentes-formulario/componentes-formulario.module';

@NgModule({
  imports: [
    CommonModule,
    JogadorRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ComponentesFormularioModule
  ],
  declarations: [JogadorComponent, JogadorCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class JogadorModule { }
