import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.scss']
})
export class VisualizacaoComponent extends BaseEtapaComponent {
  @Input() listaEvento: any[];
}
