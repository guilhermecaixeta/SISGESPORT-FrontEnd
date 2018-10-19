import { BaseCrudComponent } from './../../../base/base-crud.component';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-instituicao-crud',
  templateUrl: './instituicao-crud.component.html',
  styleUrls: ['./instituicao-crud.component.scss'],
  animations: [routerTransition()]
})
export class InstituicaoCrudComponent extends BaseCrudComponent {
  value: boolean = false;
}
