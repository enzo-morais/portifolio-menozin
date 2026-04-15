"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 relative z-10" style={{ borderTop: "1px solid var(--card-border)" }}>
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0"
              style={{ border: "1px solid var(--card-border-hover)" }}>
              <Image src="/1.jpg" alt="Enzo Morais" width={28} height={28} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Enzo Morais. Todos os direitos reservados.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { href: "https://discord.gg/voidsystems", label: "Discord", external: true },
              { href: "https://github.com/enzo-morais", label: "GitHub", external: true },
              { href: "https://www.instagram.com/enzo_kkjkj/", label: "Instagram", external: true },
              { href: "https://www.voidsystems.store", label: "VØID Systems", external: true },
              { href: "/sobre", label: "Sobre", external: false },
              { href: "/contato", label: "Contato", external: false },
            ].map((link) =>
              link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                  {link.label}
                </Link>
              )
            )}
          </div>

        </div>
      </div>
    </footer>
  );
}
