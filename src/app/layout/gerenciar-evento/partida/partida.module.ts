import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidaRoutingModule } from './partida-routing.module';
import { PartidaComponent } from './partida.component';
import { PartidaCrudComponent } from './partida-crud/partida-crud.component';
import { InsercaoComponent } from './partida-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './partida-crud/visualizacao/visualizacao.component';
import { ComponentesFormularioModule } from '../../componentes-formulario/componentes-formulario.module';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseModule } from '../../../base/base.module';
import { ManterPadraoModule } from '../../manter-padrao/manter-padrao.module';

@NgModule({
  imports: [
    CommonModule,
    PartidaRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ComponentesFormularioModule
  ],
  declarations: [PartidaComponent, PartidaCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class PartidaModule { }
