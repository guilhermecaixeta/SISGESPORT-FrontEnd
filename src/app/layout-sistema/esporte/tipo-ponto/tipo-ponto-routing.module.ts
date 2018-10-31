import { PerfilSistema } from './../../../enum/sisgesport.enum';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoPontoComponent } from './tipo-ponto.component';
import { TipoPontoCrudComponent } from './tipo-ponto-crud/tipo-ponto-crud.component';

const routes: Routes = [
  {
    path: '',
    data: { pefil: PerfilSistema.ROLE_ADMIN },
    children:
      [
        { path: '', component: TipoPontoComponent, data: { pefil: PerfilSistema.ROLE_ADMIN } },
        { path: ':acao', component: TipoPontoCrudComponent, data: { pefil: PerfilSistema.ROLE_ADMIN } },
        { path: ':acao/:id', component: TipoPontoCrudComponent, data: { pefil: PerfilSistema.ROLE_ADMIN } }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoPontoRoutingModule { }
