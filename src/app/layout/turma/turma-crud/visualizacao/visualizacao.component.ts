import { Curso } from './../../../../model/curso.model';
import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../base';
import { Turma } from '../../../../model/turma.model';
import { Instituicao } from '../../../../model/instituicao.model';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html'
})
export class VisualizacaoComponent extends BaseEtapaComponent<Turma> {

  @Input() listaInstituicao: Instituicao[];
  @Input() listaCurso: Curso[];
}