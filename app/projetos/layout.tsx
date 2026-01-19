import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos - Menozin",
  description: "10 projetos desenvolvidos: desde bots para DayZ até sistemas completos para empresas. Todos com feedbacks 5/5.",
  openGraph: {
    title: "Projetos - Menozin",
    description: "Projetos reais desenvolvidos para Discord: bots de ticket, sistemas de inscrição, automações e muito mais.",
  },
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
