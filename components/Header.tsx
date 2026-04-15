"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSelect from "./ThemeSelect";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/projetos", label: "Projetos" },
    { href: "/orcamento", label: "Orçamento" },
    { href: "/faq", label: "FAQ" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500"
      style={{ padding: scrolled ? "12px 24px" : "0px 0px" }}
    >
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full transition-all duration-500"
        style={{
          maxWidth: scrolled ? "1000px" : "100%",
          borderRadius: scrolled ? "16px" : "0px",
          background: scrolled
            ? "var(--header-bg-scrolled)"
            : "var(--header-bg)",
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          border: "1px solid var(--card-border)",
          boxShadow: scrolled ? "0 8px 32px rgba(0, 0, 0, 0.4)" : "none",
        }}
      >
        <nav
          className="flex items-center justify-between transition-all duration-500"
          style={{ padding: scrolled ? "14px 40px" : "20px 48px" }}
        >
          {/* Logo — esquerda */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div
              className="overflow-hidden rounded-full transition-all duration-500 flex-shrink-0"
              style={{
                width: scrolled ? "28px" : "36px",
                height: scrolled ? "28px" : "36px",
                border: "1px solid var(--card-border-hover)",
              }}
            >
              <Image
                src={scrolled ? "/2.jpg" : "/1.jpg"}
                alt="Enzo Morais"
                width={36}
                height={36}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <span
              className="font-bold tracking-tight transition-all duration-500"
              style={{ fontSize: scrolled ? "15px" : "20px", color: "var(--text-primary)" }}
            >
              Enzo Morais
            </span>
          </Link>

          {/* Links — centro */}
          <ul className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium transition-all duration-200"
                  style={{
                    fontSize: scrolled ? "13px" : "14px",
                    color: pathname === link.href ? "var(--text-primary)" : "var(--text-muted)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = pathname === link.href ? "var(--text-primary)" : "var(--text-muted)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botões — direita */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <ThemeSelect small={scrolled} />
            <Link
              href="/contato"
              className="hidden md:inline-flex items-center font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                padding: scrolled ? "5px 14px" : "8px 18px",
                fontSize: scrolled ? "12px" : "14px",
                background: "var(--btn-primary-bg)",
                color: "var(--btn-primary-text)",
              }}
            >
              Contratar
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-primary)" }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              style={{ borderTop: "1px solid var(--card-border)" }}
            >
              <ul className="px-5 py-4 space-y-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                      style={{ color: pathname === link.href ? "var(--text-primary)" : "var(--text-secondary)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 flex items-center gap-2">
                  <div className="flex-1">
                    <Link
                      href="/contato"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold"
                      style={{ background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)" }}
                    >
                      Contratar
                    </Link>
                  </div>
                  <ThemeSelect small />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
