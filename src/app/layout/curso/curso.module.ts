import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './curso.component';
import { CursoCrudComponent } from './curso-crud/curso-crud.component';
import { ManterPadraoModule } from '../manter-padrao/manter-padrao.module';
import { BaseModule } from '../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { InsercaoComponent } from './curso-crud/insercao/insercao.component';
import { VisualizacaoComponent } from './curso-crud/visualizacao/visualizacao.component';
import { ComponentesFormularioModule } from '../componentes-formulario/componentes-formulario.module';

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule,
    ManterPadraoModule,
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ComponentesFormularioModule
  ],
  declarations: [CursoComponent, CursoCrudComponent, InsercaoComponent, VisualizacaoComponent]
})
export class CursoModule { }
