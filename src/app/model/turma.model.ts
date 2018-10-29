import { Curso } from "./curso.model";

export class Turma {
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
        this.id = obj.id;
        this.nome = obj.nome;
        this.curso = new Curso({ id: obj.curso });
        this.flgAtivo = obj.flgAtivo;
        this.dataLimite = `${obj.dataLimite.day}/${obj.dataLimite.month}/${obj.dataLimite.year}`;
        this.dataInicial = `${obj.dataInicial.day}/${obj.dataInicial.month}/${obj.dataInicial.year}`;
    }
}