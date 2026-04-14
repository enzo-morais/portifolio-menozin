import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: "rgba(255, 255, 255, 0.06)" }}>
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Menozin. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-8">
            <a
              href="https://discord.gg/voidsystems"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              Discord
            </a>
            <a
              href="https://www.instagram.com/enzo_kkjkj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              Instagram
            </a>
            <Link
              href="/contato"
              className="text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
