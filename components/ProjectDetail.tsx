"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import VoidBackground from "@/components/VoidBackground";

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
    <>
      <VoidBackground />
      <div className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        {/* Breadcrumb */}
        <motion.div className="mb-8" variants={fadeIn}>
          <Link href="/projetos" className="text-sm font-medium transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
            ← Voltar para projetos
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div className="mb-12" variants={fadeIn}>
          <motion.div className="flex items-center gap-3 mb-4" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text-primary)" }}>
              {project.title}
            </h1>
            {project.featured && (
              <span className="text-sm px-3 py-1 rounded-full"
                style={{ background: "var(--tag-bg)", border: "1px solid var(--tag-border)", color: "var(--text-secondary)" }}>
                Destaque
              </span>
            )}
          </motion.div>
          <motion.p className="text-xl mb-4 font-medium" style={{ color: "var(--text-secondary)" }} variants={fadeIn}>
            {project.client}
          </motion.p>
          <motion.p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }} variants={fadeIn}>
            {project.fullDescription}
          </motion.p>
          {project.url && (
            <motion.div variants={fadeIn}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                <span>Visitar Projeto</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* Tags */}
        {/* removido */}

        {/* Problema → Solução → Resultado */}
        <motion.div className="space-y-5 mb-12" variants={stagger}>
          {[
            { label: "Problema",  text: project.problem  },
            { label: "Solução",   text: project.solution },
            { label: "Resultado", text: project.result   },
          ].map(item => (
            <motion.div key={item.label} variants={fadeIn}
              className="rounded-2xl p-6 backdrop-blur-md"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
              <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text-muted)" }}>
                {item.label}
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-primary)" }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stack */}
        {/* removido */}

        {/* O que foi entregue */}
        <motion.div className="mb-12" variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>O que foi entregue</h2>
          <div className="rounded-2xl p-6 backdrop-blur-md" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <ul className="space-y-3">
              {project.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span style={{ color: "var(--text-muted)" }} className="mt-1">✓</span>
                  <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div className="rounded-2xl p-8 text-center backdrop-blur-md" variants={fadeIn}
          style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Interessado em um projeto similar?
          </h3>
          <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
            Entre em contato para discutir como posso ajudar seu servidor ou comunidade.
          </p>
          <Link href="/contato" className="btn-primary">Entrar em Contato</Link>
        </motion.div>
      </motion.div>
      </div>
    </>
  );
}
