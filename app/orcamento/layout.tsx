import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Orçamento | Enzo Morais",
  description: "Calcule o valor estimado do seu projeto de bot Discord ou site. Selecione os serviços e veja o orçamento instantaneamente.",
};

export default function OrcamentoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
