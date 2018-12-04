import { Component, OnInit, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../base';
import { DadosTabela } from '../../../../model/tabela';
import { isNullOrUndefined } from 'util';
import { Alerta } from '../../../../model/alerta.model';
import { TipoAlerta } from '../../../../enum/sisgesport.enum';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.scss']
})
export class InsercaoComponent extends BaseEtapaComponent {
  @Input() listaPosicao: any[] = [];
}
