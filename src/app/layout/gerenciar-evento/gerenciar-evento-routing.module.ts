import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilSistema } from '../../enum/sisgesport.enum';
import { AuthGuard } from '../../shared';
import { GerenciarEventoComponent } from './gerenciar-evento.component';

const routes: Routes = [
  {
    path: '',
    data: { perfil: PerfilSistema.ROLE_ADMIN },
    canActivate: [AuthGuard],
    children: [
      {
        path: '', component: GerenciarEventoComponent, children: [
          { path: 'evento', loadChildren: './evento/evento.module#EventoModule' },
          { path: 'equipe', loadChildren: './equipe/equipe.module#EquipeModule' },
          { path: 'time', loadChildren: './time/time.module#TimeModule' },
          { path: 'jogador', loadChildren: './jogador/jogador.module#JogadorModule' },
          { path: 'partida', loadChildren: './partida/partida.module#PartidaModule' },
          { path: 'classificacao', loadChildren: './classificacao/classificacao.module#ClassificacaoModule' },
          { path: 'informacao-evento', loadChildren: './informacao-evento/informacao-evento.module#InformacaoEventoModule' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciarEventoRoutingModule { }
