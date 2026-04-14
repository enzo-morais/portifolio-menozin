"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import VoidCard from "@/components/VoidCard";
import FadeIn from "@/components/FadeIn";
import VoidBackground from "@/components/VoidBackground";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export default function Projetos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "Todos" },
    { value: "ticket", label: "Tickets" },
    { value: "inscricao", label: "Inscrição" },
    { value: "registro", label: "Registro" },
    { value: "hierarquia", label: "Hierarquia" },
    { value: "geral", label: "Geral" },
    { value: "administracao", label: "Administração" }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <VoidBackground />
      <div className="relative z-10">
        <div className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div className="mb-16" variants={fadeIn}>
              <p className="text-sm text-white/50 uppercase tracking-widest mb-3">
                Portfólio
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Projetos
              </h1>
              <p className="text-lg text-white/60 max-w-3xl">
                10 projetos desenvolvidos desde junho: do servidor DayZ aos clientes da ZinStore. 
                Todos com feedbacks 5/5 e zero necessidade de suporte pós-entrega.
              </p>
            </motion.div>

            {/* Filtros */}
            <motion.div 
              className="mb-12 space-y-6"
              variants={fadeIn}
            >
              {/* Busca */}
              <div>
                <input
                  type="text"
                  placeholder="Buscar projetos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-lg transition-all"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#ffffff",
                    outline: "none"
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
                  }}
                />
              </div>

              {/* Categorias */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const isSelected = selectedCategory === category.value;
                  return (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className="px-4 py-2 rounded-lg transition-all font-medium text-sm"
                      style={{
                        backgroundColor: isSelected ? "#ffffff" : "rgba(255,255,255,0.02)",
                        color: isSelected ? "#000000" : "#ffffff",
                        border: isSelected ? "none" : "1px solid rgba(255,255,255,0.06)"
                      }}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Grid de Projetos */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={fadeIn}>
                  <Link href={`/projetos/${project.slug}`}>
                    <VoidCard className="h-full p-6 flex flex-col">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-white">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span
                              className="text-xs px-2 py-1 rounded-full"
                              style={{
                                backgroundColor: "rgba(255,255,255,0.1)",
                                color: "#ffffff"
                              }}
                            >
                              Destaque
                            </span>
                          )}
                        </div>
                        
                        <p className="mb-3 text-white/60 font-medium">
                          {project.client}
                        </p>
                        
                        <p className="mb-4 text-white/50 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "#ffffff"
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

            {filteredProjects.length === 0 && (
              <motion.div className="text-center py-20" variants={fadeIn}>
                <p className="text-lg text-white/60 mb-6">
                  Nenhum projeto encontrado com os filtros selecionados.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="btn-primary"
                >
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
