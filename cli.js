import { buscarLinks } from './leitor.js';
import { validarLista } from './httpValidacao.js';
import { Chalk } from 'chalk';
const chalk = new Chalk({ level: 2 }); // Força o uso de cores

const entrada = process.argv[2];

async function iniciarPrograma(dadoEntrada) {
  if (!dadoEntrada) {
    console.log(chalk.yellow("Erro: Forneça uma URL ou o caminho de um arquivo de texto."));
    return;
  }

  try {
    if (dadoEntrada.startsWith('http://') || dadoEntrada.startsWith('https://')) {
      const avaliacao = await validarLista([dadoEntrada]);
      console.log(`[ ${avaliacao[0].url} ] -> ${avaliacao[0].mensagem}`);
    } else {
      const linksEncontrados = await buscarLinks(dadoEntrada);
      
      if (Array.isArray(linksEncontrados)) {
        const resultados = await validarLista(linksEncontrados);
        
        console.log(chalk.bold.cyan("\n--- Relatório de Validação ---"));
        resultados.forEach(res => {
          console.log(`- ${res.url} | ${res.mensagem}`);
        });
        console.log("\n");
      } else {
        console.log(linksEncontrados);
      }
    }
  } catch (erro) {
    console.error(erro.message);
  }
}

iniciarPrograma(entrada);