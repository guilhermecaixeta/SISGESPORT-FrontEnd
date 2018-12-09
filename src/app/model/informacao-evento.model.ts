import { Evento } from "./evento.model";

export class InformacaoEvento{
    public id: number;
    public tipoInformacao: string;
    public titulo: string;
    public descricao: string;
    public evento:  Evento;
    /**
     *
     */
    constructor(obj: any) {
        this.id = obj.id;
        this.tipoInformacao = obj.tipoInformacao;
        this.titulo = obj.titulo;
        this.descricao = obj.descricao;
        this.evento = new Evento({id: obj.evento});
    }
}