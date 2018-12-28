import { Component, OnInit } from '@angular/core';
import { DadosTabela } from '../../model/tabela';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  animations: [routerTransition()]
})
export class CargoComponent implements OnInit {

  constructor() { }
  listaNomeCampo: DadosTabela[] = [{ nomeColuna: 'Nome', nomeValorColuna: 'nome' }];
  ngOnInit() { }
}
