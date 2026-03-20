import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Phone, MapPin, Clock } from 'lucide-react';
import { restaurantInfo, scheduleInfo } from '../data/mockData';

const Contact = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  return (
    <section id="contacto" className="section-padding bg-warm-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="section-title">
             No cocines hoy
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-warm-dark">
            Haz lo fácil. Hazlo bien.
          </p>
          <p className="section-subtitle max-w-2xl mx-auto">
            Tu comida lista antes de que termines de pensarlo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-600">
            <CardHeader>
              <div className="mx-auto w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-amber-700" />
              </div>
              <CardTitle className="text-warm-dark">Teléfono</CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href={`tel:${restaurantInfo.phone}`}
                className="text-xl font-bold text-amber-700 hover:text-amber-800 transition-colors"
              >
                {restaurantInfo.phone}
              </a>
              <p className="text-sm text-warm-text mt-2">
                Llama y encarga tu pedido
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-600">
            <CardHeader>
              <div className="mx-auto w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-amber-700" />
              </div>
              <CardTitle className="text-warm-dark">Ubicación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-warm-dark">
                {restaurantInfo.address}
              </p>
              <p className="text-sm text-warm-text mt-2">
                Ven a recogernos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-600">
            <CardHeader>
              <div className="mx-auto w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-amber-700" />
              </div>
              <CardTitle className="text-warm-dark">Horario</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-warm-text leading-relaxed">
                {scheduleInfo.weekdays}
              </p>
              <p className="text-sm text-warm-text leading-relaxed mt-2">
                {scheduleInfo.weekends}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <Button 
            onClick={handleCallClick}
            size="lg"
            className="cta-primary text-lg px-8 py-6 h-auto"
          >
            <Phone className="w-6 h-6 mr-3" />
            Llama Ahora y Encarga: {restaurantInfo.phone}
          </Button>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-amber-50">
              <CardTitle className="text-center text-warm-dark flex items-center justify-center gap-2">
                <MapPin className="w-6 h-6 text-amber-700" />
                Encuéntranos en Alcalá de Henares
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96">
                <iframe
                  src={restaurantInfo.googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Asador de Pollos Víctor"
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;