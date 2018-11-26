import { CargoComponent } from './cargo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargoRoutingModule } from './cargo-routing.module';
import { ManterPadraoModule } from '../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { CargoCrudComponent } from './cargo-crud/cargo-crud.component';
import { InsercaoComponent } from './cargo-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './cargo-crud/visualizacao/visualizacao.component';
import { ComponentesFormularioModule } from '../componentes-formulario/componentes-formulario.module';

@NgModule({
  imports: [
    CommonModule,
    CargoRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ComponentesFormularioModule
  ],
  declarations: [CargoComponent, CargoCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class CargoModule { }
