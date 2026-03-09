# Estela Sousa Advocacia

Site institucional profissional para a advogada Estela Sousa, desenvolvido com foco em credibilidade, clareza de navegacao e contato rapido com potenciais clientes.

## Visao geral

Este projeto foi construido para apresentar os servicos do escritorio de forma moderna, responsiva e objetiva. A estrutura prioriza leitura facil, reforco de autoridade profissional e CTAs diretos para atendimento.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Funcionalidades

- Layout responsivo para desktop, tablet e mobile
- Hero com mensagem principal e chamadas para acao
- Secao institucional com apresentacao da profissional
- Areas de atuacao com cards expansivos
- Carrossel de depoimentos
- Pagina de consulta de processos com links oficiais
- Contato por WhatsApp, e-mail e Instagram

## Estrutura do projeto

```text
app/
components/
lib/
public/
```

## Personalizacao

- Dados de contato: `lib/constants.ts`
- Depoimentos: `lib/constants.ts`
- Areas de atuacao: `lib/constants.ts`
- Conteudos e secoes: componentes em `components/sections`

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois, acesse `http://localhost:3000`.

## Build de producao

```bash
npm run build
npm start
```

## Deploy

O projeto esta pronto para deploy na [Vercel](https://vercel.com), com build automatica a partir do repositorio.

## Objetivo do projeto

Demonstrar a construcao de um site profissional em `Next.js` com foco em experiencia do usuario, performance, organizacao de componentes e facilidade de manutencao.
