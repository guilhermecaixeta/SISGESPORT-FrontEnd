import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../../enum/sisgesport.enum';
import { PenalidadeComponent } from './penalidade.component';
import { PenalidadeCrudComponent } from './penalidade-crud/penalidade-crud.component';
import { AuthGuard } from '../../../shared';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    canActivateChild: [AuthGuard],
    children:
      [
        { path: '', component: PenalidadeComponent, data: { pefil: PerfilSistema.ROLE_ADMIN } },
        { path: ':acao', component: PenalidadeCrudComponent, data: { pefil: PerfilSistema.ROLE_ADMIN } },
        { path: ':acao/:id', component: PenalidadeCrudComponent, data: { pefil: PerfilSistema.ROLE_ADMIN } }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenalidadeRoutingModule { }
