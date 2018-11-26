import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { Aluno } from '../../../../../model/aluno.model';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.scss']
})
export class VisualizacaoComponent extends BaseEtapaComponent {
  @Input() aluno: Aluno;
  @Input() listaPosicao: any[];
  @Input() listaPartidaPonto: any[];
  @Input() listaPartidaPenalidade: any[];
}

