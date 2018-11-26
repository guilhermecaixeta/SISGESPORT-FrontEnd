import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../enum/sisgesport.enum';
import { TurmaComponent } from './turma.component';
import { TurmaCrudComponent } from './turma-crud/turma-crud.component';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    children: [
      { path: '', component: TurmaComponent },
      { path: ':acao', component: TurmaCrudComponent },
      { path: ':acao/:id', component: TurmaCrudComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaRoutingModule { }
