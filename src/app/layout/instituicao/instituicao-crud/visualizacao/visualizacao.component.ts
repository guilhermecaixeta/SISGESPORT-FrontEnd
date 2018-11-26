import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../base';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.scss'],
  animations: [routerTransition()]
})
export class VisualizacaoComponent extends BaseEtapaComponent {
  @Input() estadosLista: any[] = [];
  @Input() municipioLista: any[] = [];
}
