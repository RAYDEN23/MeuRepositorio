import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BJ | Gestor de Currículos',
  description: 'Sistema moderno de gestão de currículos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-950 text-slate-100 antialiased`}>
        <Header />
        <main className="min-h-[calc(100vh-136px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}