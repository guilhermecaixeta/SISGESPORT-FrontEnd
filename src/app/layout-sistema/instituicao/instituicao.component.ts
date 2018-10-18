import { Component, OnInit } from '@angular/core';
import { DadosTabela } from '../../entity/tabela';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.scss'],
  animations: [routerTransition()]
})
export class InstituicaoComponent implements OnInit {

  constructor() { }
  listaNomeCampo: DadosTabela[] = [{ nomeColuna: 'Nome', nomeValorColuna: 'nome' }];
  ngOnInit() {
  }

}
