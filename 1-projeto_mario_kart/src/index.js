const readline = require("readline");

const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};
const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};
const player3 = {
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};
const player4 = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};
const player5 = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};
const player6 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const listaPersonagens = [player1, player2, player3, player4, player5, player6];

function escolherPersonagem() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log("🎮 Escolha seu personagem:");
    listaPersonagens.forEach((personagem, index) =>
      console.log(`${index + 1}. ${personagem.NOME}`)
    );

    rl.question("Digite o nome do jogador: ", async (nomeDigitado) => {
      const personagemEscolhido = listaPersonagens.find(
        (jogador) => jogador.NOME.toLowerCase() === nomeDigitado.toLowerCase()
      );

      rl.close();

      if (personagemEscolhido) {
        resolve(personagemEscolhido);
      } else {
        console.log("⚠️ Nome inválido. Tente novamente.\n");
        const novoPersonagem = await escolherPersonagem();
        resolve(novoPersonagem);
      }
    });
  });
}

function escolherAdversario(personagemSelecionado) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const listaAdversarios = listaPersonagens.filter(
      (p) => p.NOME !== personagemSelecionado.NOME
    );

    rl.question(
      "Você quer escolher o adversário (digite 'sim') ou sortear ('nao')? ",
      async (resposta) => {
        rl.close();

        if (resposta.toLowerCase() === "sim") {
          const rl2 = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });

          console.log("⚔️ Escolha seu adversário:");
          listaAdversarios.forEach((personagem, index) =>
            console.log(`${index + 1}. ${personagem.NOME}`)
          );

          rl2.question(
            "Digite o nome do adversário: ",
            async (nomeDigitado) => {
              const adversarioEscolhido = listaAdversarios.find(
                (p) => p.NOME.toLowerCase() === nomeDigitado.toLowerCase()
              );

              rl2.close();

              if (adversarioEscolhido) {
                resolve(adversarioEscolhido);
              } else {
                console.log("⚠️ Nome inválido. Tente novamente.\n");
                const novoAdversario = await escolherAdversario(
                  personagemSelecionado
                );
                resolve(novoAdversario);
              }
            }
          );
        } else {
          const adversarioAleatorio =
            listaAdversarios[
              Math.floor(Math.random() * listaAdversarios.length)
            ];
          resolve(adversarioAleatorio);
        }
      }
    );
  });
}

async function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

async function sortearBlocoAleatorio() {
  const numeroAleatorio = Math.random();
  if (numeroAleatorio < 0.33) return "RETA";
  if (numeroAleatorio < 0.66) return "CURVA";
  return "CONFRONTO";
}

async function exibirResultado(
  nome,
  tipoAtributo,
  resultadoDado,
  valorAtributo
) {
  console.log(
    `${nome} 🎲 rolou para ${tipoAtributo}: ${resultadoDado} + ${valorAtributo} = ${
      resultadoDado + valorAtributo
    }`
  );
}

async function executarCorrida(personagem1, personagem2) {
  for (let rodada = 1; rodada <= 5; rodada++) {
    console.log(`\n🏁 Rodada ${rodada}`);
    const tipoBloco = await sortearBlocoAleatorio();
    console.log(`🧱 Bloco sorteado: ${tipoBloco}`);

    const resultadoDadoPersonagem1 = await rolarDado();
    const resultadoDadoPersonagem2 = await rolarDado();

    let totalTestePersonagem1 = 0;
    let totalTestePersonagem2 = 0;

    if (tipoBloco === "RETA") {
      totalTestePersonagem1 = resultadoDadoPersonagem1 + personagem1.VELOCIDADE;
      totalTestePersonagem2 = resultadoDadoPersonagem2 + personagem2.VELOCIDADE;
      await exibirResultado(
        personagem1.NOME,
        "velocidade",
        resultadoDadoPersonagem1,
        personagem1.VELOCIDADE
      );
      await exibirResultado(
        personagem2.NOME,
        "velocidade",
        resultadoDadoPersonagem2,
        personagem2.VELOCIDADE
      );
    }

    if (tipoBloco === "CURVA") {
      totalTestePersonagem1 =
        resultadoDadoPersonagem1 + personagem1.MANOBRABILIDADE;
      totalTestePersonagem2 =
        resultadoDadoPersonagem2 + personagem2.MANOBRABILIDADE;
      await exibirResultado(
        personagem1.NOME,
        "manobrabilidade",
        resultadoDadoPersonagem1,
        personagem1.MANOBRABILIDADE
      );
      await exibirResultado(
        personagem2.NOME,
        "manobrabilidade",
        resultadoDadoPersonagem2,
        personagem2.MANOBRABILIDADE
      );
    }

    if (tipoBloco === "CONFRONTO") {
      const resultadoPoderPersonagem1 =
        resultadoDadoPersonagem1 + personagem1.PODER;
      const resultadoPoderPersonagem2 =
        resultadoDadoPersonagem2 + personagem2.PODER;

      console.log(`${personagem1.NOME} confrontou com ${personagem2.NOME}! 🥊`);
      await exibirResultado(
        personagem1.NOME,
        "poder",
        resultadoDadoPersonagem1,
        personagem1.PODER
      );
      await exibirResultado(
        personagem2.NOME,
        "poder",
        resultadoDadoPersonagem2,
        personagem2.PODER
      );

      if (
        resultadoPoderPersonagem1 > resultadoPoderPersonagem2 &&
        personagem2.PONTOS > 0
      ) {
        personagem2.PONTOS--;
        console.log(
          `${personagem1.NOME} venceu o confronto! ${personagem2.NOME} perdeu 1 ponto ❌`
        );
      } else if (
        resultadoPoderPersonagem2 > resultadoPoderPersonagem1 &&
        personagem1.PONTOS > 0
      ) {
        personagem1.PONTOS--;
        console.log(
          `${personagem2.NOME} venceu o confronto! ${personagem1.NOME} perdeu 1 ponto ❌`
        );
      } else {
        console.log("Confronto empatado! Nenhum ponto foi perdido.");
      }
    }

    if (totalTestePersonagem1 > totalTestePersonagem2) {
      personagem1.PONTOS++;
      console.log(`${personagem1.NOME} marcou 1 ponto 🏁`);
    } else if (totalTestePersonagem2 > totalTestePersonagem1) {
      personagem2.PONTOS++;
      console.log(`${personagem2.NOME} marcou 1 ponto 🏁`);
    } else {
      console.log("Rodada empatada! Ninguém pontuou.");
    }

    console.log("-------------------------------------------------");
  }
}

async function declararVencedor(personagem1, personagem2) {
  console.log("\n📊 Resultado final:");
  console.log(`${personagem1.NOME}: ${personagem1.PONTOS} ponto(s)`);
  console.log(`${personagem2.NOME}: ${personagem2.PONTOS} ponto(s)`);

  if (personagem1.PONTOS > personagem2.PONTOS) {
    console.log(`🏆 ${personagem1.NOME} venceu a corrida!`);
  } else if (personagem2.PONTOS > personagem1.PONTOS) {
    console.log(`🏆 ${personagem2.NOME} venceu a corrida!`);
  } else {
    console.log("🟰 A corrida terminou em empate!");
  }
}

(async function main() {
  const personagemSelecionado = await escolherPersonagem();
  const adversarioSelecionado = await escolherAdversario(personagemSelecionado);

  console.log(
    `\n🚗💨 Corrida entre ${personagemSelecionado.NOME} e ${adversarioSelecionado.NOME} começando...\n`
  );

  await executarCorrida(personagemSelecionado, adversarioSelecionado);
  await declararVencedor(personagemSelecionado, adversarioSelecionado);
})();
