import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-penalidade',
  templateUrl: './penalidade.component.html',
  animations: [routerTransition()]
})

export class PenalidadeComponent extends BaseComponent {
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Nome', nomeValorColuna: 'nome' },
    { nomeColuna: 'Descrição', nomeValorColuna: 'descricao' }
  ];
}