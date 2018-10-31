export class TipoPonto {
    public id: number;
    public nome: string;
    public valor: number;

    /**
     *
     */
    constructor(obj: any) {
        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = obj.valor;
    }
}