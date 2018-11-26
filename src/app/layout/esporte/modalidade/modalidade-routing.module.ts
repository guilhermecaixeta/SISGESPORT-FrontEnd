import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../../enum/sisgesport.enum';
import { AuthGuard } from '../../../shared';
import { ModalidadeComponent } from './modalidade.component';
import { ModalidadeCrudComponent } from './modalidade-crud/modalidade-crud.component';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    canActivateChild: [AuthGuard],
    children:
      [
        { path: '', component: ModalidadeComponent },
        { path: ':acao', component: ModalidadeCrudComponent },
        { path: ':acao/:id', component: ModalidadeCrudComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalidadeRoutingModule { }
