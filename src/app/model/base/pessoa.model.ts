import { EntidadeComum } from "./entidade-comum.model";

export class Pessoa extends EntidadeComum {
    public nome: string;
    public sexo: string;
    public matricula: string;
    public senha: string;
    public email: string;
    public dataNascimento: string;
    public perfil: string;

    constructor(obj: any) {
        super();
        this.id = obj.id;
        this.nome = obj.nome;
        this.sexo = obj.sexo;
        this.dataNascimento = `${obj.dataNascimento.day}/${obj.dataNascimento.month}/${obj.dataNascimento.year} 00:00`;
        this.email = obj.email;
        this.matricula = obj.matricula;
        this.senha = obj.senha;
        this.perfil = "ROLE_USUARIO";
    }
}
