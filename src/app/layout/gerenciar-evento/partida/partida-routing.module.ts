import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../../enum/sisgesport.enum';
import { AuthGuard } from '../../../shared';
import { PartidaCrudComponent } from './partida-crud/partida-crud.component';
import { PartidaComponent } from './partida.component';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: PartidaComponent },
      { path: ':acao', component: PartidaCrudComponent },
      { path: ':acao/:id', component: PartidaCrudComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidaRoutingModule { }
