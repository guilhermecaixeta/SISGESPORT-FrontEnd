import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../../enum/sisgesport.enum';
import { AuthGuard } from '../../../shared';
import { InformacaoEventoComponent } from './informacao-evento.component';
import { InformacaoEventoCrudComponent } from './informacao-evento-crud/informacao-evento-crud.component';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: InformacaoEventoComponent },
      { path: ':acao', component: InformacaoEventoCrudComponent },
      { path: ':acao/:id', component: InformacaoEventoCrudComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacaoEventoRoutingModule { }
