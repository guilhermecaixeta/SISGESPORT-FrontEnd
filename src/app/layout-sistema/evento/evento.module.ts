import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoRoutingModule } from './evento-routing.module';
import { EventoComponent } from './evento.component';
import { EventoCrudComponent } from './evento-crud/evento-crud.component';
import { InsercaoComponent } from './evento-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './evento-crud/visualizacao/visualizacao.component';
import { ManterPadraoModule } from '../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentesFormularioModule } from '../componentes-formulario/componentes-formulario.module';
import { LayoutEnderecoModule } from '../layout-endereco/layout-endereco.module';

@NgModule({
  imports: [
    CommonModule,
    EventoRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ComponentesFormularioModule,
    LayoutEnderecoModule
  ],
  declarations: [EventoComponent, EventoCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class EventoModule { }
