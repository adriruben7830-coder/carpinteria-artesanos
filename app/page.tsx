import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/data/projects';

export default function HomePage() {
  const recentProjects = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1920"
          alt="Taller de carpintería Los Artesanos"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 via-stone-950/30 to-stone-950"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Badge className="bg-amber-700/20 text-amber-500 border-amber-700/30 mb-6 text-xs tracking-widest">
            CARPINTERÍA ARTESANAL DESDE 1987
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black text-stone-100 tracking-tight mb-6 leading-none">
            Arte en<br />
            <span className="text-amber-600">Madera</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Creamos piezas únicas que trascienden generaciones. 
            Cada proyecto es el resultado de décadas de tradición artesanal 
            y pasión por los materiales nobles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/proyectos"
              className="bg-amber-700 text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition font-semibold text-sm tracking-wide">
              Ver Proyectos
            </Link>
            <Link href="/contacto"
              className="border border-stone-700 text-stone-300 px-8 py-4 rounded-lg hover:border-amber-600 hover:text-amber-500 transition text-sm tracking-wide">
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-amber-600 to-transparent"></div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Badge className="bg-amber-700/20 text-amber-500 border-amber-700/30 mb-4 text-xs tracking-widest">
            NUESTROS SERVICIOS
          </Badge>
          <h2 className="text-4xl font-bold text-stone-100">Excelencia Artesanal</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Muebles a Medida', desc: 'Diseñamos y fabricamos cada pieza adaptada a tu espacio y estilo. Desde mesas hasta armarios, todo con madera maciza de primera calidad.', icon: '🪵' },
            { title: 'Restauración', desc: 'Devolvemos la vida a piezas antiguas con técnicas históricas y materiales auténticos. Respetamos cada detalle original.', icon: '🔨' },
            { title: 'Carpintería Estructural', desc: 'Tarimas, escaleras, vigas y revestimientos que combinan funcionalidad y belleza en cada detalle.', icon: '🏗️' }
          ].map((s) => (
            <Card key={s.title} className="bg-stone-900 border-stone-800 hover:border-amber-700/50 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-stone-100 font-bold text-xl mb-3 group-hover:text-amber-500 transition">{s.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PROYECTOS RECIENTES */}
      <section className="max-w-7xl mx-auto px-6 py-12 pb-24">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Badge className="bg-amber-700/20 text-amber-500 border-amber-700/30 mb-4 text-xs tracking-widest">
              PROYECTOS RECIENTES
            </Badge>
            <h2 className="text-4xl font-bold text-stone-100">Últimas Obras</h2>
          </div>
          <Link href="/proyectos" className="text-amber-600 hover:text-amber-500 transition text-sm tracking-wide hidden md:block">
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <Link href={`/proyectos/${project.slug}`} key={project.slug} className="group">
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-amber-700/80 text-white text-xs">{project.category}</Badge>
                </div>
              </div>
              <h3 className="text-stone-100 font-semibold group-hover:text-amber-500 transition">{project.title}</h3>
              <p className="text-stone-400 text-sm mt-1">{project.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-stone-900 border-y border-stone-800 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '35+', label: 'Años de experiencia' },
            { number: '500+', label: 'Proyectos realizados' },
            { number: '100%', label: 'Madera sostenible' },
            { number: '3', label: 'Generaciones' }
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-black text-amber-600 mb-2">{stat.number}</p>
              <p className="text-stone-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}