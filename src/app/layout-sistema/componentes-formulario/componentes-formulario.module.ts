import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './input-form/input-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseModule } from '../../base/base.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    BaseModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [InputFormComponent],
  exports: [InputFormComponent]
})
export class ComponentesFormularioModule { }
