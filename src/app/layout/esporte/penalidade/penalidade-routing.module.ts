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
        { path: '', component: PenalidadeComponent },
        { path: ':acao', component: PenalidadeCrudComponent },
        { path: ':acao/:id', component: PenalidadeCrudComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenalidadeRoutingModule { }
