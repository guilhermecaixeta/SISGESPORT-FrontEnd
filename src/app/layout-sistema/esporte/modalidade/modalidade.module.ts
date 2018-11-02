import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalidadeRoutingModule } from './modalidade-routing.module';
import { ModalidadeComponent } from './modalidade.component';
import { ModalidadeCrudComponent } from './modalidade-crud/modalidade-crud.component';
import { InsercaoComponent } from './modalidade-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './modalidade-crud/visualizacao/visualizacao.component';
import { ManterPadraoModule } from '../../manter-padrao/manter-padrao.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseModule } from '../../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesFormularioModule } from '../../componentes-formulario/componentes-formulario.module';

@NgModule({
  imports: [
    CommonModule,
    ModalidadeRoutingModule,
    ManterPadraoModule,
    NgbModule.forRoot(),
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesFormularioModule
  ],
  declarations: [ModalidadeComponent, ModalidadeCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class ModalidadeModule { }
