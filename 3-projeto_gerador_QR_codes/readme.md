# 🔧 Gerador de Senhas e QR Codes

Este projeto é um kit de utilidades para **e-commerces**, desenvolvido em **Node.js**, que permite gerar **senhas seguras** e **QR Codes** diretamente pelo terminal.  
A aplicação é **interativa, modular e configurável** via variáveis de ambiente.

---

## 🚀 Funcionalidades

- Geração de **senhas seguras** configuráveis via `.env`.
- Criação de **QR Codes** no terminal (padrão ou compacto).
- Interface interativa no terminal com menus.
- Estrutura modular e bem organizada.

---

## 🧠 Aprendizados

### 📦 Estrutura e Organização

- Modularização de código usando `import/export`.
- Estrutura organizada em pastas como:
  - `prompts` → responsável pelos menus e interação com o usuário.
  - `services/password` → responsável pela lógica de geração de senhas.
  - `services/qr-code` → responsável pela lógica de geração de QR Codes.
- Separação clara entre **lógica de negócio** e **interface com o usuário**.

### 🖥 Interação com o Terminal

- Uso do pacote [`prompt`](https://www.npmjs.com/package/prompt) para menus interativos.
- **Validação de entrada** com expressões regulares.
- Estilização do terminal com [`chalk`](https://www.npmjs.com/package/chalk) (cores, negrito e itálico).

### 🔐 Geração de Senhas

- Criação de senhas seguras com base nas configurações do `.env`.
- Utilização de `Math.random()` para seleção de caracteres.
- Uso do [`dotenv`](https://www.npmjs.com/package/dotenv) para variáveis de ambiente.

### 📲 Geração de QR Codes

- Geração de QR Codes diretamente no terminal com [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal).
- Opções de exibição: **padrão** ou **compacto**.
- Tratamento de erros com feedback visual para o usuário.

### ⚙️ Configuração com `.env`

- Criação e uso de arquivos `.env` para **configurações sensíveis**.
- Inclusão de um `.env.example` para facilitar o setup de outros desenvolvedores.

### 📁 Boas Práticas com Git

- Uso de `.gitignore` para evitar o versionamento de:
  - Arquivos sensíveis (`.env`)
  - Dependências (`node_modules`)
