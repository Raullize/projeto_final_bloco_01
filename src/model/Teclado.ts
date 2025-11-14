import { Produto } from "./Produto"

export class Teclado extends Produto {

    private _formato: string
    private _tipoSwitch: string

    constructor(id: number, nome: string, preco: number, tipo: string, formato: string, tipoSwitch: string) {
        super(id, nome, preco, tipo)
        this._formato = formato
        this._tipoSwitch = tipoSwitch
    }

    public get formato() {
        return this._formato
    }

    public set formato(formato: string) {
        this._formato = formato
    }

    public get tipoSwitch() {
        return this._tipoSwitch
    }

    public set tipoSwitch(tipoSwitch: string) {
        this._tipoSwitch = tipoSwitch
    }

    public override visualizar(): void {
        console.log("\n******************************************************")
        console.log("Dados do Teclado:")
        console.log("******************************************************")
        console.log(`ID: ${this.id}`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Formato: ${this.formato}`)
        console.log(`Tipo Switch: ${this.tipoSwitch}`)
    }

}