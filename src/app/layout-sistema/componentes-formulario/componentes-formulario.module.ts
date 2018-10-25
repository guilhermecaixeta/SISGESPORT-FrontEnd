import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseModule } from '../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputLabelComponent } from './input-label/input-label.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [ InputLabelComponent],
  exports: [InputLabelComponent]
})
export class ComponentesFormularioModule { }
