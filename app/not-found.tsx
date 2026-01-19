import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-8xl font-bold mb-4 text-accent">404</h1>
        <h2 className="font-display text-3xl font-bold mb-4">
          Página não encontrada
        </h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8">
          A página que você está procurando não existe.
        </p>
        <Link href="/" className="btn-primary">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
