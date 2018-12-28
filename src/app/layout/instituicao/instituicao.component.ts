import { Component, OnInit } from '@angular/core';
import { DadosTabela } from '../../model/tabela';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  animations: [routerTransition()]
})
export class InstituicaoComponent implements OnInit {

  constructor() { }
  listaNomeCampo: DadosTabela[] = [{ nomeColuna: 'Nome', nomeValorColuna: 'nome' }];
  ngOnInit() {
  }
}