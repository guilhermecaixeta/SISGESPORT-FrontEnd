import { EsporteComponent } from './esporte.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../enum/sisgesport.enum';
import { AuthGuard } from '../../shared';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    canActivate: [AuthGuard],
    children: [
      {
        path: '', component: EsporteComponent, children: [
          { path: 'tipo-ponto', loadChildren: './tipo-ponto/tipo-ponto.module#TipoPontoModule' },
          { path: 'penalidade', loadChildren: './penalidade/penalidade.module#PenalidadeModule' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsporteRoutingModule { }
