import { EntidadeComum } from "./base/entidade-comum.model";

export class Instituicao extends EntidadeComum{
    public nome: string;
    public descricao: string;

    /**
     * Construto padrão do objeto instituição
     */
    constructor(obj: any) {
        super();
        this.nome = obj.nome;
        this.descricao = obj.descricao;
    }
}