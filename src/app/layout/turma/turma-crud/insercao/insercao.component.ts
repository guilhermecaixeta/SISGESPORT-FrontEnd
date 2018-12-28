import { Curso } from './../../../../model/curso.model';
import { Instituicao } from './../../../../model/instituicao.model';
import { BaseEtapaComponent } from './../../../../base/base-etapa.component';
import { Component, Input } from '@angular/core';
import { I18n, CustomLocalePtBR } from '../../../../utils/locale.util.component';
import { NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Turma } from '../../../../model/turma.model';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomLocalePtBR },
    { provide: NgbDateParserFormatter, useClass: CustomLocalePtBR }
  ]
})
export class InsercaoComponent extends BaseEtapaComponent<Turma> {
  @Input() listaInstituicao: Instituicao[];
  @Input() listaCurso: Curso[];
}