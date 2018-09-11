import { MenuSide } from './../menu-side';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MenuSide
  ],
  declarations: [],
  exports: [
    MenuSide
  ]
})
export class EntityModuleModule { }
