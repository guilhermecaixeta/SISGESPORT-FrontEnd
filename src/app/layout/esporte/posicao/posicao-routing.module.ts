import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../../enum/sisgesport.enum';
import { AuthGuard } from '../../../shared';
import { PosicaoComponent } from './posicao.component';
import { PosicaoCrudComponent } from './posicao-crud/posicao-crud.component';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    canActivateChild: [AuthGuard],
    children:
      [
        { path: '', component: PosicaoComponent },
        { path: ':acao', component: PosicaoCrudComponent },
        { path: ':acao/:id', component: PosicaoCrudComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosicaoRoutingModule { }
