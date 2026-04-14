"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/projects";
import VoidButton from "@/components/VoidButton";
import VoidCard from "@/components/VoidCard";
import FadeIn from "@/components/FadeIn";
import VoidBackground from "@/components/VoidBackground";
import { ArrowRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <VoidBackground />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 py-20">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white/70 mb-10 backdrop-blur-md"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)"
              }}
              variants={fadeIn}
            >
              <span className="w-2 h-2 rounded-full bg-white/50"></span>
              VØID Systems
            </motion.div>

            {/* Título com gradiente */}
            <motion.h1
              className="text-7xl sm:text-8xl font-bold tracking-tighter leading-none mb-6"
              style={{
                background: "linear-gradient(to right, #ffffff, #c0c0c0, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              variants={fadeIn}
            >
              Menozin
            </motion.h1>

            {/* Descrição */}
            <motion.p
              className="text-white/60 text-lg max-w-xl mx-auto mb-12"
              variants={fadeIn}
            >
              De bots simples a sistemas completos para Discord. Desenvolvendo soluções organizadas, funcionais e escaláveis desde junho.
            </motion.p>

            {/* Botões */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={fadeIn}
            >
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
        <div className="max-w-xs mx-auto h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />

        {/* O que eu faço */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              className="text-sm text-white/50 uppercase tracking-widest mb-3"
              variants={fadeIn}
            >
              Serviços
            </motion.p>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
              variants={fadeIn}
            >
              O que eu faço
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                title: "Bots hospedados",
                description: "Soluções completas já desenvolvidas e testadas, prontas para implementação imediata."
              },
              {
                title: "Bots personalizados",
                description: "Desenvolvimento de sistemas exclusivos adaptados às necessidades específicas do seu projeto."
              },
              {
                title: "Configuração de servidores",
                description: "Setup completo com organização, hierarquia e automações profissionais."
              },
              {
                title: "Design para Discord",
                description: "Criação de banners, layouts e identidade visual para servidores profissionais."
              }
            ].map((service, i) => (
              <motion.div key={service.title} variants={fadeIn}>
                <VoidCard className="h-full p-6">
                  <div
                    className="p-3 rounded-xl mb-5 inline-flex backdrop-blur-sm"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)"
                    }}
                  >
                    <div className="w-6 h-6 text-white/80">✨</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {service.description}
                  </p>
                </VoidCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Divider */}
        <div className="max-w-xs mx-auto h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />

        {/* Projetos em destaque */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              className="text-sm text-white/50 uppercase tracking-widest mb-3"
              variants={fadeIn}
            >
              Portfólio
            </motion.p>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
              variants={fadeIn}
            >
              Projetos em destaque
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {featuredProjects.map((project, i) => (
              <motion.div key={project.id} variants={fadeIn}>
                <Link href={`/projetos/${project.slug}`}>
                  <VoidCard className="h-full p-6 hover:border-white/20">
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/60 mb-4">{project.client}</p>

                    <p className="text-white/50 mb-6 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full text-white/70"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)"
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </VoidCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
            >
              Ver todos os projetos <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="max-w-xs mx-auto h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />

        {/* VØID Systems */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <VoidCard className="p-10 sm:p-16">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)"
                }}
              />
              <div className="relative">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  VØID Systems
                </h2>
                <p className="text-lg text-white/60 mb-4">
                  Estrutura profissional com equipe preparada para atendimento e um diferencial importante:{" "}
                  <strong className="text-white">bots hospedados</strong>, permitindo que clientes adquiram soluções prontas sem se preocupar com hospedagem.
                </p>
                <p className="text-lg text-white/60 mb-6">
                  Atualmente oferecemos Bot de Ticket hospedado e Bot de Anúncios hospedado.{" "}
                  <strong className="text-white">A VØID Systems está apenas no começo, com muitos novos sistemas, projetos e soluções planejadas para o futuro.</strong>
                </p>
                <a
                  href="https://discord.gg/voidsystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  Entrar no Discord <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </VoidCard>
          </motion.div>
        </section>
      </div>
    </>
  );
}
