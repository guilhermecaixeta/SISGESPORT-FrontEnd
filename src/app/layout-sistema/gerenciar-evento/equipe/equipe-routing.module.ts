import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../../enum/sisgesport.enum';
import { AuthGuard } from '../../../shared';
import { EquipeComponent } from './equipe.component';
import { EquipeCrudComponent } from './equipe-crud/equipe-crud.component';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: EquipeComponent },
      { path: ':acao', component: EquipeCrudComponent },
      { path: ':acao/:id', component: EquipeCrudComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
