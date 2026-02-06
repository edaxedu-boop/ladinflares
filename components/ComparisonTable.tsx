import React from 'react';
import { Check, X } from 'lucide-react';
import { COMPARISON_DATA } from '../constants';

export const ComparisonTable = () => {
  return (
    <section className="py-16 px-4 bg-dark-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-center text-white mb-2">
          ¿Por qué comprar en
        </h2>
        <h3 className="text-2xl md:text-3xl font-serif text-center text-gold-400 mb-10 italic">
          Droos.shop?
        </h3>

        <div className="overflow-hidden rounded-xl border border-gray-800 bg-dark-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-gray-900 to-black">
                <th className="p-4 text-left text-gray-400 font-normal">Beneficio</th>
                <th className="p-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="w-12 h-12 rounded-full bg-gold-600 flex items-center justify-center text-black font-bold font-serif mb-1 shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                      DS
                    </span>
                    <span className="text-gold-400 text-xs">Droos</span>
                  </div>
                </th>
                <th className="p-4 text-center text-gray-500">Otras<br/>Tiendas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-black/30' : 'bg-transparent'}>
                  <td className="p-4 text-gray-200">{row.feature}</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-gold-900/50 border border-gold-500 flex items-center justify-center">
                         <Check className="w-4 h-4 text-gold-400" />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                       <div className="w-6 h-6 rounded-full bg-red-900/20 border border-red-900 flex items-center justify-center">
                        <X className="w-4 h-4 text-red-700" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="text-center text-xs text-gray-500 mt-6 italic">
          En Droos.shop te ofrecemos calidad real, atención cercana y prendas que te hacen sentir única.
        </p>
      </div>
    </section>
  );
};