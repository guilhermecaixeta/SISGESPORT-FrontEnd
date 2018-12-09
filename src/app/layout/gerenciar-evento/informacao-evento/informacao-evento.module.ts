import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacaoEventoRoutingModule } from './informacao-evento-routing.module';
import { InformacaoEventoComponent } from './informacao-evento.component';
import { InformacaoEventoCrudComponent } from './informacao-evento-crud/informacao-evento-crud.component';
import { InsercaoComponent } from './informacao-evento-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './informacao-evento-crud/visualizacao/visualizacao.component';
import { ManterPadraoModule } from '../../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentesFormularioModule } from '../../componentes-formulario/componentes-formulario.module';

@NgModule({
  imports: [
    CommonModule,
    InformacaoEventoRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ComponentesFormularioModule
  ],
  declarations: [InformacaoEventoComponent, InformacaoEventoCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class InformacaoEventoModule { }
