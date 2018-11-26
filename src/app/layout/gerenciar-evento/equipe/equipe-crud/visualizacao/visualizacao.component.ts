import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.scss']
})
export class VisualizacaoComponent extends BaseEtapaComponent {
  @Input() cor: string;
  @Input() listaTurma: any[];
  @Input() listaCurso: any[];
  @Input() listaAluno: any[];
  @Input() listaAlunoEquipe: any[];
  @Input() dadosAluno: { nome: string, curso: string };
}