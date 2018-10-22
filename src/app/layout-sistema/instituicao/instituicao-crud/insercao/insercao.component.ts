import { BaseEtapaComponent } from './../../../../base/base-etapa.component';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.scss'],
  animations: [routerTransition()]
})
export class InsercaoComponent extends BaseEtapaComponent { }
