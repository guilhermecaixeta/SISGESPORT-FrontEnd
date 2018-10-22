import { BaseComponent } from './../../base/base.component';
import { Component, Input } from '@angular/core';
import { DadosTabela } from '../../model/tabela';

@Component({
  selector: 'app-manter-padrao',
  templateUrl: './manter-padrao.component.html',
  styleUrls: ['./manter-padrao.component.scss']
})
export class ManterPadraoComponent extends BaseComponent {
  
  @Input() dataRoute: any;
  @Input() field: string = "id";
  @Input() legendaTabela: string = '';
  @Input() listaValorCampo: any[] = [];
  @Input() listaNomeCampo: DadosTabela[] = [];
  @Input() legenda: string = 'Adicionar';
  @Input() rota: string;
}
