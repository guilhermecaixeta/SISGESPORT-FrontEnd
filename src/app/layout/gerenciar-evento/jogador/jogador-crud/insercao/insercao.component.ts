import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { Aluno } from '../../../../../model/aluno.model';
import { DadosTabela } from '../../../../../model/tabela';

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
    { nomeColuna: 'Ponto', nomeValorColuna: 'valor' },
    { nomeColuna: 'Partida', nomeValorColuna: 'partida' }
  ];
  funcaoEspecificaII = {
    executarII: (lista: any[]): any[] => this.executar(lista),
    validar: (lista: any[]): boolean => this.validar(lista)
  }

  executar(lista: any[]): any[] {
    lista.map(x => {
      let penalidade = this.ObterItemPorId(this.listaPenalidade, x.idPenalidade);
      let partida = this.ObterItemPorId(this.listaPartida, x.idPartida);
      x.penalidade = penalidade.nome;
      x.partida = `${partida.timeCasa.equipe.nome} x ${partida.timeVisita.equipe.nome}`
    });
    return lista;
  }

  executarII(lista: any[]): any[] {
    lista.map(x => {
      let ponto = this.ObterItemPorId(this.listaPonto, x.idPonto);
      let partida = this.ObterItemPorId(this.listaPartida, x.idPartida);
      x.penalidade = ponto.nome;
      x.partida = `${partida.timeCasa.equipe.nome} x ${partida.timeVisita.equipe.nome}`
    });
    return lista;
  }
}
