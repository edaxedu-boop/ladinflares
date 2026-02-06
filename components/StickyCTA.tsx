import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface StickyCTAProps {
  onOpenCheckout: () => void;
}

export const StickyCTA = ({ onOpenCheckout }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainCta = document.getElementById('main-cta');
      if (mainCta) {
        const rect = mainCta.getBoundingClientRect();
        // rect.bottom < 0 significa que el borde inferior del botón principal 
        // ha cruzado el borde superior de la pantalla (ya no se ve)
        setIsVisible(rect.bottom < 0);
      } else {
        // Fallback si no encuentra el botón por alguna razón
        setIsVisible(window.scrollY > 500);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Chequeo inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/95 to-transparent z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <button 
        onClick={onOpenCheckout}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 transform active:scale-95 transition-all text-lg animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] border border-blue-400/30"
      >
        <ShoppingCart className="w-6 h-6 animate-bounce" />
        PAGAR CONTRA ENTREGA
      </button>
    </div>
  );
};