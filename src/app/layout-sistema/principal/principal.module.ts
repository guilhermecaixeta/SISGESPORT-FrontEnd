import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from '../../layout/dashboard/components';
import { StatModule } from '../../shared';
import { TabelaBasicaModule } from '../tabela-basica/tabela-basica.module';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        PrincipalRoutingModule,
        StatModule,
        TabelaBasicaModule
    ],
    declarations: [
        PrincipalComponent,
        // TimelineComponent,
        // NotificationComponent,
        // ChatComponent
    ],
    exports: [
        PrincipalComponent
    ]
})
export class PrincipalModule { }
