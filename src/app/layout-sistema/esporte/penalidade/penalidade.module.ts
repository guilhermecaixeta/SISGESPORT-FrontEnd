import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenalidadeRoutingModule } from './penalidade-routing.module';
import { PenalidadeComponent } from './penalidade.component';
import { PenalidadeCrudComponent } from './penalidade-crud/penalidade-crud.component';
import { ManterPadraoModule } from '../../manter-padrao/manter-padrao.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseModule } from '../../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesFormularioModule } from '../../componentes-formulario/componentes-formulario.module';
import { InsercaoComponent } from './penalidade-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './penalidade-crud/visualizacao/visualizacao.component';

@NgModule({
  imports: [
    CommonModule,
    PenalidadeRoutingModule,
    ManterPadraoModule,
    NgbModule.forRoot(),
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesFormularioModule
  ],
  declarations: [PenalidadeComponent, PenalidadeCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class PenalidadeModule { }
