# Portfólio Menozin

Portfólio pessoal profissional desenvolvido com Next.js 15, TypeScript, TailwindCSS e Framer Motion.

## 🚀 Tecnologias

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animações)
- **React 19**

## 🎨 Design

- Visual dark-first premium e minimal
- Tema claro/escuro com toggle e persistência
- Paleta de cores profissional
- Animações suaves e elegantes
- Totalmente responsivo

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Configurar webhook do Discord (opcional)
# Copie .env.example para .env.local e adicione seu webhook
cp .env.example .env.local

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

### 🔗 Configurar Webhook do Discord

Para receber mensagens do formulário de contato no Discord:

1. Crie um webhook no seu servidor Discord
2. Copie `.env.example` para `.env.local`
3. Adicione a URL do webhook em `DISCORD_WEBHOOK_URL`
4. Reinicie o servidor

**Guia completo**: Veja [CONFIGURAR-WEBHOOK.md](CONFIGURAR-WEBHOOK.md)

## 📁 Estrutura do Projeto

```
menozin-portfolio/
├── app/                      # App Router do Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página inicial
│   ├── globals.css          # Estilos globais
│   ├── sobre/               # Página sobre
│   ├── projetos/            # Página de projetos
│   │   └── [slug]/          # Páginas dinâmicas de projetos
│   └── contato/             # Página de contato
├── components/              # Componentes reutilizáveis
│   ├── Header.tsx           # Cabeçalho com navegação
│   ├── Footer.tsx           # Rodapé
│   ├── ThemeProvider.tsx    # Provider de tema
│   └── ProjectDetail.tsx    # Detalhe de projeto
├── lib/                     # Utilitários e dados
│   └── projects.ts          # Dados dos projetos
└── public/                  # Arquivos estáticos
```

## 📄 Páginas

### Home (`/`)
- Hero section com apresentação
- Seção "O que eu faço"
- Projetos em destaque
- Link para VØID Systems

### Sobre (`/sobre`)
- História e trajetória
- Timeline de evolução
- Tecnologias utilizadas

### Projetos (`/projetos`)
- Grid de todos os projetos
- Busca por texto
- Filtros por categoria
- Páginas individuais para cada projeto

### Contato (`/contato`)
- Links para redes sociais
- Formulário de contato
- CTA para Discord

## 🎯 Features

- ✅ SEO otimizado com metadata
- ✅ OpenGraph tags
- ✅ Tema claro/escuro persistente
- ✅ Animações com Framer Motion
- ✅ Totalmente responsivo
- ✅ TypeScript para type safety
- ✅ Componentes modulares
- ✅ Rotas estáticas geradas em build time
- ✅ Performance otimizada
- ✅ Formulário de contato com webhook Discord

## 🔧 Personalização

### Adicionar Novos Projetos

Edite o arquivo `lib/projects.ts` e adicione um novo objeto ao array `projects`:

```typescript
{
  id: "8",
  slug: "novo-projeto",
  title: "Título do Projeto",
  client: "Nome do Cliente",
  description: "Descrição curta",
  fullDescription: "Descrição completa",
  problem: "Problema que foi resolvido",
  solution: "Como foi resolvido",
  result: "Resultado obtido",
  tags: ["Tag1", "Tag2"],
  category: "ticket", // ou outra categoria
  stack: ["Tecnologia1", "Tecnologia2"],
  deliverables: ["Item 1", "Item 2"],
  featured: false,
  year: 2026
}
```

### Alterar Cores

Edite o arquivo `tailwind.config.ts` para personalizar a paleta de cores.

### Modificar Conteúdo

- **Textos da home**: `app/page.tsx`
- **Sobre**: `app/sobre/page.tsx`
- **Contato**: `app/contato/page.tsx`

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Importe o projeto na Vercel
3. Deploy automático

### Outros Provedores

```bash
# Build
npm run build

# Os arquivos estarão em .next/
# Configure seu provedor para servir a aplicação Next.js
```

## 📱 Redes Sociais

- Discord: [VØID Systems](https://discord.gg/voidsystems)
- Instagram: [@enzo_kkjkj](https://www.instagram.com/enzo_kkjkj/)

## 📝 Licença

© 2026 Menozin. Todos os direitos reservados.
