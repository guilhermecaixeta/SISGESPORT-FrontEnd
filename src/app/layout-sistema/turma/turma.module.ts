import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmaRoutingModule } from './turma-routing.module';
import { TurmaComponent } from './turma.component';
import { TurmaCrudComponent } from './turma-crud/turma-crud.component';
import { InsercaoComponent } from './turma-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './turma-crud/visualizacao/visualizacao.component';
import { ManterPadraoModule } from '../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    TurmaRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [TurmaComponent, TurmaCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class TurmaModule { }
