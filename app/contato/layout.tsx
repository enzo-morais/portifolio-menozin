import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Enzo Morais",
  description: "Entre em contato para orçamentos, dúvidas ou para discutir um projeto personalizado.",
  openGraph: {
    title: "Contato | Enzo Morais",
    description: "Entre em contato para orçamentos, dúvidas ou projetos personalizados.",
    images: [{ url: "/1.jpg", width: 200, height: 200, alt: "Enzo Morais" }],
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
