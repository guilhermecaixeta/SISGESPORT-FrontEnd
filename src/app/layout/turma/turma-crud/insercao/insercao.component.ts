import { BaseEtapaComponent } from './../../../../base/base-etapa.component';
import { Component, Input } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { I18n, CustomLocalePtBR } from '../../../../utils/locale.util.component';
import { NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.scss'],
  animations: [routerTransition()],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomLocalePtBR },
    { provide: NgbDateParserFormatter, useClass: CustomLocalePtBR }
  ]
})
export class InsercaoComponent extends BaseEtapaComponent {

  @Input() listaInstituicao: any[] = [];
  @Input() listaCurso: any[] = [];
}