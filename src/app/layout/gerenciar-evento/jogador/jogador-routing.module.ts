import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../../enum/sisgesport.enum';
import { AuthGuard } from '../../../shared';
import { JogadorComponent } from './jogador.component';
import { JogadorCrudComponent } from './jogador-crud/jogador-crud.component';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: JogadorComponent },
      { path: ':acao', component: JogadorCrudComponent },
      { path: ':acao/:id', component: JogadorCrudComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogadorRoutingModule { }
