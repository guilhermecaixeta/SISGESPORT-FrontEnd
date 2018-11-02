import { Posicao } from './posicao.model';
import { Penalidade } from './penalidade.model';
import { TipoPonto } from './tipo-ponto.model';
export class Modalidade {
    id: number;
    nome: string;
    descricao: string;
    numMaxJogador: number;
    numMinJogador: number;
    posicao: Posicao[];
    penalidade: Penalidade[];
    tipoPonto: TipoPonto[];

    /**
     *
     */
    constructor(obj: any) {
        this.id = obj.id;
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.numMaxJogador = obj.numMaxJogador;
        this.numMinJogador = obj.numMinJogador;
        this.posicao = [];
        this.penalidade = [];
        this.tipoPonto = [];
    }
    /**
     * Adiciona uma lista de posições a uma modalidade.
     * @param lista lista contendo os ids das posições a serem adicionados.
     */
    AdicionarPosicao(lista: any[]) {
        lista.forEach(data => this.posicao.push(new Posicao({ id: data })));
    }
    /**
     * Adiciona uma lista de tipo de pontos a uma modalidade.
     * @param lista lista contendo os ids dos tipo de pontos a serem adicionados.
     */
    AdicionarTipoPonto(lista: any[]) {
        lista.forEach(data => this.tipoPonto.push(new TipoPonto({ id: data })));
    }
    /**
     * Adiciona uma lista de penalidades a uma modalidade.
     * @param lista lista contendo os ids das penalidades a serem adicionados.
     */
    AdicionarPenalidade(lista: any[]) {
        lista.forEach(data => this.penalidade.push(new Penalidade({ id: data })));
    }
}