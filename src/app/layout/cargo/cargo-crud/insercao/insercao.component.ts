import { Cargo } from './../../../../model/cargo.model';
import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../base';
import { Instituicao } from '../../../../model/instituicao.model';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html'
})
export class InsercaoComponent extends BaseEtapaComponent<Cargo> {
  @Input() listaInstituicao: Instituicao[] = [];

 }
