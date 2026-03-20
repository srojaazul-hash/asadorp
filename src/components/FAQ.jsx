import React from 'react';
import { faqs } from '../data/mockData';

const FAQ = () => {
  return (
    <section className="section-padding bg-warm-bg">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Preguntas Frecuentes</h2>
          <p className="section-subtitle">Todo lo que necesitas saber antes de venir</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white p-6 rounded-lg shadow-sm border border-warm-border">
              <h3 className="text-lg font-bold text-warm-dark mb-2">{faq.question}</h3>
              <p className="text-warm-text">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;