import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../base';

@Component({
  selector: 'app-layout-endereco',
  templateUrl: './layout-endereco.component.html',
  styleUrls: ['./layout-endereco.component.scss']
})
export class LayoutEnderecoComponent extends BaseEtapaComponent {
  @Input() estadosLista: any[];
  @Input() municipioLista: any[];
}

