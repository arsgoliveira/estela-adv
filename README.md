# Estela Sousa Advocacia

Site institucional profissional para a advogada Estela Sousa, desenvolvido com Next.js 16, TypeScript e Tailwind CSS.

## Funcionalidades

- **Design responsivo** - Adaptado para desktop, tablet e mobile
- **Hero** - Destaque com slogan "A lei existe!" e CTAs
- **Sobre** - Apresentação da advogada e especialidades
- **Áreas de Atuação** - 6 áreas com cards expansíveis
- **Depoimentos** - Carrossel de depoimentos de clientes
- **Consulta de Processos** - Links para portais oficiais (PJe, CNJ)
- **Contato** - WhatsApp, e-mail e Instagram

## Tecnologias

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (animações)
- Lucide React (ícones)

## Como rodar

```bash
# Instalar dependências (já feito)
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Personalização

- **Dados de contato**: Edite `lib/constants.ts`
- **Depoimentos**: Adicione ou altere em `lib/constants.ts` → `DEPOIMENTOS`
- **Áreas de atuação**: Edite `lib/constants.ts` → `AREAS_ATUACAO`
- **Foto da advogada**: Adicione em `public/images/` e atualize o componente `Sobre.tsx`

## Deploy

O projeto está pronto para deploy na [Vercel](https://vercel.com):

1. Conecte o repositório Git
2. O build será automático
3. Domínio customizado pode ser configurado nas configurações

## Estrutura

```
app/
├── layout.tsx      # Layout global (Header, Footer)
├── page.tsx        # Página inicial
├── consulta/       # Página de consulta de processos
components/
├── layout/         # Header, Footer
└── sections/       # Hero, Sobre, Áreas, Depoimentos, etc.
lib/
└── constants.ts    # Dados estáticos
```
