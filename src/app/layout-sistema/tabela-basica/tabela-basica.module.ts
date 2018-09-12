import { TabelaBasicaComponent } from './tabela-basica.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabelaBasicaComponent
  ],
  exports:[
    TabelaBasicaComponent
  ]
})
export class TabelaBasicaModule { }
