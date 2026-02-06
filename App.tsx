import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { StickyCTA } from './components/StickyCTA';
import { BeforeAfter } from './components/BeforeAfter';
import { ComparisonTable } from './components/ComparisonTable';
import { FAQSection } from './components/FAQSection';
import { ShipmentProof, WarehouseSection, RealPhotosSection } from './components/TrustSections';
import { Testimonials } from './components/Testimonials';
import { ProductShowcase } from './components/ProductShowcase';
import { ProductDetails } from './components/ProductDetails';
import { CheckoutModal } from './components/CheckoutModal';
import { WhatsAppProof } from './components/WhatsAppProof';
import { PAIN_POINTS } from './constants';
import { Package, Star } from 'lucide-react';

const App = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  return (
    <div className={`min-h-screen bg-dark-900 text-white font-sans pb-20 ${isCheckoutOpen ? 'overflow-hidden' : ''}`}>
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-[10px] py-2 tracking-widest uppercase font-bold sticky top-0 z-40 border-b border-gray-800">
        PAGA AL RECIBIR TU PEDIDO 🚚
      </div>

      {/* 1. HOOK: La Oferta Principal */}
      <Hero onOpenCheckout={openCheckout} />
      
      <div className="h-2 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600"></div>

      {/* 2. RESULTADO VISUAL: Lo primero que quieren ver es el cambio */}
      <BeforeAfter />

      {/* 3. AGITACIÓN DEL PROBLEMA: ¿Por qué necesitan esto? */}
      <section className="py-16 px-6 bg-[url('https://i.imgur.com/cSYIHrJ.gif')] bg-cover bg-center relative text-center">
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-serif text-red-400 mb-8 flex flex-col items-center drop-shadow-md">
            <span className="text-4xl mb-2">❌</span>
            ¿Cansada de los pantalones que no te favorecen?
          </h2>
          <div className="space-y-8 max-w-md mx-auto">
            {PAIN_POINTS.map((point, idx) => (
              <div key={idx} className="flex gap-4 items-start text-left bg-dark-800/90 backdrop-blur-sm p-4 rounded-xl border border-gray-800 hover:border-red-900/50 transition-colors">
                <span className="text-4xl grayscale bg-gray-900 rounded-lg p-2">{point.icon}</span>
                <div>
                  <h3 className="text-gold-200 font-bold mb-1">{point.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gold-400 font-serif italic text-lg drop-shadow-md">
            "Mereces una prenda que te haga sentir segura, cómoda y espectacular cada día."
          </p>
        </div>
      </section>
      
      {/* 4. LA SOLUCIÓN TÉCNICA: Explicamos por qué funciona (Anatomía) */}
      <ProductDetails />

      {/* 5. PRUEBA SOCIAL FUERTE: Chats reales antes de vender. "Sí funciona" */}
      <WhatsAppProof />

      {/* 6. LA COMPRA: El catálogo (Colores y Tallas) */}
      <ProductShowcase />

      {/* 7. LÓGICA: Comparativa para cerrar dudas racionales */}
      <ComparisonTable />

      {/* 8. PRUEBA SOCIAL EMOCIONAL: Testimonios escritos */}
      <Testimonials />

      {/* 9. EXPERIENCIA Y SEGURIDAD: Unboxing y Garantías */}
      <section className="py-16 px-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed bg-dark-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>
        <div className="relative z-10 text-center max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-2 text-gold-400 mb-6">
            <Package className="w-6 h-6" />
            <span className="font-serif text-xl">Todo lo que recibes</span>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-black p-1 rounded-2xl shadow-2xl border border-gold-900/30">
            <img 
              src="https://i.imgur.com/UZ6voTt.gif" 
              alt="Unboxing Experience" 
              className="w-full rounded-xl opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="p-4 grid grid-cols-2 gap-4 text-xs text-gray-300 text-left">
               <div className="flex items-center gap-2">
                 <div className="w-1 h-1 bg-gold-500 rounded-full"></div> Flare Pants Suplex
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-1 h-1 bg-gold-500 rounded-full"></div> Tarjeta de cuidados
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-1 h-1 bg-gold-500 rounded-full"></div> Etiqueta de autenticidad
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-1 h-1 bg-gold-500 rounded-full"></div> Packaging Premium
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CÓMO COMPRAR: Pasos sencillos */}
      <section className="py-16 px-4 bg-black">
        <h2 className="text-center font-serif text-2xl text-white mb-10">
          <span className="text-gold-400 text-4xl block mb-2">3 pasos</span>
          para lucir tu mejor versión
        </h2>

        <div className="space-y-8 max-w-lg mx-auto relative">
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold-600 to-transparent opacity-30"></div>
          {[
            { step: 1, title: "Recibe tu pedido", desc: "Pago contra entrega solo Lima y distritos. Provincia por agencia con adelanto.", img: "https://i.imgur.com/iaVYPLo.jpeg" },
            { step: 2, title: "Póntelos", desc: "El suplex se adapta a tu cuerpo sin apretar ni marcar.", img: "https://i.imgur.com/pXX7QB4.jpeg" },
            { step: 3, title: "Disfruta el efecto WOW", desc: "Moldea tus curvas y luce más alta al instante.", img: "https://i.imgur.com/iFjY1mL.gif" },
          ].map((item, idx) => (
            <div key={idx} className="relative flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-gold-600 flex items-center justify-center text-black font-bold text-xl shadow-[0_0_15px_rgba(234,179,8,0.5)] z-10 shrink-0">
                {item.step}
              </div>
              <div className="flex-1 bg-dark-800 p-4 rounded-xl border border-gray-800 flex items-center gap-4 hover:border-gold-800 transition-colors">
                 <div className="flex-1">
                    <h3 className="text-gold-200 font-bold">{item.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                 </div>
                 <img src={item.img} alt={`Paso ${item.step}`} className="w-16 h-16 rounded-lg object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. RESPALDO LOGÍSTICO: Taller y Envíos */}
      <WarehouseSection />
      <RealPhotosSection />
      <ShipmentProof />
      
      {/* 12. OBJECIONES FINALES: Preguntas Frecuentes */}
      <FAQSection />

      {/* Footer / Shipping Logos */}
      <footer className="pt-12 pb-24 px-6 bg-black text-center border-t border-gray-900">
        <div className="mb-8">
           <h3 className="flex items-center justify-center gap-2 text-gold-400 font-serif mb-6">
             <Package className="w-5 h-5" /> Entrega rápida y segura
           </h3>
           <div className="flex justify-center gap-6 opacity-90 hover:opacity-100 transition-all flex-wrap">
             <div className="flex flex-col items-center gap-2">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden p-2">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA184KvFfcc0eWGiPruAMgjTSd446tHr8KlQ&s" alt="Olva Courier" className="w-full h-full object-contain" />
               </div>
               <span className="text-xs text-gray-400 font-medium tracking-wide">Olva</span>
             </div>

             <div className="flex flex-col items-center gap-2">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EyU8VgQbgnItACGFoO3Gt8VvNaERIKC3DA&s" alt="Shalom" className="w-full h-full object-contain" />
               </div>
               <span className="text-xs text-gray-400 font-medium tracking-wide">Shalom</span>
             </div>

             <div className="flex flex-col items-center gap-2">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-gold-500">
                  <img src="https://soltvperu.com/wp-content/uploads/2023/06/comision-trabajo-ortorgar-derechos-laborales-motorizados-repartidores-delivery.jpg" alt="Delivery" className="w-full h-full object-cover" />
               </div>
               <span className="text-xs text-gold-400 font-bold tracking-wide">Delivery</span>
             </div>
           </div>
           <p className="mt-6 text-gray-600 text-xs max-w-xs mx-auto">
             Tu pedido llega en manos seguras. Pago contra entrega solo Lima y distritos. Provincia por agencia con adelanto.
           </p>
        </div>
        
        <div className="flex justify-center gap-1 text-gold-600 mb-4">
          <Star className="fill-current w-5 h-5" />
          <Star className="fill-current w-5 h-5" />
          <Star className="fill-current w-5 h-5" />
          <Star className="fill-current w-5 h-5" />
          <Star className="fill-current w-5 h-5" />
        </div>
      </footer>

      <StickyCTA onOpenCheckout={openCheckout} />

      {isCheckoutOpen && <CheckoutModal onClose={closeCheckout} />}
    </div>
  );
};

export default App;