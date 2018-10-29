import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutSistemaComponent } from './layout-sistema.component';
import { AuthGuard } from '../shared';
import { PerfilSistema } from '../enum/sisgesport.enum';

const routes: Routes = [
    {
        path: '',
        component: LayoutSistemaComponent,
        canActivate: [AuthGuard],
        data: { perfil: PerfilSistema.NO_ROLE },
        children: [
            { path: '', redirectTo: 'principal' },
            { path: 'principal', loadChildren: './principal/principal.module#PrincipalModule' },
            { path: 'instituicao', loadChildren: './instituicao/instituicao.module#InstituicaoModule' },
            { path: 'cargo', loadChildren: './cargo/cargo.module#CargoModule' },
            { path: 'curso', loadChildren: './curso/curso.module#CursoModule' },
            { path: 'turma', loadChildren: './turma/turma.module#TurmaModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutSistemaRoutingModule { }
