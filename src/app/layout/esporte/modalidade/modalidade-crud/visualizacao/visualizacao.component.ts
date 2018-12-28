import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { Modalidade } from '../../../../../model/modalidade.model';
import { Penalidade } from '../../../../../model/penalidade.model';
import { TipoPonto } from '../../../../../model/tipo-ponto.model';
import { Posicao } from '../../../../../model/posicao.model';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html'
})
export class VisualizacaoComponent extends BaseEtapaComponent<Modalidade> {
  
  @Input() listaPenalidade: Penalidade[];
  @Input() listaTipoPonto: TipoPonto[];
  @Input() listaPosicao: Posicao[];
}
