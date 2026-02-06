import React from 'react';
import { Camera, MapPin, CheckCircle, PackageCheck, Receipt, Scissors, Image as ImageIcon } from 'lucide-react';
import { PRODUCT_COLORS } from '../constants';

export const ShipmentProof = () => {
  return (
    <section className="py-12 px-4 bg-black">
      <div className="text-center mb-8 px-2">
        <h2 className="text-xl md:text-2xl font-serif text-white mb-2">
          Envíos <span className="text-gold-400 italic block md:inline">100% Seguros</span>
        </h2>
        <p className="text-gray-400 text-xs md:text-sm max-w-[280px] mx-auto leading-relaxed">
          Más de 50 pedidos despachados diariamente
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
        {/* Card 1: Vouchers */}
        <div className="col-span-2 bg-dark-800 rounded-xl overflow-hidden border border-gray-800 relative h-40 group">
          <img 
            src="https://i.imgur.com/8HWpy59.gif" 
            alt="Vouchers Reales" 
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-3">
             <div className="flex items-center gap-2 mb-1">
                <Receipt className="w-4 h-4 text-gold-500" />
                <h3 className="text-white font-bold text-sm md:text-base">Vouchers Reales</h3>
             </div>
             <p className="text-[10px] text-gray-300 leading-tight">Cientos de clientas confirman su compra cada día</p>
          </div>
        </div>

        {/* Card 2: Packages Pile */}
        <div className="bg-dark-800 rounded-xl overflow-hidden border border-gray-800 relative h-40 group">
          <img 
            src="https://i.imgur.com/lzj3pSZ.gif" 
            alt="Paquetes listos para despacho" 
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2">
            <span className="text-[10px] md:text-xs text-white font-bold flex items-center gap-1 leading-tight">
              <PackageCheck className="w-3 h-3 text-gold-400 shrink-0" /> Listos para Olva y Shalom
            </span>
          </div>
        </div>

        {/* Card 3: Delivery Handover */}
        <div className="bg-dark-800 rounded-xl overflow-hidden border border-gray-800 relative h-40 group">
          <img 
            src="https://i.imgur.com/wLlfEE6.gif" 
            alt="Entrega Lima" 
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100"
          />
           <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2">
            <span className="text-xs text-white font-bold flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gold-400" /> Entregas en Lima
            </span>
          </div>
        </div>
      </div>
      
      {/* Trust Badge Bar */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
         <div className="flex items-center gap-2 bg-dark-900 px-3 py-1 rounded-full border border-gray-800">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           <span className="text-xs text-gray-300">Tracking en vivo</span>
         </div>
         <div className="flex items-center gap-2 bg-dark-900 px-3 py-1 rounded-full border border-gray-800">
           <Camera className="w-3 h-3 text-gold-500" />
           <span className="text-xs text-gray-300">Foto antes de enviar</span>
         </div>
      </div>
    </section>
  );
};

export const WarehouseSection = () => {
  return (
    <section className="py-12 px-4 bg-dark-900 border-t border-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-8 bg-gold-500 rounded-full"></div>
          <div>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Nuestro Taller</h2>
            <p className="text-xs text-gray-400">Directo de fábrica, sin intermediarios</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 h-64 md:h-80">
          {/* Main Image */}
          <div className="col-span-8 relative rounded-xl overflow-hidden border border-gray-800 group">
            <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white flex items-center gap-1 z-10">
              <Scissors className="w-3 h-3 text-gold-400" /> Manufactura Peruana
            </div>
            <img 
              src="https://i.imgur.com/yCKLWH5.gif" 
              alt="Máquinas cosiendo" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Side Images Stack */}
          <div className="col-span-4 grid grid-rows-2 gap-2">
            <div className="rounded-xl overflow-hidden border border-gray-800 relative">
               <img 
                src="https://i.imgur.com/ToUCBlT.gif" 
                alt="Rollos de tela" 
                loading="lazy"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="text-xs font-bold text-white drop-shadow-md">Stock Real</span>
              </div>
            </div>
            {/* Box con texto ajustado para móvil - CORREGIDO */}
            <div className="rounded-xl overflow-hidden border border-gray-800 bg-dark-800 flex flex-col items-center justify-center p-1 text-center w-full">
               <h4 className="text-gold-400 font-serif text-xl md:text-2xl font-bold leading-none">+5k</h4>
               <p className="text-[8px] md:text-[10px] text-gray-400 leading-tight mt-1 px-1 break-words w-full">
                 Prendas<br/>Producidas
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RealPhotosSection = () => {
  // Configuración del Collage con las imágenes proporcionadas por el usuario
  const collageItems = [
    { src: "https://i.imgur.com/ykiIwPW.jpeg", className: "col-span-2 row-span-2" },
    { src: "https://i.imgur.com/akmZVz4.jpeg", className: "col-span-1 row-span-1" },
    { src: "https://i.imgur.com/ZE1LCHV.jpeg", className: "col-span-1 row-span-2" },
    { src: "https://i.imgur.com/VbFhckF.jpeg", className: "col-span-1 row-span-1" },
    { src: "https://i.imgur.com/FIEs0mt.jpeg", className: "col-span-2 row-span-1" },
    { src: "https://i.imgur.com/BwM2euz.jpeg", className: "col-span-1 row-span-1" },
    { src: "https://i.imgur.com/PqtOUV8.jpeg", className: "col-span-1 row-span-1" },
  ];

  return (
    <section className="pt-24 pb-12 px-2 bg-black border-t border-gray-900">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-2">
            <Camera className="w-6 h-6 text-gold-500 animate-pulse" />
        </div>
        <h2 className="text-2xl font-serif text-white mb-2">
          Fotos <span className="text-gold-400 italic">Reales</span>
        </h2>
        <p className="text-gray-400 text-xs tracking-wider uppercase">Sin filtros de estudio • Fotos caseras</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 max-w-5xl mx-auto auto-rows-[120px] md:auto-rows-[180px]">
        {collageItems.map((item, idx) => (
          <div 
            key={idx} 
            className={`relative rounded-lg overflow-hidden border border-gray-800 group ${item.className}`}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
            <img 
              src={item.src} 
              alt="Foto real producto" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
          <p className="text-[10px] text-gray-500 italic">
              * Imágenes reales tomadas en nuestro almacén.
          </p>
      </div>
    </section>
  );
};