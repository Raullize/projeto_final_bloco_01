import { Produto } from "../model/Produto"
import { ProdutoRepository } from "../repository/ProdutoRepository"
import { colors } from "../util/Colors"

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>()
    numero: number = 0

    // Métodos do CRUD
    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id)
        
        if (buscaProduto != null) {
            buscaProduto.visualizar()
        } else {
            console.log(colors.fg.red, "\nProduto com ID " + id + " não foi encontrado!", colors.reset)
        }
    }

    listarTodos(): void {
        if (this.listaProdutos.length === 0) {
            console.log(colors.fg.yellow, "\nNão há produtos cadastrados!", colors.reset)
            return
        }
        
        for (let produto of this.listaProdutos) {
            produto.visualizar()
        }
    }

    cadastrar(produto: Produto): void {
        if (produto.preco <= 0) {
            throw new Error("Preço do produto deve ser maior que 0")
        }
        this.listaProdutos.push(produto)
        console.log(colors.fg.green, "\nProduto \"" + produto.nome + "\" foi cadastrado com sucesso!", colors.reset)
    }

    atualizar(produto: Produto): void {
        if (produto.preco <= 0) {
            throw new Error("Preço do produto deve ser maior que 0")
        }
        let buscaProduto = this.buscarNoArray(produto.id)

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto
            console.log(colors.fg.green, "\nProduto \"" + produto.nome + "\" foi atualizado com sucesso!", colors.reset)
        } else {
            console.log(colors.fg.red, "\nProduto com ID " + produto.id + " não foi encontrado!", colors.reset)
        }
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id)
        
        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
            console.log(colors.fg.green, "\nProduto com ID " + id + " foi deletado com sucesso!", colors.reset)
        } else {
            console.log(colors.fg.red, "\nProduto com ID " + id + " não foi encontrado!", colors.reset)
        }
    }

    // Métodos auxiliares
    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                return produto
            }
        }
        return null
    }

    public gerarId(): number {
        return ++this.numero
    }

}