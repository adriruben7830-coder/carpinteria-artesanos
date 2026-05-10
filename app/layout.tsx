import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Los Artesanos | Carpintería de Lujo',
    template: '%s | Los Artesanos'
  },
  description: 'Carpintería artesanal de alta gama en Barcelona. Muebles a medida, restauración y carpintería estructural.',
  keywords: ['carpintería', 'muebles a medida', 'artesanal', 'Barcelona', 'restauración'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Los Artesanos'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geist.className} bg-stone-950 text-stone-100 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}