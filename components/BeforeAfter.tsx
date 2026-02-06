import React from 'react';
import { CheckCircle2, ThumbsUp, ThumbsDown } from 'lucide-react';

export const BeforeAfter = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif text-gold-300 mb-2">
          El cambio que vas a notar
        </h2>
        <p className="text-gray-400 text-sm">desde el primer uso</p>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-8 max-w-4xl mx-auto">
        {/* Before */}
        <div className="relative group">
          <div className="absolute top-0 left-0 w-full bg-gray-800/80 text-center py-2 text-gray-400 font-bold text-sm tracking-widest z-10">
            ANTES
          </div>
          <img 
            src="https://i.imgur.com/cSYIHrJ.gif" 
            alt="Pantalón común" 
            className="w-full h-80 md:h-[500px] object-cover rounded-lg filter grayscale contrast-125 opacity-70"
          />
          <div className="mt-4 space-y-2">
            <p className="text-xs text-gray-400 flex gap-2">
              <span className="text-red-500">✖</span> No moldea ni estiliza
            </p>
            <p className="text-xs text-gray-400 flex gap-2">
              <span className="text-red-500">✖</span> Se transparenta
            </p>
            <div className="flex items-center gap-2 text-red-400 text-xs mt-2 border-t border-gray-800 pt-2">
              <ThumbsDown className="w-4 h-4" /> Te hace sentir insegura
            </div>
          </div>
        </div>

        {/* After */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full bg-gold-600/90 text-center py-2 text-black font-bold text-sm tracking-widest z-10 shadow-lg">
            DESPUÉS
          </div>
          <img 
            src="https://i.imgur.com/HdJ2eyH.gif" 
            alt="Flare Pants Premium" 
            className="w-full h-80 md:h-[500px] object-cover rounded-lg shadow-[0_0_15px_rgba(234,179,8,0.3)]"
          />
           <div className="mt-4 space-y-2">
            <p className="text-xs text-white flex gap-2">
              <CheckCircle2 className="w-3 h-3 text-gold-400 shrink-0" /> Moldea cintura y realza
            </p>
            <p className="text-xs text-white flex gap-2">
              <CheckCircle2 className="w-3 h-3 text-gold-400 shrink-0" /> Tela Suplex gruesa
            </p>
            <div className="flex items-center gap-2 text-gold-400 text-xs mt-2 border-t border-gray-700 pt-2 font-medium">
              <ThumbsUp className="w-4 h-4" /> Te ves más alta y firme
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};