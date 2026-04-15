import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Perguntas Frequentes | Enzo Morais",
  description: "Tire suas dúvidas sobre desenvolvimento de bots Discord, preços, prazos, suporte e processo de trabalho.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
