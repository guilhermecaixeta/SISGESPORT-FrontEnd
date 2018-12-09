import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
import { PerfilSistema } from '../../enum/sisgesport.enum';
import { ClassificacaoComponent } from '../gerenciar-evento/classificacao/classificacao.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    data: { perfil: PerfilSistema.ROLE_USER },
    children: [
      { path: '', component: ClassificacaoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassificacaoAlunoRoutingModule { }
