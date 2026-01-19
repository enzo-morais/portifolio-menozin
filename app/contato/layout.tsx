import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - Menozin",
  description: "Entre em contato para orçamentos, dúvidas ou para discutir um projeto personalizado para Discord.",
  openGraph: {
    title: "Contato - Menozin",
    description: "Entre em contato para orçamentos, dúvidas ou projetos personalizados.",
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
