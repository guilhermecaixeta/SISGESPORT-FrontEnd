import { Jogador } from './jogador.model';
export class Time {
    public id: number;
    public numVitoria: number;
    public numDerrota: number;
    public numEmpate: number;
    public pontuacao: number;
    public jogador: Jogador[];
    /**
     *
     */
    constructor(obj: any) {
        this.id = obj.id;
        this.numDerrota = obj.numDerrota;
        this.numEmpate = obj.numEmpate;
        this.numVitoria = obj.numVitoria;
        this.pontuacao = obj.pontuacao;
        this.jogador = [];
    }

    public AdicionarListaJogador(lista: any[]) {
        lista.forEach(x => this.jogador.push(new Jogador(x)));
    }
}