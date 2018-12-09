import { EventoModalidade } from './evento-modalidade.model';
import { Pessoa } from './base/pessoa.model';
import { Time } from './time.model';
import { Evento } from './evento.model';
import { DateTimeConversor } from './base/date-time.model';

export class Partida extends DateTimeConversor {
    public id: number;
    public dataPartida: string;
    public duracaoPartida: number;
    public acrescimo: number;
    public juiz: Pessoa;
    public timeCasa: Time;
    public timeVisita: Time;
    public evento: Evento;
    public eventoModalidade: EventoModalidade;
    
    /**
     *
     */
    constructor(obj: any) {
        super();
        this.id = obj.id;
        this.dataPartida = this.ConverterDateParaString(obj, 'dataPartida', true, 'dataPartidaHorario');
        this.duracaoPartida = obj.duracaoPartida;
        this.acrescimo = obj.acrescimo;
        this.juiz = new Pessoa({ id: obj.juiz });
        this.timeCasa = new Time({ id: obj.timeCasa });
        this.timeVisita = new Time({ id: obj.timeVisita });
        this.evento = new Evento({ id: obj.evento });
        this.eventoModalidade = new EventoModalidade({ id: obj.modalidade });
    }
} 