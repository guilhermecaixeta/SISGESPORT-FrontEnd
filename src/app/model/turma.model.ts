import { Curso } from "./curso.model";
import { DateTimeConversor } from "./base/date-time.model";

export class Turma extends DateTimeConversor {
    public id: number;
    public nome: string;
    public curso: Curso;
    public flgAtivo: boolean;
    public dataLimite: string;
    public dataInicial: string;

    /**
     *
     */
    constructor(obj: any) {
        super();
        this.id = obj.id;
        this.nome = obj.nome;
        this.curso = new Curso({ id: obj.curso });
        this.flgAtivo = obj.flgAtivo;
        this.dataLimite = this.ConverterDateParaString(obj, 'dataLimite');
        this.dataInicial = this.ConverterDateParaString(obj, 'dataInicial');
    }
}
