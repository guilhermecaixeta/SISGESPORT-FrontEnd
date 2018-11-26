import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';

@Component({
  selector: 'app-tipo-ponto',
  templateUrl: './tipo-ponto.component.html',
  styleUrls: ['./tipo-ponto.component.scss'],
  animations: [routerTransition()]
})
export class TipoPontoComponent extends BaseComponent {
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Nome', nomeValorColuna: 'nome' },
    { nomeColuna: 'Valor Ponto', nomeValorColuna: 'valor' }
  ];
}
