# Fallen Store - Sistema de Gerenciamento de Produtos

Sistema de gerenciamento de produtos para e-commerce inspirado na temática da Fallen Store, desenvolvido em TypeScript com aplicação de conceitos de Programação Orientada a Objetos.

## 📋 Atividade: Construção de um Sistema de Gerenciamento de Produtos para E-commerce

### Instruções da Atividade

Nesta atividade, você irá construir um sistema de gerenciamento de produtos para um e-commerce, aplicando os conceitos aprendidos durante o módulo, como: Programação Orientada a Objetos, Collections, Exceptions, CRUD, entre outros.

### Exercícios

1. **Criação do Menu de Opções**
2. **Construção das Classes Model e Interface Repository**
3. **Construção da Classe Controller e Métodos do CRUD**

### Objetivos de Aprendizagem

- Aplicar os conceitos de Programação Orientada a Objetos
- Utilizar Collections para armazenamento de dados
- Implementar tratamento de Exceptions
- Desenvolver operações CRUD (Create, Read, Update, Delete)
- Trabalhar com versionamento de código utilizando Git e GitHub

### Requisitos da Atividade

- Desenvolver o projeto utilizando a linguagem TypeScript
- Utilizar o conceito de Classes Abstratas
- Implementar Herança entre Classes
- Aplicar Polimorfismo e Sobrescrita de Métodos
- Utilizar Modificadores de Acesso
- Implementar uma Interface
- Utilizar Collections para armazenar os dados
- Implementar tratamento de Exceptions
- Desenvolver todas as operações do CRUD
- Versionar o código com Git e GitHub
- Desenvolver um menu interativo no terminal

### 🚀 Tecnologias Utilizadas

- TypeScript
- Node.js
- readline-sync (para entrada de dados no terminal)
- Git e GitHub

## 📁 Estrutura do Projeto

```
projeto_final_bloco_01/
├── src/
│   ├── model/
│   │   ├── Produto.ts          # Classe abstrata base
│   │   ├── Headset.ts          # Classe concreta para headsets
│   │   └── Teclado.ts          # Classe concreta para teclados
│   ├── repository/
│   │   └── ProdutoRepository.ts # Interface para operações CRUD
│   └── controller/
│       └── ProdutoController.ts # Implementação do CRUD
├── Menu.ts                     # Menu principal da aplicação
├── package.json
├── tsconfig.json
└── README.md
```

## 📋 Etapas de Desenvolvimento

### Primeira Etapa — Criação do Menu de Opções

Desenvolva um menu interativo no terminal, utilizando os seguintes conteúdos:
- Estruturas de repetição
- Estruturas condicionais
- Operadores lógicos e relacionais
- Entrada e saída de dados

**Opções do Menu:**
- Cadastrar Produto
- Listar todos os Produtos
- Buscar Produto por ID
- Atualizar dados do Produto
- Apagar Produto
- Sair

### Segunda Etapa — Construção das Classes Model e Interface Repository

Crie uma nova Branch, chamada Model_Repository

Desenvolva as Classes Principal e Estendida (Model), e a Interface Repository, utilizando os seguintes conteúdos:
- Métodos e Modificadores de acesso
- Classes, Atributos e Objetos
- Polimorfismo, Herança e Sobrecarga
- Classes Abstratas e Interfaces

**Teste sua aplicação** (Você estará sendo avaliado sobre os conceitos de Programação Orientada a Objetos).

Atualize a Branch Model_Repository do Github com o conteúdo desenvolvido até aqui.

**Tempo estimado para conclusão da Branch Model_Repository: 60 minutos**

### Terceira Etapa — Construção da Classe Controller e Métodos do CRUD

Crie uma nova Branch, chamada Controller

Desenvolva a Classe Controller do seu projeto, utilizando os seguintes conteúdos:
- Collections
- Exceptions

**Teste sua aplicação** (você estará sendo avaliado sobre os conceitos de Collections e Exceptions).

Atualize a Branch Controller do Github com o conteúdo desenvolvido até aqui.

**Tempo estimado para conclusão da Branch Controller: 60 minutos**

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm
- Git

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd projeto_final_bloco_01
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute a aplicação**
   ```bash
   npx ts-node Menu.ts
   ```

## 📫 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 👥 Desenvolvido por

Projeto desenvolvido como atividade do bootcamp Generation Brasil.

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Raullize" title="Perfil no GitHub">
        <img src="https://github.com/Raullize.png" width="100px;" alt="Foto do Raul Lize Teixeira no GitHub"/><br>
        <sub>
          <b>Raul Lize Teixeira</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.