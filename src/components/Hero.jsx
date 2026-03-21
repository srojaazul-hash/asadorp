import React from 'react';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';

const Hero = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  return (
    // ESTA ES LA CLAVE: 'h-screen' obliga a la foto a ocupar toda la pantalla
    <section className="relative h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Image - Se estira hasta cubrir el 'h-screen' del padre */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1764212942831-a0119af98d0c"
          alt="Pollo asado dorado"
          className="w-full h-full object-cover"
        />
        {/* Un degradado muy sutil solo abajo para que el corte no sea brusco */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Content - Flota en el centro, con sombra para que se lea perfecto */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white drop-shadow-2xl">
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
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light opactiy-90">
              Más de <span className="font-bold text-amber-400">{restaurantInfo.yearsInBusiness} años</span> haciendo lo mismo… pero mejor que nadie: 
              <span className="font-semibold"> comida casera lista para llevar</span>, sin esperas y sin complicaciones.
            </p>
          </div>

          {/* Botones - Los hemos subido un poco para que quepan bien en pantallas pequeñas */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
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