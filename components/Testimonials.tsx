import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-dark-800 to-black">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-serif text-white">
          Clientas <span className="text-gold-400">Felices</span>
        </h2>
        <div className="flex justify-center gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((i) => (
             <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-1">4.9/5 basado en opiniones reales</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-4 max-w-5xl mx-auto no-scrollbar">
        {TESTIMONIALS.map((t, idx) => (
          <div 
            key={idx} 
            className="min-w-[85vw] md:min-w-[350px] snap-center bg-dark-900 border border-gray-800 rounded-2xl p-6 relative flex flex-col justify-between shadow-lg"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-gold-900/40" />
            
            <div className="mb-4">
              <div className="flex gap-1 mb-3">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gold-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic leading-relaxed">"{t.text}"</p>
            </div>

            <div className="flex items-center gap-3 border-t border-gray-800 pt-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold-600 to-gold-300 flex items-center justify-center text-black font-bold text-xs">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white text-sm font-bold flex items-center gap-1">
                  {t.name}
                  {t.verified && <CheckCircle className="w-3 h-3 text-blue-400" />}
                </h4>
                <p className="text-[10px] text-gray-500">{t.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile Swipe Indicator */}
      <div className="flex justify-center gap-2 md:hidden">
        <div className="w-2 h-2 rounded-full bg-gold-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-700"></div>
        <div className="w-2 h-2 rounded-full bg-gray-700"></div>
      </div>
    </section>
  );
};