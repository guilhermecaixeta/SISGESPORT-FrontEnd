import { CadastroCrudEtapa1Component } from './cadastro-crud/cadastro-crud-etapa1/cadastro-crud-etapa1.component';
import { CadastroCrudComponent } from './cadastro-crud/cadastro-crud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarRoutingModule } from './cadastrar-routing.module';
import { CadastrarComponent } from './cadastrar.component';
import { MenuLoginHeaderModule } from '../menu-login-header/menu-login.module';
import { EnderecoModule } from '../endereco/endereco.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseModule } from '../base/base.module';

@NgModule({
  imports: [
    CommonModule,
    CadastrarRoutingModule,
    MenuLoginHeaderModule,
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgxMaskModule.forRoot(),
    EnderecoModule
  ],
  declarations: [CadastrarComponent, CadastroCrudComponent, CadastroCrudEtapa1Component],
  exports: [CadastroCrudComponent, CadastroCrudEtapa1Component]
})
export class CadastrarModule { }
