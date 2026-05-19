This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📋 O que é este site?

**BJ Gestor de Currículos** é um sistema moderno e funcional de **gestão de currículos** projetado para recrutadores e profissionais de RH. 

### Principais funcionalidades:

- 📝 **Cadastrar currículos** - Criar novos currículos com formulários dinâmicos
- 🔍 **Buscar e filtrar** - Pesquisar currículos em tempo real por nome ou cargo
- 📊 **Listar** - Visualizar todos os currículos cadastrados de forma organizada
- 💾 **Armazenamento local** - Dados salvos localmente no navegador
- 🎨 **Interface moderna** - Design elegante, responsivo e acessível

Este é o lugar perfeito para gerenciar candidatos de forma rápida e prática!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🏗️ Como este site foi construído

Este projeto é um **sistema de gestão de currículos** moderno construído com as seguintes tecnologias e práticas:

### Tecnologias Utilizadas

| Ferramenta | Função |
|-----------|--------|
| **Next.js 16** | Framework React para criar o site com renderização eficiente |
| **Tailwind CSS** | Framework CSS para estilização e responsividade (design bonito e funcional) |
| **React 19** | Biblioteca para componentes reutilizáveis (Header, Cards, Buttons, etc) |
| **TypeScript** | Linguagem tipada para código mais seguro e confiável |
| **Yup** | Validação de formulários dinâmicos |
| **Lucide Icons** | Ícones modernos prontos para usar |
| **ESLint** | Ferramenta para verificar qualidade do código |

### Fluxo de Desenvolvimento e Deploy

```
┌────────────────────────────────────────┐
│ 1. Dev escreve código                  │
│    (GitHub Copilot sugere com IA 🤖)   │
└─────────────────┬──────────────────────┘
                  ↓
┌────────────────────────────────────────┐
│ 2. Commit no GitHub                    │
│    (código salvo na nuvem)             │
└─────────────────┬──────────────────────┘
                  ↓
┌────────────────────────────────────────┐
│ 3. Vercel detecta mudança              │
│    (Deploy automático)                 │
└─────────────────┬──────────────────────┘
                  ↓
┌────────────────────────────────────────┐
│ 4. Site publicado na internet 🌍       │
└────────────────────────────────────────┘
```

### Ferramentas Principais

**GitHub** 🐙
- Repositório na nuvem para o código-fonte
- Controle de versões (histórico de mudanças)
- Facilita colaboração entre desenvolvedores

**Vercel** 🚀
- Hospedagem e deploy automático
- Pega o código do GitHub e publica na internet
- Atualiza automaticamente a cada push

**GitHub Copilot** 🤖
- Assistente de IA integrado ao editor
- Sugere código enquanto você digita
- Completa funções automaticamente
- Ajuda a encontrar erros

### Funcionalidades do Sistema

✅ Listar currículos cadastrados
✅ Buscar e filtrar em tempo real
✅ Criar novos currículos com formulários dinâmicos
✅ Validação automática de dados
✅ Armazenamento local (localStorage)
✅ Design responsivo (mobile, tablet, desktop)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
