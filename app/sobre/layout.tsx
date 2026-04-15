import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Enzo Morais",
  description: "Conheça minha trajetória desde 2024: do projeto DayZ à ZinStore, e da ZinStore à VØID Systems.",
  openGraph: {
    title: "Sobre | Enzo Morais",
    description: "Da criação de bots para DayZ à VØID Systems. Uma história de evolução e aprendizado.",
    images: [{ url: "/1.jpg", width: 200, height: 200, alt: "Enzo Morais" }],
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
