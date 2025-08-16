# 🛒 Projeto: Carrinho de Compras da Shopee

Este projeto simula o funcionamento de um carrinho de compras inspirado na Shopee, utilizando JavaScript moderno com módulos e funções assíncronas. Ele foi desenvolvido como parte dos estudos em desenvolvimento mobile, com foco em lógica de programação, manipulação de arrays e organização de código em módulos.

## 📦 Sobre o Projeto

O objetivo é criar um sistema simples de carrinho de compras que permita:

- Criar itens com nome, preço e quantidade
- Adicionar e remover itens do carrinho
- Calcular o valor total da compra
- Exibir os itens presentes no carrinho
- Deletar itens diretamente pelo nome

## 🚀 Funcionalidades

O carrinho é capaz de realizar as seguintes ações:

| Ação                    | Descrição                                                   |
| ----------------------- | ----------------------------------------------------------- |
| ✅ Adicionar item       | Insere um novo item no carrinho                             |
| ✅ Mostrar carrinho     | Lista todos os itens com nome, preço, quantidade e subtotal |
| ✅ Calcular valor total | Soma os subtotais de todos os itens e exibe o valor total   |
| ✅ Remover item         | Diminui a quantidade de um item ou remove se for o último   |
| ✅ Deletar item         | Remove completamente um item pelo nome                      |

## 🧩 Estrutura de Código

### `main.js`

Arquivo principal que simula o fluxo de uso do carrinho:

- Criação de itens
- Adição e remoção de itens
- Exibição do carrinho
- Cálculo do total

### `services/item.js`

Função `criarItem(nome, preco, quantidade)` que retorna um objeto com:

- `nome`
- `preco`
- `quantidade`
- `subtotal()` → calcula o total do item

### `services/carrinho.js`

Conjunto de funções para manipular o carrinho:

- `adicionarItem(carrinho, item)`
- `mostrarCarrinho(carrinho)`
- `calcularValorTotal(carrinho)`
- `removerItem(carrinho, item)`
- `deletarItem(carrinho, nome)`

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

- Modularização com `import`/`export`
- Uso de `async/await` para simular operações assíncronas
- Manipulação de arrays e objetos em JavaScript
- Lógica condicional para controle de quantidade e exclusão
- Organização de código em camadas de responsabilidade

## 🧠 Desafios Enfrentados

- Implementar lógica para remoção parcial de itens
- Garantir que as funções assíncronas fossem chamadas corretamente
- Simular um fluxo realista de compras com múltiplas operações

## 📁 Estrutura de Arquivos
