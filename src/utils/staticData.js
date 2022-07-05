import {
  Barras,
  Billetera,
  Monitor,
  Person,
  Work1,
  Work2,
  Work3,
  Work4,
} from "./imgImport"

export const nav_menus = [
  {
    name: "¿Cómo funciona?",
    to: "/how-it-work",
  },
  {
    name: "¿Cómo invertimos?",
    to: "/how-we-invest",
  },
  {
    name: "Nosotros",
    to: "/about-us",
  },
  {
    name: "Preguntas frecuentes",
    to: "/faq",
  },
]

export const services = [
  {
    icon: Person,
    title: "100% Personalizado",
    content: "Un asesor financiero para ti. Un plan hecho a tu medida.",
  },
  {
    icon: Billetera,
    title: "Independiente",
    content: "Trabajamos por tus sueños. No por vender productos financieros.",
  },
  {
    icon: Barras,
    title: "Experto",
    content:
      "Te ayudaremos a tomar mejores decisiones. Sabemos lo que hacemos. ",
  },
  {
    icon: Monitor,
    title: "100% Digital",
    content: "Un plan financiero y un asesor, sin moverte de tu escritorio. ",
  },
]

export const work_flow = [
  {
    icon: Work1,
    content: `
    <p>
   <strong>Nos cuentas tu situación financiera actual</strong> y las metas que quieres lograr.
    </p>
    `,
  },
  {
    icon: Work2,
    content: `
    <p>
   <strong>Creamos un plan financiero</strong> 100% personalizado, adaptado a tu realidad y tus sueños.
    </p>
    `,
  },
  {
    icon: Work3,
    content: `
    <p>
   <strong>Un asesor financiero</strong> te acompañará y guiará en la implementación del plan.
    </p>
    `,
  },
  {
    icon: Work4,
    content: `
    <p>
   <strong>Verás cómo crece tu patrimonio</strong> y avanzas hacia el logro de tus sueños.
    </p>
    `,
  },
]
