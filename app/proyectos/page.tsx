import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Galería de proyectos de carpintería artesanal de Los Artesanos.'
};

export const revalidate = 3600;

export default async function ProyectosPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-amber-700/20 text-amber-500 border-amber-700/30 mb-6 text-xs tracking-widest">
            NUESTRO TRABAJO
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-stone-100 mb-6">
            Cada Pieza,<br />
            <span className="text-amber-600">Una Historia</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Más de 500 proyectos realizados. Aquí mostramos algunos de los trabajos
            de los que nos sentimos más orgullosos.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link href={`/proyectos/${project.slug}`} key={project.slug} className="group">
              <div className={`relative rounded-2xl overflow-hidden ${index === 0 ? 'h-96' : 'h-72'}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-amber-700/80 text-white text-xs mb-2">{project.category}</Badge>
                  <h2 className="text-stone-100 font-bold text-2xl group-hover:text-amber-500 transition">{project.title}</h2>
                  <p className="text-stone-300 text-sm mt-1">{project.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
