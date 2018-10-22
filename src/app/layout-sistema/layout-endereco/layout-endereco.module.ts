import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutEnderecoComponent } from './layout-endereco.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseModule } from '../../base/base.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BaseModule,
    NgbModule.forRoot(),
    NgxMaskModule.forRoot()],
  exports: [LayoutEnderecoComponent],
  declarations: [LayoutEnderecoComponent]
})
export class LayoutEnderecoModule { }
