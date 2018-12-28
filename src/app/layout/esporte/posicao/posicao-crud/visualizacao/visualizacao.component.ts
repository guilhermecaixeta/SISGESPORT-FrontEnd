import { Component } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { Posicao } from '../../../../../model/posicao.model';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html'
})
export class VisualizacaoComponent extends BaseEtapaComponent<Posicao> { }
