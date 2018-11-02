import { BaseModule } from './../base/base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MenuLoginHeaderModule } from '../menu-login-header/menu-login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MenuLoginHeaderModule,
        FormsModule,
        NgbModule.forRoot(),
        ReactiveFormsModule,
        NgbAlertModule.forRoot(),
        BaseModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
