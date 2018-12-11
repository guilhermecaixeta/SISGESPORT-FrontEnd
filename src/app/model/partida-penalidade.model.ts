import { Jogador } from './jogador.model';
import { Partida } from './partida.model';
import { Penalidade } from './penalidade.model';

export class PartidaPenalidade{
    public id: number;
    // public jogador: Jogador;
    public partida: Partida;
    public penalidade: Penalidade;

    /**
     *
     */
    constructor(obj: any, idAluno?: number) {
    //    this.jogador = new Jogador({id: idAluno});
       this.partida = new Partida({id: obj.idPartida});
       this.penalidade = new Penalidade({id: obj.idPenalidade});
    }
}