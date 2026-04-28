# Atividade---Projeto-Sistema-de-Valida-o-de-URL
Ferramenta de linha de comando (CLI) desenvolvida em Node.js para extrair e validar o status de conectividade de links. A aplicação recebe uma URL direta ou um arquivo de texto (como `.md`), extrai as URLs e testa a conectividade de cada uma, retornando o resultado formatado no terminal.

como testar: 

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra o terminal na pasta raiz do projeto.
3. Instale as dependências executando o comando abaixo:

npm install
A ferramenta pode ser utilizada de duas formas:

Validar uma URL direta:
```bash
node cli.js [https://www.google.com](https://www.google.com)
```
Validar links de um arquivo (Markdown/Texto):
```bash
node cli.js ./caminho/do/seu-arquivo.md
```