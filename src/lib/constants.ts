export interface Ritual {
  id: string;
  category: "balayage" | "hairspa" | "visagismo" | "alisado" | "uñas";
  title: string;
  tagline: string;
  description: string;
  sensoryNotes: {
    aroma: string;
    sensacao: string;
    duracao: string;
  };
  visagismoImpact: string;
  recommendedFor: string;
  featured?: boolean;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: "balayage" | "cortes" | "hairspa" | "uñas";
  image: string;
  technique: string;
  tone?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  city: string;
  comment: string;
  rating: number;
  service: string;
}

export const SALON_DATA = {
  name: "TU ESENCIA",
  subtitle: "ESPACIO DE BELLEZA",
  founder: "Camila Bessing",
  founderHandle: "@camilabessing1",
  instagram: "https://www.instagram.com/tuesencia.hair/",
  instagramHandle: "@tuesencia.hair",
  whatsappNumber: "+595986295529",
  whatsappUrl: "https://wa.me/595986295529",
  location: "Katueté, Canindeyú — Paraguay",
  googleMapsUrl: "https://maps.google.com/?q=Katuete+Canindeyu+Paraguay",
  yearsExperience: "5 años dedicados a revelar tu belleza natural",
  tagline: "La belleza no se impone, tu esencia se revela.",
  secondaryTagline: "Alta costura capilar, visagismo y santuario sensorial en Katueté.",
  hours: [
    { days: "Martes a Sábado", hours: "08:00 - 18:30" },
    { days: "Lunes y Domingo", hours: "Atención Exclusiva con Cita Previa" }
  ]
};

export const RITUALS: Ritual[] = [
  {
    id: "balayage-haute-couture",
    category: "balayage",
    title: "Balayage Haute Couture",
    tagline: "Luz tridimensional personalizada con visagismo facial",
    description:
      "Técnica de aclarado artístico a mano alzada diseñada para armonizar con el subtono de piel y la caída natural de tus facciones. Incluye protocolo previo de reconstrucción molecular para preservar el 100% de la elasticidad de la fibra capilar.",
    sensoryNotes: {
      aroma: "Flor de Neroli & Vainilla de Madagascar",
      sensacao: "Seda ligera, movimiento fluido y luminosidad solar",
      duracao: "3h30 - 4h"
    },
    visagismoImpact: "Acentúa pómulos, alarga la mirada y aporta luminosidad perimetral inmediata.",
    recommendedFor: "Deseo de iluminación sofisticada sin efecto raíz marcado.",
    featured: true
  },
  {
    id: "alquimia-botanica",
    category: "hairspa",
    title: "Ritual Alquimia Botánica Spa",
    tagline: "Terapia de regeneración celular capilar & ozonoterapia",
    description:
      "Una experiencia inmersiva para el cuero cabelludo y la fibra. Mediante vapor de ozono, aceites esenciales puros y fitocomplejos reconstructores, desintoxicamos el folículo mientras recibes un masaje craneal descontracturante.",
    sensoryNotes: {
      aroma: "Romero silvestre, Bergamota & Cedro Blanco",
      sensacao: "Frescura revitalizante, alivio tensional y suavidad aterciopelada",
      duracao: "1h30"
    },
    visagismoImpact: "Devuelve el cuerpo y balance natural a cabellos estresados o desvitalizados.",
    recommendedFor: "Fibras deshidratadas, cuero cabelludo sensible o detox post-química.",
    featured: true
  },
  {
    id: "corte-escultural",
    category: "visagismo",
    title: "Corte Escultural & Visagismo",
    tagline: "Geometría viva adaptada a tu anatomía y estilo de vida",
    description:
      "No seguimos moldes genéricos. Analizamos la proporción de tu rostro, textura natural de tus ondas o hebras y tu rutina diaria para crear una silueta con caída orgánica que no requiere horas de estilizado en casa.",
    sensoryNotes: {
      aroma: "Bálsamo de Higo & Flor de Jazmín",
      sensacao: "Ligereza instantánea, libertad de movimiento y volumen exacto",
      duracao: "1h"
    },
    visagismoImpact: "Equilibra líneas angulares, suaviza facciones y enmarca la expresión con elegancia atemporal.",
    recommendedFor: "Quienes buscan un corte con personalidad, frescura y practicidad.",
    featured: false
  },
  {
    id: "silk-diamond-alignment",
    category: "alisado",
    title: "Esencia Silk & Gloss Alignment",
    tagline: "Alineamiento orgánico termoactivo sin agresión",
    description:
      "Tratamiento disciplinante de última generación, libre de vapores tóxicos o químicos agresivos. Enriquecido con aminoácidos nobles y colágeno biomimético para lograr un brillo espejo reflectante y reducción total del frizz.",
    sensoryNotes: {
      aroma: "Manteca de Karité & Flor de Almendro",
      sensacao: "Tacto de seda líquida, secado en la mitad del tiempo",
      duracao: "2h30 - 3h"
    },
    visagismoImpact: "Aporta verticalidad elegante y orden visual sin perder el movimiento natural.",
    recommendedFor: "Cabellos rebeldes, esponjados o con frizz que buscan practicidad diaria.",
    featured: false
  },
  {
    id: "unas-atelier",
    category: "uñas",
    title: "Atelier de Uñas & Manicura Rusa",
    tagline: "Detalle milimétrico, arquitectura de la uña y esmaltado impecable",
    description:
      "Cuidado de cutícula en seco con aparatología de precisión europea, nivelación con base rubber o esculpido en gel de alta durabilidad. Acabados elegantes, paletas nude haute couture y nail art minimalista.",
    sensoryNotes: {
      aroma: "Infusión de Lavanda Francesa & Aceite de Jojoba",
      sensacao: "Manos rejuvenecidas, brillo cristalino intransferible",
      duracao: "1h15 - 1h45"
    },
    visagismoImpact: "Manos estilizadas y armonizadas con tu porte y joyería.",
    recommendedFor: "Perfeccionistas que valoran la durabilidad y pulcritud absoluta en sus manos.",
    featured: true
  }
];

export const DIAGNOSTIC_STEPS = [
  {
    id: 1,
    title: "¿Cuál es tu estilo o energía deseada?",
    subtitle: "Elige la sensación que deseas transmitir al mirarte al espejo",
    options: [
      {
        id: "quiet-luxury",
        title: "Quiet Luxury",
        description: "Sofisticación silenciosa, tonos naturales cálidos, elegancia discreta y brillo impecable.",
        icon: "Sparkles",
        recommendedRitual: "Balayage Haute Couture + Terapia Gloss"
      },
      {
        id: "blonde-statement",
        title: "Loiro Impactante / Blonde Sublime",
        description: "Luminosidad audaz, contrastes luminosos de alto impacto y presencia inolvidable.",
        icon: "Sun",
        recommendedRitual: "Colorimetría Avanzada & Balayage Escultural"
      },
      {
        id: "effortless-natural",
        title: "French & Effortless Chic",
        description: "Textura orgánica, movimiento libre, corte visagista y bajo mantenimiento.",
        icon: "Wind",
        recommendedRitual: "Corte Escultural & Visagismo + Ritual Alquimia"
      },
      {
        id: "metamorfosis",
        title: "Metamorfosis & Sanación Capilar",
        description: "Renovación profunda de la fibra capilar, reconstrucción total y salud extrema.",
        icon: "ShieldCheck",
        recommendedRitual: "Ritual Alquimia Botánica Spa + Reconstrucción Molecular"
      }
    ]
  },
  {
    id: 2,
    title: "¿Cómo describirías la textura actual de tu cabello?",
    subtitle: "Identificamos el comportamiento natural de tu hebra",
    options: [
      {
        id: "fino-liso",
        title: "Fino / Sin Volumen",
        description: "Tiende a apelmazarse rápido, busca cuerpo, textura y movimiento dinámico."
      },
      {
        id: "ondulado-rebelde",
        title: "Ondulado / Con Frizz",
        description: "Ondas indefinidas que sufren con la humedad y requieren hidratación y control."
      },
      {
        id: "rizado-voluminoso",
        title: "Rizado / Con Personalidad",
        description: "Rizos que buscan nutrición intensa, definición esculpida y retención de humedad."
      },
      {
        id: "procesado-decolorado",
        title: "Procesado / Sensibilizado",
        description: "Cabello con decoloraciones o químicas previas que necesita restauración de lípidos y proteínas."
      }
    ]
  },
  {
    id: 3,
    title: "¿Cuál es tu prioridad número uno en esta visita?",
    subtitle: "Enfocamos el diagnóstico en tu objetivo principal",
    options: [
      {
        id: "iluminacion",
        title: "Iluminación de Mechas / Color",
        description: "Quiero renovar mi tono, aclarar con técnica de vanguardia o matizar mis reflejos."
      },
      {
        id: "salud-spa",
        title: "Salud Profunda & Spa Capilar",
        description: "Quiero revitalizar mi cuero cabelludo, frenar la caída y recuperar la fuerza del cabello."
      },
      {
        id: "corte-estilo",
        title: "Corte Transformador & Visagismo",
        description: "Quiero un cambio de forma que estilice mi rostro y resalte mis mejores rasgos."
      },
      {
        id: "experiencia-total",
        title: "Experiencia Completa (Cabelo + Uñas)",
        description: "Quiero un día de autocuidado integral con tratamiento capilar y diseño de uñas."
      }
    ]
  }
];

export const LOOKBOOK_GALLERY: LookbookItem[] = [
  {
    id: "lb-1",
    title: "Balayage Vainilla Dorada",
    category: "balayage",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    technique: "Contour & Freehand Babylights",
    tone: "Rubio Vainilla & Caramelo Cálido"
  },
  {
    id: "lb-2",
    title: "Loiro Perla & Mantequilla",
    category: "balayage",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    technique: "Micro-costura & Difuminado de Raíz",
    tone: "Champaña Cristalino"
  },
  {
    id: "lb-3",
    title: "Corte Shag Visagista con Ondas",
    category: "cortes",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
    technique: "Capas Invisibles & Framing Facial",
    tone: "Castaño Miel Profundo"
  },
  {
    id: "lb-4",
    title: "Terapia Ozonizada & Brillo Seda",
    category: "hairspa",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80",
    technique: "Ozonoterapia + Masaje Craneal",
    tone: "Nutrición Celular"
  },
  {
    id: "lb-5",
    title: "Nail Art Minimalista & Manicura Rusa",
    category: "uñas",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80",
    technique: "Esmaltado Semi + Nivelación Rubber",
    tone: "Nude Glazed Chic"
  },
  {
    id: "lb-6",
    title: "Brunette Iluminada Alta Costura",
    category: "balayage",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1000&q=80",
    technique: "Sombré Caramelo & Avellana",
    tone: "Mocha & Canela"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Valeria Benítez",
    role: "Cliente Habitual",
    city: "Katueté",
    comment:
      "Camila tiene una delicadeza y precisión única. Llevaba años buscando a alguien que entendiera el rubio sin destruir mi cabello. Tu Esencia es más que un salón, es un espacio donde salís renovada por dentro y por fuera.",
    rating: 5,
    service: "Balayage Haute Couture & Spa"
  },
  {
    name: "Juliana Duarte",
    role: "Empresaria",
    city: "Canindeyú",
    comment:
      "El visagismo del corte cambió por completo cómo me siento todos los días. Ahora me seco el pelo en 5 minutos y queda impecable. La atención personalizada y el aroma del lugar son de otro mundo.",
    rating: 5,
    service: "Corte Escultural & Visagismo"
  },
  {
    name: "Mariana Alencastro",
    role: "Diseñadora",
    city: "Katueté",
    comment:
      "Las uñas me duran impecables más de 3 semanas sin una sola imperfección. La técnica de manicura rusa que usan es de nivel internacional. No cambio Tu Esencia por nada.",
    rating: 5,
    service: "Atelier de Uñas & Gel"
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Salud antes que tendencia",
    description:
      "Ninguna técnica química se realiza sin antes comprobar la resistencia de la fibra. Si tu cabello necesita sanar primero, te guiamos en el camino con honestidad absoluta."
  },
  {
    number: "02",
    title: "Visagismo de Identidad",
    description:
      "No replicamos cortes en serie. Cada ángulo, gradación y punto de luz está diseñado para destacar la armonía única de tu estructura facial."
  },
  {
    number: "03",
    title: "Santuario Sensorial",
    description:
      "El tiempo es tu mayor lujo. Cuidamos cada estímulo: aromas botánicos calmantes, infusiones herbales exclusivas y un ambiente donde puedes desconectar del ruido exterior."
  }
];

