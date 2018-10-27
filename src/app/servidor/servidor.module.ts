import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServidorRoutingModule } from './servidor-routing.module';
import { ServidorComponent } from './servidor.component';
import { MenuLoginHeaderModule } from '../menu-login-header/menu-login.module';
import { BaseModule } from '../base/base.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EnderecoModule } from '../endereco/endereco.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastrarModule } from '../cadastrar/cadastrar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServidorRoutingModule,
    MenuLoginHeaderModule,
    CadastrarModule,
    EnderecoModule,
    BaseModule,
    NgbModule.forRoot()
  ],
  declarations: [ServidorComponent]
})
export class ServidorModule { }
