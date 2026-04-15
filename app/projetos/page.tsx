"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import VoidCard from "@/components/VoidCard";
import VoidBackground from "@/components/VoidBackground";

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const stagger = { animate: { transition: { staggerChildren: 0.05 } } };

const categories = [
  { value: "all",       label: "Todos" },
  { value: "bot",       label: "Bots" },
  { value: "site",      label: "Sites" },
  { value: "historico", label: "Histórico" },
];

function ProjetosContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Lê o parâmetro ?categoria= da URL
  useEffect(() => {
    const cat = searchParams.get("categoria");
    if (cat && categories.some(c => c.value === cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Debounce na busca — 300ms
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filtered = projects.filter(p => {
    const matchSearch = debouncedQuery === "" ||
      p.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(debouncedQuery.toLowerCase()));
    const matchCat = selectedCategory === "all" || p.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <>
      <VoidBackground />
      <div className="relative z-10">
        <div className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div initial="initial" animate="animate" variants={stagger}>

            {/* Header */}
            <motion.div className="mb-16" variants={fadeIn}>
              <motion.p className="text-sm uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }} variants={fadeIn}>
                Portfólio
              </motion.p>
              <motion.h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--text-primary)" }} variants={fadeIn}>
                Projetos
              </motion.h1>
              <motion.p className="text-lg max-w-3xl" style={{ color: "var(--text-secondary)" }} variants={fadeIn}>
                Projetos desenvolvidos desde 2025, atendendo clientes de diferentes segmentos.
              </motion.p>
            </motion.div>

            {/* Filtros */}
            <motion.div className="mb-12 space-y-4" variants={fadeIn}>
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg transition-all"
                style={{
                  background: "var(--input-bg)",
                  border: "1px solid var(--input-border)",
                  color: "var(--text-primary)",
                  outline: "none",
                }}
                onFocus={e => { e.currentTarget.style.borderColor = "var(--input-border-focus)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "var(--input-border)"; }}
              />
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => {
                  const active = selectedCategory === cat.value;
                  return (
                    <button key={cat.value} onClick={() => setSelectedCategory(cat.value)}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                      style={{
                        background: active ? "var(--btn-primary-bg)" : "var(--input-bg)",
                        color: active ? "var(--btn-primary-text)" : "var(--text-primary)",
                        border: active ? "none" : "1px solid var(--input-border)",
                      }}>
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Grid */}
            <motion.div key={`${selectedCategory}-${debouncedQuery}`}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              initial="initial" animate="animate" variants={stagger}>
              {filtered.map(project => (
                <motion.div key={project.id} variants={fadeIn}>
                  <Link href={`/projetos/${project.slug}`}>
                    <VoidCard className="h-full p-6 flex flex-col hover:scale-[1.01] transition-transform duration-200">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                          {project.featured && (
                            <span className="text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0"
                              style={{ background: "var(--tag-bg)", color: "var(--text-secondary)", border: "1px solid var(--tag-border)" }}>
                              Destaque
                            </span>
                          )}
                        </div>
                        <p className="mb-3 font-medium" style={{ color: "var(--text-secondary)" }}>{project.client}</p>
                        <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.description}</p>
                      </div>
                    </VoidCard>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <motion.div className="text-center py-20" variants={fadeIn}>
                <p className="text-lg mb-6" style={{ color: "var(--text-secondary)" }}>Nenhum projeto encontrado.</p>
                <button onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }} className="btn-primary">
                  Limpar Filtros
                </button>
              </motion.div>
            )}

          </motion.div>
        </div>
      </div>
    </>
  );
}

export default function Projetos() {
  return (
    <Suspense fallback={null}>
      <ProjetosContent />
    </Suspense>
  );
}
