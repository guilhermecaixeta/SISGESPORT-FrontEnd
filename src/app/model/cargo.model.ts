import { Instituicao } from "./instituicao.model";

export class Cargo {
    public id: number;
    public nome: string;
    public descricao: string;
    public instituicao: Instituicao[];
    /**
     *
     */
    constructor(obj: any) {
        this.id = obj.id;
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.instituicao = [];
    }

    /**
     * Vincula os cargo a instituição
     * @param lista Lista contendo os ids das instituições a serem vinculadas ao cargo.
     */
    adicionarInstituicao(lista: number[]) {
        lista.forEach(x => this.instituicao.push(new Instituicao({ id: x })));
    }
}
