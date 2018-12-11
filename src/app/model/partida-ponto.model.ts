import { TipoPonto } from './tipo-ponto.model';
import { Partida } from './partida.model';

export class PartidaPonto{
    public id: number;
    public partida: Partida;
    public tipoPonto: TipoPonto;

    /**
     *
     */
    constructor(obj: any, idAluno?: number) {
       this.partida = new Partida({id: obj.idPartida});
       this.tipoPonto = new TipoPonto({id: obj.idPonto});
    }
}