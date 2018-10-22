export class InstituicaoCargo {
    public instituicao: number;
    public cargo: number;

    /**
     *
     */
    constructor(idCargo: number, idInstituicao: number) {
        this.instituicao = idInstituicao;
        this.cargo = idCargo;
    }
}