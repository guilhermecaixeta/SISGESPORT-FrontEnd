import { Posicao } from './posicao.model';
import { Aluno } from './aluno.model';

export class Jogador {
    public id: number;
    public numCamisa: number;
    public jogador: Aluno;
    public posicao: Posicao;
    /**
     *
     */
    constructor(obj: any) {
        this.id = null;
        this.numCamisa = obj.numCamisa;
        this.jogador = new Aluno({ id: obj.id });
        this.posicao = new Posicao({ id: obj.id_posicao });
    }
}