export class Penalidade {
    public id: number;
    public nome: string;
    public descricao: string;

    /**
     *
     */
    constructor(obj: any) {
        this.id = +obj.id,
        this.nome = obj.nome;
        this.descricao = obj.descricao;
    }
}