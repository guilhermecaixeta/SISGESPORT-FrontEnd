import { BaseEtapaComponent } from './../../../../base/base-etapa.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.scss']
})
export class InsercaoComponent extends BaseEtapaComponent {

  @Input() listaInstituicao: any[] = [];
}
