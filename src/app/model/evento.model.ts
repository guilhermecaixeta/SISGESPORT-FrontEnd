import { Servidor } from "./servidor.model";
import { EventoModalidade } from "./evento-modalidade.model";
import { EntidadeComum } from "./base/entidade-comum.model";
import { isNullOrUndefined } from "util";

export class Evento extends EntidadeComum {
    public id: number;
    public qntEquipes: number;
    public codigoEvento: string;
    public nome: string;
    public descricao: string;
    public dataInicioInscricao: string;
    public dataFimInscricao: string;
    public dataCriacao: string;
    public dataInicio: string;
    public dataFim: string;
    public criador: Servidor;

    public eventoModalidade: EventoModalidade[];

    /**
     *
     */
    constructor(obj: any) {
        super();
        this.id = obj.id;
        this.qntEquipes = obj.qntEquipes;
        this.codigoEvento = obj.codigoEvento;
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.dataInicio = this.ConverterDateParaString(obj, 'dataInicio', true, 'horaInicio');
        this.dataFim = this.ConverterDateParaString(obj, 'dataFim', true, 'horaFim');
        this.dataInicioInscricao = this.ConverterDateParaString(obj, 'dataInicioInscricao', true, 'horaInicioInscricao');
        this.dataFimInscricao = this.ConverterDateParaString(obj, 'dataFimInscricao', true, 'horaFimInscricao');
        this.dataCriacao = isNullOrUndefined(obj.dataCriacao) ? '' : `${obj.dataCriacao} 00:00`;
        this.eventoModalidade = [];
        if (obj.idCriador) this.criador = new Servidor({ id: obj.idCriador });

    }

    AdicionarListaEventoModalidade(lista: any[]) {
        lista.forEach(data => this.eventoModalidade.push(new EventoModalidade(data)));
    }
}