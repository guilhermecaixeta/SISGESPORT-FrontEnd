import { InstituicaoCargo } from "./institucao-cargo.model";

export class Cargo {
    public id: number;
    public nome: string;
    public descricao: string;
    public instituicao_cargo: InstituicaoCargo[];
    /**
     *
     */
    constructor(obj: any) {
        this.id = obj.id;
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.instituicao_cargo = [];
    }

    /**
     * Vincula os cargo a instituição
     * @param lista Lista contendo os ids das instituições a serem vinculadas
     */
    adicionarInstituicao(lista: number[]) {
        lista.forEach(x => this.instituicao_cargo.push(new InstituicaoCargo(this.id, x)));
    }
}