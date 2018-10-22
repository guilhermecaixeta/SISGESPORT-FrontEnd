import { Pessoa } from "./base/pessoa.model";

export class Servidor extends Pessoa {
    public cargo: {
        id: number;
    };

    constructor(obj: any) {
        super(obj);
        this.cargo = {
            id: obj.cargo
        };
    }
}