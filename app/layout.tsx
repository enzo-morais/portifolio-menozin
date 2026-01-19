import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://seu-dominio.vercel.app'), // Mude para seu domínio real
  title: "Menozin - Desenvolvedor de Bots e Sistemas Discord",
  description: "Desenvolvendo bots e automações desde junho, com projetos reais e feedbacks 5/5. Da ZinStore à VØID Systems.",
  keywords: ["Discord", "Bots", "Automação", "VØID Systems", "ZinStore", "Desenvolvimento"],
  authors: [{ name: "Menozin" }],
  openGraph: {
    title: "Menozin - Desenvolvedor de Bots Discord",
    description: "De bots simples a sistemas completos para Discord. Projetos reais com feedbacks 5/5.",
    type: "website",
    images: [
      {
        url: '/logo.jpeg',
        width: 200,
        height: 200,
        alt: 'Menozin Logo',
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
