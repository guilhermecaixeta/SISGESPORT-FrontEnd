import { BaseEtapaComponent } from './../../../../../base/base-etapa.component';
import { Component } from '@angular/core';
import { TipoPonto } from '../../../../../model/tipo-ponto.model';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html'
})
export class InsercaoComponent extends BaseEtapaComponent<TipoPonto> {

}
