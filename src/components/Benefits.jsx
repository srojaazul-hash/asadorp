import React from 'react';
import { Clock, DollarSign, Heart,} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { benefits } from '../data/mockData';

const iconMap = {
  Clock: Clock,
  DollarSign: DollarSign,
  Heart: Heart,
};

const Benefits = () => {
  return (
    <section className="section-padding bg-warm-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="section-title">
            Por qué elegirnos
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Más de tres décadas sirviendo a familias de Alcalá de Henares
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <Card 
                key={benefit.id} 
                className="benefit-card text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-600 bg-white"
              >
                <CardHeader className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-amber-700" />
                  </div>
                  <CardTitle className="text-xl text-warm-dark flex items-center justify-center gap-2">
                    <span className="text-green-600 text-xl">✔</span>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-warm-text leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-700 to-amber-800 rounded-2xl p-8 md:p-12 text-white text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ideal para familias y fines de semana
          </h3>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Con menos de lo que cuesta cocinar, tienes todo listo. 
            <span className="font-semibold"> El secreto no es solo el pollo</span>, 
            es la rapidez, el sabor y esa sensación de <span className="font-semibold">"comida de casa"</span> que convierte cualquier día en domingo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;