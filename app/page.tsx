"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/projects";
import VoidButton from "@/components/VoidButton";
import VoidCard from "@/components/VoidCard";
import VoidBackground from "@/components/VoidBackground";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ArrowRight, Sparkles, Bot, Settings, Globe } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const stats = [
  { value: "10+", label: "Projetos entregues" },
  { value: "5/5", label: "Avaliação média" },
  { value: "2025", label: "Desde" },
  { value: "100%", label: "Estabilidade pós-entrega" },
];

const services = [
  { title: "Bots hospedados", description: "Soluções completas já desenvolvidas e testadas, prontas para implementação imediata.", icon: Bot, filter: "bot" },
  { title: "Bots personalizados", description: "Desenvolvimento de sistemas exclusivos adaptados às necessidades específicas do seu projeto.", icon: Settings, filter: "bot" },
  { title: "Configuração de servidores", description: "Setup completo com organização, hierarquia e automações profissionais.", icon: Sparkles, filter: "bot" },
  { title: "Criação de sites", description: "Desenvolvimento de sites modernos, responsivos e com design profissional.", icon: Globe, filter: "site" },
];

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  // Primeiros 2 são os principais (col-span-2 cada), resto normal
  const mainProjects = featuredProjects.slice(0, 2);
  const otherProjects = featuredProjects.slice(2);

  return (
    <>
      <VoidBackground />
      <div className="relative z-10">

        {/* Hero */}
        <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 py-20">
          <motion.div className="text-center max-w-4xl mx-auto" initial="initial" animate="animate" variants={stagger}>

            {/* Avatar */}
            <motion.div className="mb-8 flex justify-center" variants={fadeIn}>
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden"
                  style={{ border: "2px solid var(--card-border-hover)" }}>
                  <Image src="/1.jpg" alt="Enzo Morais" width={96} height={96} className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2"
                  style={{ background: "#22c55e", borderColor: "var(--bg)" }} />
              </div>
            </motion.div>

            {/* Subtítulo */}
            <motion.p className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }} variants={fadeIn}>
              Desenvolvedor • VØID Systems
            </motion.p>

            {/* Título */}
            <motion.h1
              className="text-7xl sm:text-8xl font-bold tracking-tighter leading-none mb-6"
              style={{ color: "var(--text-primary)" }}
              variants={fadeIn}
            >
              Enzo Morais
            </motion.h1>

            {/* Descrição */}
            <motion.p className="text-lg max-w-xl mx-auto mb-12" style={{ color: "var(--text-secondary)" }} variants={fadeIn}>
              Criador da VØID Systems. Desenvolvo bots, automações e sites para Discord — soluções prontas ou sob medida para qualquer tipo de servidor ou comunidade.
            </motion.p>

            {/* Botões */}
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" variants={fadeIn}>
              <VoidButton href="/projetos">
                Ver Projetos <ArrowRight className="w-5 h-5" />
              </VoidButton>
              <VoidButton href="/contato" variant="secondary">
                Entrar em Contato
              </VoidButton>
            </motion.div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="void-divider" />

        {/* Stats */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-5"
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeIn}>
                <VoidCard className="p-6 text-center">
                  <p className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    <AnimatedCounter target={stat.value} />
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
                </VoidCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Divider */}
        <div className="void-divider" />

        {/* O que eu faço */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.p className="text-sm uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }} variants={fadeIn}>Serviços</motion.p>
            <motion.h2 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }} variants={fadeIn}>
              O que eu faço
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeIn}>
                <Link href={`/projetos?categoria=${service.filter}`}>
                  <VoidCard className="h-full p-6 hover:scale-[1.01] transition-transform duration-200">
                    <div className="p-3 rounded-xl mb-5 inline-flex backdrop-blur-sm"
                      style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}>
                      <service.icon className="w-6 h-6" style={{ color: "var(--text-secondary)" }} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{service.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                      Ver projetos <ArrowRight className="w-3 h-3" />
                    </span>
                  </VoidCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Divider */}
        <div className="void-divider" />

        {/* Projetos em destaque */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.p className="text-sm uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }} variants={fadeIn}>Portfólio</motion.p>
            <motion.h2 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }} variants={fadeIn}>
              Projetos em destaque
            </motion.h2>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            {/* Projetos principais — largura total */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {mainProjects.map((project) => (
                <motion.div key={project.id} variants={fadeIn}>
                  <VoidCard className="p-6 sm:p-8 flex flex-col" style={{ border: "1px solid var(--card-border-hover)" }}>
                    <Link href={`/projetos/${project.slug}`} className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-2 py-1 rounded-full font-medium"
                          style={{ background: "var(--tag-bg)", border: "1px solid var(--tag-border)", color: "var(--text-muted)" }}>
                          Principal
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                      <p className="mb-4 font-medium" style={{ color: "var(--text-secondary)" }}>{project.client}</p>
                      <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.description}</p>
                    </Link>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                        style={{ color: "var(--text-secondary)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
                        Ver site <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </VoidCard>
                </motion.div>
              ))}
            </div>

            {/* Outros destaques — grid 3 colunas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {otherProjects.map((project) => (
                <motion.div key={project.id} variants={fadeIn}>
                  <VoidCard className="h-full p-6 flex flex-col">
                    <Link href={`/projetos/${project.slug}`} className="flex-1">
                      <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                      <p className="mb-3 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{project.client}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.description}</p>
                    </Link>
                  </VoidCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="text-center" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
            <VoidButton href="/projetos" variant="secondary">
              Ver todos os projetos <ArrowRight className="w-4 h-4" />
            </VoidButton>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="void-divider" />

        {/* VØID Systems CTA */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
            <VoidCard className="p-10 sm:p-16 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, var(--divider) 0%, transparent 70%)" }} />
              <div className="relative text-center">
                <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>VØID Systems</p>
                <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Conheça a VØID Systems</h2>
                <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                  Bots prontos para uso, soluções sob medida e criação de sites. Tudo em um só lugar, com suporte e qualidade garantidos.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="https://www.voidsystems.store" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                    Ver site <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://discord.gg/voidsystems" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                    Discord
                  </a>
                </div>
              </div>
            </VoidCard>
          </motion.div>
        </section>

      </div>
    </>
  );
}
