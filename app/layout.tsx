import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Colegio La Candelaria | Institución Educativa Oficial",
  description:
    "Sitio web oficial del Colegio La Candelaria. Admisiones, plataforma académica, PQRSDF y transparencia institucional conforme a la Ley 1712 de 2014.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col bg-surface font-sans text-navy antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
