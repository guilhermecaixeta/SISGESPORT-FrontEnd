import { CadastroCrudComponent } from './cadastro-crud/cadastro-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar.component';

const routes: Routes = [
    {
        path: '',
        children:
        [
            {path: '', component: CadastrarComponent},
            {path: ':acao', component: CadastroCrudComponent}
        ] 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastrarRoutingModule {
}
