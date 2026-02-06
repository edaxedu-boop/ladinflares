import React from 'react';
import { Sparkles, Maximize2, ShieldCheck, Layers } from 'lucide-react';

export const ProductDetails = () => {
  return (
    <section className="py-16 px-4 bg-dark-900 overflow-hidden relative border-t border-gray-900">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-white mb-2">
            La Anatomía del <span className="text-gold-400 italic">Pantalón Perfecto</span>
          </h2>
          <p className="text-gray-400 text-sm">Diseñado pensando en cada detalle de tu cuerpo</p>
        </div>

        {/* Anatomy Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          
          {/* Central Image */}
          <div className="relative w-full max-w-[280px] md:max-w-sm mx-auto order-1 md:order-2 mt-8 md:mt-0">
            {/* Glow Effect behind image */}
            <div className="absolute inset-0 bg-gold-500/10 blur-3xl rounded-full"></div>
            <img 
              src="https://i.imgur.com/BCGP5hF.gif" 
              alt="Detalle Pantalón Flare" 
              className="relative z-10 w-full rounded-2xl border border-gray-800 shadow-2xl"
            />

            {/* Pointer: Pretina 10cm (Top Left) */}
            <div className="absolute top-[18%] -left-6 md:-left-24 flex items-center gap-2 z-20">
              <div className="bg-dark-800/95 backdrop-blur border border-gold-500/50 p-2 rounded-lg shadow-xl text-xs md:text-sm text-white w-32 md:w-auto text-right md:text-right">
                <span className="font-bold text-gold-400 block text-sm">Pretina 10cm</span>
                <span className="text-[10px] text-gray-300">Control abdomen</span>
              </div>
              <div className="hidden md:block w-12 h-[1px] bg-gold-500"></div>
              <div className="w-3 h-3 bg-gold-500 rounded-full border-2 border-white shadow-[0_0_10px_#EAB308] absolute -right-1.5 md:relative md:right-0 top-1/2 -translate-y-1/2 md:translate-y-0"></div>
            </div>

            {/* Pointer: Semi Fajero (Top Right) */}
            <div className="absolute top-[25%] -right-6 md:-right-24 flex items-center gap-2 z-20 flex-row-reverse">
              <div className="bg-dark-800/95 backdrop-blur border border-gold-500/50 p-2 rounded-lg shadow-xl text-xs md:text-sm text-white w-32 md:w-auto text-left">
                <span className="font-bold text-gold-400 block text-sm">Semi Fajero</span>
                <span className="text-[10px] text-gray-300">Moldea cintura</span>
              </div>
              <div className="hidden md:block w-12 h-[1px] bg-gold-500"></div>
              <div className="w-3 h-3 bg-gold-500 rounded-full border-2 border-white shadow-[0_0_10px_#EAB308] absolute -left-1.5 md:relative md:left-0 top-1/2 -translate-y-1/2 md:translate-y-0"></div>
            </div>

             {/* Pointer: No Transluce (Mid Left - Hip area) */}
             <div className="absolute top-[48%] -left-6 md:-left-28 flex items-center gap-2 z-20">
              <div className="bg-dark-800/95 backdrop-blur border border-gold-500/50 p-2 rounded-lg shadow-xl text-xs md:text-sm text-white w-32 md:w-auto text-right md:text-right">
                <span className="font-bold text-gold-400 block text-sm">No Transluce</span>
                <span className="text-[10px] text-gray-300">Seguridad total</span>
              </div>
              <div className="hidden md:block w-12 h-[1px] bg-gold-500"></div>
              <div className="w-3 h-3 bg-gold-500 rounded-full border-2 border-white shadow-[0_0_10px_#EAB308] absolute -right-1.5 md:relative md:right-0 top-1/2 -translate-y-1/2 md:translate-y-0"></div>
            </div>

            {/* Pointer: Suplex Alicrado (Bottom Right - Leg) */}
            <div className="absolute bottom-[20%] -right-6 md:-right-24 flex items-center gap-2 z-20 flex-row-reverse">
              <div className="bg-dark-800/95 backdrop-blur border border-gold-500/50 p-2 rounded-lg shadow-xl text-xs md:text-sm text-white w-32 md:w-auto text-left">
                <span className="font-bold text-gold-400 block text-sm">Suplex Alicrado</span>
                <span className="text-[10px] text-gray-300">Elasticidad Premium</span>
              </div>
              <div className="hidden md:block w-12 h-[1px] bg-gold-500"></div>
              <div className="w-3 h-3 bg-gold-500 rounded-full border-2 border-white shadow-[0_0_10px_#EAB308] absolute -left-1.5 md:relative md:left-0 top-1/2 -translate-y-1/2 md:translate-y-0"></div>
            </div>
          </div>

        </div>

        {/* What is Suplex Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gold-900/30 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <Layers className="w-32 h-32 text-white" />
          </div>
          
          <h3 className="text-xl md:text-2xl font-serif text-white mb-4 flex items-center gap-2 relative z-10">
            ¿Qué es la tela <span className="text-gold-400">Suplex?</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div className="text-gray-300 text-sm leading-relaxed space-y-4">
              <p>
                El Suplex es una <strong>tecnología textil inteligente</strong>, superior al algodón y a la lycra común. Gracias a su alto gramaje y elasticidad, permite que la prenda se estire hasta un 40% sin perder su forma original.
              </p>
              <p>
                A diferencia de telas baratas, el Suplex comprime suavemente (efecto faja) ocultando celulitis y flacidez, mientras permite que tu piel respire. Es suave al tacto y extremadamente resistente.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-dark-800 p-3 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center hover:border-gold-500/50 transition-colors">
                <ShieldCheck className="w-6 h-6 text-gold-500 mb-2" />
                <span className="text-xs font-bold text-white">Cero Transparencia</span>
              </div>
              <div className="bg-dark-800 p-3 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center hover:border-gold-500/50 transition-colors">
                <Maximize2 className="w-6 h-6 text-gold-500 mb-2" />
                <span className="text-xs font-bold text-white">Alta Elasticidad</span>
              </div>
              <div className="bg-dark-800 p-3 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center hover:border-gold-500/50 transition-colors">
                <Sparkles className="w-6 h-6 text-gold-500 mb-2" />
                <span className="text-xs font-bold text-white">Tacto Suave</span>
              </div>
               <div className="bg-dark-800 p-3 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center hover:border-gold-500/50 transition-colors">
                <Layers className="w-6 h-6 text-gold-500 mb-2" />
                <span className="text-xs font-bold text-white">Gramaje Alto</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};