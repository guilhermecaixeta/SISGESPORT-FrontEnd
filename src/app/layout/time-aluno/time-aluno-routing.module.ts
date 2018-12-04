import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../enum/sisgesport.enum';
import { AuthGuard } from '../../shared';
import { TimeAlunoComponent } from './time-aluno.component';
import { TimeAlunoCrudComponent } from './time-aluno-crud/time-aluno-crud.component';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_USER },
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: TimeAlunoComponent },
      { path: ':acao', component: TimeAlunoCrudComponent },
      { path: ':acao/:id', component: TimeAlunoCrudComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeAlunoRoutingModule { }
