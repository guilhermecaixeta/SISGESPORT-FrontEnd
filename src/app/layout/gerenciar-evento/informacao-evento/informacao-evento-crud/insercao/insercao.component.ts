import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.scss']
})
export class InsercaoComponent extends BaseEtapaComponent {
@Input() listaEvento: any[];
}
