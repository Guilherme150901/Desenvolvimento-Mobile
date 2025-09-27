import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow.bold("Digite o link para gerar o QRCODE"),
  },
  {
    name: "type",
    description: chalk.yellow.bold(
      "Escolha entre o tipo de QRCODE (1 - normal ou 2 - terminal)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export { promptQRCode };
