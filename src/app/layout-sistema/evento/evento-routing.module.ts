import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../enum/sisgesport.enum';
import { AuthGuard } from '../../shared';
import { EventoComponent } from './evento.component';
import { EventoCrudComponent } from './evento-crud/evento-crud.component';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: EventoComponent },
      { path: ':acao', component: EventoCrudComponent },
      { path: ':acao/:id', component: EventoCrudComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
