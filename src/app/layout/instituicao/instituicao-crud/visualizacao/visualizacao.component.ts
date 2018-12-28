import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../base';
import { routerTransition } from '../../../../router.animations';
import { Instituicao } from '../../../../model/instituicao.model';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  animations: [routerTransition()]
})
export class VisualizacaoComponent extends BaseEtapaComponent<Instituicao> {
  @Input() estadosLista: any[];
  @Input() municipioLista: any[];
}
