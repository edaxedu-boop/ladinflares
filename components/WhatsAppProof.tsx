import React from 'react';

const PROOF_IMAGES = [
  "https://i.imgur.com/qwCFdFq.png",
  "https://i.imgur.com/cnLg87g.png",
  "https://i.imgur.com/pgUehY7.png",
  "https://i.imgur.com/735SnSk.png",
  "https://i.imgur.com/cnLg87g.png"
];

export const WhatsAppProof = () => {
  return (
    <section className="py-16 px-4 bg-dark-900 border-t border-gray-900 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-serif text-white mb-2">
          Ellas ya aman sus <span className="text-gold-400 italic">Droos</span>
        </h2>
        <p className="text-gray-400 text-sm">Desliza para ver chats reales de clientas 👉</p>
      </div>

      {/* Carousel Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-8 no-scrollbar justify-start md:justify-center">
        {PROOF_IMAGES.map((imgSrc, idx) => (
          <div key={idx} className="snap-center shrink-0">
            <img 
              src={imgSrc} 
              alt={`Testimonio WhatsApp ${idx + 1}`} 
              className="w-[280px] md:w-[320px] h-auto rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-gray-800 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      
      {/* Swipe Indicators (Mobile only visual aid) */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {PROOF_IMAGES.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-700 opacity-50"></div>
        ))}
      </div>
    </section>
  );
};