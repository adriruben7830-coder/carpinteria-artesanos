import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-widest text-stone-100">
            LOS <span className="text-amber-600">ARTESANOS</span>
          </span>
          <Badge variant="outline" className="text-xs text-amber-600 border-amber-600/30 hidden sm:flex">
            Desde 1987
          </Badge>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/proyectos" className="text-stone-400 hover:text-amber-500 transition text-sm tracking-wide">
            Proyectos
          </Link>
          <Link href="/sobre-nosotros" className="text-stone-400 hover:text-amber-500 transition text-sm tracking-wide">
            Nosotros
          </Link>
          <Link href="/contacto" className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition text-sm font-medium">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}