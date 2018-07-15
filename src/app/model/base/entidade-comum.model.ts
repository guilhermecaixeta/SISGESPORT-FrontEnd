import { Endereco } from "../endereco.model";
import { Imagem } from "../imagem.model";

export class EntidadeComum{
    public id: number;
    public endereco: Endereco[];
    public imagem: Imagem[];
    
    constructor(){
        this.endereco = [];
        this.imagem = [];
    }

    public adicionarEndereco(form: any){

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