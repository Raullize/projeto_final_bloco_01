import { Produto } from "./Produto"

export class Headset extends Produto {

    private _conectividade: string
    private _possuiRGB: boolean

    constructor(id: number, nome: string, preco: number, tipo: string, conectividade: string, possuiRGB: boolean) {
        super(id, nome, preco, tipo)
        this._conectividade = conectividade
        this._possuiRGB = possuiRGB
    }

    public get conectividade() {
        return this._conectividade
    }

    public set conectividade(conectividade: string) {
        this._conectividade = conectividade
    }

    public get possuiRGB() {
        return this._possuiRGB
    }

    public set possuiRGB(possuiRGB: boolean) {
        this._possuiRGB = possuiRGB
    }

    public override visualizar(): void {
        console.log("\n******************************************************")
        console.log("Dados do Headset:")
        console.log("******************************************************")
        console.log(`ID: ${this.id}`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Conectividade: ${this.conectividade}`)
        console.log(`Possui RGB: ${this.possuiRGB ? "Sim" : "Não"}`)
    }

}