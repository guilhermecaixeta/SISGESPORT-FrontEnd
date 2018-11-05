import { Modalidade } from "./modalidade.model";

export class EventoModalidade {
    public modalidade: Modalidade;
    public sexo: string;
    public idadeMaximaPermitida: number;

    /**
     *
     */
    constructor(obj: any) {
        this.modalidade = new Modalidade({ id: obj.modalidade });
        this.sexo = obj.sexo;
        this.idadeMaximaPermitida = obj.idadeMaximaPermitida;
    }
}