import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 px-4 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] bg-dark-900">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <HelpCircle className="text-gold-500 w-8 h-8" />
          <h2 className="text-2xl font-serif text-gold-300">Resolvemos tus dudas</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-gold-900/30 rounded-lg bg-black/40 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded border border-gold-700 text-gold-500 flex items-center justify-center text-xs font-bold font-serif">
                    {idx + 1}
                  </span>
                  <span className="text-gray-200 text-sm font-medium pr-2">{faq.q}</span>
                </div>
                {openIndex === idx ? <ChevronUp className="w-4 h-4 text-gold-500" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-4 pt-0 text-sm text-gray-400 pl-14">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};