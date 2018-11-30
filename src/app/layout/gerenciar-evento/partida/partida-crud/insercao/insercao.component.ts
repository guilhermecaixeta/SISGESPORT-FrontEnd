import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { I18n, CustomLocalePtBR } from '../../../../../utils/locale.util.component';
import { NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.scss'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomLocalePtBR },
    { provide: NgbDateParserFormatter, useClass: CustomLocalePtBR }
  ]
})
export class InsercaoComponent extends BaseEtapaComponent {
  @Input() exibirTimeCasa: boolean;
  @Input() exibirTimeVisita: boolean;
  @Input() exibirModalidade: boolean;

  @Input() listaModalidade: any[];
  @Input() listaTimeVisita: any[];
  @Input() listaTimeCasa: any[];
  @Input() listaServidor: any[];
  @Input() listaEvento: any[];
  iniciar() { }
}
