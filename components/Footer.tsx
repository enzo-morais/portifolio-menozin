import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-light dark:border-border-dark mt-20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
            © {new Date().getFullYear()} Menozin. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://discord.gg/voidsystems"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent transition-colors"
            >
              Discord
            </a>
            <a
              href="https://www.instagram.com/enzo_kkjkj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <Link
              href="/contato"
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
