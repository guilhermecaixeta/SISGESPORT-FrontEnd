import { Posicao } from './posicao.model';
import { Aluno } from './aluno.model';
import { Time } from './time.model';

export class Jogador {
    public id: number;
    public numCamisa: number;
    public jogador: Aluno;
    public time: any;
    public posicao: Posicao;
    /**
     *
     */
    constructor(obj: any) {
        this.id = null;
        this.numCamisa = obj.numCamisa;
        this.jogador = new Aluno({ id: obj.id });
        this.posicao = new Posicao({ id: obj.id_posicao });
        if (obj.id_time) this.time = ({ id: obj.id_time });
    }
}