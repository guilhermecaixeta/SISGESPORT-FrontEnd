import { Servidor } from "./servidor.model";
import { EventoModalidade } from "./evento-modalidade.model";
import { EntidadeComum } from "./base/entidade-comum.model";

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
        this.dataInicio = `${obj.dataInicio.day}/${obj.dataInicio.month}/${obj.dataInicio.year} ${obj.horaInicio.hour}:${obj.horaInicio.minute}`;
        this.dataFim = `${obj.dataFim.day}/${obj.dataFim.month}/${obj.dataFim.year} ${obj.horaFim.hour}:${obj.horaFim.minute}`;
        this.dataInicioInscricao = `${obj.dataInicioInscricao.day}/${obj.dataInicioInscricao.month}/${obj.dataInicioInscricao.year} ${obj.horaInicioInscricao.hour}:${obj.horaInicioInscricao.minute}`;
        this.dataFimInscricao = `${obj.dataFimInscricao.day}/${obj.dataFimInscricao.month}/${obj.dataFimInscricao.year} ${obj.horaFimInscricao.hour}:${obj.horaFimInscricao.minute}`;
        this.dataCriacao = obj.dataCriacao ? `${obj.dataCriacao.day}/${obj.dataCriacao.month}/${obj.dataCriacao.year} 00:00` : null;

        this.eventoModalidade = [];
    }

    AdicionarListaEventoModalidade(lista: any[]) {
        lista.forEach(data => this.eventoModalidade.push(new EventoModalidade(data)));
    }
}