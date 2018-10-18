import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { StatModule } from '../../shared';
import { TabelaBasicaModule } from '../componentes/tabela-basica/tabela-basica.module';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        PrincipalRoutingModule,
        StatModule,
        TabelaBasicaModule
    ],
    declarations: [
        PrincipalComponent
        ],
    exports: [
        PrincipalComponent
    ]
})
export class PrincipalModule { }
