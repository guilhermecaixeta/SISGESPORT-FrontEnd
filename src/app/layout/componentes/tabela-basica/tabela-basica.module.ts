import { TabelaBasicaComponent } from './tabela-basica.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    TabelaBasicaComponent
  ],
  exports:[
    TabelaBasicaComponent
  ]
})
export class TabelaBasicaModule { }
