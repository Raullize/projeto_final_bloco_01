export abstract class Produto {

    private _id: number
    private _nome: string
    private _preco: number
    private _tipo: string

    constructor(id: number, nome: string, preco: number, tipo: string) {
        this._id = id
        this._nome = nome
        this._preco = preco
        this._tipo = tipo
    }

    public get id() {
        return this._id
    }

    public set id(id: number) {
        this._id = id
    }

    public get nome() {
        return this._nome
    }

    public set nome(nome: string) {
        this._nome = nome
    }

    public get preco() {
        return this._preco
    }

    public set preco(preco: number) {
        this._preco = preco
    }

    public get tipo() {
        return this._tipo
    }

    public set tipo(tipo: string) {
        this._tipo = tipo
    }

    public abstract visualizar(): void

}