"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/projects";

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

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Section */}
      <motion.section 
        className="min-h-[80vh] flex flex-col justify-center"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div 
          className="flex items-center gap-6 mb-6"
          variants={fadeIn}
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-accent/30">
            <img 
              src="/logo.jpeg" 
              alt="Menozin Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold">
            Menozin
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-2xl md:text-3xl text-text-secondary-light dark:text-text-secondary-dark mb-4"
          variants={fadeIn}
        >
          De bots simples a sistemas completos para Discord.
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mb-8"
          variants={fadeIn}
        >
          Desenvolvendo bots e automações desde junho, com projetos reais e feedbacks 5/5. 
          Da ZinStore à VØID Systems, criando soluções organizadas, funcionais e escaláveis.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4"
          variants={fadeIn}
        >
          <Link href="/projetos" className="btn-primary">
            Ver Projetos
          </Link>
          <Link href="/contato" className="btn-secondary">
            Entrar em Contato
          </Link>
        </motion.div>
      </motion.section>

      {/* O que eu faço */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 
          className="font-display text-4xl font-bold mb-12"
          variants={fadeIn}
        >
          O que eu faço
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Bots hospedados e prontos para usar",
              description: "Soluções completas já desenvolvidas e testadas, prontas para implementação imediata no seu servidor."
            },
            {
              title: "Bots personalizados sob demanda",
              description: "Desenvolvimento de sistemas exclusivos adaptados às necessidades específicas do seu projeto."
            },
            {
              title: "Configuração profissional de servidores",
              description: "Setup completo de servidores Discord com organização, hierarquia e automações."
            },
            {
              title: "Design para Discord",
              description: "Criação de banners, layouts e identidade visual para servidores profissionais."
            }
          ].map((service, index) => (
            <motion.div 
              key={index}
              className="card"
              variants={fadeIn}
            >
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projetos em destaque */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 
          className="font-display text-4xl font-bold mb-12"
          variants={fadeIn}
        >
          Projetos em destaque
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={fadeIn}
            >
              <Link href={`/projetos/${project.slug}`}>
                <div className="card hover:border-accent transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-accent">{project.client}</p>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn}>
          <Link 
            href="/projetos"
            className="inline-block text-accent hover:text-accent-hover transition-colors"
          >
            Ver todos os projetos →
          </Link>
        </motion.div>
      </motion.section>

      {/* VØID Systems */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="card bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <h2 className="font-display text-3xl font-bold mb-4">
            VØID Systems
          </h2>
          <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-4">
            Estrutura profissional com equipe preparada para atendimento e um diferencial importante: 
            <strong> bots hospedados</strong>, permitindo que clientes adquiram soluções prontas sem se 
            preocupar com hospedagem.
          </p>
          <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-6">
            Atualmente oferecemos Bot de Ticket hospedado e Bot de Anúncios hospedado. 
            <strong> A VØID Systems está apenas no começo, com muitos novos sistemas, projetos e 
            soluções planejadas para o futuro.</strong>
          </p>
          <a 
            href="https://discord.gg/voidsystems"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Entrar no Discord
          </a>
        </div>
      </motion.section>
    </div>
  );
}
