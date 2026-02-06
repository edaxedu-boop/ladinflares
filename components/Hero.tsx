import React from 'react';
import { Star, Truck, ShieldCheck, MapPin, Wallet, ShoppingCart } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
}

export const Hero = ({ onOpenCheckout }: HeroProps) => {
  return (
    <div className="relative overflow-hidden min-h-[90vh]">
      {/* Optimized Image Loading: High Priority LCP */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/iFjY1mL.gif" 
          alt="Flare Pants Premium Background" 
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-10 flex flex-col justify-end h-full min-h-[90vh]">
        
        <div className="mb-4 inline-block">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-bounce shadow-lg shadow-red-900/50">
            🔥 Liquidación Total
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif text-gold-300 font-bold leading-tight mb-2 drop-shadow-xl">
          Flare Pants <br/>
          <span className="text-white italic">Suplex Premium</span>
        </h1>
        
        <p className="text-gray-300 text-sm mb-4 font-medium drop-shadow-md">
          ✨ Moldea tu cintura, alarga tus piernas y no transparenta.
        </p>

        <div className="flex items-end gap-3 mb-6">
          <div className="text-gray-400 text-lg line-through">Antes: S/99</div>
          <div className="text-gold-400 text-4xl font-bold drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">
            <span className="text-xl">AHORA:</span> 3x S/79
          </div>
        </div>

        <div className="flex items-center gap-1 text-gold-500 mb-6 bg-black/30 backdrop-blur-sm p-2 rounded-lg w-fit border border-white/10">
          <Star className="fill-current w-4 h-4" />
          <Star className="fill-current w-4 h-4" />
          <Star className="fill-current w-4 h-4" />
          <Star className="fill-current w-4 h-4" />
          <Star className="fill-current w-4 h-4" />
          <span className="text-white text-xs ml-2">4.8/5 • +3,000 clientas felices</span>
        </div>

        <div className="space-y-2 text-sm text-gray-200 mb-8 font-medium">
          <div className="flex items-center gap-2 drop-shadow-md">
            <Truck className="w-5 h-5 text-gold-400" /> Envío a todo el Perú
          </div>
          <div className="flex items-center gap-2 drop-shadow-md">
            <MapPin className="w-5 h-5 text-gold-400" /> Pago contra entrega Lima
          </div>
          <div className="flex items-center gap-2 drop-shadow-md">
            <Wallet className="w-5 h-5 text-gold-400" /> Envíos a provincia con pequeño adelanto
          </div>
          <div className="flex items-center gap-2 drop-shadow-md">
            <ShieldCheck className="w-5 h-5 text-gold-400" /> Garantía de calidad 100%
          </div>
          <div className="flex items-center gap-2 drop-shadow-md">
             <span className="w-5 h-5 flex items-center justify-center text-lg">🇵🇪</span> Fabricación nacional
          </div>
        </div>

        {/* Main CTA Button */}
        <button 
          id="main-cta"
          onClick={onOpenCheckout}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 transform active:scale-95 transition-all text-lg mb-8 animate-pulse border border-blue-400/30 ring-2 ring-blue-500/20"
        >
          <ShoppingCart className="w-6 h-6" />
          PAGAR CONTRA ENTREGA
        </button>

        {/* This spacer pushes content up so the sticky button doesn't cover it on mobile */}
        <div className="h-4"></div>
      </div>
    </div>
  );
};