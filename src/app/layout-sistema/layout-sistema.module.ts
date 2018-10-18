import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutSistemaRoutingModule } from './layout-sistema-routing.module';
import { LayoutSistemaComponent } from './layout-sistema.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import { LiDropDownMenuComponent } from './componentes/li-drop-down-menu/li-drop-down-menu.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutSistemaRoutingModule,
        TranslateModule,
        NgbModule.forRoot()
    ],
    declarations: [
        LayoutSistemaComponent, 
        CabecalhoComponent, 
        BarraLateralComponent, 
        LiDropDownMenuComponent
        ]
})
export class LayoutSistemaModule {}
