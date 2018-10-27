import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlunoComponent } from './aluno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoRoutingModule } from './aluno-routing.module';
import { BaseModule } from '../base/base.module';
import { EnderecoModule } from '../endereco/endereco.module';
import { MenuLoginHeaderModule } from '../menu-login-header/menu-login.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastrarModule } from '../cadastrar/cadastrar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlunoRoutingModule,
    MenuLoginHeaderModule,
    CadastrarModule,
    EnderecoModule,
    BaseModule,
    NgbModule.forRoot()
  ],
  declarations: [AlunoComponent]
})
export class AlunoModule { }
