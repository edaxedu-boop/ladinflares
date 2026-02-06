import React, { useState, useEffect } from 'react';
import { Ruler, Palette, ChevronRight } from 'lucide-react';
import { PRODUCT_SIZES, PRODUCT_COLORS } from '../constants';

export const ProductShowcase = () => {
  const [randomColors, setRandomColors] = useState<typeof PRODUCT_COLORS>([]);

  useEffect(() => {
    // Algoritmo Fisher-Yates para mezcla aleatoria real
    const shuffleArray = (array: typeof PRODUCT_COLORS) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    setRandomColors(shuffleArray(PRODUCT_COLORS));
  }, []);

  return (
    <section className="py-12 bg-dark-900 border-t border-gray-900">
      
      {/* Title Header */}
      <div className="text-center px-4 mb-10">
        <h2 className="text-2xl font-serif text-white mb-2">
          Elige tu <span className="text-gold-400 italic">Estilo Perfecto</span>
        </h2>
        <p className="text-gray-400 text-sm">Disponibles en todas las tallas y colores de temporada</p>
      </div>

      {/* SIZES SECTION */}
      <div className="mb-12 px-4">
        <div className="flex items-center gap-2 mb-4 justify-center text-gray-300 text-sm">
          <Ruler className="w-4 h-4 text-gold-500" />
          <span className="uppercase tracking-widest font-bold">Tallas Disponibles</span>
        </div>
        
        <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
          {PRODUCT_SIZES.map((size, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-700 bg-dark-800 flex items-center justify-center text-xl font-bold text-white group-hover:border-gold-500 group-hover:bg-gold-500/10 group-hover:text-gold-400 transition-all duration-300 shadow-lg">
                {size.label}
              </div>
              <span className="text-[10px] text-gray-500 mt-2 group-hover:text-gold-300">
                Talla {size.desc}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <button className="text-xs text-gold-400 underline decoration-dotted hover:text-white transition-colors">
            ¿Dudas con tu talla? Ver guía completa
          </button>
        </div>
      </div>

      {/* COLORS CAROUSEL SECTION */}
      <div className="relative">
        <div className="px-6 mb-4 flex items-center justify-between">
           <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Palette className="w-4 h-4 text-gold-500" />
            <span className="uppercase tracking-widest font-bold">Colores en Tendencia</span>
          </div>
          <span className="text-[10px] text-gray-500 animate-pulse flex items-center">
            Desliza <ChevronRight className="w-3 h-3" />
          </span>
        </div>

        {/* Scrollable Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 no-scrollbar">
          {randomColors.map((color, idx) => (
            <div 
              key={idx} 
              className="min-w-[280px] md:min-w-[320px] snap-center flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-gray-800 mb-4 shadow-xl">
                <img 
                  src={color.image} 
                  alt={color.name} 
                  loading="lazy" 
                  decoding="async"
                  width="320"
                  height="480"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay at bottom for text readability */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Color Dot & Name Overlay inside the image */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: color.hex }}></div>
                  <div>
                    <h3 className="text-white text-lg font-bold font-serif shadow-black drop-shadow-md">{color.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};