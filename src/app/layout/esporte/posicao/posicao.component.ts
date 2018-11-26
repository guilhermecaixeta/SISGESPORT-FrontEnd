import { Component } from '@angular/core';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-posicao',
  templateUrl: './posicao.component.html',
  styleUrls: ['./posicao.component.scss'],
  animations: [routerTransition()]
})
export class PosicaoComponent extends BaseComponent {
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Nome', nomeValorColuna: 'nome' },
    { nomeColuna: 'Descrição', nomeValorColuna: 'descricao' },
    { nomeColuna: 'Nº Máx.', nomeValorColuna: 'numMaxJogador' },
    { nomeColuna: 'Nº Min.', nomeValorColuna: 'numMinJogador' }
  ];
}