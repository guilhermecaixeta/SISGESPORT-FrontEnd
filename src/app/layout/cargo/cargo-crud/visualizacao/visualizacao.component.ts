import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../base';
import { Instituicao } from '../../../../model/instituicao.model';
import { Cargo } from '../../../../model/cargo.model';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html'
})
export class VisualizacaoComponent extends BaseEtapaComponent<Cargo> {
  @Input() listaInstituicao: Instituicao[];

 }