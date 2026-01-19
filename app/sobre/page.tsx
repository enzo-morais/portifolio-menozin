"use client";

import { motion } from "framer-motion";
import type { Metadata } from "next";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Sobre() {
  const timeline = [
    {
      year: "Junho",
      title: "Início no DayZ",
      description: "Início do projeto pessoal de servidor DayZ e desenvolvimento dos primeiros bots próprios"
    },
    {
      year: "Jul/Ago",
      title: "Primeiros Bots",
      description: "Bot de criação de clãs (formulário + canais + cargos) e bot de status do servidor DayZ"
    },
    {
      year: "Setembro",
      title: "Aprendizado",
      description: "Cancelamento do projeto DayZ, mas a experiência abriu novas oportunidades"
    },
    {
      year: "Outubro",
      title: "Criação da ZinStore",
      description: "Nascimento da ZinStore com foco em bots personalizados. Primeiro cliente: Farm Brasil"
    },
    {
      year: "Out/Nov",
      title: "Clientes Reais",
      description: "Santos Optimizations, Hype Otimizações, Abel (design) e VL Garcia. Todos com feedbacks 5/5"
    },
    {
      year: "Dezembro",
      title: "Pausa e Reflexão",
      description: "ZinStore entra em pausa. Trabalhar sozinho trouxe desafios e desgaste"
    },
    {
      year: "Dez/2025",
      title: "Nascimento da VØID",
      description: "Criação da VØID Systems com equipe preparada e bots hospedados. Apenas o começo"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1 
          className="font-display text-5xl md:text-6xl font-bold mb-8"
          variants={fadeIn}
        >
          Sobre
        </motion.h1>

        <motion.div 
          className="prose prose-lg max-w-none mb-16"
          variants={fadeIn}
        >
          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6">
            Comecei minha trajetória no início de junho, quando decidi criar meu próprio servidor de DayZ. 
            Durante esse processo, precisei buscar bots para organizar o servidor, porém me deparei sempre 
            com duas opções: bots caros demais ou bots mal feitos e pouco funcionais.
          </p>
          
          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6">
            Diante disso, resolvi criar meus próprios bots, inicialmente simples, mas totalmente funcionais. 
            Meu primeiro projeto foi um bot de criação de clãs, onde o jogador respondia um formulário 
            interativo e o sistema criava automaticamente canal de texto, call e cargo do clã. Em seguida, 
            desenvolvi um bot de status do servidor, exibindo em embed se o servidor estava online ou offline, 
            quantidade de jogadores conectados e o IP do servidor.
          </p>
          
          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6">
            No início de setembro, o projeto do servidor DayZ foi cancelado, mas a experiência adquirida 
            no desenvolvimento dos bots abriu uma nova oportunidade.
          </p>

          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6">
            No início de outubro, nasceu a <strong>ZinStore</strong>, com foco em criação de bots personalizados 
            e configuração completa de servidores Discord. O primeiro cliente foi a Farm Brasil, um servidor de 
            Farming Simulator, totalmente criado e configurado pela ZinStore, incluindo bot de ticket, sistema 
            de boas-vindas, autorole, sorteios e sistema de anúncios. O servidor funcionou 100% sem necessidade 
            de suporte, comprovando a estabilidade das soluções entregues.
          </p>

          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6">
            O segundo cliente foi a Santos Optimizations, um servidor de otimização de PC, também 100% configurado 
            pela ZinStore. Em seguida, atendi a Hype Otimizações, onde desenvolvi exclusivamente o bot de ticket. 
            O quarto cliente foi Abel, para quem desenvolvi o design da loja. O quinto cliente foi a VL Garcia, 
            uma empresa virtual de Euro Truck, onde entreguei uma solução completa com bot de ticket, inscrição, 
            registro, hierarquia e bot geral.
          </p>

          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6">
            <strong>Todos os projetos entregues pela ZinStore receberam avaliações 5/5</strong>, reforçando a 
            qualidade e confiabilidade do trabalho.
          </p>

          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6">
            No início de dezembro, a ZinStore entrou em pausa. Trabalhar sozinho trouxe desafios e desgaste, 
            o que levou a uma breve interrupção do projeto.
          </p>

          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
            No final de dezembro, após conversas com dois amigos que também desenvolvem bots, decidimos criar 
            a <strong>VØID Systems</strong>. A VØID nasce com uma estrutura mais sólida, equipe preparada para 
            atendimento e um diferencial importante: bots hospedados, permitindo que clientes adquiram soluções 
            prontas sem se preocupar com hospedagem. Atualmente, a VØID Systems já oferece Bot de Ticket hospedado 
            e Bot de Anúncios hospedado. <strong>A VØID Systems está apenas no começo, com muitos novos sistemas, 
            projetos e soluções planejadas para o futuro.</strong>
          </p>
        </motion.div>

        <motion.h2 
          className="font-display text-3xl font-bold mb-8"
          variants={fadeIn}
        >
          Timeline
        </motion.h2>

        <motion.div 
          className="space-y-8"
          variants={stagger}
        >
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              className="card relative pl-8 border-l-4 border-accent"
              variants={fadeIn}
            >
              <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-accent"></div>
              
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-display text-2xl font-bold text-accent">
                  {item.year}
                </span>
                <h3 className="font-display text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 card bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20"
          variants={fadeIn}
        >
          <h3 className="font-display text-2xl font-bold mb-4">
            Tecnologias e Ferramentas
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              "Discord.js",
              "Node.js",
              "TypeScript",
              "JavaScript",
              "SQLite",
              "MongoDB",
              "PostgreSQL",
              "Git",
              "REST APIs",
              "Bot Development"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
