import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seu-dominio.vercel.app"),
  title: "Menozin - Desenvolvedor de Bots e Sistemas Discord",
  description:
    "Desenvolvendo bots e automações desde junho, com projetos reais e feedbacks 5/5. Da ZinStore à VØID Systems.",
  keywords: ["Discord", "Bots", "Automação", "VØID Systems", "ZinStore", "Desenvolvimento"],
  authors: [{ name: "Menozin" }],
  openGraph: {
    title: "Menozin - Desenvolvedor de Bots Discord",
    description:
      "De bots simples a sistemas completos para Discord. Projetos reais com feedbacks 5/5.",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 200,
        height: 200,
        alt: "Menozin Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
