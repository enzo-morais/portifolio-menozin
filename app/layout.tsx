import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";

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
  title: "Enzo Morais - Desenvolvedor de Bots e Sistemas Discord",
  description:
    "Desenvolvendo bots e automações desde junho, com projetos reais e feedbacks 5/5. Da ZinStore à VØID Systems.",
  keywords: ["Discord", "Bots", "Automação", "VØID Systems", "ZinStore", "Desenvolvimento"],
  authors: [{ name: "Enzo Morais" }],
  icons: {
    icon: "/1.jpg",
    apple: "/1.jpg",
  },
  openGraph: {
    title: "Enzo Morais - Desenvolvedor de Bots Discord",
    description:
      "De bots simples a sistemas completos para Discord. Projetos reais com feedbacks 5/5.",
    type: "website",
    images: [
      {
        url: "/1.jpg",
        width: 200,
        height: 200,
        alt: "Enzo Morais Logo",
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
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen relative z-10 pt-16">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
