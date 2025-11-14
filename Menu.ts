import readlinesync = require("readline-sync")
import { colors } from './src/util/Colors'
import { Headset } from './src/model/Headset'
import { Teclado } from './src/model/Teclado'

export function main() {

    // Variaveis Auxiliares
    let opcao: number

    // Produtos mockados para teste
    const morcegoPro = new Headset(1, "Morcego Pro Wireless", 499.90, "Headset Gamer", "Wireless", true)
    const panteraPro = new Teclado(2, "Pantera Pro TKL", 349.90, "Teclado Mecânico", "TKL", "Red Switch")
    const morcegoV2 = new Headset(3, "Morcego V2", 299.90, "Headset Gamer", "Com Fio", true)
    const panteraEco = new Teclado(4, "Pantera Eco Light", 199.90, "Teclado Membrana", "100%", "Membrana")

    // Exibir produtos mockados
    morcegoPro.visualizar()
    panteraPro.visualizar()
    morcegoV2.visualizar()
    panteraEco.visualizar()

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
                
                keyPress()
                break
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset)

                keyPress()
                break
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar Produto por ID\n\n", colors.reset)

                keyPress()
                break
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset)

                keyPress()
                break
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar Produto\n\n", colors.reset)

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