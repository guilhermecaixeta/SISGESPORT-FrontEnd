import { Component } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { Posicao } from '../../../../../model/posicao.model';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html'
})
export class InsercaoComponent extends BaseEtapaComponent<Posicao> { }