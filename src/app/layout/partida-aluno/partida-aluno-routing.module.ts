import { PartidaAlunoComponent } from './partida-aluno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../enum/sisgesport.enum';
import { AuthGuard } from '../../shared';
import { PartidaCrudComponent } from '../gerenciar-evento/partida/partida-crud/partida-crud.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    data: { perfil: PerfilSistema.ROLE_USER },
    children: [
      { path: '', component: PartidaAlunoComponent },
      { path: ':acao/:id', component: PartidaCrudComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidaAlunoRoutingModule { }
