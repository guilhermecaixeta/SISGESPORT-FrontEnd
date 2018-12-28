import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { Equipe } from '../../../../../model/equipe.model';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html'
})
export class VisualizacaoComponent extends BaseEtapaComponent<Equipe> {
  @Input() cor: string;
  @Input() listaTurma: any[];
  @Input() listaCurso: any[];
  @Input() listaAluno: any[];
  @Input() listaAlunoEquipe: any[];
  @Input() dadosAluno: { nome: string, curso: string };
}