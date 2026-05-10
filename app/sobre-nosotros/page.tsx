import type { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Conoce la historia de Los Artesanos, tres generaciones de carpintería artesanal en Barcelona desde 1987.'
};

export default function SobreNosotrosPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-amber-700/20 text-amber-500 border-amber-700/30 mb-6 text-xs tracking-widest">
            NUESTRA HISTORIA
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-stone-100 mb-6">
            Tres Generaciones<br />
            <span className="text-amber-600">de Pasión</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Desde 1987, la familia Artesano ha dedicado su vida a transformar 
            la madera en obras que perduran para siempre.
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-stone-100 mb-6">El Origen del Taller</h2>
            <div className="space-y-4 text-stone-400 leading-relaxed">
              <p>
                En 1987, Josep Artesano abrió un pequeño taller en el barrio de Gràcia 
                con una creencia fundamental: la madera bien trabajada es el material 
                más noble que existe.
              </p>
              <p>
                Con apenas 25 años y una caja de herramientas heredada de su padre, 
                comenzó a crear muebles por encargo para los vecinos del barrio. 
                La calidad de su trabajo pronto corrió de boca en boca.
              </p>
              <p>
                Hoy, su hijo Marc y su nieta Laura llevan el legado familiar al siglo XXI, 
                combinando técnicas artesanales centenarias con un diseño contemporáneo 
                que seduce a los clientes más exigentes.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800"
              alt="Taller Los Artesanos"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-stone-900 border-y border-stone-800 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-amber-700/20 text-amber-500 border-amber-700/30 mb-4 text-xs tracking-widest">
              NUESTRO PROCESO
            </Badge>
            <h2 className="text-4xl font-bold text-stone-100">Del Árbol a tu Hogar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Selección', desc: 'Elegimos personalmente cada pieza de madera en aserraderos certificados.' },
              { step: '02', title: 'Diseño', desc: 'Trabajamos contigo para crear el diseño perfecto para tu espacio.' },
              { step: '03', title: 'Fabricación', desc: 'Cada pieza se trabaja a mano con herramientas tradicionales y modernas.' },
              { step: '04', title: 'Entrega', desc: 'Instalamos y terminamos cada detalle en tu hogar.' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-black text-amber-700/30 mb-4">{item.step}</div>
                <h3 className="text-stone-100 font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Badge className="bg-amber-700/20 text-amber-500 border-amber-700/30 mb-4 text-xs tracking-widest">
            NUESTROS VALORES
          </Badge>
          <h2 className="text-4xl font-bold text-stone-100">Lo que nos Define</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Sostenibilidad', desc: 'Solo trabajamos con madera certificada FSC de bosques gestionados de forma responsable.', icon: '🌱' },
            { title: 'Precisión', desc: 'Cada milímetro importa. Nuestros artesanos tienen una media de 20 años de experiencia.', icon: '🎯' },
            { title: 'Garantía', desc: 'Todos nuestros trabajos tienen garantía de por vida en estructura y materiales.', icon: '🛡️' }
          ].map((v) => (
            <div key={v.title} className="bg-stone-900 border border-stone-800 rounded-2xl p-8 hover:border-amber-700/50 transition">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-stone-100 font-bold text-xl mb-3">{v.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </>
  );
}