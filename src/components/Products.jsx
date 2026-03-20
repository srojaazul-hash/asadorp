import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { products, restaurantInfo } from '../data/mockData';
import { ShoppingBag, Plus, Minus, Send } from 'lucide-react';

const Products = () => {
  const [cart, setCart] = useState({});
  const [pickupTime, setPickupTime] = useState("");

  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: {
        ...product,
        quantity: (prev[product.id]?.quantity || 0) + 1
      }
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId]?.quantity > 1) {
        newCart[productId].quantity -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  // NUEVA FUNCIÓN: Extrae el precio con decimales correctamente
  const getPriceNumber = (priceString) => {
    // Cambia comas por puntos por si acaso y extrae números con decimales
    const cleanString = String(priceString).replace(',', '.');
    const match = cleanString.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const calculateTotal = () => {
    return Object.values(cart).reduce((total, item) => {
      return total + (getPriceNumber(item.price) * item.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    if (!pickupTime) {
      alert("Por favor, indica a qué hora pasarás a recogerlo.");
      return;
    }

    const total = calculateTotal();
    let message = `🍗 *NUEVO PEDIDO - ASADOR VÍCTOR* 🍗\n\n`;
    message += `🕒 *Hora de recogida:* ${pickupTime}\n\n`;
    message += `📦 *Mi pedido:*\n`;
    
    Object.values(cart).forEach(item => {
      message += `▪️ ${item.quantity}x ${item.name}\n`;
    });

    message += `\n💰 *Total a pagar:* ${total.toFixed(2)}€\n`;
    message += `💳 *Método:* Bizum al ${restaurantInfo.bizumNumber}\n\n`;
    message += `¡Hola! He realizado el pago por Bizum. ¿Me confirmas que está todo correcto?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  const total = calculateTotal();
  const hasItems = Object.keys(cart).length > 0;

  return (
    <section id="productos" className="section-padding bg-warm-light relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="text-base px-4 py-2 border-amber-700 text-amber-800 bg-transparent">
            Haz tu pedido online
          </Badge>
          <h2 className="section-title">
            Selecciona, paga por Bizum y recoge sin esperas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => {
            const quantity = cart[product.id]?.quantity || 0;

            return (
              <Card key={product.id} className="product-card group overflow-hidden border-2 hover:border-amber-600 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.featured && (
                    <Badge className="absolute top-4 right-4 bg-amber-600 text-white border-none">
                      ⭐ Estrella
                    </Badge>
                  )}
                </div>

                <CardHeader className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-warm-dark">{product.name}</CardTitle>
                    <span className="text-xl font-bold text-amber-700">{product.price}</span>
                  </div>
                  <CardDescription className="text-base text-warm-text">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <div className="p-6 pt-0 mt-auto">
                  {quantity === 0 ? (
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full py-3 bg-amber-100 text-amber-800 font-semibold rounded-lg hover:bg-amber-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus className="w-5 h-5" /> Añadir al pedido
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-amber-50 rounded-lg p-2 border border-amber-200">
                      <button 
                        onClick={() => removeFromCart(product.id)}
                        className="p-2 bg-white rounded-md shadow-sm text-amber-800 hover:bg-amber-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-lg text-warm-dark">{quantity}</span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="p-2 bg-amber-600 rounded-md shadow-sm text-white hover:bg-amber-700"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {hasItems && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border-2 border-amber-500 overflow-hidden animate-fade-in-up">
            <div className="bg-amber-600 text-white p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" /> Tu Pedido
              </h3>
              <span className="text-2xl font-black">{total.toFixed(2)}€</span>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="space-y-2 border-b border-gray-100 pb-4">
                {Object.values(cart).map(item => (
                  <div key={item.id} className="flex justify-between text-warm-dark">
                    <span>{item.quantity}x {item.name}</span>
                    <span className="font-semibold">{(getPriceNumber(item.price) * item.quantity).toFixed(2)}€</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="block font-semibold text-warm-dark">
                  ¿A qué hora vas a pasar a recogerlo?
                </label>
                <input 
                  type="time" 
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800 mb-2">
                  <strong>Paso 1:</strong> Haz un Bizum de <strong>{total.toFixed(2)}€</strong> al número:
                </p>
                <p className="text-2xl font-black text-blue-900 text-center tracking-wider mb-2">
                  {restaurantInfo.bizumNumber}
                </p>
                <p className="text-sm text-blue-800">
                  <strong>Paso 2:</strong> Pulsa el botón de abajo para enviarnos tu pedido y confirmarnos el pago.
                </p>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <Send className="w-6 h-6" />
                Confirmar y Enviar por WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;