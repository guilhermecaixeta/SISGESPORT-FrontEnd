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
            { path: 'curso', loadChildren: './curso/curso.module#CursoModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutSistemaRoutingModule { }
