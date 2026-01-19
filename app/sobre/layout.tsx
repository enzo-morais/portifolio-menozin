import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre - Menozin",
  description: "Conheça minha trajetória desde junho: do projeto DayZ à ZinStore, e da ZinStore à VØID Systems. Projetos reais com feedbacks 5/5.",
  openGraph: {
    title: "Sobre - Menozin",
    description: "Da criação de bots para DayZ à VØID Systems. Uma história de evolução e aprendizado.",
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
