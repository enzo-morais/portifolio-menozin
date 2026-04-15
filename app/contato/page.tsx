"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import VoidCard from "@/components/VoidCard";
import VoidBackground from "@/components/VoidBackground";
import { MessageSquare, ArrowRight, Copy, Check } from "lucide-react";

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const inputStyle = {
  background: "var(--input-bg)",
  border: "1px solid var(--input-border)",
  color: "var(--text-primary)",
  outline: "none",
};

export default function Contato() {
  const [formData, setFormData] = useState({ name: "", email: "", discord: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [emailError, setEmailError] = useState("");

  const copyDiscord = () => {
    navigator.clipboard.writeText("xmenozin");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateEmail = (email: string) => {
    if (!email) { setEmailError(""); return; }
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(valid ? "" : "Email inválido");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao enviar mensagem");
      setStatus("success");
      setFormData({ name: "", email: "", discord: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Erro ao enviar mensagem");
      setTimeout(() => { setStatus("idle"); setErrorMessage(""); }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") validateEmail(e.target.value);
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "var(--input-border-focus)");
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "var(--input-border)");

  return (
    <>
      <VoidBackground />
      <div className="relative z-10">
        <div className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div initial="initial" animate="animate" variants={stagger}>

            {/* Header */}
            <motion.div className="mb-16" variants={fadeIn}>
              <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Contato</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Vamos conversar</h1>
              <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                Me chama para orçamento, dúvidas ou para discutir um projeto personalizado.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeIn}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Redes Sociais</h2>
                <div className="grid grid-cols-2 gap-3">
                  {/* Discord servidor */}
                  <a href="https://discord.gg/voidsystems" target="_blank" rel="noopener noreferrer">
                    <VoidCard className="p-5 flex items-center gap-3 hover:scale-[1.01] transition-transform duration-200 h-full">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}>
                        <MessageSquare className="w-5 h-5" style={{ color: "var(--text-primary)" }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Discord</h3>
                        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>VØID Systems</p>
                      </div>
                    </VoidCard>
                  </a>

                  {/* Username Discord com copiar */}
                  <VoidCard className="p-5 flex items-center gap-3 h-full">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}>
                      <MessageSquare className="w-5 h-5" style={{ color: "var(--text-primary)" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Username</h3>
                      <p className="text-xs font-mono truncate" style={{ color: "var(--text-secondary)" }}>xmenozin</p>
                    </div>
                    <button onClick={copyDiscord}
                      className="p-1.5 rounded-lg transition-all duration-200 flex-shrink-0"
                      style={{ background: "var(--tag-bg)", border: "1px solid var(--tag-border)" }}>
                      {copied
                        ? <Check className="w-3.5 h-3.5" style={{ color: "#22c55e" }} />
                        : <Copy className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
                      }
                    </button>
                  </VoidCard>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/enzo_kkjkj/" target="_blank" rel="noopener noreferrer">
                    <VoidCard className="p-5 flex items-center gap-3 hover:scale-[1.01] transition-transform duration-200 h-full">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}>
                        <svg className="w-5 h-5" fill="currentColor" style={{ color: "var(--text-primary)" }} viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Instagram</h3>
                        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>@enzo_kkjkj</p>
                      </div>
                    </VoidCard>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/enzo-morais" target="_blank" rel="noopener noreferrer">
                    <VoidCard className="p-5 flex items-center gap-3 hover:scale-[1.01] transition-transform duration-200">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}>
                        <svg className="w-5 h-5" fill="currentColor" style={{ color: "var(--text-primary)" }} viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>GitHub</h3>
                        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>enzo-morais</p>
                      </div>
                    </VoidCard>
                  </a>
                </div>
              </motion.div>

              {/* Formulário */}
              <motion.div variants={fadeIn}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Enviar Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: "name",    label: "Nome",    type: "text",  required: true,  placeholder: "Seu nome" },
                    { id: "email",   label: "Email",   type: "email", required: true,  placeholder: "seu@email.com" },
                    { id: "discord", label: "Discord", type: "text",  required: false, placeholder: "seu_usuario", optional: true },
                  ].map(field => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block mb-2 text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        {field.label} {field.optional && <span style={{ color: "var(--text-muted)" }}>(opcional)</span>}
                      </label>
                      <input type={field.type} id={field.id} name={field.id}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={handleChange} required={field.required}
                        disabled={status === "loading"}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-lg transition-all"
                        style={{
                          ...inputStyle,
                          borderColor: field.id === "email" && emailError ? "rgba(239,68,68,0.5)" : undefined,
                        }}
                        onFocus={focusStyle} onBlur={blurStyle} />
                      {field.id === "email" && emailError && (
                        <p className="mt-1 text-xs" style={{ color: "#ef4444" }}>{emailError}</p>
                      )}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium" style={{ color: "var(--text-primary)" }}>Mensagem</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                      required disabled={status === "loading"} rows={5}
                      className="w-full px-4 py-3 rounded-lg transition-all resize-none"
                      style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                  </div>

                  <button type="submit" disabled={status === "loading"} className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                  </button>

                  {status === "success" && (
                    <div className="p-4 rounded-lg text-sm" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "var(--text-primary)" }}>
                      ✓ Mensagem enviada com sucesso! Responderei em breve.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="p-4 rounded-lg text-sm" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "var(--text-primary)" }}>
                      ✗ {errorMessage || "Erro ao enviar mensagem. Tente novamente."}
                    </div>
                  )}
                </form>
              </motion.div>
            </div>

            {/* CTA Discord */}
            <motion.div variants={fadeIn}>
              <VoidCard className="p-10 sm:p-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, var(--divider) 0%, transparent 70%)" }} />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Prefere conversar no Discord?</h3>
                  <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                    Entre no servidor da VØID Systems para tirar dúvidas e conversar diretamente comigo.
                  </p>
                  <a href="https://discord.gg/voidsystems" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
                    Entrar no Discord <ArrowRight className="w-5 h-5" />
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
