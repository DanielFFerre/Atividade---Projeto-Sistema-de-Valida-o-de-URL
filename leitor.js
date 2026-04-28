import { readFile } from 'fs/promises';
import { Chalk } from 'chalk';
const chalk = new Chalk({ level: 2 }); // Força o uso de cores

export async function buscarLinks(caminho) {
  try {
    const conteudo = await readFile(caminho, 'utf-8');
    const padrao = /https?:\/\/[^\s\])"]+/g;
    const links = conteudo.match(padrao);
    
    if (!links || links.length === 0) {
      return chalk.yellow("Nenhum link localizado no documento.");
    }
    
    return links;
  } catch (erro) {
    throw new Error(chalk.red("Erro ao processar o arquivo. Caminho inválido ou arquivo inexistente."));
  }
}