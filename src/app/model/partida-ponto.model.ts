import { TipoPonto } from './tipo-ponto.model';
import { Partida } from './partida.model';

export class PartidaPonto{
    public id: number;
    public partida: any;
    public tipoPonto: any;

    /**
     *
     */
    constructor(obj: any, idAluno?: number) {
       this.partida = {id: obj.idPartida};
       this.tipoPonto = new TipoPonto({id: obj.idPonto});
    }
}