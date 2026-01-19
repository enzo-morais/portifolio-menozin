"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
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

  console.log("Selected Category:", selectedCategory);
  console.log("Search Query:", searchQuery);
  console.log("Filtered Projects:", filteredProjects.length);
  console.log("All Projects:", projects.length);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1 
          className="font-display text-5xl md:text-6xl font-bold mb-8"
          variants={fadeIn}
        >
          Projetos
        </motion.h1>

        <motion.p 
          className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-12 max-w-3xl"
          variants={fadeIn}
        >
          10 projetos desenvolvidos desde junho: do servidor DayZ aos clientes da ZinStore. 
          Todos com feedbacks 5/5 e zero necessidade de suporte pós-entrega.
        </motion.p>

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
              onChange={(e) => {
                console.log("Search query:", e.target.value);
                setSearchQuery(e.target.value);
              }}
              className="w-full px-6 py-4 rounded-xl transition-colors"
              style={{
                backgroundColor: 'rgb(17, 21, 27)',
                border: '1px solid rgb(27, 35, 48)',
                color: 'rgb(237, 239, 242)',
                outline: 'none'
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
                  onClick={() => {
                    console.log("Clicking category:", category.value);
                    setSelectedCategory(category.value);
                  }}
                  className="px-4 py-2 rounded-xl transition-all font-medium"
                  style={{
                    backgroundColor: isSelected ? 'rgb(107, 134, 168)' : 'rgb(17, 21, 27)',
                    color: isSelected ? 'white' : 'rgb(237, 239, 242)',
                    border: isSelected ? 'none' : '1px solid rgb(27, 35, 48)'
                  }}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <Link href={`/projetos/${project.slug}`}>
                <div className="card h-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-xl font-semibold">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-xs px-2 py-1 rounded-full" style={{
                          backgroundColor: 'rgba(107, 134, 168, 0.2)',
                          color: 'rgb(107, 134, 168)'
                        }}>
                          Destaque
                        </span>
                      )}
                    </div>
                    
                    <p className="mb-3" style={{ color: 'rgb(107, 134, 168)' }}>
                      {project.client}
                    </p>
                    
                    <p className="mb-4 opacity-70">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: 'rgba(107, 134, 168, 0.1)',
                          color: 'rgb(107, 134, 168)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl opacity-70 mb-6">
              Nenhum projeto encontrado com os filtros selecionados.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-6 py-3 rounded-xl font-medium text-white"
              style={{ backgroundColor: 'rgb(107, 134, 168)' }}
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
