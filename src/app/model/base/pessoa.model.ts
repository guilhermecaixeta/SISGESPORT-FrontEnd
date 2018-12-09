import { PerfilSistema } from './../../enum/sisgesport.enum';
import { EntidadeComum } from "./entidade-comum.model";
import { Instituicao } from '../instituicao.model';

export class Pessoa extends EntidadeComum {
    public nome: string;
    public sexo: string;
    public matricula: string;
    public senha: string;
    public email: string;
    public dataNascimento: string;
    public perfil: string;
    public instituicao: Instituicao;

    constructor(obj: any) {
        super();
        this.id = +obj.id;
        this.nome = obj.nome;
        this.sexo = obj.sexo;
        this.dataNascimento =  this.ConverterDateParaString(obj, 'dataNascimento');
        this.email = obj.email;
        this.matricula = obj.matricula;
        this.senha = obj.senha;
        this.perfil = PerfilSistema.ROLE_USER;
        this.instituicao = new Instituicao({id: obj.instituicao});
    }
}
