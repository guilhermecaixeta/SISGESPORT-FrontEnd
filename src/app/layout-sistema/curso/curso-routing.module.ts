import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
import { CursoComponent } from './curso.component';
import { CursoCrudComponent } from './curso-crud/curso-crud.component';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
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
