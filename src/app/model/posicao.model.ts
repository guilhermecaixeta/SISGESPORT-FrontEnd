export class Posicao {
    id: number;
    nome: string;
    descricao: string;
    numMaxJogador: number;
    numMinJogador: number;

    /**
     *
     */
    constructor(obj: any) {
        this.id = obj.id;
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.numMaxJogador = obj.numMaxJogador;
        this.numMinJogador = obj.numMinJogador;
    }
}