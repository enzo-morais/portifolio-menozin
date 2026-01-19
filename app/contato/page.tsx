"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discord: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem");
      }

      setStatus("success");
      setFormData({ name: "", email: "", discord: "", message: "" });
      
      // Resetar status após 5 segundos
      setTimeout(() => {
        setStatus("idle");
      }, 5000);

    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Erro ao enviar mensagem");
      
      // Resetar status de erro após 5 segundos
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          Contato
        </motion.h1>

        <motion.p 
          className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-12"
          variants={fadeIn}
        >
          Me chama para orçamento, dúvidas ou para discutir um projeto personalizado.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Links Sociais */}
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-2xl font-bold mb-6">
              Redes Sociais
            </h2>
            
            <div className="space-y-4">
              <a
                href="https://discord.gg/voidsystems"
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-4 hover:border-accent transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Discord</h3>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    VØID Systems
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/enzo_kkjkj/"
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-4 hover:border-accent transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instagram</h3>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    @enzo_kkjkj
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div variants={fadeIn}>
            <h2 className="font-display text-2xl font-bold mb-6">
              Enviar Mensagem
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="discord" className="block mb-2 text-sm font-medium">
                  Discord <span className="text-text-secondary-light dark:text-text-secondary-dark">(opcional)</span>
                </label>
                <input
                  type="text"
                  id="discord"
                  name="discord"
                  value={formData.discord}
                  onChange={handleChange}
                  placeholder="seu_usuario"
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark focus:border-accent focus:outline-none transition-colors resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
              </button>

              {/* Mensagens de feedback */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
                  ✓ Mensagem enviada com sucesso! Responderei em breve.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
                  ✗ {errorMessage || "Erro ao enviar mensagem. Tente novamente."}
                </div>
              )}
            </form>
          </motion.div>
        </div>

        {/* CTA VØID Systems */}
        <motion.div 
          className="card bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20"
          variants={fadeIn}
        >
          <h3 className="font-display text-2xl font-bold mb-4">
            Prefere conversar no Discord?
          </h3>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
            Entre no servidor da VØID Systems para tirar dúvidas, ver projetos em andamento 
            e conversar diretamente comigo.
          </p>
          <a 
            href="https://discord.gg/voidsystems"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Entrar no Discord
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
