import { Component } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { Penalidade } from '../../../../../model/penalidade.model';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html'
})
export class VisualizacaoComponent extends BaseEtapaComponent<Penalidade> { }