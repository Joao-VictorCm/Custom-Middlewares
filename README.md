# Custom-Middlewares

Este repositório contém exemplos simples de como usar middlewares no Express para diferentes funcionalidades. Cada exemplo ilustra um conceito distinto relacionado ao uso de middlewares e ao roteamento no Express.

## Índice

1. [index1.js - Servindo Arquivos Estáticos e HTML](#index01)
2. [index2.js - Usando Morgan para Log de Requisições](#index02)
3. [index3.js - Middlewares Personalizados](#index03)
4. [index4.js - Middleware com Body-Parser e Geração de Nome de Banda](#index04)

---

## index1.js - Servindo Arquivos Estáticos e HTML

Este exemplo mostra como servir arquivos estáticos e um arquivo HTML específico usando Express.

### O que é demonstrado:

- Como servir arquivos estáticos com o middleware express.static.
- Como enviar um arquivo HTML para o navegador com a função sendFile.

---

## index02 - Usando Morgan para Log de Requisições

Este exemplo utiliza o middleware morgan para registrar as requisições HTTP no console.

### O que é demonstrado:

- Como usar o middleware morgan para gerar logs das requisições HTTP automaticamente.

---

## index3.js - Middlewares Personalizados

Neste exemplo, mostramos como criar middlewares personalizados para capturar informações sobre a requisição e realizar ações antes de enviar a resposta.

### O que é demonstrado:

- Como criar e usar middlewares personalizados.
- Como usar a função next() para passar o controle para o próximo middleware.

---

## index4.js - Middleware com Body-Parser e Geração de Nome de Banda

Este exemplo usa o body-parser para processar dados de formulários e um middleware personalizado para gerar um nome de banda baseado em informações fornecidas pelo usuário.

### O que é demonstrado:

- Como usar body-parser para processar dados de formulários enviados via POST.
- Como criar um middleware personalizado para gerar um nome de banda com base nos dados do formulário.
- Como manipular o resultado e exibi-lo ao usuário após o envio do formulário.


