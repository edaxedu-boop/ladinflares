import React from 'react';
import { Truck, ShieldCheck, CheckCircle2, XCircle, Star, Package, Clock, HelpCircle } from 'lucide-react';

export const OFFER_PRICE = "3x S/79";
export const REGULAR_PRICE = "S/99";
export const SHIPPING_TEXT = "Envío a todo el Perú";

export const FEATURES = [
  { icon: <CheckCircle2 className="w-5 h-5 text-gold-400" />, text: "Moldea cintura y realza glúteos" },
  { icon: <CheckCircle2 className="w-5 h-5 text-gold-400" />, text: "Tela Suplex gruesa no transparenta" },
  { icon: <CheckCircle2 className="w-5 h-5 text-gold-400" />, text: "Corte acampanado que alarga piernas" },
  { icon: <CheckCircle2 className="w-5 h-5 text-gold-400" />, text: "Garantía de calidad 100%" },
];

export const PAIN_POINTS = [
  {
    title: "Se marcan y transparentan",
    desc: "Se deforman con el uso.",
    icon: "😣"
  },
  {
    title: "No moldean tu figura",
    desc: "Ni realzan tus curvas.",
    icon: "🩳"
  },
  {
    title: "Te hacen ver más baja",
    desc: "Y sin forma, ¡aunque uses tacos!",
    icon: "👖"
  }
];

export const COMPARISON_DATA = [
  { feature: "Garantía de calidad 100%", us: true, them: false },
  { feature: "Calidad Suplex Grueso", us: true, them: false },
  { feature: "Envío a Provincia (Agencia)", us: true, them: false },
  { feature: "Pago contra entrega (Lima)", us: true, them: false },
  { feature: "Atención personalizada", us: true, them: false },
];

export const FAQS = [
  { q: "¿Hacen envíos a todo el Perú?", a: "Sí, realizamos envíos a todas las regiones del país mediante empresas aliadas como Olva y Shalom." },
  { q: "¿Puedo pagar al recibir mi pedido?", a: "Pago contra entrega solo Lima y distritos. Provincia por agencia con adelanto." },
  { q: "¿Qué pasa si la prenda no me queda?", a: "Puedes comunicarte con el asesor que te guio para que te ayude con el proceso de cambio" },
  { q: "¿De qué material están hechos?", a: "Suplex grueso premium: resistente, elástico y no transparenta." },
  { q: "¿Cuánto demora el envío?", a: "Entre 24 a 72 horas hábiles, según tu ciudad." },
];

export const TESTIMONIALS = [
  {
    name: "Juana R.",
    city: "Lima, Surco",
    text: "Tenía miedo de pedir por internet, pero llegó al día siguiente y pude pagar al recibir.Gracias Dios los bendiga.",
    stars: 5,
    verified: true
  },
  {
    name: "Andrea M.",
    city: "Arequipa",
    text: "La tela es súper gruesa, no se trasluce nada cuando me agacho. ¡Pediré la promo de 3x79 otra vez!",
    stars: 5,
    verified: true
  },
  {
    name: "Fiorella P.",
    city: "Trujillo",
    text: "Me encanta como me hace cintura. La atención fue A1, me mandaron foto de mi paquete antes de enviarlo.",
    stars: 5,
    verified: true
  }
];

export const PRODUCT_SIZES = [
  { label: "S", desc: "26-28" },
  { label: "M", desc: "30" },
  { label: "L", desc: "32" },
  { label: "XL", desc: "34" }
];

export const PRODUCT_COLORS = [
  { 
    name: "Negro", 
    image: "https://i.imgur.com/HImS5d5.jpeg",
    hex: "#1A1A1A"
  },
  { 
    name: "Plomo", 
    image: "https://i.imgur.com/ygarOMj.jpeg",
    hex: "#424242"
  },
  { 
    name: "Palo Rosa", 
    image: "https://i.imgur.com/1iNmAgU.jpeg",
    hex: "#C28E95"
  },
  { 
    name: "Azulino", 
    image: "https://i.imgur.com/E1lxTMC.jpeg",
    hex: "#1B4DB0"
  },
  { 
    name: "Petróleo", 
    image: "https://i.imgur.com/6tS05sA.jpeg",
    hex: "#2C424F"
  },
  { 
    name: "Verde Botella", 
    image: "https://i.imgur.com/0Y9LxDs.jpeg",
    hex: "#1A332B"
  },
  { 
    name: "Denim", 
    image: "https://i.imgur.com/4TXGKqG.jpeg",
    hex: "#64799E"
  },
  { 
    name: "Vino", 
    image: "https://i.imgur.com/AP1t3go.jpeg",
    hex: "#8E0E28"
  },
  { 
    name: "Beige", 
    image: "https://i.imgur.com/ZukfxIc.jpeg",
    hex: "#D4C1B7"
  },
  { 
    name: "Azul Gris", 
    image: "https://i.imgur.com/gyMWSc4.jpeg",
    hex: "#4E5D7A"
  },
  { 
    name: "Azul Noche", 
    image: "https://i.imgur.com/SSn775t.jpeg",
    hex: "#1D1F2E"
  },
  { 
    name: "Fucsia", 
    image: "https://i.imgur.com/cKKEGpN.jpeg",
    hex: "#C40052"
  },
  { 
    name: "Melange", 
    image: "https://i.imgur.com/aVYaB3U.jpeg",
    hex: "#A6A6A6"
  },
  { 
    name: "Cobalto", 
    image: "https://i.imgur.com/uKRjEPu.jpeg",
    hex: "#005B73"
  }
];