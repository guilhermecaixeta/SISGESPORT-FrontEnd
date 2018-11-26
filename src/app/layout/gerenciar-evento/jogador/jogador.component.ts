import { Component } from '@angular/core';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.scss'],
  animations: [routerTransition()]
})
export class JogadorComponent extends BaseComponent {

  abrirTime: boolean = false;
  listaEvento: any[] = [];
  listaEquipe: any[] = [];
  idEvento: number;
  idEquipe: number;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Jogador', nomeValorColuna: 'jogador' },
    { nomeColuna: 'Nº Camisa', nomeValorColuna: 'numCamisa' },
    { nomeColuna: 'Posição', nomeValorColuna: 'posicao' },
    { nomeColuna: 'Modalidade', nomeValorColuna: 'modalidade' }
  ];

  iniciar() {
    this.service.Get('evento/BuscarTodos').subscribe(object => this.listaEvento = object.data);
  }

  BuscarEquipe() {
    this.service.Get('equipe/BuscarEquipePorIdEvento', this.idEvento).subscribe(object => {
      this.listaEquipe = object.data;
    });
  }

  executar(lista: any[]): any[] {
    lista.forEach(x => {
      x.jogador = x.jogador.nome;
      x.posicao = x.posicao.nome;
      x.modalidade = x.time.modalidade.nome;
    });
    return lista;
  }

  BuscarJogador() {
    this.abrirTime = false;
    setTimeout(() => { this.abrirTime = true }, 5);
  }
}
