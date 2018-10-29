import { Pessoa } from "./base/pessoa.model";
import { Turma } from "./turma.model";

export class Aluno extends Pessoa {
    public turma: Turma;

    constructor(obj: any) {
        super(obj);
        this.turma = {
            id: obj.turma,
            curso: null,
            dataInicial: null,
            dataLimite: null,
            flgAtivo: null,
            nome: null
        };
    }
}