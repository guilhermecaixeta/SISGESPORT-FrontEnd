import { Posicao } from './../../../../../model/posicao.model';
import { TipoPonto } from './../../../../../model/tipo-ponto.model';
import { Penalidade } from './../../../../../model/penalidade.model';
import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { Modalidade } from '../../../../../model/modalidade.model';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html'
})
export class InsercaoComponent extends BaseEtapaComponent<Modalidade> {
  
  @Input() listaPenalidade: Penalidade[];
  @Input() listaTipoPonto: TipoPonto[];
  @Input() listaPosicao: Posicao[];
}