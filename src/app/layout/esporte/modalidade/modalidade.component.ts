import { Component } from '@angular/core';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-modalidade',
  templateUrl: './modalidade.component.html',
  animations: [routerTransition()]
})
export class ModalidadeComponent extends BaseComponent {
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Nome', nomeValorColuna: 'nome' },
    { nomeColuna: 'Descrição', nomeValorColuna: 'descricao' },
    { nomeColuna: 'Nº Máx.', nomeValorColuna: 'numMaxJogador' },
    { nomeColuna: 'Nº Min.', nomeValorColuna: 'numMinJogador' }
  ];
}
