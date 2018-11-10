import { Endereco } from "../endereco.model";
import { Imagem } from "../imagem.model";
import { DateTimeConversor } from "./date-time.model";

export class EntidadeComum extends DateTimeConversor {
    public id: number;
    public endereco: Endereco[];
    public imagem: Imagem[];

    constructor() {
        super();
        this.endereco = [];
        this.imagem = [];
    }

    public adicionarEndereco(form: any) {

        this.endereco.push({
            id: form.id,
            bairro: form.bairro,
            cep: form.cep,
            complemento: form.complemento,
            logradouro: form.logradouro,
            municipio: {
                id: form.municipio,
                estado: null,
                nome: null
            }
        });
    }
}