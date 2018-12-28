import { BaseEtapaComponent } from './../../../../../base/base-etapa.component';
import { Component } from '@angular/core';
import { Penalidade } from '../../../../../model/penalidade.model';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html'
})
export class InsercaoComponent extends BaseEtapaComponent<Penalidade> { }
