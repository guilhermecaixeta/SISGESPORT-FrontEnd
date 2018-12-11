import { isNullOrUndefined } from 'util';
import { PartidaPonto } from './partida-ponto.model';
import { PartidaPenalidade } from './partida-penalidade.model';
import { Posicao } from './posicao.model';
import { Aluno } from './aluno.model';

export class Jogador {
    public id: number;
    public numCamisa: number;
    public jogador: Aluno;
    public time: any;
    public posicao: Posicao;
    public partidaPenalidade: PartidaPenalidade[];
    public partidaPonto: PartidaPonto[];

    /**
     *
     */
    constructor(obj: any) {
        this.id = +obj.id;
        this.numCamisa = obj.numCamisa;
        this.jogador = new Aluno({ id: obj.idAluno });
        this.posicao = new Posicao({ id: obj.id_posicao });
        if (obj.id_time) this.time = ({ id: obj.id_time });
        this.partidaPenalidade = [];
        this.partidaPonto = [];
    }

    adicionarPartidaPonto(lista: any[]) {
        if (!isNullOrUndefined(lista) && lista.length > 0)
            lista.forEach(x => this.partidaPonto.push(new PartidaPonto(x, this.id)));
    }

    adicionarPartidaPenalidade(lista: any[]) {
        if (!isNullOrUndefined(lista) && lista.length > 0)
            lista.forEach(x => this.partidaPenalidade.push(new PartidaPenalidade(x, this.id)));
    }
}