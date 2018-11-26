import { PerfilSistema } from './../../../enum/sisgesport.enum';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoPontoComponent } from './tipo-ponto.component';
import { TipoPontoCrudComponent } from './tipo-ponto-crud/tipo-ponto-crud.component';
import { AuthGuard } from '../../../shared';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    canActivateChild: [AuthGuard],
    children:
      [
        { path: '', component: TipoPontoComponent },
        { path: ':acao', component: TipoPontoCrudComponent },
        { path: ':acao/:id', component: TipoPontoCrudComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoPontoRoutingModule { }
