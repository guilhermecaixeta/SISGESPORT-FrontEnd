import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutSistemaComponent } from './layout-sistema.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutSistemaComponent,
        children: [
            { path: '', redirectTo: 'principal' },
            { path: 'principal', loadChildren: './principal/principal.module#PrincipalModule' },
            {path: 'instituicao', loadChildren: './instituicao/instituicao.module#InstituicaoModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutSistemaRoutingModule { }
