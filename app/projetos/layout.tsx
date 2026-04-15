import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Enzo Morais",
  description: "Projetos desenvolvidos desde 2025: bots, automações e sites para Discord.",
  openGraph: {
    title: "Projetos | Enzo Morais",
    description: "Bots, automações e sites desenvolvidos para servidores e comunidades Discord.",
    images: [{ url: "/1.jpg", width: 200, height: 200, alt: "Enzo Morais" }],
  },
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
