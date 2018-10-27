import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoComponent } from './curso.component';
import { CursoCrudComponent } from './curso-crud/curso-crud.component';
import { PerfilSistema } from '../../enum/sisgesport.enum';

const routes: Routes = [{
  path: '',
  data: { perfil: PerfilSistema.ROLE_ADMIN },
  children: [
    { path: '', component: CursoComponent },
    { path: ':acao', component: CursoCrudComponent },
    { path: ':acao/:id', component: CursoCrudComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
