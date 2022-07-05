import {
  Barras,
  Billetera,
  Corfo,
  Facebook,
  George,
  Graph1,
  Graph2,
  Graph3,
  Instagram,
  Joanna,
  Monitor,
  NxtpLabs,
  Person,
  Rafael,
  StartupChile,
  Twitter,
  Work1,
  Work2,
  Work3,
  Work4,
  Youtube,
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

export const benefits = [
  {
    title: "Un plan financiero",
    content: `<p><strong>Diseñado por expertos, a la medida de tu realidad y tus sueños.</strong> Para alcanzar el bienestar que siempre has querido tener.</p>`,
    img: Graph1,
  },
  {
    title: "Recomendaciones de inversión",
    content: `<p><strong>¿Quieres invertir, pero no sabes en qué?</strong> Deja que tu asesor te guíe hacia los mejores instrumentos del mercado. Sin restricciones, ni conflictos de interés.</p>`,
    img: Graph2,
  },
  {
    title: "Un asesor,siempre a tu lado",
    content: `<p><strong>Tu asesor estará contigo para implementar el plan.</strong>Tendrás reuniones periódicas de seguimiento. Ante dudas, consultas o un consejo, ahí estaremos.</p>`,
    img: Graph3,
  },
]

export const testimonials = [
  {
    name: "Joanna Meza",
    feedback: `"Patrimore me ayudo a ordenar números, medir mis logros, establecer nuevos objetivos y seguir aprendiendo, pero esta vez con apoyo, acompañada."`,
    rating: 5,
    avatar: Joanna,
  },
  {
    name: "Rafael Molina",
    feedback: `"El apoyo de Patrimore y mi asesor han sido invaluables, por todo el progreso que he logrado en mis finanzas durante el proceso de asesoria."`,
    rating: 4.7,
    avatar: Rafael,
  },
  {
    name: "George Meredith",
    feedback: `"Para mi Patrimore es confianza, principalmente por el compromiso con el cliente y nivel profesional de sus asesores."`,
    rating: 4.3,
    avatar: George,
  },
  {
    name: "Joanna Meza",
    feedback: `"Patrimore me ayudo a ordenar números, medir mis logros, establecer nuevos objetivos y seguir aprendiendo, pero esta vez con apoyo, acompañada."`,
    rating: 5,
    avatar: Joanna,
  },
  {
    name: "Rafael Molina",
    feedback: `"El apoyo de Patrimore y mi asesor han sido invaluables, por todo el progreso que he logrado en mis finanzas durante el proceso de asesoria."`,
    rating: 4.4,
    avatar: Rafael,
  },
]

export const footer_menu1 = [
  {
    name: "¿Por qué somos diferentes?",
    to: "/",
  },
  {
    name: "Preguntas frecuentes",
    to: "/",
  },
  {
    name: "Fondo Patrimore Guardian",
    to: "/",
  },
]

export const footer_menu2 = [
  {
    name: "Blog",
    to: "/",
  },
  {
    name: "Visión semanal",
    to: "/",
  },
  {
    name: "Clientes felices",
    to: "/",
  },
]

export const footer_menu3 = [
  {
    name: "Hablemos",
    to: "/",
  },
  {
    name: "Centro de ayuda",
    to: "/",
  },
  {
    name: "Términos y condiciones",
    to: "/",
  },
]

export const footer_menu4 = [
  {
    icon: StartupChile,
    to: "/",
  },
  {
    icon: NxtpLabs,
    to: "/",
  },
  {
    icon: Corfo,
    to: "/",
  },
]

export const footer_menu5 = [
  {
    icon: Youtube,
    to: "/",
  },
  {
    icon: Facebook,
    to: "/",
  },
  {
    icon: Instagram,
    to: "/",
  },
  {
    icon: Twitter,
    to: "/",
  },
]
