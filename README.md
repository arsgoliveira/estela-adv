# Estela Sousa Advocacia

Site institucional moderno e responsivo para o escritório de advocacia de Estela Sousa, construído com foco em credibilidade, clareza de navegação e conversão de clientes.

🔗 **[Ver demo ao vivo →](https://estela-adv.vercel.app)**

---

## Visão geral

![Preview do site](public/estela-sousa.png)

O projeto apresenta os serviços do escritório de forma profissional, com ênfase em autoridade jurídica, leitura fácil e acesso rápido ao atendimento por WhatsApp, e-mail e Instagram.

---

## Tecnologias

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF0065?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

| Tecnologia | Uso |
|---|---|
| Next.js 16 | Framework principal com App Router |
| React 19 | Interface e componentização |
| TypeScript | Tipagem estática |
| Tailwind CSS v4 | Estilização utilitária |
| Framer Motion | Animações e transições |
| Lucide React | Ícones |

---

## Funcionalidades

- Layout totalmente responsivo (mobile, tablet e desktop)
- Hero com mensagem principal e chamadas para ação
- Seção institucional com apresentação da profissional
- Áreas de atuação com cards expansivos e animados
- Carrossel de depoimentos de clientes
- Página de consulta de processos com links para sistemas oficiais
- Botão flutuante de contato via WhatsApp
- Contato por WhatsApp, e-mail e Instagram

---

## Como rodar localmente

**Pré-requisitos:** Node.js 18+

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/estela-adv.git
cd estela-adv

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **[http://localhost:3000](http://localhost:3000)** no navegador.

### Build de produção

```bash
npm run build
npm start
```

---

## Estrutura do projeto

```
estela-adv/
├── app/
│   ├── consulta/       # Página de consulta de processos
│   ├── layout.tsx      # Layout global (metadados, fontes)
│   └── page.tsx        # Página principal
├── components/
│   ├── icons/          # Ícones customizados
│   ├── layout/         # Header e Footer
│   ├── sections/       # Seções da página (Hero, Sobre, Áreas, etc.)
│   └── WhatsAppFloat.tsx
├── lib/
│   └── constants.ts    # Dados centralizados (contato, depoimentos, áreas)
└── public/             # Imagens e assets estáticos
```

---

## Personalização

Todos os dados do escritório estão centralizados em `lib/constants.ts`:

- Informações de contato (WhatsApp, e-mail, Instagram)
- Áreas de atuação
- Depoimentos de clientes
- Textos institucionais

---

## Deploy

O projeto está configurado para deploy automático na **[Vercel](https://vercel.com)** a partir do repositório GitHub. Cada push na branch `main` gera um novo deploy de produção.

---

## Licença

Projeto desenvolvido para uso privado. Todos os direitos reservados.
