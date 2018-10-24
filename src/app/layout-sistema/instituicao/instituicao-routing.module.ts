import { InstituicaoComponent } from './instituicao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstituicaoCrudComponent } from './instituicao-crud/instituicao-crud.component';
import { AuthGuard } from '../../shared';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
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
