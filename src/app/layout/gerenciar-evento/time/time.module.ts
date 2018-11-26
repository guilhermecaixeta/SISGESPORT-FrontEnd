import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeRoutingModule } from './time-routing.module';
import { TimeComponent } from './time.component';
import { TimeCrudComponent } from './time-crud/time-crud.component';
import { InsercaoComponent } from './time-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './time-crud/visualizacao/visualizacao.component';
import { ManterPadraoModule } from '../../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentesFormularioModule } from '../../componentes-formulario/componentes-formulario.module';

@NgModule({
  imports: [
    CommonModule,
    TimeRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ComponentesFormularioModule
  ],
  declarations: [TimeComponent, TimeCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class TimeModule { }
