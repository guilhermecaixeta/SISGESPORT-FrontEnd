import { Municipio } from './../../../../model/municipio.model';
import { BaseEtapaComponent } from './../../../../base/base-etapa.component';
import { Component, Input } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Instituicao } from '../../../../model/instituicao.model';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  animations: [routerTransition()]
})
export class InsercaoComponent extends BaseEtapaComponent<Instituicao> {
  @Input() estadosLista: any[];
  @Input() municipioLista: Municipio[];
}
