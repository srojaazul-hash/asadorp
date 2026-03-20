import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { restaurantInfo, scheduleInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-400">
               Asador de Pollos Víctor
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Más de {restaurantInfo.yearsInBusiness} años sirviendo el mejor pollo asado de Alcalá de Henares. 
              Comida casera lista para llevar.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-amber-400 mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
              <a 
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{restaurantInfo.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>{restaurantInfo.address}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-amber-400 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Horario
            </h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>{scheduleInfo.weekdays}</p>
              <p>{scheduleInfo.weekends}</p>
              <p className="text-xs text-gray-400 mt-3">
                {scheduleInfo.holidays}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Asador de Pollos Víctor. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-2">
              Hecho con <span className="text-red-500">❤️</span> en Alcalá de Henares
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;