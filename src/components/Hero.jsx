import React from 'react';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';

const Hero = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  return (
    // LA MAGIA ESTÁ AQUÍ: Le damos la foto directamente a la caja principal como "fondo de escritorio"
    <section 
      className="relative min-h-[100svh] flex items-center justify-center w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1764212942831-a0119af98d0c')" }}
    >
      {/* El cristal oscuro (ahora más sencillo y robusto) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* El contenido central */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white drop-shadow-xl">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <div className="inline-block px-6 py-2 bg-amber-600/90 backdrop-blur-sm rounded-full mb-4">
              <span className="text-sm font-semibold tracking-wider">Desde 1989</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-extrabold tracking-tight">
               {restaurantInfo.name}
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl font-light">
              El sabor de siempre, listo en minutos
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Más de <span className="font-bold text-amber-400">{restaurantInfo.yearsInBusiness} años</span> haciendo lo mismo… pero mejor que nadie: 
              <span className="font-semibold"> comida casera lista para llevar</span>, sin esperas y sin complicaciones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              onClick={handleCallClick}
              size="lg"
              className="cta-primary group bg-amber-600 hover:bg-amber-700 text-white border-none rounded-full px-8 py-6 text-lg"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Haz tu pedido: {restaurantInfo.phone}
            </Button>
            <Button 
              onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="cta-secondary border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              Ver Nuestros Productos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;