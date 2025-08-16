function permissaoCaracters() {
  let permissao = [];

  if (String(process.env.UPPERCASE_LETTERS).toLowerCase() === "true")
    permissao.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  if (String(process.env.LOWERCASE_LETTERS).toLowerCase() === "true")
    permissao.push(..."abcdefghijklmnopqrstuvwxyz");

  if (String(process.env.NUMBERS).toLowerCase() === "true")
    permissao.push(..."1234567890");

  if (String(process.env.SPECIAL_CHARACTERS).toLowerCase() === "true")
    permissao.push(..."!@#$%&^_*");

  return permissao;
}

async function handle() {
  let password = "";

  const passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10);
  const characters = permissaoCaracters();

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export { handle };
