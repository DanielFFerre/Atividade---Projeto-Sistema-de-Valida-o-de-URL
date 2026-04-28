import fetch from 'node-fetch';
import { Chalk } from 'chalk';
const chalk = new Chalk({ level: 2 }); // Força o uso de cores

function interpretarStatus(codigo) {
  switch (codigo) {
    case 200:
      return chalk.green("Site no ar e operante!");
    case 400:
    case 404:
      return chalk.red("Página não encontrada.");
    case 500:
      return chalk.yellow("Erro interno no servidor do site.");
    default:
      return chalk.gray(`Status não mapeado: ${codigo}`);
  }
}

export async function validarLista(urls) {
  return Promise.all(
    urls.map(async (url) => {
      try {
        const resposta = await fetch(url);
        const mensagem = interpretarStatus(resposta.status);
        return { url, mensagem };
      } catch (erro) {
        return { url, mensagem: chalk.red("Domínio inexistente ou erro de rede.") };
      }
    })
  );
}