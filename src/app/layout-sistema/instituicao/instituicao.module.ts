import { TabelaBasicaModule } from './../componentes/tabela-basica/tabela-basica.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituicaoRoutingModule } from './instituicao-routing.module';
import { InstituicaoComponent } from './instituicao.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    InstituicaoRoutingModule,
    NgbModule.forRoot(),
    TabelaBasicaModule
  ],
  declarations: [InstituicaoComponent]
})
export class InstituicaoModule { }
