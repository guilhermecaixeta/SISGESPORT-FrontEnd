import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutSistemaComponent } from './layout-sistema.component';
import { AuthGuard } from '../shared';

const routes: Routes = [
    {
        path: '',
        component: LayoutSistemaComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'principal' },
            { path: 'principal', loadChildren: './principal/principal.module#PrincipalModule' },
            { path: 'instituicao', loadChildren: './instituicao/instituicao.module#InstituicaoModule' },
            { path: 'cargo', loadChildren: './cargo/cargo.module#CargoModule' },
            { path: 'curso', loadChildren: './curso/curso.module#CursoModule' },
            { path: 'turma', loadChildren: './turma/turma.module#TurmaModule' },
            { path: 'esporte', loadChildren: './esporte/esporte.module#EsporteModule' },
            { path: 'gerenciar-evento', loadChildren: './gerenciar-evento/gerenciar-evento.module#GerenciarEventoModule' },
            { path: 'evento', loadChildren: './evento-aluno/evento-aluno.module#EventoAlunoModule' },
            { path: 'time', loadChildren: './time-aluno/time-aluno.module#TimeAlunoModule' },
            { path: 'classificacao', loadChildren: './classificacao-aluno/classificacao-aluno.module#ClassificacaoAlunoModule' },
            { path: 'classificacao-jogador', loadChildren: './gerenciar-evento/classificacao-jogador/classificacao-jogador.module#ClassificacaoJogadorModule' },
            { path: 'partida', loadChildren: './partida-aluno/partida-aluno.module#PartidaAlunoModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutSistemaRoutingModule { }
