export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  description: string;
  fullDescription: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  category: "ticket" | "inscricao" | "registro" | "hierarquia" | "geral" | "administracao";
  stack: string[];
  deliverables: string[];
  featured: boolean;
  year: number;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "11",
    slug: "void-ticket",
    title: "VØID Ticket",
    client: "VØID Systems",
    description: "Sistema completo de tickets para Discord com IA (GPT-4o-mini) e dashboard web",
    fullDescription: "Sistema profissional de gerenciamento de tickets para Discord com dashboard web completo, integração com IA (GPT-4o-mini) e arquitetura full-stack moderna. Desenvolvido para comunidades que precisam de suporte organizado e automatizado.",
    problem: "Servidores Discord precisam de um sistema profissional de tickets com automação inteligente, dashboard web para gerenciamento e personalização completa, algo que não existe no mercado com todas essas features integradas.",
    solution: "Desenvolvi um sistema full-stack completo: Bot Discord com IA integrada (GPT-4o-mini) para respostas automáticas contextualizadas, dashboard web Next.js 14 com autenticação OAuth2, API REST com Express.js, banco PostgreSQL (Supabase), sistema de transcripts HTML, logs com webhooks, múltiplos painéis customizáveis, editor rico de mensagens, e tema VØID minimalista preto e branco.",
    result: "Sistema completo em produção usado por múltiplos servidores Discord. Arquitetura escalável com ~15.000+ linhas de código, 100+ arquivos, 20+ componentes React, 15+ rotas API. Deploy multi-plataforma (Vercel + Discloud + Supabase). Demonstra domínio completo de full-stack development, integração de APIs complexas, UI/UX design profissional e gestão de projeto do conceito ao deploy.",
    tags: ["Next.js 14", "Discord.js", "OpenAI GPT-4o", "TypeScript", "PostgreSQL", "OAuth2", "Full-Stack"],
    category: "ticket",
    stack: [
      "Next.js 14 (App Router)",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Discord.js v14",
      "Node.js",
      "Express.js",
      "PostgreSQL (Supabase)",
      "OpenAI API (GPT-4o-mini)",
      "Discord OAuth2",
      "JWT Authentication",
      "Vercel",
      "Discloud"
    ],
    deliverables: [
      "Bot Discord com IA integrada (GPT-4o-mini)",
      "Dashboard web completo com autenticação OAuth2",
      "API REST com Express.js e PostgreSQL",
      "Sistema de painéis customizáveis (botões/select menus)",
      "Assistente IA com histórico de conversa",
      "Sistema de feedback (Resolveu/Preciso de Ajuda)",
      "Transcripts HTML completos",
      "Logs detalhados com webhooks",
      "Editor de texto rico (Markdown)",
      "Picker de emojis customizados do Discord",
      "Seleção visual de canais, cargos e categorias",
      "Sistema de cooldown configurável",
      "Múltiplos tipos de tickets por servidor",
      "Personalização completa (cores, mensagens, emojis)",
      "Estatísticas de tickets",
      "Tema VØID Limbo (minimalismo preto e branco)"
    ],
    featured: true,
    year: 2025,
    url: "https://voidticket.vercel.app"
  },
  {
    id: "1",
    slug: "bot-criacao-clans-dayz",
    title: "Bot de Criação de Clãs",
    client: "Projeto DayZ",
    description: "Sistema de criação automática de clãs com formulário interativo",
    fullDescription: "Primeiro bot desenvolvido para o servidor de DayZ, permitindo que jogadores criassem seus próprios clãs através de um formulário interativo.",
    problem: "Necessidade de um sistema automatizado para criação e organização de clãs no servidor DayZ, sem intervenção manual da staff.",
    solution: "Desenvolvi um bot com formulário interativo que coletava informações do clã e criava automaticamente canal de texto, canal de voz e cargo personalizado para o clã.",
    result: "Sistema totalmente funcional que automatizou a criação de clãs, economizando tempo da staff e proporcionando experiência profissional aos jogadores.",
    tags: ["Discord.js", "Formulário", "Automação", "DayZ"],
    category: "geral",
    stack: ["Discord.js", "Node.js"],
    deliverables: [
      "Formulário interativo para criação de clãs",
      "Criação automática de canais de texto",
      "Criação automática de canais de voz",
      "Atribuição automática de cargos",
      "Sistema de validação de dados"
    ],
    featured: false,
    year: 2024
  },
  {
    id: "2",
    slug: "bot-status-servidor-dayz",
    title: "Bot de Status do Servidor",
    client: "Projeto DayZ",
    description: "Exibição em tempo real do status do servidor DayZ",
    fullDescription: "Bot que monitora e exibe o status do servidor DayZ em tempo real, mostrando se está online, quantidade de jogadores e IP de conexão.",
    problem: "Jogadores precisavam de uma forma fácil de verificar se o servidor estava online e quantos jogadores estavam conectados antes de entrar no jogo.",
    solution: "Criei um bot que consulta a API do servidor DayZ e exibe em um embed atualizado automaticamente o status (online/offline), número de jogadores conectados e IP do servidor.",
    result: "Informação sempre atualizada e acessível para os jogadores, melhorando a experiência e reduzindo perguntas repetitivas no servidor.",
    tags: ["Discord.js", "API", "Monitoramento", "DayZ"],
    category: "geral",
    stack: ["Discord.js", "Node.js", "API Integration"],
    deliverables: [
      "Monitoramento em tempo real",
      "Embed com status do servidor",
      "Contador de jogadores online",
      "Exibição do IP do servidor",
      "Atualização automática"
    ],
    featured: false,
    year: 2024
  },
  {
    id: "3",
    slug: "bot-ticket-hype",
    title: "Bot de Ticket",
    client: "Hype Otimizações",
    description: "Sistema de atendimento por categorias com logs completos",
    fullDescription: "Sistema completo de tickets para atendimento ao cliente com múltiplas categorias e registro detalhado de interações.",
    problem: "A Hype Otimizações precisava de um sistema organizado para gerenciar atendimentos de clientes, com separação por categorias e histórico completo.",
    solution: "Desenvolvi um bot de tickets com sistema de categorias personalizáveis, painel de controle para staff, logs automáticos e notificações em tempo real.",
    result: "Redução significativa no tempo de resposta e organização completa do suporte, com histórico acessível de todos os atendimentos. Feedback 5/5.",
    tags: ["Discord.js", "Tickets", "Logs", "Atendimento"],
    category: "ticket",
    stack: ["Discord.js", "Node.js", "SQLite"],
    deliverables: [
      "Sistema de tickets por categorias",
      "Painel de controle para staff",
      "Logs completos de atendimentos",
      "Notificações automáticas",
      "Sistema de avaliação"
    ],
    featured: true,
    year: 2024
  },
  {
    id: "4",
    slug: "bot-ticket-santos",
    title: "Bot de Ticket",
    client: "Santos Otimizações",
    description: "Ticket personalizado para suporte técnico",
    fullDescription: "Sistema de tickets adaptado para as necessidades específicas de suporte técnico da Santos Otimizações.",
    problem: "Necessidade de um sistema de tickets com fluxo personalizado para diferentes tipos de suporte técnico.",
    solution: "Criei um bot com categorias específicas para cada tipo de problema técnico, com formulários personalizados e priorização automática.",
    result: "Melhoria na organização do suporte técnico e priorização eficiente de casos urgentes. Feedback 5/5.",
    tags: ["Discord.js", "Tickets", "Suporte"],
    category: "ticket",
    stack: ["Discord.js", "Node.js", "MongoDB"],
    deliverables: [
      "Sistema de tickets personalizado",
      "Formulários por categoria",
      "Sistema de prioridade",
      "Transferência entre atendentes",
      "Estatísticas de atendimento"
    ],
    featured: true,
    year: 2024
  },
  {
    id: "5",
    slug: "servidor-completo-farm-brasil",
    title: "Servidor Completo + Bot de Ticket",
    client: "Farm Brasil",
    description: "Configuração completa do servidor e sistema de tickets",
    fullDescription: "Primeiro cliente da ZinStore. Servidor de Farming Simulator totalmente criado e configurado, incluindo bot de ticket e todas as automações necessárias.",
    problem: "Farm Brasil precisava de um servidor Discord profissional do zero, com sistema de atendimento e automações completas.",
    solution: "Desenvolvi e configurei o servidor completo com bot de ticket, sistema de boas-vindas, autorole, sorteios e sistema de anúncios.",
    result: "Servidor funcionou 100% sem necessidade de suporte, comprovando a estabilidade das soluções. Feedback 5/5.",
    tags: ["Discord.js", "Tickets", "Administração", "Configuração"],
    category: "administracao",
    stack: ["Discord.js", "Node.js", "PostgreSQL"],
    deliverables: [
      "Configuração completa do servidor",
      "Sistema de tickets completo",
      "Sistema de boas-vindas",
      "Autorole automático",
      "Sistema de sorteios",
      "Sistema de anúncios"
    ],
    featured: true,
    year: 2024
  },
  {
    id: "6",
    slug: "design-loja-abel",
    title: "Design de Loja",
    client: "Abel",
    description: "Design profissional para loja Discord",
    fullDescription: "Desenvolvimento de identidade visual e design completo para loja no Discord.",
    problem: "Abel precisava de um design profissional e atrativo para sua loja no Discord.",
    solution: "Criei um design completo incluindo banners, layout de canais e identidade visual consistente.",
    result: "Design profissional que elevou a percepção de qualidade da loja. Feedback muito positivo.",
    tags: ["Design", "Branding", "Discord"],
    category: "geral",
    stack: ["Photoshop", "Figma"],
    deliverables: [
      "Banners personalizados",
      "Layout de canais",
      "Identidade visual",
      "Ícones customizados",
      "Guia de estilo"
    ],
    featured: false,
    year: 2024
  },
  {
    id: "7",
    slug: "bot-inscricao-vl-garcia",
    title: "Bot de Inscrição",
    client: "VL Garcia",
    description: "Sistema de perguntas sequenciais com aprovação da staff",
    fullDescription: "Bot de inscrição com formulário interativo, aprovação manual pela staff e notificações via DM.",
    problem: "VL Garcia precisava de um processo de inscrição estruturado com perguntas específicas e aprovação controlada.",
    solution: "Criei um sistema de inscrição com perguntas sequenciais, painel de aprovação para staff e notificações automáticas aos candidatos.",
    result: "Processo de inscrição organizado e profissional, com controle total da staff sobre aprovações. Feedback 5/5.",
    tags: ["Discord.js", "Formulário", "Aprovação"],
    category: "inscricao",
    stack: ["Discord.js", "Node.js", "SQLite"],
    deliverables: [
      "Formulário de inscrição interativo",
      "Painel de aprovação para staff",
      "Notificações via DM",
      "Histórico de inscrições",
      "Sistema de rejeição com motivo"
    ],
    featured: false,
    year: 2024
  },
  {
    id: "8",
    slug: "bot-registro-vl-garcia",
    title: "Bot de Registro",
    client: "VL Garcia",
    description: "Formulário com aprovação, cargo e nickname automático",
    fullDescription: "Sistema de registro completo com formulário, aprovação da staff e configuração automática de cargo e nickname.",
    problem: "Necessidade de automatizar o processo de registro de novos membros com validação e configuração automática.",
    solution: "Desenvolvi um bot que coleta informações via formulário, permite aprovação da staff e configura automaticamente cargo e nickname do membro.",
    result: "Automação completa do processo de registro, economizando tempo da staff e padronizando a entrada de novos membros. Feedback 5/5.",
    tags: ["Discord.js", "Registro", "Automação"],
    category: "registro",
    stack: ["Discord.js", "Node.js", "SQLite"],
    deliverables: [
      "Formulário de registro",
      "Sistema de aprovação",
      "Atribuição automática de cargo",
      "Configuração de nickname",
      "Logs de registros"
    ],
    featured: false,
    year: 2024
  },
  {
    id: "9",
    slug: "bot-hierarquia-vl-garcia",
    title: "Bot de Hierarquia",
    client: "VL Garcia",
    description: "Sistema de cargos configurados com lista de membros",
    fullDescription: "Bot para gerenciamento de hierarquia do servidor com visualização de membros por cargo e configuração de permissões.",
    problem: "VL Garcia precisava de uma forma clara de visualizar e gerenciar a hierarquia de cargos do servidor.",
    solution: "Criei um sistema que exibe a hierarquia completa, lista membros por cargo e permite configuração de permissões de forma visual.",
    result: "Gestão simplificada da hierarquia do servidor com visualização clara de toda a estrutura organizacional. Feedback 5/5.",
    tags: ["Discord.js", "Hierarquia", "Gestão"],
    category: "hierarquia",
    stack: ["Discord.js", "Node.js"],
    deliverables: [
      "Visualização de hierarquia",
      "Lista de membros por cargo",
      "Configuração de permissões",
      "Sistema de promoção/rebaixamento",
      "Estatísticas por cargo"
    ],
    featured: false,
    year: 2024
  },
  {
    id: "10",
    slug: "bot-geral-vl-garcia",
    title: "Bot Geral",
    client: "VL Garcia",
    description: "Automações e recursos básicos de organização",
    fullDescription: "Bot multifuncional com diversas automações e ferramentas para organização e gestão do servidor.",
    problem: "Necessidade de um bot centralizado com múltiplas funcionalidades para o dia a dia do servidor.",
    solution: "Desenvolvi um bot com comandos de utilidade, automações de boas-vindas, sistema de níveis, e ferramentas de organização.",
    result: "Servidor mais dinâmico e organizado com automações que melhoram a experiência dos membros. Feedback 5/5.",
    tags: ["Discord.js", "Automação", "Utilidades"],
    category: "geral",
    stack: ["Discord.js", "Node.js", "SQLite"],
    deliverables: [
      "Sistema de boas-vindas",
      "Comandos de utilidade",
      "Sistema de níveis e XP",
      "Auto-moderação básica",
      "Comandos de informação",
      "Sistema de anúncios"
    ],
    featured: true,
    year: 2024
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(p => p.category === category);
}

export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.client.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
