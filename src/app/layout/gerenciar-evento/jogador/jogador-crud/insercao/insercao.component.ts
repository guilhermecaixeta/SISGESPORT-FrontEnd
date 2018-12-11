import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { Aluno } from '../../../../../model/aluno.model';
import { DadosTabela } from '../../../../../model/tabela';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.scss']
})
export class InsercaoComponent extends BaseEtapaComponent {
  @Input() aluno: Aluno;
  @Input() listaPonto: any[];
  @Input() listaPosicao: any[];
  @Input() listaPartida: any[];
  @Input() listaPenalidade: any[];
  @Input() listaPartidaPonto: any[];
  @Input() listaPartidaPenalidade: any[];
  desabilitar: boolean = true;
  listaPenalidadeCampo: DadosTabela[] = [
    { nomeColuna: 'Penalidade', nomeValorColuna: 'penalidade' },
    { nomeColuna: 'Partida', nomeValorColuna: 'partida' }
  ];
  listaPontoCampo: DadosTabela[] = [
    { nomeColuna: 'Partida', nomeValorColuna: 'partida' },
    { nomeColuna: 'Ponto', nomeValorColuna: 'valor' }
  ];

  funcaoPartidaPonto = {
    executar: (lista: any[]): any[] => this.executarII(lista),
    validar: (lista: any[]): boolean => this.validar(lista)
  };

  executar(lista: any[]): any[] {
    lista.map(x => {
      let penalidade = this.ObterItemPorId(this.listaPenalidade, x.idPenalidade);
      let partida = this.ObterItemPorId(this.listaPartida, x.idPartida);
      if (!isNullOrUndefined(penalidade)) x.penalidade = penalidade.nome;
      if (!isNullOrUndefined(partida.timeCasa) && !isNullOrUndefined(partida.timeVisita)) {
        let nome = `${partida.timeCasa.equipe.nome} x ${partida.timeVisita.equipe.nome}`;
        x.partida = nome;
      }
    });
    return lista;
  }
  /**
   * Função especifica a ser realizada para a lista partida ponto
   * @param lista lista de entrada
   */
  executarII(lista: any[]): any[] {
    lista.map(x => {
      let ponto = this.ObterItemPorId(this.listaPonto, x.idPonto);
      let partida = this.ObterItemPorId(this.listaPartida, x.idPartida);
      if (!isNullOrUndefined(ponto)) x.valor = ponto.valor;
      if (!isNullOrUndefined(partida.timeCasa) && !isNullOrUndefined(partida.timeVisita)) {
        let nome = `${partida.timeCasa.equipe.nome} x ${partida.timeVisita.equipe.nome}`;
        x.partida = nome;
      }
    });
    return lista;
  }
}
