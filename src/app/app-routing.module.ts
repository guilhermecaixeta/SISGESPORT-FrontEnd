import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: '', loadChildren: './layout-sistema/layout-sistema.module#LayoutSistemaModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'cadastrar', loadChildren: './cadastrar/cadastrar.module#CadastrarModule' },
    { path: 'servidor', loadChildren: './servidor/servidor.module#ServidorModule' },
    { path: 'aluno', loadChildren: './aluno/aluno.module#AlunoModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'acesso-negado', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'nao-encontrado', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'nao-encontrado' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
