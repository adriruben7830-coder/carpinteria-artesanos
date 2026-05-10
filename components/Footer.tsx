import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-amber-600 font-bold tracking-widest mb-3">LOS ARTESANOS</h3>
          <p className="text-stone-400 text-sm leading-relaxed">
            Carpintería artesanal de alta gama en Barcelona desde 1987.
            Cada pieza, una obra única.
          </p>
        </div>
        <div>
          <h4 className="text-stone-300 font-semibold mb-3 text-sm tracking-wide uppercase">Servicios</h4>
          <ul className="space-y-2 text-stone-400 text-sm">
            <li>Muebles a medida</li>
            <li>Restauración</li>
            <li>Carpintería estructural</li>
          </ul>
        </div>
        <div>
          <h4 className="text-stone-300 font-semibold mb-3 text-sm tracking-wide uppercase">Contacto</h4>
          <ul className="space-y-2 text-stone-400 text-sm">
            <li>Barcelona, España</li>
            <li>info@losartesanos.es</li>
            <li>+34 932 123 456</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-stone-800 text-center text-stone-600 text-xs">
        © 2026 Los Artesanos. Todos los derechos reservados.
      </div>
    </footer>
  );
}