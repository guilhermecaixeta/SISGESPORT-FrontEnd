import { Aluno } from "./aluno.model";

export class Equipe {
    public id: number;
    public nome: string;
    public codigoEquipe: string;
    public cor: string;
    public capitao: Aluno;
    public aluno: Aluno[];
    /**
     *
     */
    constructor(obj: any) {
        this.id = obj.id;
        this.nome = obj.nome;
        this.codigoEquipe = obj.codigoEquipe;
        this.cor = obj.cor;
        this.capitao = new Aluno({ id: obj.idCapitao });
        this.aluno = [];
    }

    AdicionarListaAluno(lista: any[]) {
        lista.forEach(aluno => this.aluno.push(new Aluno({ id: +aluno.id })));
    }


}