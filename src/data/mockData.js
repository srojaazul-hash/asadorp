// Mock data para Asador de Pollos Víctor

import imagenPolloEntero from '../assets/chicken-1807883_640_520x500.jpg'
import imagenAlbondigas from '../assets/descarga.jpg'
import imagenCroquetas from '../assets/croquetas-de-pollo-2fp.jpg'
import imagenCostillar from '../assets/costillas-de-cerdo-al-horno.jpg'
import imagenEmpanadas from '../assets/como-hacer-empanadas-argentinas-paulina-cocina-recetas-800x450.jpg'
import imagenTortilla from '../assets/tortilla-de-patatas-con-cebolla.jpg'



export const restaurantInfo = {
  name: "Asador de Pollos Manuel",
  phone: "Número telefono", // Teléfono fijo del local
  whatsapp: "34693788384", // PON AQUÍ TU MÓVIL (Con el 34 delante si es España, sin el +)
  bizumNumber: "693788384", // El número que verá el cliente para hacer el Bizum
  address: "Alcalá de Henares, Madrid",
  email: "info@asadorvictor.com",
  yearsInBusiness: 35,
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1517.1514049759257!2d-3.3656923460258334!3d40.49068654179941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42496ec88aebbb%3A0x77dd4d335502d12f!2sRotonda%20de%20Alovera%2C%2028806%20Alcal%C3%A1%20de%20Henares%2C%20Madrid!5e0!3m2!1ses!2ses!4v1774035996090!5m2!1ses!2ses" 
};

export const scheduleInfo = {
  weekdays: "Lunes a Viernes: 10:00 - 14:30 / 17:00 - 21:00",
  weekends: "Sábados y Domingos: 10:00 - 15:00 / 17:00 - 21:30",
  holidays: "Consultar horario especial en festivos"
};

export const products = [
  {
    id: 1,
    name: "Pollo Asado Entero",
    description: "Nuestro producto estrella. Receta propia con más de 35 años de tradición.",
    price: "7.5€",
    image: imagenPolloEntero,
    featured: true
  },
  {
    id: 2,
    name: "Albondigas",
    description: "Perfecto para 1-2 personas. Jugoso y dorado al punto.",
    price: "2.9€",
    image: imagenAlbondigas,
    featured: false
  },
  {
    id: 3,
    name: "Croquetas Caseras",
    description: "De jamón, pollo y otras variedades. Receta tradicional.",
    price: "4.6€",
    image: imagenCroquetas,
    featured: false
  },
  {
    id: 4,
    name: "Empanadas",
    description: "Únicas en Alcalá. Receta auténtica.",
    price: "1.5€/ud",
    image: imagenEmpanadas,
    featured: true
  },
  {
    id: 5,
    name: "Tortilla Casera",
    description: "Recién hecha cada día. Jugosa y con el punto perfecto.",
    price: "4.6€",
    image: imagenTortilla,
    featured: false
  },
  {
    id: 6,
    name: "Costillar",
    description: "Receta tradicional. Lista para servir.",
    price: "11€",
    image: imagenCostillar,
    featured: false
  }
];

export const benefits = [
  {
    id: 1,
    title: "Rapidez Real",
    description: "Llegas, recoges y comes. Sin esperas innecesarias.",
    icon: "Clock"
  },
  {
    id: 2,
    title: "Sabor Probado",
    description: "Clientes fieles desde hace años avalan nuestras recetas.",
    icon: "Star"
  },
  {
    id: 3,
    title: "Precio Imbatible",
    description: "Comer bien no tiene que ser caro. Entre 1€ y 10€ por persona.",
    icon: "DollarSign"
  },
  {
    id: 4,
    title: "Comida Casera de Verdad",
    description: "Recetas tradicionales, sin complicaciones.",
    icon: "Heart"
  },
  {
    id: 5,
    title: "Ideal para Familias",
    description: "Con menos de lo que cuesta cocinar, tienes todo listo.",
    icon: "Users"
  },
  {
    id: 6,
    title: "Asado en su Punto",
    description: "Nuestros hornos garantizan ese dorado y crujiente perfecto en cada pollo.",
    icon: "Flame"
  }
];

export const testimonials = [
  {
    id: 1,
    text: "El pollo asado riquísimo, muy bien hecho y jugoso. Las raciones de patatas enormes y las croquetas caseras un espectáculo. Llevamos viniendo años.",
    author: "Juan C.",
    rating: 5,
    date: "Hace 2 meses",
    link: "https://www.google.com/maps/place/?q=place_id:ChIJE38f8GxJQg0RJ-1mDLTNAgw"
  },
  {
    id: 2,
    text: "Los mejores pollos de Alcalá sin duda. El trato es rápido a pesar de que suele haber cola los domingos. La salsa tiene un toque especial que no he probado en otro sitio.",
    author: "Elena P.",
    rating: 5,
    date: "Hace 1 semana",
    link: "https://www.google.com/maps/place/?q=place_id:ChIJE38f8GxJQg0RJ-1mDLTNAgw"
  },
  {
    id: 3,
    text: "Pides por teléfono, llegas y te lo tienen preparado. Rápido, eficaz y además está buenísimo. Tienen menú con patatas y refresco muy apañado.",
    author: "Miguel A.",
    rating: 4,
    date: "Hace 3 meses",
    link: "https://www.google.com/maps/place/?q=place_id:ChIJE38f8GxJQg0RJ-1mDLTNAgw"
  },
  {
    id: 4,
    text: "Llevan toda la vida en el barrio y no pierden la calidad. Las empanadas argentinas que traen ahora son un plus brutal. Totalmente recomendable para el finde.",
    author: "Sara M.",
    rating: 5,
    date: "Hace 5 meses",
    link: "https://www.google.com/maps/place/?q=place_id:ChIJE38f8GxJQg0RJ-1mDLTNAgw"
  },
  {
    id: 5,
    text: "Muy buena relación calidad-precio. El pollo no es seco y la salsa es abundante. Si vas un festivo o domingo a hora punta, mejor haber encargado antes.",
    author: "David L.",
    rating: 4,
    date: "Hace 1 año",
    link: "https://www.google.com/maps/place/?q=place_id:ChIJE38f8GxJQg0RJ-1mDLTNAgw"
  }
];

export const faqs = [
  {
    id: 1,
    question: "¿Se puede comer allí?",
    answer: "No, trabajamos exclusivamente para recogida. Más rápido, más eficiente."
  },
  {
    id: 2,
    question: "¿Hay que encargar?",
    answer: "Recomendado fines de semana. Puedes venir directamente, pero suele haber alta demanda."
  },
  {
    id: 3,
    question: "¿Cuánto cuesta comer aquí?",
    answer: "Entre 1€ y 10€ por persona. Difícil encontrar mejor relación calidad-precio."
  },
  {
    id: 4,
    question: "¿Qué es lo más recomendado?",
    answer: "El pollo asado. Siempre."
  },
  {
    id: 5,
    question: "¿Cuánto se tarda?",
    answer: "Minutos. Literalmente."
  }
];