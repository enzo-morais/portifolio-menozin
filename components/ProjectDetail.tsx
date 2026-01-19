"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

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

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        {/* Breadcrumb */}
        <motion.div 
          className="mb-8 text-text-secondary-light dark:text-text-secondary-dark"
          variants={fadeIn}
        >
          <Link href="/projetos" className="hover:text-accent transition-colors">
            ← Voltar para projetos
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div className="mb-12" variants={fadeIn}>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              {project.title}
            </h1>
            {project.featured && (
              <span className="text-sm px-3 py-1 rounded-full bg-accent/20 text-accent">
                Destaque
              </span>
            )}
          </div>
          
          <p className="text-2xl text-accent mb-4">{project.client}</p>
          
          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div className="flex flex-wrap gap-2 mb-12" variants={fadeIn}>
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-4 py-2 rounded-xl bg-accent/10 text-accent"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Problema → Solução → Resultado */}
        <motion.div className="space-y-8 mb-12" variants={stagger}>
          <motion.div className="card" variants={fadeIn}>
            <h2 className="font-display text-2xl font-bold mb-4 text-red-400">
              Problema
            </h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg">
              {project.problem}
            </p>
          </motion.div>

          <motion.div className="card" variants={fadeIn}>
            <h2 className="font-display text-2xl font-bold mb-4 text-blue-400">
              Solução
            </h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg">
              {project.solution}
            </p>
          </motion.div>

          <motion.div className="card" variants={fadeIn}>
            <h2 className="font-display text-2xl font-bold mb-4 text-green-400">
              Resultado
            </h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg">
              {project.result}
            </p>
          </motion.div>
        </motion.div>

        {/* Stack */}
        <motion.div className="mb-12" variants={fadeIn}>
          <h2 className="font-display text-2xl font-bold mb-6">
            Stack Tecnológica
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* O que foi entregue */}
        <motion.div className="mb-12" variants={fadeIn}>
          <h2 className="font-display text-2xl font-bold mb-6">
            O que foi entregue
          </h2>
          <div className="card">
            <ul className="space-y-3">
              {project.deliverables.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-text-secondary-light dark:text-text-secondary-dark"
                >
                  <span className="text-accent mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="card bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 text-center"
          variants={fadeIn}
        >
          <h3 className="font-display text-2xl font-bold mb-4">
            Interessado em um projeto similar?
          </h3>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
            Entre em contato para discutir como posso ajudar seu servidor ou comunidade.
          </p>
          <Link href="/contato" className="btn-primary">
            Entrar em Contato
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
