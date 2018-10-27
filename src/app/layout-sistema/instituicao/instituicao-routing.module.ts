import { InstituicaoComponent } from './instituicao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstituicaoCrudComponent } from './instituicao-crud/instituicao-crud.component';
import { PerfilSistema } from '../../enum/sisgesport.enum';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    children: [
      { path: '', component: InstituicaoComponent },
      { path: ':acao', component: InstituicaoCrudComponent },
      { path: ':acao/:id', component: InstituicaoCrudComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituicaoRoutingModule { }
