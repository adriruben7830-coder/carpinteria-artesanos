export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  materials: string[];
  category: string;
  year: number;
  duration: string;
}

export const projects: Project[] = [
  {
    slug: 'mesa-roble-macizo',
    title: 'Mesa de Roble Macizo',
    shortDescription: 'Mesa de comedor artesanal en roble macizo para 10 personas.',
    description: 'Pieza única tallada a mano en roble macizo de primera calidad. Diseño atemporal que combina tradición artesanal con estética contemporánea. Acabado con aceites naturales que realzan la veta natural de la madera.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800',
    ],
    materials: ['Roble macizo', 'Aceite natural', 'Cera de abeja'],
    category: 'Muebles a medida',
    year: 2024,
    duration: '6 semanas'
  },
  {
    slug: 'reforma-loft-barcelona',
    title: 'Reforma Loft Barcelona',
    shortDescription: 'Carpintería estructural completa para loft industrial en Barcelona.',
    description: 'Proyecto integral de carpintería para transformar un espacio industrial en vivienda de lujo. Incluye vigas vistas, tarima de madera maciza, armarios empotrados y escalera de madera y acero.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800',
    ],
    materials: ['Pino macizo', 'Roble americano', 'Acero inoxidable'],
    category: 'Carpintería estructural',
    year: 2024,
    duration: '12 semanas'
  },
  {
    slug: 'restauracion-armario-vintage',
    title: 'Restauración Armario Vintage',
    shortDescription: 'Restauración de armario modernista de principios del siglo XX.',
    description: 'Restauración completa de armario modernista catalán con marquetería original. Trabajo de precisión que incluye consolidación de la estructura, restauración de la marquetería y aplicación de barniz histórico.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    ],
    materials: ['Nogal', 'Barniz histórico', 'Cola de hueso'],
    category: 'Restauración',
    year: 2023,
    duration: '8 semanas'
  },
  {
    slug: 'cocina-nogal-macizo',
    title: 'Cocina en Nogal Macizo',
    shortDescription: 'Cocina a medida en nogal macizo con acabados de lujo.',
    description: 'Cocina completamente a medida diseñada y fabricada en nogal macizo. Incluye isla central, despensa integrada y estantes flotantes. Herrajes en latón envejecido que complementan la calidez de la madera.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800',
    ],
    materials: ['Nogal macizo', 'Latón envejecido', 'Piedra caliza'],
    category: 'Muebles a medida',
    year: 2024,
    duration: '10 semanas'
  }
];