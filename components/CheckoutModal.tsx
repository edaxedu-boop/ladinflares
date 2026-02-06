import React, { useState } from 'react';
import { X, MapPin, Truck, ChevronRight, ShoppingBag, ShieldCheck, CreditCard, User, ChevronDown, MessageCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { PRODUCT_COLORS, PRODUCT_SIZES } from '../constants';

interface CheckoutModalProps {
  onClose: () => void;
}

const PERU_DEPARTMENTS = [
  "Lima Metropolitana", "Callao", // Prioritized
  "Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca",
  "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín",
  "La Libertad", "Lambayeque", "Lima Provincias", "Loreto", "Madre de Dios",
  "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna",
  "Tumbes", "Ucayali"
];

export const CheckoutModal = ({ onClose }: CheckoutModalProps) => {
  // State for the 3 items in the promo
  const [items, setItems] = useState([
    { color: PRODUCT_COLORS[0].name, size: 'S' },
    { color: PRODUCT_COLORS[0].name, size: 'S' },
    { color: PRODUCT_COLORS[0].name, size: 'S' }
  ]);
  
  // Track which color dropdown is open (0, 1, or 2)
  const [activeColorDropdown, setActiveColorDropdown] = useState<number | null>(null);
  
  // Track if we are in the confirmation step
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    dni: '',
    phone: '',
    address: '',
    district: '',
    province: 'Lima Metropolitana',
    shippingMethod: 'motorizado' // motorizado, shalom, olva
  });

  const updateItem = (index: number, field: 'color' | 'size', value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      // Auto-set shipping method defaults when province changes
      if (name === 'province') {
        const isLima = value === 'Lima Metropolitana' || value === 'Callao';
        return {
          ...prev,
          province: value,
          shippingMethod: isLima ? 'motorizado' : 'shalom' // Default to shalom for provinces
        };
      }
      return { ...prev, [name]: value };
    });
  };

  // Helper to get hex code
  const getColorHex = (name: string) => {
    return PRODUCT_COLORS.find(c => c.name === name)?.hex || '#000';
  };

  // Logic for Shipping
  const isLimaOrCallao = formData.province === 'Lima Metropolitana' || formData.province === 'Callao';
  
  // Cost logic: Lima/Callao = 13, Provinces = 0 (Calculated separately or paid at destination)
  const SHIPPING_COST = isLimaOrCallao ? 13.00 : 0.00;
  const PROMO_PRICE = 79.00;
  const TOTAL_PRICE = PROMO_PRICE + SHIPPING_COST;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const sendToWhatsApp = () => {
    // Determine shipping text for message
    let shippingText = "";
    if (isLimaOrCallao) {
      shippingText = "Motorizado (Contraentrega)";
    } else {
      shippingText = formData.shippingMethod === 'shalom' 
        ? "SHALOM (Pago en destino)" 
        : "OLVA (Pago adelantado)";
    }

    const dniText = !isLimaOrCallao ? `\n🆔 DNI: ${formData.dni}` : "";

    const message = `Hola! Quiero pedir la Promo 3x79:\n` +
      items.map((item, i) => `👖 ${i+1}: ${item.color} - Talla ${item.size}`).join('\n') +
      `\n\nMis datos:\n👤 ${formData.name}${dniText}\n📞 ${formData.phone}\n📍 ${formData.address}, ${formData.district}, ${formData.province}` +
      `\n🚚 Envío: ${shippingText}` +
      `\n\n💰 Total a pagar (Productos + Envío Lima/Callao): S/. ${TOTAL_PRICE.toFixed(2)}`;
    
    const url = `https://wa.me/51943794172?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    // onClose(); // Optional: keep open so they can read the text or close manually
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full md:w-[480px] bg-white md:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh] md:h-auto md:max-h-[85vh] animate-[slideUp_0.3s_ease-out]">
        
        {/* Header */}
        <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between sticky top-0 z-20 shadow-sm shrink-0">
          <h2 className="text-gray-900 font-bold text-lg flex items-center gap-2">
            {showConfirmation ? 'CONFIRMAR ENVÍO' : 'PAGO CONTRA ENTREGA'}
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-6">
          
          {!showConfirmation ? (
            <>
              {/* Offer Banner */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-4 text-white flex items-center justify-between shadow-lg relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                     <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">LIQUIDACIÓN FINAL</span>
                  </div>
                  <h3 className="font-bold text-xl italic">SUPER PROMO 3x79</h3>
                  <p className="text-xs text-blue-200">Ahorras S/ 158.00</p>
                </div>
                <div className="text-right relative z-10">
                  <div className="text-xs text-blue-200 line-through">S/ 237.00</div>
                  <div className="text-2xl font-bold text-yellow-400">S/. 79.00</div>
                </div>
              </div>

              <form id="checkout-form" onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Item Selection */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-4">
                  <h4 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-blue-600" />
                    Selecciona tus 3 prendas
                  </h4>
                  
                  {items.map((item, idx) => (
                    <div key={idx} className="flex gap-2 items-center p-2 bg-gray-50 rounded-lg border border-gray-100 relative z-auto">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <div className="grid grid-cols-2 gap-2 w-full">
                        
                        {/* CUSTOM COLOR SELECTOR */}
                        <div className="relative">
                          <label className="text-[10px] text-gray-500 absolute -top-1.5 left-2 bg-gray-50 px-1 z-10">COLOR</label>
                          <button
                            type="button"
                            onClick={() => setActiveColorDropdown(activeColorDropdown === idx ? null : idx)}
                            className="w-full text-xs border border-gray-300 rounded h-9 px-2 bg-white text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-4 h-4 rounded-full border border-gray-200 shadow-sm"
                                style={{ backgroundColor: getColorHex(item.color) }}
                              />
                              <span className="truncate">{item.color}</span>
                            </div>
                            <ChevronDown className="w-3 h-3 text-gray-400" />
                          </button>

                          {/* Dropdown Menu */}
                          {activeColorDropdown === idx && (
                            <>
                              {/* Invisible backdrop to close dropdown on click outside */}
                              <div 
                                className="fixed inset-0 z-20" 
                                onClick={() => setActiveColorDropdown(null)} 
                              />
                              <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-48 overflow-y-auto z-30 animate-[fadeIn_0.1s_ease-out]">
                                {PRODUCT_COLORS.map((c) => (
                                  <button
                                    key={c.name}
                                    type="button"
                                    onClick={() => {
                                      updateItem(idx, 'color', c.name);
                                      setActiveColorDropdown(null);
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 text-xs text-left transition-colors border-b border-gray-50 last:border-0"
                                  >
                                    <div 
                                      className="w-4 h-4 rounded-full border border-gray-200 shadow-sm shrink-0"
                                      style={{ backgroundColor: c.hex }}
                                    />
                                    <span className={c.name === item.color ? 'font-bold text-blue-600' : 'text-gray-700'}>
                                      {c.name}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>

                        <div className="relative">
                          <label className="text-[10px] text-gray-500 absolute -top-1.5 left-2 bg-gray-50 px-1">TALLA</label>
                          <select 
                            value={item.size}
                            onChange={(e) => updateItem(idx, 'size', e.target.value)}
                            className="w-full text-xs border border-gray-300 rounded h-9 px-2 bg-white text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none appearance-none"
                          >
                            {PRODUCT_SIZES.map(s => (
                              <option key={s.label} value={s.label}>{s.label}</option>
                            ))}
                          </select>
                          {/* Custom arrow for select to match style */}
                          <ChevronDown className="w-3 h-3 text-gray-400 absolute right-2 top-3 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping Info */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-4">
                  <h4 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    Ingrese su dirección de envío
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                       <label className="block text-xs font-bold text-gray-700 mb-1">Nombre Completo <span className="text-red-500">*</span></label>
                       <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Ej: Maria Perez"
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-gray-50"
                        onChange={handleInputChange}
                       />
                    </div>

                    <div>
                       <label className="block text-xs font-bold text-gray-700 mb-1">Whatsapp <span className="text-red-500">*</span></label>
                       <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="Ej: 999 999 999"
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-gray-50"
                        onChange={handleInputChange}
                       />
                    </div>

                    <div>
                       <label className="block text-xs font-bold text-gray-700 mb-1">Dirección <span className="text-red-500">*</span></label>
                       <input 
                        type="text" 
                        name="address"
                        required
                        placeholder="Av. Principal 123, Urb. Flores"
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-gray-50"
                        onChange={handleInputChange}
                       />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Distrito</label>
                        <input 
                          type="text" 
                          name="district"
                          placeholder="Ej: Los Olivos"
                          className="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-gray-50"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Provincia <span className="text-red-500">*</span></label>
                        <select 
                          name="province"
                          className="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:border-blue-500 outline-none bg-gray-50"
                          onChange={handleInputChange}
                          value={formData.province}
                        >
                          {PERU_DEPARTMENTS.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* DNI Field - Only shows if NOT Lima/Callao - Moved here */}
                    {!isLimaOrCallao && (
                      <div className="animate-[fadeIn_0.3s_ease-out]">
                         <label className="block text-xs font-bold text-gray-700 mb-1">DNI (Para el envío) <span className="text-red-500">*</span></label>
                         <input 
                          type="text" 
                          name="dni"
                          required
                          placeholder="Número de DNI"
                          className="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-gray-50"
                          onChange={handleInputChange}
                         />
                      </div>
                    )}
                  </div>
                </div>

                {/* Shipping Method - Dynamic */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm animate-[fadeIn_0.5s_ease-out]">
                   <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    Método de envío
                  </h4>
                  
                  <div className="space-y-3">
                    
                    {/* LIMA / CALLAO OPTION */}
                    {isLimaOrCallao && (
                      <label className="flex items-start gap-3 p-3 border border-blue-200 bg-blue-50 rounded-lg cursor-pointer transition-colors relative">
                        <input 
                          type="radio" 
                          name="shippingMethod" 
                          value="motorizado"
                          checked={formData.shippingMethod === 'motorizado'}
                          readOnly
                          className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <span className="block text-sm font-bold text-gray-900">Limaa 🚛</span>
                          <span className="text-xs text-gray-500 block mt-0.5">Pago a nuestro motorizado cuando le entregan 13 soles</span>
                        </div>
                        <span className="font-bold text-sm text-gray-900">S/. 13.00</span>
                      </label>
                    )}

                    {/* PROVINCE OPTIONS */}
                    {!isLimaOrCallao && (
                      <>
                        <label className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-colors relative ${formData.shippingMethod === 'shalom' ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
                          <input 
                            type="radio" 
                            name="shippingMethod" 
                            value="shalom"
                            checked={formData.shippingMethod === 'shalom'}
                            onChange={handleInputChange}
                            className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <div className="flex-1">
                            <span className="block text-sm font-bold text-gray-900">SHALOM 🚛</span>
                            <span className="text-xs text-gray-500 block mt-0.5">El envío pagas en destino (Agencia)</span>
                          </div>
                        </label>

                        <label className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-colors relative ${formData.shippingMethod === 'olva' ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
                          <input 
                            type="radio" 
                            name="shippingMethod" 
                            value="olva"
                            checked={formData.shippingMethod === 'olva'}
                            onChange={handleInputChange}
                            className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <div className="flex-1">
                            <span className="block text-sm font-bold text-gray-900">OLVA COURIER 📦</span>
                            <span className="text-xs text-gray-500 block mt-0.5">Pagas por adelantado el envío</span>
                          </div>
                        </label>
                      </>
                    )}

                  </div>
                </div>
                
                {/* Espacio extra */}
                <div className="h-4"></div>

              </form>
            </>
          ) : (
            // CONFIRMATION POPUP STATE
            <div className="flex flex-col items-center justify-center text-center h-full animate-[fadeIn_0.5s_ease-out]">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 relative">
                 <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"></div>
                 <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¡Casi terminamos!
              </h3>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 max-w-sm">
                <div className="flex gap-3 text-left">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0" />
                  <p className="text-sm text-gray-700">
                    Para <strong>terminar el registro</strong> de tu pedido, debes enviarlo por WhatsApp. Un asesor te ayudará a confirmarlo. 
                    <br/><br/>
                    <span className="text-red-500 font-bold text-xs">⚠️ Si no le das enviar al WhatsApp, el registro NO se completará.</span>
                  </p>
                </div>
              </div>

              <button 
                onClick={sendToWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center gap-3 text-lg transform transition-all active:scale-95 animate-pulse"
              >
                <MessageCircle className="w-6 h-6" />
                Enviar pedido al WhatsApp ahora
              </button>

              <div className="mt-8 pt-6 border-t border-gray-100 w-full">
                <p className="text-xs text-gray-400 mb-1">¿Tienes problemas?</p>
                <a href="tel:+51943794172" className="text-sm font-bold text-gray-600 hover:text-blue-600 flex items-center justify-center gap-1">
                   Escríbenos al: +51 943 794 172
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer (Only show if NOT in confirmation state, as the button moves to body in confirmation) */}
        {!showConfirmation && (
          <div className="bg-white p-4 border-t border-gray-200 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] z-20 relative shrink-0 pb-8 md:pb-4">
             <button 
              type="submit" 
              form="checkout-form"
              className="w-full bg-black text-white font-bold py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 text-lg hover:bg-gray-900 transition-colors active:scale-95"
             >
              COMPLETAR PEDIDO - S/. {TOTAL_PRICE.toFixed(2)}
              <ChevronRight className="w-5 h-5" />
             </button>
             <p className="text-center text-[10px] text-gray-400 mt-2 flex items-center justify-center gap-1">
               <ShieldCheck className="w-3 h-3" /> Datos encriptados y seguros
             </p>
          </div>
        )}

      </div>
    </div>
  );
};