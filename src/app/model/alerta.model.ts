/**
 * Entidade de alerta do sistema.
 */
export class Alerta {

    public id: number;
    public type: string;
    public message: string;

    /**
     *
     */
    constructor(id: number, type: string, message) {
        this.id = id;
        this.type = type;
        this.message = message;
    }
}