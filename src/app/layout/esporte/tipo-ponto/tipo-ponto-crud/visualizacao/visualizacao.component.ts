import { BaseEtapaComponent } from './../../../../../base/base-etapa.component';
import { Component } from '@angular/core';
import { TipoPonto } from '../../../../../model/tipo-ponto.model';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html'
})
export class VisualizacaoComponent extends BaseEtapaComponent<TipoPonto> {
}
