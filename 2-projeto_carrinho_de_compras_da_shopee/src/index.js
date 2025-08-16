import criarItem from "./services/item.js";
import * as serviceCarrinho from "./services/carrinho.js";

const meuCarrinho = [];

async function main() {
  console.log("Bem vindo ao seu carrinho da Shopee!");

  const item1 = await criarItem("Processador Ryzen 7", 999.99, 2);
  const item2 = await criarItem("Memória RAM 8GB", 109.99, 3);
  const item3 = await criarItem("fonte 750w", 350.0, 1);
  const item4 = await criarItem("placa de vídeo rx6600", 1250.0, 1);

  await serviceCarrinho.adicionarItem(meuCarrinho, item1);
  await serviceCarrinho.adicionarItem(meuCarrinho, item2);
  await serviceCarrinho.adicionarItem(meuCarrinho, item3);
  await serviceCarrinho.adicionarItem(meuCarrinho, item4);

  //await serviceCarrinho.deletarItem(meuCarrinho, item1.nome); - exclui item
  await serviceCarrinho.removerItem(meuCarrinho, item2);

  await serviceCarrinho.mostrarCarrinho(meuCarrinho);
  await serviceCarrinho.calcularValorTotal(meuCarrinho);
}

main();
