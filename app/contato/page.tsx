"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import VoidCard from "@/components/VoidCard";
import FadeIn from "@/components/FadeIn";
import VoidBackground from "@/components/VoidBackground";
import { Mail, MessageSquare } from "lucide-react";

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
      
      setTimeout(() => {
        setStatus("idle");
      }, 5000);

    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Erro ao enviar mensagem");
      
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
                Contato
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Vamos conversar
              </h1>
              <p className="text-lg text-white/60">
                Me chama para orçamento, dúvidas ou para discutir um projeto personalizado.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Links Sociais */}
              <motion.div variants={fadeIn}>
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Redes Sociais
                </h2>
                
                <div className="space-y-4">
                  <a
                    href="https://discord.gg/voidsystems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <VoidCard className="p-6 flex items-center gap-4 hover:border-white/20">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)"
                        }}
                      >
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Discord</h3>
                        <p className="text-sm text-white/60">
                          VØID Systems
                        </p>
                      </div>
                    </VoidCard>
                  </a>

                  <a
                    href="https://www.instagram.com/enzo_kkjkj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <VoidCard className="p-6 flex items-center gap-4 hover:border-white/20">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)"
                        }}
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Instagram</h3>
                        <p className="text-sm text-white/60">
                          @enzo_kkjkj
                        </p>
                      </div>
                    </VoidCard>
                  </a>
                </div>
              </motion.div>

              {/* Formulário */}
              <motion.div variants={fadeIn}>
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Enviar Mensagem
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
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
                      className="w-full px-4 py-3 rounded-lg transition-all text-white"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
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

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
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
                      className="w-full px-4 py-3 rounded-lg transition-all text-white"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
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

                  <div>
                    <label htmlFor="discord" className="block mb-2 text-sm font-medium text-white">
                      Discord <span className="text-white/50">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      id="discord"
                      name="discord"
                      value={formData.discord}
                      onChange={handleChange}
                      placeholder="seu_usuario"
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-lg transition-all text-white placeholder:text-white/30"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
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

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
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
                      className="w-full px-4 py-3 rounded-lg transition-all text-white resize-none placeholder:text-white/30"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
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

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                  </button>

                  {/* Mensagens de feedback */}
                  {status === "success" && (
                    <div
                      className="p-4 rounded-lg text-white text-sm"
                      style={{
                        backgroundColor: "rgba(34, 197, 94, 0.1)",
                        border: "1px solid rgba(34, 197, 94, 0.2)"
                      }}
                    >
                      ✓ Mensagem enviada com sucesso! Responderei em breve.
                    </div>
                  )}

                  {status === "error" && (
                    <div
                      className="p-4 rounded-lg text-white text-sm"
                      style={{
                        backgroundColor: "rgba(239, 68, 68, 0.1)",
                        border: "1px solid rgba(239, 68, 68, 0.2)"
                      }}
                    >
                      ✗ {errorMessage || "Erro ao enviar mensagem. Tente novamente."}
                    </div>
                  )}
                </form>
              </motion.div>
            </div>

            {/* CTA VØID Systems */}
            <motion.div variants={fadeIn}>
              <VoidCard className="p-10 sm:p-16">
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)"
                  }}
                />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Prefere conversar no Discord?
                  </h3>
                  <p className="text-white/60 mb-6">
                    Entre no servidor da VØID Systems para tirar dúvidas, ver projetos em andamento 
                    e conversar diretamente comigo.
                  </p>
                  <a 
                    href="https://discord.gg/voidsystems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Entrar no Discord
                  </a>
                </div>
              </VoidCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
