"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import VoidCard from "@/components/VoidCard";
import VoidBackground from "@/components/VoidBackground";

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const timeline = [
  { year: "Junho",    title: "Início no DayZ",       description: "Início do projeto pessoal de servidor DayZ e desenvolvimento dos primeiros bots próprios" },
  { year: "Jul/Ago",  title: "Primeiros Bots",        description: "Bot de criação de clãs (formulário + canais + cargos) e bot de status do servidor DayZ" },
  { year: "Setembro", title: "Aprendizado",           description: "Cancelamento do projeto DayZ, mas a experiência abriu novas oportunidades" },
  { year: "Outubro",  title: "Criação da ZinStore",   description: "Nascimento da ZinStore com foco em bots personalizados. Primeiro cliente: Farm Brasil" },
  { year: "Out/Nov",  title: "Clientes Reais",        description: "Santos Optimizations, Hype Otimizações, Abel (design) e VL Garcia. Todos com feedbacks 5/5" },
  { year: "Dezembro", title: "Pausa e Reflexão",      description: "ZinStore entra em pausa. Trabalhar sozinho trouxe desafios e desgaste" },
  { year: "Dez/2025", title: "Nascimento da VØID",   description: "Criação da VØID Systems com equipe preparada e bots hospedados. Apenas o começo" },
  { year: "Jan/2026", title: "Inauguração Oficial",  description: "VØID Systems oficialmente inaugurada com equipe completa, catálogo de bots prontos para uso, bots sob medida e criação de sites. Atendendo clientes de diferentes segmentos." },
];

const techs = ["Discord.js","Node.js","TypeScript","JavaScript","Next.js","SQLite","MongoDB","PostgreSQL","Git","REST APIs"];

export default function Sobre() {
  return (
    <>
      <VoidBackground />
      <div className="relative z-10">
        <div className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div initial="initial" animate="animate" variants={stagger}>

            {/* Header com foto */}
            <motion.div className="mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-8" variants={fadeIn}>
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--card-border-hover)" }}>
                  <Image src="/1.jpg" alt="Enzo Morais" width={112} height={112} className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Sobre</p>
                <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Minha Jornada</h1>
                <p className="text-lg" style={{ color: "var(--text-secondary)" }}>Desenvolvedor • Criador da VØID Systems</p>
              </div>
            </motion.div>

            {/* Texto */}
            <motion.div className="space-y-6 mb-16 leading-relaxed" style={{ color: "var(--text-secondary)" }} variants={stagger}>
              {[
                <>Comecei minha trajetória no início de junho, quando decidi criar meu próprio servidor de DayZ. Durante esse processo, precisei buscar bots para organizar o servidor, porém me deparei sempre com duas opções: bots caros demais ou bots mal feitos e pouco funcionais.</>,
                <>Diante disso, resolvi criar meus próprios bots, inicialmente simples, mas totalmente funcionais. Meu primeiro projeto foi um bot de criação de clãs, onde o jogador respondia um formulário interativo e o sistema criava automaticamente canal de texto, call e cargo do clã.</>,
                <>No início de setembro, o projeto do servidor DayZ foi cancelado, mas a experiência adquirida no desenvolvimento dos bots abriu uma nova oportunidade.</>,
                <>No início de outubro, nasceu a <strong style={{ color: "var(--text-primary)" }}>ZinStore</strong>, com foco em criação de bots personalizados e configuração completa de servidores Discord. O primeiro cliente foi a Farm Brasil, totalmente criado e configurado pela ZinStore. O servidor funcionou 100% sem necessidade de suporte.</>,
                <><strong style={{ color: "var(--text-primary)" }}>Todos os projetos entregues pela ZinStore receberam avaliações 5/5</strong>, reforçando a qualidade e confiabilidade do trabalho.</>,
                <>No final de dezembro, criamos a <strong style={{ color: "var(--text-primary)" }}>VØID Systems</strong> com equipe preparada e bots hospedados. <strong style={{ color: "var(--text-primary)" }}>A VØID Systems está apenas no começo, com muitos novos sistemas e soluções planejadas para o futuro.</strong></>,
                <>No final de janeiro de 2025, a <strong style={{ color: "var(--text-primary)" }}>VØID Systems foi oficialmente inaugurada</strong>. Com uma equipe pronta para atender as mais diversas necessidades, passamos a oferecer um catálogo completo de bots prontos para uso — Bot de Anúncio, Bot de Bate-Ponto, Bot de Boas-Vindas + Auto Role, Bot de Registro, Bot de Registro de Clã, Bot de Status de IP, Bot de Ticket, Bot de Verificação, Bot Personalizado e Cloner — além de criação de sites, atendendo clientes de diferentes segmentos.</>,
              ].map((text, i) => (
                <motion.p key={i} className="text-lg" variants={fadeIn}>{text}</motion.p>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div className="mb-16" variants={fadeIn}>
              <p className="text-sm uppercase tracking-widest mb-8" style={{ color: "var(--text-muted)" }}>Timeline</p>
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div key={i} variants={fadeIn}>
                    <VoidCard className="p-6 relative pl-8" style={{ borderLeft: "2px solid var(--card-border-hover)" }}>
                      <div className="absolute -left-3 top-6 w-6 h-6 rounded-full" style={{ background: "var(--btn-primary-bg)" }} />
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{item.year}</span>
                        <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                      </div>
                      <p style={{ color: "var(--text-secondary)" }}>{item.description}</p>
                    </VoidCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          

            {/* Especialidades e Tecnologias */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8" variants={fadeIn}>
              <VoidCard className="p-8">
                <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Especialidades</h3>
                <ul className="space-y-3">
                  {[
                    "Desenvolvimento de bots para Discord",
                    "Sistemas de automação para servidores",
                    "Soluções personalizadas para comunidades e servidores de jogos",
                    "Soluções web integradas com bots e serviços",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span style={{ color: "var(--text-muted)" }} className="mt-1 flex-shrink-0">→</span>
                      <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </VoidCard>

              <VoidCard className="p-8">
                <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Tecnologias</h3>
                <ul className="space-y-3">
                  {[
                    "JavaScript (Node.js)",
                    "Discord.js",
                    "Integração com APIs e webhooks",
                    "HTML e CSS",
                    "Deploy e gerenciamento na Discloud",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span style={{ color: "var(--text-muted)" }} className="mt-1 flex-shrink-0">→</span>
                      <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </VoidCard>
            </motion.div>

            {/* CTA Discord */}
            <motion.div variants={fadeIn}>
              <VoidCard className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Quer conversar?</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Entre no servidor da VØID Systems ou me chame diretamente no Discord.
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <a href="https://discord.gg/voidsystems" target="_blank" rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 whitespace-nowrap">
                    Discord
                  </a>
                  <a href="/contato"
                    className="btn-secondary inline-flex items-center gap-2 whitespace-nowrap">
                    Contato
                  </a>
                </div>
              </VoidCard>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </>
  );
}