import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { EquipeCrudComponent } from './equipe-crud/equipe-crud.component';
import { InsercaoComponent } from './equipe-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './equipe-crud/visualizacao/visualizacao.component';
import { ManterPadraoModule } from '../../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentesFormularioModule } from '../../componentes-formulario/componentes-formulario.module';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    EquipeRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ComponentesFormularioModule,
    ColorPickerModule
  ],
  declarations: [EquipeComponent, EquipeCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class EquipeModule { }
