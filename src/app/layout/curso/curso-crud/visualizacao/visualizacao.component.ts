import { Curso } from './../../../../model/curso.model';
import { BaseEtapaComponent } from './../../../../base/base-etapa.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html'
})
export class VisualizacaoComponent extends BaseEtapaComponent<Curso> {

  @Input() listaInstituicao: any[] = [];
}
