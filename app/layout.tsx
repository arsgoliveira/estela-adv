import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Estela Sousa Advocacia | Defesa Estratégica dos Seus Direitos",
  description:
    "Advocacia com ética, firmeza e comprometimento. Direito Trabalhista, Família, Civil, Consumidor e Previdenciário. Atuação em todo o Brasil.",
  openGraph: {
    title: "Estela Sousa Advocacia",
    description:
      "Defesa estratégica dos seus direitos com ética, firmeza e comprometimento.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${sourceSans.variable} font-sans antialiased`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
