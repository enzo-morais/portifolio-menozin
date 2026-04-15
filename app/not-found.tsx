import Link from "next/link";
import VoidBackground from "@/components/VoidBackground";

export default function NotFound() {
  return (
    <>
      <VoidBackground />
      <div className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>Erro</p>
          <h1 className="text-9xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>404</h1>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Página não encontrada
          </h2>
          <p className="mb-10 max-w-sm mx-auto" style={{ color: "var(--text-secondary)" }}>
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link href="/" className="btn-primary">
            Voltar para Home
          </Link>
        </div>
      </div>
    </>
  );
}
