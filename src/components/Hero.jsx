import React from 'react';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';

const Hero = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1764212942831-a0119af98d0c"
          alt="Pollo asado dorado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <div className="inline-block px-6 py-2 bg-amber-600/90 backdrop-blur-sm rounded-full mb-4">
              <span className="text-sm font-semibold tracking-wider">Desde 1989</span>
            </div>
            <h1 className="hero-title">
               {restaurantInfo.name}
            </h1>
            <p className="hero-subtitle">
              El sabor de siempre, listo en minutos
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
              Más de <span className="font-bold text-amber-400">{restaurantInfo.yearsInBusiness} años</span> haciendo lo mismo… pero mejor que nadie: 
              <span className="font-semibold"> comida casera lista para llevar</span>, sin esperas y sin complicaciones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              onClick={handleCallClick}
              size="lg"
              className="cta-primary group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              
              Haz tu pedido y paga por: {restaurantInfo.phone}
            </Button>
            <Button 
              onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="cta-secondary"
            >
              Ver Nuestros Productos
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-2xl">⚡</span>
              <span>Listo en minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-2xl">💰</span>
              <span>1€ - 10€ por persona</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-2xl">🏆</span>
              <span>Recetas probadas 35 años</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;