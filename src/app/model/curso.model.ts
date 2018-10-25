import { Instituicao } from "./instituicao.model";

export class Curso {
    public id: number;
    public nome: string;
    public flg_ativo: boolean;
    public instituicao: Instituicao;

    /**
     * Construtor padrão do objeto curso.
     */
    constructor(obj: any) {
        this.id = obj.id;
        this.nome = obj.nome;
        this.flg_ativo = obj.flg_ativa == 1 ? true : false;
        this.instituicao = new Instituicao({ id: obj.instituicao });
    }
}