import readlinesync = require("readline-sync")
import { colors } from './src/util/Colors'
import { Headset } from './src/model/Headset'
import { Teclado } from './src/model/Teclado'
import { ProdutoController } from './src/controller/ProdutoController'

export function main() {

    // Variaveis Auxiliares
    let opcao: number

    // Instância do Controller para gerenciar os produtos
    const controller = new ProdutoController()
    
    // Produtos mockados
    const morcegoPro = new Headset(1, "Morcego Pro Wireless", 499.90, "Headset Gamer", "Wireless", true)
    const panteraPro = new Teclado(2, "Pantera Pro TKL", 349.90, "Teclado Mecânico", "TKL", "Red Switch")
    const morcegoV2 = new Headset(3, "Morcego V2", 299.90, "Headset Gamer", "Com Fio", true)
    const panteraEco = new Teclado(4, "Pantera Eco Light", 199.90, "Teclado Membrana", "100%", "Membrana")
    
    controller.cadastrar(morcegoPro)
    controller.cadastrar(panteraPro)
    controller.cadastrar(morcegoV2)
    controller.cadastrar(panteraEco)

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************")
        console.log("                                                     ")
        console.log("                    Fallen Store                     ")
        console.log("                                                     ")
        console.log("*****************************************************")
        console.log("                                                     ")
        console.log("            1 - Cadastrar Produto                    ")
        console.log("            2 - Listar todos os Produtos             ")
        console.log("            3 - Buscar Produto por ID                ")
        console.log("            4 - Atualizar dados do Produto           ")
        console.log("            5 - Apagar Produto                       ")
        console.log("            0 - Sair                                 ")
        console.log("                                                     ")
        console.log("*****************************************************"
            + colors.reset)

        console.log("Entre com a opção desejada: ")
        opcao = readlinesync.questionInt("")

        if (opcao == 0) {
            console.log(colors.fg.bluestrong,
                "\nFallen Store - Encontre seu periférico ideal aqui!")
            sobre()
            console.log(colors.reset, "")
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCadastrar Produto\n\n", colors.reset)
                
                console.log("Digite o tipo de produto (1-Headset, 2-Teclado):")
                let tipoProduto = readlinesync.questionInt("")
                
                console.log("Digite o nome do produto:")
                let nome = readlinesync.question("")
                
                console.log("Digite o preço do produto:")
                let preco = readlinesync.questionFloat("")
                
                let id = controller.gerarId()
                
                if (tipoProduto == 1) {
                    console.log("Digite a conectividade (Wireless/Com Fio):")
                    let conectividade = readlinesync.question("")
                    
                    console.log("Possui RGB? (s/n):")
                    let possuiRGB = readlinesync.question("").toLowerCase() === 's'
                    
                    let headset = new Headset(id, nome, preco, "Headset Gamer", conectividade, possuiRGB)
                    controller.cadastrar(headset)
                    
                } else if (tipoProduto == 2) {
                    console.log("Digite o formato (TKL/100%):")
                    let formato = readlinesync.question("")
                    
                    console.log("Digite o tipo de switch (Red/Blue/Brown):")
                    let tipoSwitch = readlinesync.question("")
                    
                    let teclado = new Teclado(id, nome, preco, "Teclado Mecânico", formato, tipoSwitch)
                    controller.cadastrar(teclado)
                    
                } else {
                    console.log(colors.fg.red, "Tipo de produto inválido!", colors.reset)
                }
                
                keyPress()
                break
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset)

                controller.listarTodos()
                keyPress()
                break
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar Produto por ID\n\n", colors.reset)

                console.log("Digite o ID do produto:")
                let idBusca = readlinesync.questionInt("")
                controller.procurarPorId(idBusca)
                
                keyPress()
                break
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset)

                console.log("Digite o ID do produto que deseja atualizar:")
                let idAtualizar = readlinesync.questionInt("")
                
                let produtoExistente = controller.buscarNoArray(idAtualizar)
                
                if (produtoExistente != null) {
                    console.log("Produto encontrado:")
                    produtoExistente.visualizar()
                    
                    console.log("\nDigite o novo nome do produto:")
                    let novoNome = readlinesync.question("")
                    
                    console.log("Digite o novo preço do produto:")
                    let novoPreco = readlinesync.questionFloat("")
                    
                    produtoExistente.nome = novoNome
                    produtoExistente.preco = novoPreco
                    
                    if (produtoExistente instanceof Headset) {
                        console.log("Digite a nova conectividade (Wireless/Com Fio):")
                        let novaConectividade = readlinesync.question("")
                        
                        console.log("Possui RGB? (s/n):")
                        let novoRGB = readlinesync.question("").toLowerCase() === 's'
                        
                        produtoExistente.conectividade = novaConectividade
                        produtoExistente.possuiRGB = novoRGB
                        
                    } else if (produtoExistente instanceof Teclado) {
                        console.log("Digite o novo formato (TKL/100%):")
                        let novoFormato = readlinesync.question("")
                        
                        console.log("Digite o novo tipo de switch (Red/Blue/Brown):")
                        let novoSwitch = readlinesync.question("")
                        
                        produtoExistente.formato = novoFormato
                        produtoExistente.tipoSwitch = novoSwitch
                    }
                    
                    controller.atualizar(produtoExistente)
                    
                } else {
                    console.log(colors.fg.red, "Produto não encontrado!", colors.reset)
                }
                
                keyPress()
                break
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar Produto\n\n", colors.reset)

                console.log("Digite o ID do produto que deseja apagar:")
                let idApagar = readlinesync.questionInt("")
                
                controller.deletar(idApagar)
                
                keyPress()
                break
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset)

                keyPress()
                break
        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************")
    console.log("Projeto Desenvolvido por: ")
    console.log("Generation Brasil - Raul Lize Teixeira")
    console.log("github.com/Raullize")
    console.log("*****************************************************")
}

function keyPress(): void {
    console.log(colors.reset, "")
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt()
}

main()