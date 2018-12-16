import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../shared';
import { PerfilSistema } from '../../../enum/sisgesport.enum';
import { ClassificacaoJogadorComponent } from './classificacao-jogador.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    // data: { perfil: PerfilSistema.NO_ROLE },
    children: [
      { path: '', component: ClassificacaoJogadorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassificacaoJogadorRoutingModule { }
