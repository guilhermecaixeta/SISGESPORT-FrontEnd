import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';

@Component({
  selector: 'app-informacao-evento',
  templateUrl: './informacao-evento.component.html',
  styleUrls: ['./informacao-evento.component.scss'],
  animations: [routerTransition()]
})
export class InformacaoEventoComponent extends BaseComponent {

  abrirEquipe: boolean = false;
  listaEvento: any[] = [];
  idEvento: number;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Título', nomeValorColuna: 'titulo' },
    { nomeColuna: 'Descrição', nomeValorColuna: 'descricao' }
  ];

  iniciar() {
    this.service.Get('evento/BuscarTodos').subscribe(object => {
      this.listaEvento = object.data;
    });
  }

  BuscarEquipe() {
    this.abrirEquipe = false;
    setTimeout(() => { this.abrirEquipe = true }, 5);
  }
}