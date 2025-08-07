//CASOS DE USO DOS ITENS

//1- criar item com subtotal certo
async function criarItem(nome, preco, quantidade) {
  return {
    nome,
    preco,
    quantidade,
    subtotal: () => (preco * quantidade).toFixed(2),
  };
}

export default criarItem;
