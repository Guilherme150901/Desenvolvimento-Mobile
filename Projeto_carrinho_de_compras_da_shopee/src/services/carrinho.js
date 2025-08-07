//quais ações meu carrinho pode fazer:

//1- adicionar um item no carrinho ✅
async function adicionarItem(userCarrinho, item) {
  userCarrinho.push(item);
}

//2- mostrar o que tem dentro do carrinho ✅
async function mostrarCarrinho(userCarrinho) {
  console.log("\nLista de carrinho:");
  userCarrinho.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.nome} - R$ ${item.preco} | ${
        item.quantidade
      }x | subtotal ${item.subtotal()}`
    );
  });
}

//3- calcular o total ✅
async function calcularValorTotal(userCarrinho) {
  const resultado = userCarrinho.reduce(
    (total, item) => total + Number(item.subtotal()),
    0
  );

  console.log(`\nVALOR TOTAL DO CARRINHO É R$: ${resultado.toFixed(2)}`);
}

//4- remover um item - diminuir um item ✅
async function removerItem(userCarrinho, item) {
  //4.1- encontrar o indice(index) do item
  const indexFound = userCarrinho.findIndex((p) => p.nome === item.nome);

  //4.2- caso não encontre o item
  if (indexFound == -1) {
    console.log("Item não encontrado!");
    return;
  }

  //4.3- (item > 1) subtrair um item
  if (userCarrinho[indexFound].quantidade > 1) {
    userCarrinho[indexFound].quantidade -= 1;
  } else {
    // 4.4 - se a quantidade for igual a 1, remove o item do array
    userCarrinho.splice(indexFound, 1);
  }
}

//5- deletar item do carrinho ✅
async function deletarItem(userCarrinho, nome) {
  const index = userCarrinho.findIndex((item) => item.nome === nome);

  if (index !== -1) {
    userCarrinho.splice(index, 1);
  }
}
//6- exportar funções ✅
export {
  adicionarItem,
  calcularValorTotal,
  deletarItem,
  removerQuantidadeItem,
  mostrarCarrinho,
  removerItem,
};

