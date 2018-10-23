/**
 * Entidade de alerta do sistema.
 */
export class Alerta {

    private _id: number;
    private _type: string;
    private _message: string;

    /**
     *
     */
    constructor(id: number, type: string, message) {
        this.id = id;
        this.type = type;
        this.message = message;
    }
    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }

    public get type(): string {
        return this._type;
    }
    public set type(v: string) {
        this._type = v;
    }

    public get message(): string {
        return this._message;
    }
    public set message(v: string) {
        this._message = v;
    }

}