import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyecto no encontrado' };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image]
    }
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <Link href="/proyectos" className="text-amber-600 text-sm hover:text-amber-500 transition mb-4 block">
            ← Volver a proyectos
          </Link>
          <Badge className="bg-amber-700/80 text-white text-xs mb-4">{project.category}</Badge>
          <h1 className="text-5xl md:text-6xl font-black text-stone-100">{project.title}</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-stone-100 mb-6">Descripción del Proyecto</h2>
            <p className="text-stone-400 leading-relaxed text-lg">{project.description}</p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative h-64 rounded-xl overflow-hidden">
                  <Image src={img} alt={`${project.title} ${i + 1}`} fill className="object-cover hover:scale-105 transition duration-500" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sticky top-24">
              <h3 className="text-stone-100 font-bold text-lg mb-6">Detalles del Proyecto</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Categoría</p>
                  <p className="text-stone-100">{project.category}</p>
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Año</p>
                  <p className="text-stone-100">{project.year}</p>
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Duración</p>
                  <p className="text-stone-100">{project.duration}</p>
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-wider mb-2">Materiales</p>
                  <div className="flex flex-wrap gap-2">
                    {project.materials.map((m) => (
                      <Badge key={m} variant="outline" className="text-amber-600 border-amber-700/30 text-xs">{m}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/contacto" className="block mt-8 bg-amber-700 text-white text-center py-3 rounded-lg hover:bg-amber-600 transition font-medium text-sm">
                Solicitar Proyecto Similar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}