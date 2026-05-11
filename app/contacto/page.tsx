'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactoPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const mensaje = formData.get('mensaje') as string;

    const newErrors: Record<string, string> = {};
    if (!nombre || nombre.length < 2) newErrors.nombre = 'El nombre es obligatorio';
    if (!email || !email.includes('@')) newErrors.email = 'Email no válido';
    if (!mensaje || mensaje.length < 10) newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');
    setErrors({});
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
  }

  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-amber-700/20 text-amber-500 border-amber-700/30 mb-6 text-xs tracking-widest">
            CONTACTO
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-stone-100 mb-6">
            Hablemos de<br />
            <span className="text-amber-600">tu Proyecto</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Cuéntanos qué tienes en mente y te responderemos en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        {status === 'success' ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-12 text-center">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-stone-100 mb-2">¡Mensaje enviado!</h2>
            <p className="text-stone-400">Te contactaremos en menos de 24 horas.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-stone-900 border border-stone-800 rounded-2xl p-8 space-y-6">
            <div>
              <Label htmlFor="nombre" className="text-stone-300 mb-2 block">Nombre *</Label>
              <Input id="nombre" name="nombre" placeholder="Tu nombre completo"
                className="bg-stone-800 border-stone-700 text-stone-100 focus:border-amber-600" />
              {errors.nombre && <p className="text-red-400 text-sm mt-1">{errors.nombre}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-stone-300 mb-2 block">Email *</Label>
              <Input id="email" name="email" type="email" placeholder="tu@email.com"
                className="bg-stone-800 border-stone-700 text-stone-100 focus:border-amber-600" />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="mensaje" className="text-stone-300 mb-2 block">Mensaje *</Label>
              <Textarea id="mensaje" name="mensaje" placeholder="Cuéntanos sobre tu proyecto..." rows={5}
                className="bg-stone-800 border-stone-700 text-stone-100 focus:border-amber-600" />
              {errors.mensaje && <p className="text-red-400 text-sm mt-1">{errors.mensaje}</p>}
            </div>
            <Button type="submit" disabled={status === 'loading'}
              className="w-full bg-amber-700 hover:bg-amber-600 text-white py-6 text-base font-semibold">
              {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
          </form>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { label: 'Dirección', value: 'Barcelona, España' },
            { label: 'Email', value: 'info@losartesanos.es' },
            { label: 'Teléfono', value: '+34 932 123 456' }
          ].map((item) => (
            <div key={item.label} className="bg-stone-900 border border-stone-800 rounded-xl p-6 text-center">
              <p className="text-stone-500 text-xs uppercase tracking-wider mb-2">{item.label}</p>
              <p className="text-stone-100 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}