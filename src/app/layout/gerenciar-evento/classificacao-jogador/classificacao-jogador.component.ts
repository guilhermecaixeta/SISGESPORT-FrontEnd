import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';

@Component({
  selector: 'app-classificacao-jogador',
  templateUrl: './classificacao-jogador.component.html',
  styleUrls: ['./classificacao-jogador.component.scss'],
  animations: [routerTransition()]
})
export class ClassificacaoJogadorComponent extends BaseComponent {

  abrirGrid: boolean = false;
  listaEvento: any[] = [];
  listaModalidade: any[] = [];

  idEvento: number;
  idTipoClassificacao: number;
  data: string;
  listaNomeCampo: DadosTabela[];

  iniciar() {
    this.service.Get('evento/BuscarTodos').subscribe(object => {
      this.listaEvento = object.data;
    });
  }

  BuscarJogador() {
    this.abrirGrid = false;
    let id = +this.idTipoClassificacao;
    this.listaNomeCampo = [
      { nomeColuna: 'Jogador', nomeValorColuna: 'jogador' },
      { nomeColuna: 'Equipe', nomeValorColuna: 'equipe' },
      { nomeColuna: `${id == 1 ? 'Pontuação' : 'Penalidade'}`, nomeValorColuna: 'total' }
    ]
    this.data = `${this.idEvento}\\${this.idTipoClassificacao}`;
    setTimeout(() => { this.abrirGrid = true }, 5);
  }

  executar(lista: any[]): any[] {
    let id = +this.idTipoClassificacao;
    lista.forEach(x => {
      if(id == 1)
      x.total = x.partidaPonto ? x.partidaPonto.length : 0
        else 
        x.total = x.partidaPenalidade ? x.partidaPenalidade.length : 0;
      x.equipe = x.time.equipe.nome;
      x.jogador = x.jogador.nome;
    });
    return lista;
  }
}