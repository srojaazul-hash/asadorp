import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir a la siguiente reseña
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  // Función para ir a la reseña anterior
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Calcular cuántas reseñas enseñar según la pantalla (1 en móvil, 3 en PC)
  const getVisibleTestimonials = () => {
    const visible = [];
    // Vamos a mostrar siempre 3 en la lista circular (aunque en móvil por CSS se oculte el resto)
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="section-padding bg-warm-light">
      <div className="container mx-auto px-4">
        {/* Cabecera */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="section-title">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex items-center justify-center gap-2 text-warm-text">
            <span className="font-semibold">Reseñas reales verificadas</span>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
              alt="Google logo" 
              className="w-5 h-5 inline-block"
            />
          </div>
        </div>

        {/* Contenedor del Carrusel */}
        <div className="relative max-w-6xl mx-auto flex items-center">
          
          {/* Botón Izquierda */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 z-10 -ml-4 md:-ml-8 bg-white p-3 rounded-full shadow-lg border border-warm-border text-amber-700 hover:bg-amber-50 hover:scale-110 transition-all"
            aria-label="Reseña anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Tarjetas */}
          <div className="w-full overflow-hidden px-4 md:px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out">
              {getVisibleTestimonials().map((testimonial, idx) => (
                <a 
                  key={`${testimonial.id}-${idx}`} 
                  href={testimonial.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block ${idx !== 0 ? 'hidden md:block' : ''}`} // En móvil solo mostramos la 1ª
                >
                  <Card className="testimonial-card bg-white border-2 hover:border-amber-500 hover:shadow-xl transition-all duration-300 h-full relative group">
                    <CardContent className="pt-8 pb-6 px-6 flex flex-col h-full">
                      
                      {/* Icono de Enlace en la esquina superior */}
                      <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-gray-300 group-hover:text-amber-500 transition-colors" />

                      {/* Estrellas */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                        ))}
                      </div>

                      {/* Texto de la reseña */}
                      <p className="text-warm-text italic leading-relaxed flex-grow relative z-10">
                        "{testimonial.text}"
                      </p>

                      {/* Autor y Fecha */}
                      <div className="flex justify-between items-end mt-6 pt-4 border-t border-gray-100">
                        <div>
                          <p className="font-bold text-warm-dark text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            Local Guide
                          </p>
                        </div>
                        <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded">
                          {testimonial.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Botón Derecha */}
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 z-10 -mr-4 md:-mr-8 bg-white p-3 rounded-full shadow-lg border border-warm-border text-amber-700 hover:bg-amber-50 hover:scale-110 transition-all"
            aria-label="Siguiente reseña"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Resumen Final */}
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps/place/?q=place_id:ChIJE38f8GxJQg0RJ-1mDLTNAgw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-amber-700 hover:text-amber-800 border-b-2 border-transparent hover:border-amber-700 transition-colors pb-1"
          >
            Ver las más de 400 reseñas en Google Maps <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;