import React, { useState, useEffect, useRef } from 'react';
const T = {
  es: {
    splash_title: "RESONANCIA ORIGEN",
    splash_sub: "ACTIVANDO TU CONSCIENCIA GENETICA",
    choose_path: "ELIGE TU CAMINO",
    frequencies: "FRECUENCIAS",
    meditations: "MEDITACIONES",
    experiences: "EXPERIENCIAS",
    catalog: "CATALOGO",
    my_alignment: "MI ALINEACION",
    my_field: "MI CAMPO DE RESONANCIA",
    empty_field: "Tu campo de resonancia esta vacio.",
    empty_sub: "Toca el corazon de cualquier frecuencia para anclarla en tu campo personal.",
    reminder_title: "RECORDATORIO DE ALINEACION",
    reminder_morning: "Manana",
    reminder_afternoon: "Tarde",
    reminder_night: "Noche",
    reminder_set_morning: "Tu alineacion esta programada para la manana",
    reminder_set_afternoon: "Tu alineacion esta programada para la tarde",
    reminder_set_night: "Tu alineacion esta programada para la noche",
    banner: "✦ Es momento de tu alineacion diaria Genora",
    suggestion_label: "SUGERENCIA DE ALINEACION",
    coming_soon: "Proximas frecuencias en camino...",
    sanctuary_title: "SANTUARIO GENORA",
    sanctuary_micro: "Un espacio reservado para las herramientas que apoyan tu camino.",
    sanctuary_access: "Acceso exclusivo mediante codigo de acceso.",
    sanctuary_placeholder: "Ingresa tu codigo de acceso",
    sanctuary_enter: "ACCEDER",
    sanctuary_error: "Codigo no verificado. Solicita tu codigo de acceso.",
    sanctuary_loading: "Sintonizando frecuencia de alta fidelidad...",
    sanctuary_library_sub: "Frecuencias y videos para tu proceso de sanacion.",
    home_buttons: { frequencies: "FRECUENCIAS", meditations: "MEDITACIONES", experiences: "EXPERIENCIAS", sanctuary: "SANTUARIO GENORA" },
    freq_pillars: { MENTE: "MENTE", COHERENCIA: "COHERENCIA", CUERPO: "CUERPO", EXPANSION: "EXPANSION", EXPERIENCIAS_G: "EXPERIENCIAS GENORA", ARMONIZACION: "ARMONIZACION BIOLOGICA" },
    med_pillars: { LINAJE: "LINAJE & ORIGEN", CONSCIENCIA: "CONSCIENCIA & UNIFICACION", ELEVACION: "ELEVACION & TRANSMUTACION" },
    exp_levels: {
      UNVEILING: "THE UNVEILING", UNVEILING_sub: "Activando el Potencial del Ser Humano de Luz",
      AWAKENING: "PATH OF AWAKENING", AWAKENING_sub: "El Sendero de los Dones Superiores",
      CODEX: "CODEX OF WISDOM", CODEX_sub: "Conocimiento, Sanacion y Clarividencia",
      VOICE: "VOICE OF LIGHT", VOICE_sub: "Clariaudiencia y Conexion Multidimensional",
      ALCHEMIST: "ALCHEMIST PATH", ALCHEMIST_sub: "Transmutacion y Precognicion",
      MERKABA: "MERKABA ASCENSION", MERKABA_sub: "Ensonacion, Resurreccion y Omnipotencia"
    },
    unveiling_stages: {
      TERRESTRE: "ETAPA I · GENOMA HUMANO TERRESTRE", TERRESTRE_sub: "El Despertar de las Maestrias Fundamentales",
      DIVINO: "ETAPA II · GENOMA HUMANO DIVINO", DIVINO_sub: "La Expansion de la Consciencia Superior",
      INTERDIMENSIONAL: "ETAPA III · GENOMA HUMANO INTERDIMENSIONAL", INTERDIMENSIONAL_sub: "La Integracion del Ser de Luz"
    },
    pillars: {
      MENTE: { label: "MENTE", subs: { "APRENDIZAJE": "APRENDIZAJE & ENFOQUE", "CREATIVIDAD": "CREATIVIDAD & RESOLUCION", "CLARIDAD": "CLARIDAD MENTAL", "RENDIMIENTO": "ACTIVACION MENTAL & RENDIMIENTO" } },
      COHERENCIA: { label: "COHERENCIA", subs: { "REGULACION": "REGULACION EMOCIONAL", "EQUILIBRIO": "EQUILIBRIO INTERNO", "INTEGRACION": "INTEGRACION MENTE-CUERPO" } },
      CUERPO: { label: "CUERPO", subs: { "REGENERACION": "REGENERACION & SANACION", "ORGANOS": "ORGANOS & SISTEMAS", "DOLOR": "DOLOR & RECUPERACION" } },
      EXPANSION: { label: "EXPANSION", subs: { "MEDITACION": "MEDITACION & ESTADOS INTERNOS", "PERCEPCION": "PERCEPCION & INTUICION", "EXPERIENCIAS": "EXPERIENCIAS EXPANDIDAS" } },
      EXPERIENCIAS_G: { label: "EXPERIENCIAS GENORA", subs: { "SESIONES": "SESIONES EN VIVO", "RITUALES": "RITUALES DE ACTIVACION", "CEREMONIAS": "CEREMONIAS SONORAS" } },
      ARMONIZACION: { label: "ARMONIZACION BIOLOGICA", subs: { "ADN": "REPROGRAMACION DE ADN", "CAMPOS": "CAMPOS BIOENERGETICOS", "CELULAR": "REGENERACION CELULAR" } }
    },
    tracks: {
      "alpha-integration": "Integracion de informacion desde un estado de calma.",
      "beta-learning": "Absorcion pasiva de informacion sin esfuerzo.",
      "alpha-intelligence": "Mejora la capacidad de procesamiento cognitivo.",
      "beta-focus": "Concentracion y claridad mental sostenida.",
      "beta-decision": "Claridad en momentos clave de decision.",
      "alpha-creator": "Activa el pensamiento positivo e ideas nuevas.",
      "beta-solution": "Resolucion analitica y toma de decisiones.",
      "beta-logic": "Potencia el pensamiento logico y analitico.",
      "beta-attention": "Atencion consciente y respuesta mental agil.",
      "alpha-balance-mind": "Reduce la tension y mejora la estabilidad mental.",
      "alpha-center": "Centracion, claridad y expresion consciente.",
      "beta-decision-c": "Claridad en momentos clave de decision.",
      "alpha-calm-alert": "Estado de alerta serena y presencia absoluta.",
      "alpha-clarity": "Purificacion de pensamientos y vision nitida.",
      "gamma-insight": "Destellos de comprension profunda y epifanias.",
      "beta-active-mind": "Aumenta la atencion externa y actividad mental.",
      "beta-vital-mind": "Genera energia mental y enfoque en tareas.",
      "beta-cortex": "Procesamiento avanzado e inteligencia.",
      "alpha-focus": "Concentracion y enfoque mental sostenido."
    }
  },
  en: {
    splash_title: "ORIGIN RESONANCE",
    splash_sub: "ACTIVATING YOUR GENETIC CONSCIOUSNESS",
    choose_path: "CHOOSE YOUR PATH",
    frequencies: "FREQUENCIES",
    meditations: "MEDITATIONS",
    experiences: "EXPERIENCES",
    catalog: "CATALOG",
    my_alignment: "MY ALIGNMENT",
    my_field: "MY RESONANCE FIELD",
    empty_field: "Your resonance field is empty.",
    empty_sub: "Tap the heart on any frequency to anchor it to your personal field.",
    reminder_title: "ALIGNMENT REMINDER",
    reminder_morning: "Morning",
    reminder_afternoon: "Afternoon",
    reminder_night: "Night",
    reminder_set_morning: "Your alignment is scheduled for the morning",
    reminder_set_afternoon: "Your alignment is scheduled for the afternoon",
    reminder_set_night: "Your alignment is scheduled for the night",
    banner: "✦ It is time for your daily Genora alignment",
    suggestion_label: "ALIGNMENT SUGGESTION",
    coming_soon: "Upcoming frequencies on their way...",
    sanctuary_title: "GENORA SANCTUARY",
    sanctuary_micro: "A reserved space for the tools that support your journey.",
    sanctuary_access: "Exclusive access via access code.",
    sanctuary_placeholder: "Enter your access code",
    sanctuary_enter: "ENTER",
    sanctuary_error: "Code not verified. Request your access code.",
    sanctuary_loading: "Tuning high-fidelity frequency...",
    sanctuary_library_sub: "Frequencies and videos for your healing process.",
    home_buttons: { frequencies: "FREQUENCIES", meditations: "MEDITATIONS", experiences: "EXPERIENCES", sanctuary: "GENORA SANCTUARY" },
    freq_pillars: { MENTE: "MIND", COHERENCIA: "COHERENCE", CUERPO: "BODY", EXPANSION: "EXPANSION", EXPERIENCIAS_G: "GENORA EXPERIENCES", ARMONIZACION: "BIOLOGICAL HARMONIZATION" },
    med_pillars: { LINAJE: "LINEAGE & ORIGIN", CONSCIENCIA: "CONSCIOUSNESS & UNIFICATION", ELEVACION: "ELEVATION & TRANSMUTATION" },
    exp_levels: {
      UNVEILING: "THE UNVEILING", UNVEILING_sub: "Activating the Potential of the Human Being of Light",
      AWAKENING: "PATH OF AWAKENING", AWAKENING_sub: "The Path of Superior Gifts",
      CODEX: "CODEX OF WISDOM", CODEX_sub: "Knowledge, Healing and Clairvoyance",
      VOICE: "VOICE OF LIGHT", VOICE_sub: "Clairaudience and Multidimensional Connection",
      ALCHEMIST: "ALCHEMIST PATH", ALCHEMIST_sub: "Transmutation and Precognition",
      MERKABA: "MERKABA ASCENSION", MERKABA_sub: "Dreaming, Resurrection and Omnipotence"
    },
    unveiling_stages: {
      TERRESTRE: "STAGE I · TERRESTRIAL HUMAN GENOME", TERRESTRE_sub: "The Awakening of Fundamental Masteries",
      DIVINO: "STAGE II · DIVINE HUMAN GENOME", DIVINO_sub: "The Expansion of Superior Consciousness",
      INTERDIMENSIONAL: "STAGE III · INTERDIMENSIONAL HUMAN GENOME", INTERDIMENSIONAL_sub: "The Integration of the Being of Light"
    },
    pillars: {
      MENTE: { label: "MIND", subs: { "APRENDIZAJE": "LEARNING & FOCUS", "CREATIVIDAD": "CREATIVITY & RESOLUTION", "CLARIDAD": "MENTAL CLARITY", "RENDIMIENTO": "MENTAL ACTIVATION & PERFORMANCE" } },
      COHERENCIA: { label: "COHERENCE", subs: { "REGULACION": "EMOTIONAL REGULATION", "EQUILIBRIO": "INNER BALANCE", "INTEGRACION": "MIND-BODY INTEGRATION" } },
      CUERPO: { label: "BODY", subs: { "REGENERACION": "REGENERATION & HEALING", "ORGANOS": "ORGANS & SYSTEMS", "DOLOR": "PAIN & RECOVERY" } },
      EXPANSION: { label: "EXPANSION", subs: { "MEDITACION": "MEDITATION & INNER STATES", "PERCEPCION": "PERCEPTION & INTUITION", "EXPERIENCIAS": "EXPANDED EXPERIENCES" } },
      EXPERIENCIAS_G: { label: "GENORA EXPERIENCES", subs: { "SESIONES": "LIVE SESSIONS", "RITUALES": "ACTIVATION RITUALS", "CEREMONIAS": "SOUND CEREMONIES" } },
      ARMONIZACION: { label: "BIOLOGICAL HARMONIZATION", subs: { "ADN": "DNA REPROGRAMMING", "CAMPOS": "BIOENERGETIC FIELDS", "CELULAR": "CELLULAR REGENERATION" } }
    },
    tracks: {
      "alpha-integration": "Information integration from a state of calm.",
      "beta-learning": "Passive information absorption without effort.",
      "alpha-intelligence": "Improves cognitive processing capacity.",
      "beta-focus": "Concentration and sustained mental clarity.",
      "beta-decision": "Clarity in key decision moments.",
      "alpha-creator": "Activates positive thinking and new ideas.",
      "beta-solution": "Analytical resolution and decision making.",
      "beta-logic": "Enhances logical and analytical thinking.",
      "beta-attention": "Conscious attention and agile mental response.",
      "alpha-balance-mind": "Reduces tension and improves mental stability.",
      "alpha-center": "Centering, clarity and conscious expression.",
      "beta-decision-c": "Clarity in key decision moments.",
      "alpha-calm-alert": "Serene alertness and absolute presence.",
      "alpha-clarity": "Purification of thoughts and clear vision.",
      "gamma-insight": "Flashes of deep understanding and epiphanies.",
      "beta-active-mind": "Increases external attention and mental activity.",
      "beta-vital-mind": "Generates mental energy and task focus.",
      "beta-cortex": "Advanced processing and intelligence.",
      "alpha-focus": "Sustained concentration and mental focus."
    }
  }
};
const SANCTUARY_CODE = "GENORA2026";
const SANCTUARY_TOOLS = [
  { id: "frecuencia-adn-001", name: "Frecuencia ADN — Activacion Primaria", type: "audio", description: "Frecuencia de alta fidelidad para activacion genetica profunda.", duration: "60 min", url: "https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1/genora/frecuencias/frecuencia-adn-001.wav" },
  { id: "frecuencia-celular-001", name: "Regeneracion Celular — Campo Cuantico", type: "audio", description: "Soporte vibracional para procesos de sanacion celular.", duration: "45 min", url: "https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1/genora/frecuencias/frecuencia-celular-001.wav" },
  { id: "video-meditacion-001", name: "Meditacion Guiada — Matrices Perinatales", type: "video", description: "Proceso guiado para liberacion de matrices perinatales.", duration: "35 min", url: "https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1/genora/videos/meditacion-matrices-001.mp4", thumbnail: "" },
  { id: "frecuencia-ancestral-001", name: "Liberacion Ancestral — Limpieza de Campo", type: "audio", description: "Frecuencia para desbloqueo de patrones heredados.", duration: "55 min", url: "https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1/genora/frecuencias/frecuencia-ancestral-001.wav" },
  { id: "atraer-clientes-dinero", name: "Atraer Clientes & Dinero", type: "audio", description: "Frecuencia de alta gama para activar el flujo de abundancia, clientes y prosperidad.", duration: "60 min", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/atraer-clientes-dinero.wav" },
  { id: "ganar-dinero-tener-buena-suerte", name: "Ganar Dinero & Buena Suerte", type: "audio", description: "Frecuencia vibracional para sintonizar con la buena fortuna y la expansion financiera.", duration: "60 min", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/ganar-dinero-tener-buena-suerte.wav" },
];
const FREQ_TRACKS = {
  MENTE: {
    "APRENDIZAJE": [
      { id: "alpha-integration", name: "Alpha Integration", hz: "8-10 Hz", url: "/audio/alpha-integration.mp3" },
      { id: "beta-learning", name: "Beta Learning", hz: "12-14 Hz", url: "/audio/beta-learning.mp3" },
      { id: "alpha-intelligence", name: "Alpha Intelligence", hz: "11.5-14.5 Hz", url: "/audio/alpha-intelligence.mp3" },
      { id: "beta-focus", name: "Beta Focus", hz: "15-18 Hz", url: "/audio/beta-focus.mp3" },
      { id: "beta-decision", name: "Beta Decision", hz: "13.8 Hz", url: "/audio/beta-decision.mp3" }
    ],
    "CREATIVIDAD": [
      { id: "alpha-creator", name: "Alpha Creator", hz: "8-12 Hz", url: "/audio/alpha-creator.mp3" },
      { id: "beta-solution", name: "Beta Solution", hz: "12-36 Hz", url: "/audio/beta-solution.mp3" },
      { id: "beta-logic", name: "Beta Logic", hz: "13-40 Hz", url: "/audio/beta-logic.mp3" },
      { id: "beta-attention", name: "Beta Attention", hz: "12-15 Hz", url: "/audio/beta-attention.mp3" }
    ],
    "CLARIDAD": [
      { id: "alpha-balance-mind", name: "Alpha Balance Mind", hz: "11 Hz", url: "/audio/alpha-balance-mind.mp3" },
      { id: "alpha-center", name: "Alpha Center", hz: "12 Hz", url: "/audio/alpha-center.mp3" },
      { id: "beta-decision-c", name: "Beta Decision", hz: "13.8 Hz", url: "/audio/beta-decision.mp3" },
      { id: "alpha-calm-alert", name: "Alpha Calm Alert", hz: "10.6 Hz", url: "/audio/alpha-calm-alert.mp3" },
      { id: "alpha-clarity", name: "Alpha Clarity", hz: "10.5 Hz", url: "/audio/alpha-clarity.mp3" },
      { id: "gamma-insight", name: "Gamma Insight", hz: "40 Hz", url: "/audio/gamma-insight.mp3" }
    ],
    "RENDIMIENTO": [
      { id: "beta-active-mind", name: "Beta Active Mind", hz: "13-27 Hz", url: "/audio/beta-active-mind.mp3" },
      { id: "beta-vital-mind", name: "Beta Vital Mind", hz: "14 Hz", url: "/audio/beta-vital-mind.mp3" },
      { id: "beta-cortex", name: "Beta Cortex", hz: "15.4 Hz", url: "/audio/beta-cortex.mp3" },
      { id: "alpha-focus", name: "Alpha Focus", hz: "11-14 Hz", url: "/audio/alpha-focus.mp3" }
    ]
  },
  COHERENCIA: { "REGULACION": [], "EQUILIBRIO": [], "INTEGRACION": [] },
  CUERPO: { "REGENERACION": [], "ORGANOS": [], "DOLOR": [] },
  EXPANSION: { "MEDITACION": [], "PERCEPCION": [], "EXPERIENCIAS": [] },
  EXPERIENCIAS_G: { "SESIONES": [], "RITUALES": [], "CEREMONIAS": [] },
  ARMONIZACION: { "ADN": [], "CAMPOS": [], "CELULAR": [] }
};
const ALL_TRACKS_FLAT = Object.values(FREQ_TRACKS).flatMap(p => Object.values(p).flat()).filter(t => t.url);
const MED_DATA = {
  LINAJE: { sessions: [
    { id: "crimson-genesis", name: "Crimson Genesis", sub: "Sanacion del Linaje y Memorias Profundas", desc: "Exploracion de emociones profundas, memorias ancestrales y patrones grabados en las capas geneticas del ADN." },
    { id: "golden-legacy", name: "Golden Legacy", sub: "Reconexion con el Linaje Ancestral y Galactico", desc: "Viaje de reconocimiento y restauracion de la herencia ancestral y galactica." }
  ]},
  CONSCIENCIA: { sessions: [
    { id: "chamber-translove", name: "Chamber of Translove", sub: "La Camara de la Unificacion Interior", desc: "Acceso a la camara interna donde habitan los sentimientos ennoblecidos que permiten vivir desde la unidad y la compasion." },
    { id: "codex-unity", name: "Codex of Unity", sub: "El Viaje de la Dualidad a la Neutralidad", desc: "Recorrido por los niveles superiores de consciencia para integrar el conocimiento unificador." }
  ]},
  ELEVACION: { sessions: [
    { id: "ascension-192", name: "Ascension 192", sub: "Activacion de la Consciencia Humana Genuina", desc: "Meditacion de expansion espiritual enfocada en el reconocimiento del ser humano como portador de frecuencias elevadas." },
    { id: "obsidian-light", name: "Obsidian Light", sub: "Transmutacion y Liberacion de Densidades", desc: "Proceso de limpieza energetica profunda para favorecer la liberacion, transmutacion y restauracion del equilibrio interno." }
  ]}
};
const EXP_DATA = {
  UNVEILING: {
    TERRESTRE: [
      { id: "eternal-grace", name: "Eternal Grace", sub: "Maestrias de la Eternidad, el Poder y la Gracia", desc: "La primera iniciacion del camino." },
      { id: "sacred-power", name: "Sacred Power", sub: "Maestrias del Poder, la Sabiduria y la Energia", desc: "Experiencia para fortalecer la relacion consciente con la energia personal." },
      { id: "grace-in-motion", name: "Grace in Motion", sub: "Maestrias de la Gracia, el Poder y la Energia", desc: "La integracion armonica entre la fuerza interior y la fluidez consciente." },
      { id: "golden-freedom", name: "Golden Freedom", sub: "Maestrias del Amor, la Luz Dorada y la Libertad", desc: "Iniciacion orientada a la expansion del corazon." }
    ],
    DIVINO: [
      { id: "nature-eternal", name: "Nature Eternal", sub: "Maestrias de la Naturaleza y la Eternidad", desc: "Reconexion con los principios vivos de la creacion." },
      { id: "wisdom-freedom", name: "Wisdom of Freedom", sub: "Maestrias de la Sabiduria y la Libertad", desc: "La verdadera libertad surge del conocimiento consciente de uno mismo." },
      { id: "infinite-current", name: "Infinite Current", sub: "Maestrias de la Eternidad y la Energia", desc: "Inmersion en los principios energeticos que sostienen la continuidad de la vida." },
      { id: "grace-eternity", name: "Grace of Eternity", sub: "Maestrias de la Sabiduria, la Gracia y la Eternidad", desc: "Integracion de la sabiduria y la gracia." }
    ],
    INTERDIMENSIONAL: [
      { id: "heart-of-light", name: "Heart of Light", sub: "Maestrias de la Gracia, el Amor y la Energia", desc: "Activacion del corazon como puente entre la energia y la expansion de la consciencia." },
      { id: "golden-wisdom", name: "Golden Wisdom", sub: "Maestrias de la Sabiduria, la Luz Dorada y la Libertad", desc: "Integracion de la vision superior y la claridad interior." },
      { id: "eternal-nature", name: "Eternal Nature", sub: "Maestrias de la Naturaleza, la Energia y la Eternidad", desc: "Reconocimiento de la conexion profunda entre la vida y la energia universal." },
      { id: "sovereign-light", name: "Sovereign Light", sub: "Maestrias del Poder, la Energia y la Eternidad", desc: "La iniciacion final. Sintesis de las maestrias desarrolladas." }
    ]
  },
  AWAKENING: [
    { id: "apertura-dones", name: "Apertura de Dones", desc: "Activacion y reconocimiento de los dones superiores del ser." },
    { id: "telepatia-cosmica", name: "Telepatia Cosmica", desc: "Expansion de la percepcion hacia niveles superiores de consciencia." },
    { id: "creacion-abundancia", name: "Creacion de Abundancia", desc: "Conexion con los principios creativos de la abundancia universal." }
  ],
  CODEX: [
    { id: "don-conocimiento", name: "Don del Conocimiento", desc: "Despertar de la sabiduria interior y la percepcion profunda." },
    { id: "don-sanacion", name: "Don de Sanacion", desc: "Activacion de las capacidades naturales de sanacion consciente." },
    { id: "clarividencia", name: "Clarividencia", desc: "Desarrollo de la percepcion visual expandida." },
    { id: "omnibenevolencia", name: "Virtud de la Omnibenevolencia", desc: "Activacion del servicio consciente desde la bondad universal." }
  ],
  VOICE: [
    { id: "clariaudiencia", name: "Don de Clariaudiencia", desc: "Desarrollo de la escucha interna y la percepcion auditiva expandida." },
    { id: "equipos-luz", name: "Conexion con Equipos de Luz", desc: "Fortalecimiento de la conexion con niveles ampliados de guia." },
    { id: "dimensiones-luz", name: "Conexion con Dimensiones de Luz", desc: "Acceso a niveles expandidos de percepcion multidimensional." },
    { id: "omnipresencia", name: "Virtud de la Omnipresencia", desc: "Reconocimiento de la presencia consciente en todos los niveles." }
  ],
  ALCHEMIST: [
    { id: "don-transmutacion", name: "Don de Transmutacion", desc: "Transformacion consciente de patrones y densidades." },
    { id: "don-precognicion", name: "Don de Precognicion", desc: "Reconocimiento de patrones emergentes dentro del proceso evolutivo." }
  ],
  MERKABA: [
    { id: "don-ensonacion", name: "Don de la Ensonacion", desc: "Activacion del estado de ensonacion consciente." },
    { id: "ensonacion-luz", name: "Activacion de la Ensonacion de Luz", desc: "Expansion del estado de ensonacion hacia niveles de luz." },
    { id: "vehiculo-luz", name: "Activacion del Vehiculo de Luz Merkaba", desc: "Activacion del cuerpo de luz multidimensional." },
    { id: "don-resurreccion", name: "Don de la Resurreccion", desc: "Reconocimiento del poder de renovacion consciente." },
    { id: "omnipotencia", name: "Virtud de la Omnipotencia", desc: "Integracion del potencial creador ilimitado del ser." }
  ]
};
const formatTime = (secs) => {
  if (!secs || isNaN(secs) || !isFinite(secs)) return '00:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};
const getTimeOfDay = () => {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'manana';
  if (h >= 12 && h < 19) return 'tarde';
  return 'noche';
};
const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(34,211,238,0.4), 0 0 150px rgba(34,211,238,0.2); }
    50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(34,211,238,0.9), 0 0 120px rgba(34,211,238,0.6), 0 0 250px rgba(34,211,238,0.4); }
  }
  @keyframes aura-violet {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(168,85,247,0.35), 0 0 150px rgba(168,85,247,0.15); }
    50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(168,85,247,0.8), 0 0 120px rgba(168,85,247,0.5), 0 0 250px rgba(168,85,247,0.3); }
  }
  @keyframes aura-gold {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(212,175,55,0.35), 0 0 150px rgba(212,175,55,0.15); }
    50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(212,175,55,0.8), 0 0 120px rgba(212,175,55,0.5), 0 0 250px rgba(212,175,55,0.3); }
  }
  @keyframes aura-gold-santuario {
    0%, 100% { transform: scale(1); box-shadow: 0 0 60px rgba(212,175,55,0.25), 0 0 120px rgba(212,175,55,0.12); }
    50% { transform: scale(1.02); box-shadow: 0 0 40px rgba(212,175,55,0.6), 0 0 100px rgba(212,175,55,0.35); }
  }
  @keyframes micro-orbe-breathe {
    0%, 100% { transform: scale(1); opacity: 0.7; box-shadow: 0 0 6px #d4af37; }
    50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 12px #d4af37; }
  }
  @keyframes fadeInDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse-glow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
  @keyframes glance-sway {
    0%   { transform: translateX(0); }
    20%  { transform: translateX(4px); }
    40%  { transform: translateX(-3px); }
    60%  { transform: translateX(2px); }
    80%  { transform: translateX(-1px); }
    100% { transform: translateX(0); }
  }
  @keyframes golden-border-pulse {
    0%, 100% { box-shadow: 0 0 0 1px rgba(212,175,55,0.5), 0 8px 32px rgba(212,175,55,0.15); }
    50%       { box-shadow: 0 0 0 2px rgba(212,175,55,0.9), 0 12px 40px rgba(212,175,55,0.35); }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  .fade-in-up { animation: fadeInUp 0.6s ease forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; font-family: sans-serif; color: white; }
  .gold-title { color: #d4af37 !important; text-shadow: 0 0 8px rgba(212,175,55,0.4); }
  .gold-sub { color: #d4af37 !important; opacity: 0.85; }
  .gold-micro { color: #c9a227 !important; opacity: 0.7; }
  .home-btn {
    width: 75%; max-width: 290px; padding: 14px; margin: 6px 0;
    border-radius: 40px; color: white; font-size: 10px; letter-spacing: 5px;
    text-transform: uppercase; font-weight: 200; cursor: pointer;
    transition: all 0.4s ease; border: 1px solid rgba(34,211,238,0.3);
    background: rgba(34,211,238,0.03); text-align: center;
  }
  .home-btn:hover { background: rgba(34,211,238,0.08); border-color: rgba(34,211,238,0.6); }
  .home-btn.bright { border-color: rgba(34,211,238,0.4); }
  .home-btn.bright:hover { background: rgba(34,211,238,0.1); border-color: rgba(34,211,238,0.8); box-shadow: 0 0 20px rgba(34,211,238,0.2); }
  .home-btn.violet { border-color: rgba(168,85,247,0.3); background: rgba(168,85,247,0.03); }
  .home-btn.violet:hover { background: rgba(168,85,247,0.08); border-color: rgba(168,85,247,0.6); }
  .home-btn.sanctuary { border-color: rgba(212,175,55,0.4); background: rgba(212,175,55,0.04); margin-top: 16px; }
  .home-btn.sanctuary:hover { background: rgba(212,175,55,0.1); border-color: rgba(212,175,55,0.7); box-shadow: 0 0 15px rgba(212,175,55,0.15); }
  .category-stack { display: flex; flex-direction: column; align-items: center; gap: 6px; width: 100%; }
  .pillar-card {
    width: 75%; max-width: 290px; padding: 13px; border-radius: 40px;
    background: rgba(34,211,238,0.02); border: 1px solid rgba(34,211,238,0.25);
    text-align: center; cursor: pointer; font-size: 10px; letter-spacing: 4px;
    text-transform: uppercase; font-weight: 200; transition: all 0.3s ease; color: white;
  }
  .pillar-card:hover { background: rgba(34,211,238,0.06); border-color: rgba(34,211,238,0.5); }
  .pillar-card.violet { border-color: rgba(168,85,247,0.25); background: rgba(168,85,247,0.02); }
  .pillar-card.violet:hover { background: rgba(168,85,247,0.06); border-color: rgba(168,85,247,0.5); }
  .pillar-card.gold { border-color: rgba(212,175,55,0.3); background: rgba(212,175,55,0.02); }
  .pillar-card.gold:hover { background: rgba(212,175,55,0.06); border-color: rgba(212,175,55,0.5); }
  .track-card {
    width: 85%; max-width: 340px; padding: 18px 22px; margin: 6px 0; border-radius: 28px;
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1);
    display: flex; justify-content: space-between; align-items: center; cursor: pointer;
  }
  .track-card:active { transform: scale(0.98); }
  .track-card.suggestion { border-color: rgba(34,211,238,0.3); background: rgba(34,211,238,0.04); }
  .session-card {
    width: 85%; max-width: 340px; padding: 18px 22px; margin: 6px 0; border-radius: 28px;
    background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08);
    cursor: default; transition: all 0.3s ease;
  }
  .session-card.violet { border-color: rgba(168,85,247,0.2); }
  .session-card.gold { border-color: rgba(212,175,55,0.2); }
  .session-card.gold:hover { background: rgba(212,175,55,0.04); border-color: rgba(212,175,55,0.35); }
  .back-button-genora {
    width: 42px; height: 42px; border-radius: 50%; border: 1px solid rgba(34,211,238,0.5);
    background: rgba(34,211,238,0.08); display: flex; align-items: center; justify-content: center; cursor: pointer;
  }
  .time-button {
    width: 58px; padding: 10px 0; border-radius: 40px; border: 1px solid rgba(255,255,255,0.15);
    background: none; color: white; font-size: 12px; cursor: pointer; transition: 0.2s; font-weight: 200;
  }
  .heart-btn {
    background: none; border: none; cursor: pointer; font-size: 16px;
    padding: 4px 8px; line-height: 1; transition: transform 0.2s ease; flex-shrink: 0;
  }
  .heart-btn:active { transform: scale(1.4); }
  .bottom-bar {
    position: fixed; bottom: 0; left: 0; right: 0;
    background: rgba(2,6,23,0.96); backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex; justify-content: center; z-index: 100;
  }
  .bar-tab {
    flex: 1; max-width: 200px; padding: 14px 8px 18px;
    background: none; border: none; color: rgba(255,255,255,0.3);
    font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
    cursor: pointer; transition: all 0.3s ease;
    display: flex; flex-direction: column; align-items: center; gap: 4px;
  }
  .bar-tab.active { color: #22d3ee; }
  .bar-tab.active.gold-tab { color: #d4af37; }
  .bar-tab-icon { font-size: 18px; line-height: 1; }
  .lang-switch { display: flex; border: 1px solid rgba(34,211,238,0.35); border-radius: 20px; overflow: hidden; }
  .lang-switch.gold-border { border-color: rgba(212,175,55,0.35); }
  .lang-switch.violet-border { border-color: rgba(168,85,247,0.35); }
  .lang-btn { padding: 5px 12px; background: none; border: none; font-size: 10px; letter-spacing: 2px; cursor: pointer; transition: all 0.2s; color: rgba(255,255,255,0.35); font-weight: 200; }
  .lang-btn.active { background: rgba(34,211,238,0.15); color: #22d3ee; }
  .lang-btn.active.gold-text { background: rgba(212,175,55,0.1); color: #d4af37; }
  .lang-btn.active.violet-text { background: rgba(168,85,247,0.1); color: #a855f7; }
  .progress-bar-container { width: 100%; height: 2px; background: rgba(255,255,255,0.1); border-radius: 2px; margin: 8px 0 4px; cursor: pointer; }
  .progress-bar-fill { height: 100%; border-radius: 2px; background: #22d3ee; transition: width 0.5s linear; }
  .reminder-btn { padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(34,211,238,0.25); background: none; color: rgba(255,255,255,0.4); font-size: 10px; letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; font-weight: 200; }
  .reminder-btn.active { border-color: #22d3ee; color: #22d3ee; background: rgba(34,211,238,0.08); }
  .alineacion-banner { animation: fadeInDown 0.4s ease forwards; margin: 0 auto 12px; width: 85%; max-width: 340px; padding: 10px 16px; border-radius: 20px; background: rgba(34,211,238,0.05); border: 1px solid rgba(34,211,238,0.15); text-align: center; }
  .suggestion-badge { animation: fadeInDown 0.3s ease forwards; font-size: 9px; letter-spacing: 2px; color: rgba(34,211,238,0.75); text-transform: uppercase; font-weight: 200; }
  .coming-soon-box { text-align: center; color: rgba(255,255,255,0.2); padding: 40px 20px; font-size: 11px; letter-spacing: 3px; font-weight: 200; line-height: 2; }
  .coming-soon-icon { font-size: 28px; margin-bottom: 16px; opacity: 0.4; }
  .logo-filtro-dorado { filter: sepia(1) hue-rotate(-12deg) saturate(2.3) brightness(0.88) drop-shadow(0 0 20px rgba(212,175,55,0.65)) !important; transition: all 0.8s ease-in-out; }
  .logo-filtro-violeta { filter: sepia(1) hue-rotate(220deg) saturate(3) brightness(0.85) drop-shadow(0 0 20px rgba(168,85,247,0.65)) !important; transition: all 0.8s ease-in-out; }
  .logo-normal { filter: drop-shadow(0 0 15px #22d3ee); transition: all 0.8s ease-in-out; }
  .sanctuary-input { width: 70%; max-width: 260px; padding: 14px 20px; border-radius: 30px; background: rgba(255,255,255,0.03); border: 1px solid rgba(212,175,55,0.3); color: white; font-size: 12px; letter-spacing: 3px; text-align: center; text-transform: uppercase; outline: none; transition: all 0.3s ease; font-weight: 200; }
  .sanctuary-input:focus { border-color: rgba(212,175,55,0.7); background: rgba(212,175,55,0.05); }
  .sanctuary-input::placeholder { color: rgba(255,255,255,0.2); text-transform: none; letter-spacing: 1px; }
  .sanctuary-enter-btn { width: 70%; max-width: 260px; padding: 14px; border-radius: 30px; background: rgba(212,175,55,0.06); border: 1px solid rgba(212,175,55,0.4); color: #d4af37 !important; font-size: 11px; letter-spacing: 4px; cursor: pointer; transition: all 0.3s ease; font-weight: 200; text-shadow: 0 0 8px rgba(212,175,55,0.3); }
  .sanctuary-enter-btn:hover { background: rgba(212,175,55,0.12); border-color: rgba(212,175,55,0.75); }
  .sanctuary-tool-card { width: 85%; max-width: 340px; padding: 20px 22px; margin: 8px 0; border-radius: 24px; background: rgba(212,175,55,0.03); border: 1px solid rgba(212,175,55,0.18); transition: all 0.3s ease; cursor: pointer; }
  .sanctuary-tool-card:hover { background: rgba(212,175,55,0.06); border-color: rgba(212,175,55,0.45); }
  .micro-orbe-vivo { width: 7px; height: 7px; border-radius: 50%; background: #d4af37; display: inline-block; animation: micro-orbe-breathe 2.5s infinite ease-in-out; }
  .streaming-indicator { animation: pulse-glow 2s infinite ease-in-out; font-size: 10px; letter-spacing: 2px; color: #d4af37 !important; text-align: center; padding: 8px 0; font-weight: 200; }
  .sanctuary-video { width: 100%; border-radius: 16px; margin-top: 12px; background: #000; border: 1px solid rgba(212,175,55,0.2); }
  .mi-al-card {
    width: 85%; max-width: 340px; padding: 18px 22px; margin: 5px 0;
    border-radius: 28px; background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.1);
    display: flex; justify-content: space-between; align-items: center;
    cursor: grab;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, background 0.2s ease;
    user-select: none; -webkit-user-select: none;
  }
  .mi-al-card.is-dragging {
    cursor: grabbing;
    transform: translateY(-7px) scale(1.025);
    background: rgba(212,175,55,0.06);
    border-color: transparent;
    animation: golden-border-pulse 1.1s ease-in-out infinite;
    z-index: 999; position: relative;
  }
  .mi-al-card.is-over {
    transform: translateY(-2px);
    border-color: rgba(212,175,55,0.3);
    background: rgba(212,175,55,0.025);
  }
  .mi-al-handle { display: flex; flex-direction: column; gap: 3px; padding: 4px 6px; opacity: 0.2; transition: opacity 0.2s; flex-shrink: 0; }
  .mi-al-card:hover .mi-al-handle, .mi-al-card.is-dragging .mi-al-handle { opacity: 0.55; }
  .mi-al-handle span { display: block; width: 16px; height: 1.5px; border-radius: 2px; background: #d4af37; }
`;
const App = () => {
  const [lang, setLang] = useState('es');
  const [showSplash, setShowSplash] = useState(true);
  const [mainMode, setMainMode] = useState(null);
  const [freqPillar, setFreqPillar] = useState(null);
  const [freqSub, setFreqSub] = useState(null);
  const [medPillar, setMedPillar] = useState(null);
  const [expLevel, setExpLevel] = useState(null);
  const [expStage, setExpStage] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isSuggestion, setIsSuggestion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeTab, setActiveTab] = useState('catalogo');
  const [showBanner, setShowBanner] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('genora_favorites')) || []; } catch { return []; }
  });
  const [reminderTime, setReminderTime] = useState(() => {
    try { return localStorage.getItem('genora_reminder_time') || null; } catch { return null; }
  });
  const [showSanctuary, setShowSanctuary] = useState(false);
  const [sanctuaryUnlocked, setSanctuaryUnlocked] = useState(false);
  const [sanctuaryCode, setSanctuaryCode] = useState('');
  const [sanctuaryError, setSanctuaryError] = useState(false);
  const [activeSanctuaryTool, setActiveSanctuaryTool] = useState(null);
  const [sanctuaryLoading, setSanctuaryLoading] = useState(false);
  const [sanctuaryPlaying, setSanctuaryPlaying] = useState(false);
  const [sanctuaryCurrentTime, setSanctuaryCurrentTime] = useState(0);
  const [sanctuaryDuration, setSanctuaryDuration] = useState(0);
  // ── DRAG & DROP ───────────────────────────────────────────────────────────
  const [favOrder, setFavOrder] = useState([]);
  const [draggingId, setDraggingId] = useState(null);
  const [overIdx, setOverIdx] = useState(null);
  const [listMountKey, setListMountKey] = useState(0);
  const dragItem = useRef(null);
  const touchStartY = useRef(null);
  const touchCurrentIdx = useRef(null);
  const touchListRef = useRef(null);
  const listDOMRef = useRef(null);
  const favOrderRef = useRef(favOrder);

  const listCallbackRef = (node) => {
    if (listDOMRef.current && listDOMRef._touchMoveHandler) {
      listDOMRef.current.removeEventListener('touchmove', listDOMRef._touchMoveHandler);
    }
    listDOMRef.current = node;
    if (!node) return;
    const onTouchMove = (e) => {
      if (dragItem.current === null) return;
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const cards = Array.from(node.querySelectorAll('[data-card]'));
      let newIdx = dragItem.current;
      cards.forEach((card, i) => {
        if (i === dragItem.current) return;
        const rect = card.getBoundingClientRect();
        const threshold = rect.height * 0.3;
        if (i > dragItem.current && touchY > rect.top + threshold) newIdx = i;
        if (i < dragItem.current && touchY < rect.bottom - threshold) newIdx = i;
      });
      if (newIdx !== touchCurrentIdx.current) {
        const currentOrder = favOrderRef.current;
        const next = [...currentOrder];
        const [moved] = next.splice(dragItem.current, 1);
        next.splice(newIdx, 0, moved);
        setFavOrder(next);
        favOrderRef.current = next;
        dragItem.current = newIdx;
        touchCurrentIdx.current = newIdx;
        setOverIdx(newIdx);
      }
    };
    listDOMRef._touchMoveHandler = onTouchMove;
    node.addEventListener('touchmove', onTouchMove, { passive: false });
  };
  const audioRef = useRef(null);
  const sanctuaryMediaRef = useRef(null);
  const timerRef = useRef(null);
  const bannerTimerRef = useRef(null);
  const activeTabRef = useRef(activeTab);
  const favoritesRef = useRef(favorites);
  const selectedTrackRef = useRef(selectedTrack);
  const t = T[lang];
  useEffect(() => { activeTabRef.current = activeTab; }, [activeTab]);
  useEffect(() => { favoritesRef.current = favorites; }, [favorites]);
  useEffect(() => { selectedTrackRef.current = selectedTrack; }, [selectedTrack]);
  useEffect(() => { favOrderRef.current = favOrder; }, [favOrder]);
  useEffect(() => {
    setFavOrder(prev => {
      const kept  = prev.filter(id => favorites.includes(id));
      const added = favorites.filter(id => !kept.includes(id));
      return [...kept, ...added];
    });
  }, [favorites]);

  useEffect(() => {
    try { if (selectedTrack) localStorage.setItem('genora_last_track', JSON.stringify(selectedTrack)); } catch {}
  }, [selectedTrack]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && isPlaying) {
        try { localStorage.setItem('genora_last_time', String(audioRef.current.currentTime)); } catch {}
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const check = () => {
      if (reminderTime && reminderTime === getTimeOfDay()) {
        setShowBanner(true);
        if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
        bannerTimerRef.current = setTimeout(() => setShowBanner(false), 10000);
      }
    };
    check();
    const interval = setInterval(check, 60000);
    return () => { clearInterval(interval); if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current); };
  }, [reminderTime]);
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => console.log('Verificar audio en /public/audio/'));
        if (selectedTime && selectedTime !== 'inf') {
          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => setIsPlaying(false), selectedTime * 60000);
        }
      } else {
        audioRef.current.pause();
        if (timerRef.current) clearTimeout(timerRef.current);
      }
    }
  }, [isPlaying, selectedTrack, selectedTime]);
  useEffect(() => {
    try { localStorage.setItem('genora_favorites', JSON.stringify(favorites)); } catch {}
  }, [favorites]);
  useEffect(() => {
    try {
      if (reminderTime) localStorage.setItem('genora_reminder_time', reminderTime);
      else localStorage.removeItem('genora_reminder_time');
    } catch {}
  }, [reminderTime]);
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime || 0);
    setDuration(audioRef.current.duration || 0);
  };
  const handleAudioEnded = () => {
    try { localStorage.removeItem('genora_last_time'); } catch {}
    const currentFavs = favoritesRef.current;
    const currentTrack = selectedTrackRef.current;
    if (activeTabRef.current === 'favoritos') {
      // Usar favOrderRef para respetar el orden personalizado del usuario
      const orderedIds = favOrderRef.current.length > 0 ? favOrderRef.current : currentFavs;
      const orderedTracks = orderedIds
        .map(id => ALL_TRACKS_FLAT.find(tr => tr.id === id))
        .filter(Boolean);
      const idx = orderedTracks.findIndex(tr => tr.id === currentTrack?.id);
      if (idx >= 0 && idx < orderedTracks.length - 1) {
        const next = orderedTracks[idx + 1];
        setIsSuggestion(false); setSelectedTrack(next); setCurrentTime(0);
        setTimeout(() => { if (audioRef.current) { audioRef.current.src = next.url; audioRef.current.play().catch(() => {}); } }, 100);
      } else {
        const nonFav = ALL_TRACKS_FLAT.filter(tr => !currentFavs.includes(tr.id));
        if (nonFav.length > 0) {
          const rand = nonFav[Math.floor(Math.random() * nonFav.length)];
          setIsSuggestion(true); setSelectedTrack(rand); setCurrentTime(0);
          setTimeout(() => { if (audioRef.current) { audioRef.current.src = rand.url; audioRef.current.play().catch(() => {}); } }, 100);
        } else { setIsPlaying(false); setIsSuggestion(false); }
      }
    } else { setIsPlaying(false); }
  };
  const toggleFavorite = (e, trackId) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(trackId) ? prev.filter(id => id !== trackId) : [...prev, trackId]);
    if (isSuggestion && selectedTrack?.id === trackId) setIsSuggestion(false);
  };
  const handleReminderSelect = (key) => {
    const val = reminderTime === key ? null : key;
    setReminderTime(val);
    if (val) { setShowBanner(true); if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current); bannerTimerRef.current = setTimeout(() => setShowBanner(false), 10000); }
    else setShowBanner(false);
  };
  const handleSanctuarySubmit = () => {
    if (sanctuaryCode.trim().toUpperCase() === SANCTUARY_CODE) { setSanctuaryUnlocked(true); setSanctuaryError(false); }
    else setSanctuaryError(true);
  };
  const isFavorite = (id) => favorites.includes(id);
  const getAccentColor = () => {
    if (mainMode === 'meditaciones') return '#a855f7';
    if (mainMode === 'experiencias') return '#d4af37';
    return '#22d3ee';
  };
  const accentColor = getAccentColor();
  const goldColor = '#d4af37';
  const violetColor = '#a855f7';
  const handleBack = () => {
    if (mainMode === 'frecuencias') {
      if (freqSub) setFreqSub(null);
      else if (freqPillar) setFreqPillar(null);
      else setMainMode(null);
    } else if (mainMode === 'meditaciones') {
      if (medPillar) setMedPillar(null);
      else setMainMode(null);
    } else if (mainMode === 'experiencias') {
      if (expStage) setExpStage(null);
      else if (expLevel) setExpLevel(null);
      else setMainMode(null);
    } else setMainMode(null);
  };
  const handleProgressClick = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
  };
  const playTrack = (track, suggestion = false) => {
    setSelectedTrack(track); setIsSuggestion(suggestion); setIsPlaying(true);
  };
  const getReminderText = () => {
    if (reminderTime === 'manana') return t.reminder_set_morning;
    if (reminderTime === 'tarde') return t.reminder_set_afternoon;
    return t.reminder_set_night;
  };
  const LangSwitch = ({ isGold = false, isViolet = false }) => (
    <div className={`lang-switch ${isGold ? 'gold-border' : ''} ${isViolet ? 'violet-border' : ''}`}>
      <button className={`lang-btn ${lang === 'es' ? 'active' : ''} ${isGold && lang === 'es' ? 'gold-text' : ''} ${isViolet && lang === 'es' ? 'violet-text' : ''}`} onClick={() => setLang('es')}>ES</button>
      <button className={`lang-btn ${lang === 'en' ? 'active' : ''} ${isGold && lang === 'en' ? 'gold-text' : ''} ${isViolet && lang === 'en' ? 'violet-text' : ''}`} onClick={() => setLang('en')}>EN</button>
    </div>
  );
  const BottomBar = ({ isGold = false }) => (
    <div className="bottom-bar">
      <button className={`bar-tab ${activeTab === 'catalogo' ? 'active' : ''} ${isGold && activeTab === 'catalogo' ? 'gold-tab' : ''}`} onClick={() => { setActiveTab('catalogo'); setShowSanctuary(false); }}>
        <span className="bar-tab-icon">◎</span>{t.catalog}
      </button>
      <button className={`bar-tab ${activeTab === 'favoritos' ? 'active' : ''}`} onClick={() => { setActiveTab('favoritos'); setShowSanctuary(false); setListMountKey(k => k + 1); }}>
        <span className="bar-tab-icon">{favorites.length > 0 ? '♥' : '♡'}</span>
        {favorites.length > 0 ? `${t.my_alignment} (${favorites.length})` : t.my_alignment}
      </button>
    </div>
  );
  const ReminderSection = () => (
    <div style={{ width: '85%', maxWidth: '340px', margin: '0 auto 24px', padding: '18px', borderRadius: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginBottom: '14px', fontWeight: 200 }}>{t.reminder_title}</p>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[{ key: 'manana', label: t.reminder_morning, icon: '☀' }, { key: 'tarde', label: t.reminder_afternoon, icon: '◐' }, { key: 'noche', label: t.reminder_night, icon: '☽' }].map(opt => (
          <button key={opt.key} className={`reminder-btn ${reminderTime === opt.key ? 'active' : ''}`} onClick={() => handleReminderSelect(opt.key)}>
            {opt.icon} {opt.label}
          </button>
        ))}
      </div>
      {reminderTime && <p style={{ fontSize: '10px', color: 'rgba(34,211,238,0.5)', textAlign: 'center', marginTop: '10px', letterSpacing: '1px', fontWeight: 200 }}>{getReminderText()}</p>}
    </div>
  );
  const TrackCard = ({ track, onSelect, isSugg = false }) => (
    <div className={`track-card ${isSugg ? 'suggestion' : ''}`} onClick={() => onSelect(track)} style={{ borderLeft: `4px solid ${accentColor}` }}>
      <div style={{ textAlign: 'left', width: '75%' }}>
        {isSugg && <div className="suggestion-badge">{t.suggestion_label}</div>}
        <div style={{ fontSize: '14px', color: 'white', fontWeight: 300 }}>{track.name}</div>
        <div style={{ fontSize: '10px', color: '#fdfcf5', opacity: 0.6, marginTop: '4px', fontWeight: 200, letterSpacing: '1px' }}>{t.tracks[track.id] || ''}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <button className="heart-btn" onClick={(e) => toggleFavorite(e, track.id)} style={{ color: isFavorite(track.id) ? '#ff6b9d' : 'rgba(255,255,255,0.25)' }}>
          {isFavorite(track.id) ? '♥' : '♡'}
        </button>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '9px', color: accentColor, opacity: 0.6 }}>{track.hz}</div>
          <span style={{ color: accentColor, fontSize: '18px' }}>▶</span>
        </div>
      </div>
    </div>
  );
  const SessionCard = ({ session, color = 'white', accent = '#22d3ee' }) => (
    <div className={`session-card ${color === 'violet' ? 'violet' : color === 'gold' ? 'gold' : ''}`} style={{ borderLeft: `3px solid ${accent}33` }}>
      <div style={{ fontSize: '13px', color: 'white', fontWeight: 300, marginBottom: '4px' }}>{session.name}</div>
      {session.sub && <div style={{ fontSize: '10px', color: color === 'gold' ? '#d4af37' : `${accent}99`, letterSpacing: '1px', fontWeight: 200, marginBottom: '4px', textShadow: color === 'gold' ? '0 0 6px rgba(212,175,55,0.3)' : 'none' }}>{session.sub}</div>}
      <div style={{ fontSize: '10px', color: 'rgba(212,175,55,0.75)', fontWeight: 200, lineHeight: 1.6 }}>{session.desc}</div>
      <div style={{ marginTop: '10px', fontSize: '9px', color: color === 'gold' ? '#d4af37' : `${accent}77`, letterSpacing: '2px', fontWeight: 200, opacity: 0.7 }}>
        {lang === 'es' ? 'PROXIMAMENTE' : 'COMING SOON'}
      </div>
    </div>
  );
  const ComingSoon = ({ accent = '#22d3ee' }) => (
    <div className="coming-soon-box">
      <div className="coming-soon-icon" style={{ color: accent }}>◈</div>
      {t.coming_soon}
    </div>
  );
  const PageHeader = ({ isGold = false, isViolet = false }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingTop: '10px' }}>
      {mainMode ? (
        <div onClick={handleBack} className="back-button-genora" style={{ borderColor: `${accentColor}88` }}>
          <span style={{ color: accentColor, fontSize: '20px' }}>&#8249;</span>
        </div>
      ) : (
        <img src="/imagenes/genora-logo-white.png" style={{ height: '55px', borderRadius: '50%', objectFit: 'contain' }} alt="Logo" />
      )}
      <LangSwitch isGold={isGold} isViolet={isViolet} />
    </div>
  );
  const ADNOrb = ({ auraClass = 'aura-supernova', filterClass = 'logo-normal', size = '110px' }) => (
    <div style={{ width: size, height: size, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', transition: 'all 0.5s ease', animation: `${auraClass} 8s infinite ease-in-out` }}>
      <img src="/imagenes/adn-icon.png" className={filterClass} style={{ width: '100%', borderRadius: '50%' }} alt="ADN" />
    </div>
  );
  // ── SPLASH ────────────────────────────────────────────────────────────────
  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '180px', borderRadius: '50%', animation: 'logo-breathe 3s infinite ease-in-out', objectFit: 'contain' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', fontWeight: 200, letterSpacing: '6px', color: '#22d3ee', textTransform: 'uppercase', marginTop: '35px', marginBottom: '8px' }}>{t.splash_title}</h1>
        <p style={{ fontSize: '10px', fontWeight: 200, letterSpacing: '3px', color: '#fdfcf5', opacity: 0.7 }}>{t.splash_sub}</p>
      </div>
    );
  }
  // ── TEMPLO ────────────────────────────────────────────────────────────────
  if (selectedTrack) {
    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
    const temploAccent = "#22d3ee";
    return (
      <div key={selectedTrack.id} className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <audio ref={audioRef} src={selectedTrack.url}
          loop={selectedTime === 'inf' && activeTabRef.current !== 'favoritos'}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={(e) => { handleTimeUpdate(); if (currentTime > 0 && e.target.duration > currentTime) e.target.currentTime = currentTime; }}
          onEnded={handleAudioEnded} />
        <div style={{ position: 'absolute', top: '35px', left: '30px', right: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => { setIsPlaying(false); setSelectedTrack(null); setCurrentTime(0); setDuration(0); setListMountKey(k => k + 1); }} style={{ background: 'none', border: 'none', color: temploAccent, fontSize: '40px', cursor: 'pointer', lineHeight: 1, padding: 0 }}>&#8249;</button>
          {isSuggestion && <div className="suggestion-badge">✦ {t.suggestion_label}</div>}
          <button className="heart-btn" onClick={(e) => toggleFavorite(e, selectedTrack.id)} style={{ fontSize: '24px', color: isFavorite(selectedTrack.id) ? '#ff6b9d' : 'rgba(255,255,255,0.4)', padding: 0 }}>
            {isFavorite(selectedTrack.id) ? '♥' : '♡'}
          </button>
        </div>
        <div style={{ width: '220px', height: '220px', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: isPlaying ? 'logo-breathe 4s infinite' : 'none' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', filter: `drop-shadow(0 0 15px ${accentColor})` }} alt="ADN" />
        </div>
        <h2 style={{ fontSize: '20px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 200 }}>{selectedTrack.name}</h2>
        <p style={{ color: accentColor, fontSize: '11px', letterSpacing: '3px', fontWeight: 300, marginBottom: '8px' }}>{selectedTrack.hz}</p>
        <p style={{ fontSize: '12px', opacity: 0.6, maxWidth: '300px', lineHeight: '1.6', marginBottom: '20px', fontWeight: 200 }}>{t.tracks[selectedTrack.id] || ''}</p>
        <div style={{ width: '80%', maxWidth: '300px', marginBottom: '20px' }}>
          <div className="progress-bar-container" onClick={handleProgressClick}>
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px' }}>{formatTime(currentTime)}</span>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px' }}>{formatTime(duration)}</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
          {[15, 30, 60, 'inf'].map((time) => (
            <button key={time} onClick={() => setSelectedTime(time)} className="time-button" style={{ border: `1px solid ${selectedTime === time ? accentColor : 'rgba(255,255,255,0.1)'}`, background: selectedTime === time ? `${accentColor}22` : 'none' }}>
              {time === 'inf' ? '∞' : `${time}'`}
            </button>
          ))}
        </div>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '85px', height: '85px', borderRadius: '50%', border: `1px solid ${accentColor}`, background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <span style={{ fontSize: '30px', color: 'white' }}>{isPlaying ? '||' : '▶'}</span>
        </button>
      </div>
    );
  }
  // ── SANTUARIO ─────────────────────────────────────────────────────────────
  if (showSanctuary) {
    if (sanctuaryUnlocked && activeSanctuaryTool) {
      const tool = activeSanctuaryTool;
      const sanctuaryProgress = sanctuaryDuration > 0 ? (sanctuaryCurrentTime / sanctuaryDuration) * 100 : 0;
      const handleSanctuaryPlayPause = () => {
        if (!sanctuaryMediaRef.current) return;
        if (sanctuaryPlaying) {
          sanctuaryMediaRef.current.pause();
          setSanctuaryPlaying(false);
        } else {
          sanctuaryMediaRef.current.play().catch(() => {});
          setSanctuaryPlaying(true);
        }
      };
      const handleSanctuaryProgress = (e) => {
        if (!sanctuaryMediaRef.current || !sanctuaryDuration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        sanctuaryMediaRef.current.currentTime = pct * sanctuaryDuration;
      };
      return (
        <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', paddingBottom: '80px' }}>
          <style>{inlineStyles}</style>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', paddingTop: '10px' }}>
            <button onClick={() => { setActiveSanctuaryTool(null); setSanctuaryPlaying(false); setSanctuaryCurrentTime(0); setSanctuaryDuration(0); }} style={{ background: 'none', border: 'none', color: goldColor, fontSize: '40px', cursor: 'pointer', lineHeight: 1, padding: 0 }}>&#8249;</button>
            <LangSwitch isGold />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingBottom: '40px' }}>
            <div style={{ width: '160px', height: '160px', marginBottom: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: sanctuaryPlaying ? 'logo-breathe 4s infinite' : 'none' }}>
              <img src="/imagenes/adn-icon.png" className="logo-filtro-dorado" style={{ width: '100%', borderRadius: '50%' }} alt="ADN" />
            </div>
            <h2 className="gold-title" style={{ fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 200, marginBottom: '8px' }}>{tool.name}</h2>
            <p className="gold-sub" style={{ fontSize: '11px', letterSpacing: '1px', fontWeight: 200, marginBottom: '6px', maxWidth: '280px', lineHeight: 1.7 }}>{tool.description}</p>
            <p className="gold-micro" style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: 200, marginBottom: '28px' }}>{tool.duration}</p>
            {sanctuaryLoading && <div className="streaming-indicator">◈ {t.sanctuary_loading}</div>}
            {tool.type === 'audio' && (
              <audio
                ref={sanctuaryMediaRef}
                src={tool.url}
                preload="metadata"
                onCanPlay={() => setSanctuaryLoading(false)}
                onLoadStart={() => setSanctuaryLoading(true)}
                onTimeUpdate={() => { if (sanctuaryMediaRef.current) { setSanctuaryCurrentTime(sanctuaryMediaRef.current.currentTime || 0); setSanctuaryDuration(sanctuaryMediaRef.current.duration || 0); }}}
                onLoadedMetadata={() => { if (sanctuaryMediaRef.current) setSanctuaryDuration(sanctuaryMediaRef.current.duration || 0); }}
                onEnded={() => { setSanctuaryPlaying(false); setSanctuaryCurrentTime(0); }}
              />
            )}
            {tool.type === 'video' && (
              <video
                ref={sanctuaryMediaRef}
                src={tool.url}
                poster={tool.thumbnail || ''}
                preload="metadata"
                playsInline
                onCanPlay={() => setSanctuaryLoading(false)}
                onLoadStart={() => setSanctuaryLoading(true)}
                onTimeUpdate={() => { if (sanctuaryMediaRef.current) { setSanctuaryCurrentTime(sanctuaryMediaRef.current.currentTime || 0); setSanctuaryDuration(sanctuaryMediaRef.current.duration || 0); }}}
                onLoadedMetadata={() => { if (sanctuaryMediaRef.current) setSanctuaryDuration(sanctuaryMediaRef.current.duration || 0); }}
                onEnded={() => { setSanctuaryPlaying(false); setSanctuaryCurrentTime(0); }}
                style={{ display: 'none' }}
              />
            )}
            <div style={{ width: '80%', maxWidth: '300px', marginBottom: '32px' }}>
              <div
                onClick={handleSanctuaryProgress}
                style={{ width: '100%', height: '2px', background: 'rgba(212,175,55,0.15)', borderRadius: '2px', cursor: 'pointer', margin: '0 0 8px' }}
              >
                <div style={{ width: `${sanctuaryProgress}%`, height: '100%', borderRadius: '2px', background: 'linear-gradient(90deg, #c9a227, #d4af37)', transition: 'width 0.5s linear' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '10px', color: 'rgba(212,175,55,0.5)', letterSpacing: '1px' }}>{formatTime(sanctuaryCurrentTime)}</span>
                <span style={{ fontSize: '10px', color: 'rgba(212,175,55,0.5)', letterSpacing: '1px' }}>{formatTime(sanctuaryDuration)}</span>
              </div>
            </div>
            <button
              onClick={handleSanctuaryPlayPause}
              style={{ width: '85px', height: '85px', borderRadius: '50%', border: '1px solid rgba(212,175,55,0.6)', background: 'rgba(212,175,55,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }}
            >
              <span style={{ fontSize: '28px', color: '#d4af37', textShadow: '0 0 12px rgba(212,175,55,0.5)' }}>
                {sanctuaryPlaying ? '||' : '▶'}
              </span>
            </button>
          </div>
          <BottomBar isGold />
        </div>
      );
    }
    if (sanctuaryUnlocked) {
      return (
        <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', paddingBottom: '80px' }}>
          <style>{inlineStyles}</style>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', paddingTop: '10px' }}>
            <button onClick={() => { setShowSanctuary(false); setSanctuaryUnlocked(false); setSanctuaryCode(''); }} style={{ background: 'none', border: 'none', color: goldColor, fontSize: '40px', cursor: 'pointer', lineHeight: 1, padding: 0 }}>&#8249;</button>
            <LangSwitch isGold />
          </div>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <div className="micro-orbe-vivo" style={{ width: '10px', height: '10px' }}></div>
            </div>
            <h2 className="gold-title" style={{ fontSize: '13px', letterSpacing: '5px', fontWeight: 200, textTransform: 'uppercase', marginBottom: '6px' }}>{t.sanctuary_title}</h2>
            <p className="gold-sub" style={{ fontSize: '11px', letterSpacing: '1px', fontWeight: 200, maxWidth: '260px', margin: '0 auto', lineHeight: 1.7 }}>{t.sanctuary_library_sub}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {SANCTUARY_TOOLS.map((tool) => (
              <div key={tool.id} className="sanctuary-tool-card" onClick={() => { setActiveSanctuaryTool(tool); setSanctuaryLoading(true); setTimeout(() => setSanctuaryLoading(false), 3000); }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#d4af37', fontWeight: 200, marginBottom: '6px', textTransform: 'uppercase', opacity: 0.7 }}>{tool.type === 'audio' ? '◎ AUDIO' : '◈ VIDEO'}</div>
                    <div style={{ fontSize: '14px', fontWeight: 300, color: '#d4af37', marginBottom: '6px', lineHeight: 1.4 }}>{tool.name}</div>
                    <div style={{ fontSize: '10px', color: 'rgba(212,175,55,0.75)', fontWeight: 200, lineHeight: 1.6 }}>{tool.description}</div>
                  </div>
                  <div style={{ marginLeft: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                    <span style={{ color: '#d4af37', fontSize: '20px', textShadow: '0 0 8px rgba(212,175,55,0.4)' }}>▶</span>
                    <span style={{ fontSize: '9px', color: '#d4af37', letterSpacing: '1px', fontWeight: 200, opacity: 0.6 }}>{tool.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <BottomBar isGold />
        </div>
      );
    }
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '30px', position: 'relative' }}>
        <style>{inlineStyles}</style>
        <button onClick={() => { setShowSanctuary(false); setSanctuaryCode(''); setSanctuaryError(false); }} style={{ position: 'absolute', top: '35px', left: '30px', background: 'none', border: 'none', color: goldColor, fontSize: '40px', cursor: 'pointer', lineHeight: 1, padding: 0 }}>&#8249;</button>
        <ADNOrb auraClass="aura-gold-santuario" filterClass="logo-filtro-dorado" size="160px" />
        <h2 className="gold-title" style={{ fontSize: '13px', letterSpacing: '5px', fontWeight: 200, textTransform: 'uppercase', marginBottom: '10px' }}>{t.sanctuary_title}</h2>
        <p className="gold-sub" style={{ fontSize: '11px', maxWidth: '260px', lineHeight: 1.8, fontWeight: 200, marginBottom: '6px' }}>{t.sanctuary_micro}</p>
        <p className="gold-micro" style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: 200, marginBottom: '36px' }}>{t.sanctuary_access}</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', width: '100%' }}>
          <input className="sanctuary-input" type="text" placeholder={t.sanctuary_placeholder} value={sanctuaryCode}
            onChange={(e) => { setSanctuaryCode(e.target.value); setSanctuaryError(false); }}
            onKeyDown={(e) => e.key === 'Enter' && handleSanctuarySubmit()} />
          {sanctuaryError && <p className="fade-in-up" style={{ fontSize: '10px', color: 'rgba(239,68,68,0.7)', letterSpacing: '1px', fontWeight: 200, maxWidth: '260px', lineHeight: 1.6 }}>{t.sanctuary_error}</p>}
          <button className="sanctuary-enter-btn" onClick={handleSanctuarySubmit}>{t.sanctuary_enter}</button>
        </div>
      </div>
    );
  }
  // ── MI ALINEACION ─────────────────────────────────────────────────────────
  if (activeTab === 'favoritos') {
    const orderedTracks = favOrder
      .map(id => ALL_TRACKS_FLAT.find(tr => tr.id === id))
      .filter(Boolean);
    const handleTouchStart = (e, id, idx) => {
      dragItem.current = idx;
      touchCurrentIdx.current = idx;
      touchStartY.current = e.touches[0].clientY;
      touchListRef.current = e.currentTarget.closest('[data-list]');
      setDraggingId(id);
    };
    const handleTouchMove = (e) => {
      if (dragItem.current === null) return;
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const container = touchListRef.current;
      if (!container) return;
      const cards = Array.from(container.querySelectorAll('[data-card]'));
      let newIdx = dragItem.current;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        if (touchY > midY && i > dragItem.current) newIdx = i;
        if (touchY < midY && i < dragItem.current) newIdx = i;
      });
      if (newIdx !== touchCurrentIdx.current) {
        setFavOrder(prev => {
          const next = [...prev];
          const [moved] = next.splice(dragItem.current, 1);
          next.splice(newIdx, 0, moved);
          return next;
        });
        dragItem.current = newIdx;
        touchCurrentIdx.current = newIdx;
        setOverIdx(newIdx);
      }
    };
    const handleTouchEnd = () => {
      dragItem.current = null;
      touchCurrentIdx.current = null;
      touchStartY.current = null;
      touchListRef.current = null;
      setDraggingId(null);
      setOverIdx(null);
    };
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', paddingBottom: '80px' }}>
        <style>{inlineStyles}</style>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingTop: '10px' }}>
          <img src="/imagenes/genora-logo-white.png" style={{ height: '50px', borderRadius: '50%', objectFit: 'contain' }} alt="Logo" />
          <LangSwitch />
        </div>
        {showBanner && (
          <div className="alineacion-banner">
            <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', margin: 0, fontWeight: 200 }}>{t.banner}</p>
          </div>
        )}
        <p style={{ fontSize: '10px', letterSpacing: '4px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginBottom: '20px', fontWeight: 200 }}>
          {t.my_field}
        </p>
        <ReminderSection />
        {orderedTracks.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', textAlign: 'center', color: 'rgba(255,255,255,0.25)' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>♡</div>
            <p style={{ fontSize: '12px', letterSpacing: '2px', lineHeight: '1.8', fontWeight: 200 }}>
              {t.empty_field}<br />{t.empty_sub}
            </p>
          </div>
        ) : (
          <div key={listMountKey} ref={listCallbackRef} data-list style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {orderedTracks.map((track, idx) => {
              const isDragging = draggingId === track.id;
              const isOver = overIdx === idx && !isDragging;
              return (
                <div
                  key={track.id}
                  className={['mi-al-card', isDragging ? 'is-dragging' : '', isOver ? 'is-over' : ''].filter(Boolean).join(' ')}
                  data-card
                  style={{
                    borderLeft: isDragging ? '4px solid rgba(212,175,55,0.7)' : `4px solid ${accentColor}`,
                    animationName: 'glance-sway',
                    animationDuration: '0.72s',
                    animationTimingFunction: 'ease-in-out',
                    animationFillMode: 'both',
                    animationDelay: `${idx * 65}ms`,
                    touchAction: 'none',
                  }}
                  onTouchStart={(e) => handleTouchStart(e, track.id, idx)}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="mi-al-handle" aria-hidden="true">
                    <span /><span /><span />
                  </div>
                  <div style={{ textAlign: 'left', flex: 1, margin: '0 10px' }}>
                    <div style={{ fontSize: '14px', color: 'white', fontWeight: 300 }}>{track.name}</div>
                    <div style={{ fontSize: '10px', color: '#fdfcf5', opacity: 0.6, marginTop: '4px', fontWeight: 200, letterSpacing: '1px' }}>
                      {t.tracks[track.id] || ''}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <button
                      className="heart-btn"
                      onClick={(e) => toggleFavorite(e, track.id)}
                      style={{ color: isFavorite(track.id) ? '#ff6b9d' : 'rgba(255,255,255,0.25)' }}
                    >
                      {isFavorite(track.id) ? '♥' : '♡'}
                    </button>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '9px', color: accentColor, opacity: 0.6 }}>{track.hz}</div>
                      <span style={{ color: accentColor, fontSize: '18px', cursor: 'pointer' }} onClick={() => playTrack(track, false)}>▶</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <BottomBar />
      </div>
    );
  }
  // ── CATALOGO PRINCIPAL ────────────────────────────────────────────────────
  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', paddingBottom: '80px' }}>
      <style>{inlineStyles}</style>
      {showBanner && <div className="alineacion-banner" style={{ marginTop: '10px' }}><p style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', margin: 0, fontWeight: 200 }}>{t.banner}</p></div>}
      <PageHeader isGold={mainMode === 'experiencias'} isViolet={mainMode === 'meditaciones'} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ADNOrb
          auraClass={mainMode === 'meditaciones' ? 'aura-violet' : mainMode === 'experiencias' ? 'aura-gold' : 'aura-supernova'}
          filterClass={mainMode === 'experiencias' ? 'logo-filtro-dorado' : mainMode === 'meditaciones' ? 'logo-filtro-violeta' : 'logo-normal'}
          size={!mainMode ? '130px' : '90px'}
        />
        {!mainMode && (
          <div className="category-stack">
            <h2 style={{ fontSize: '9px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '10px', fontWeight: 200 }}>{t.choose_path}</h2>
            <button className="home-btn" onClick={() => setMainMode('frecuencias')}>{t.home_buttons.frequencies}</button>
            <button className="home-btn violet" onClick={() => setMainMode('meditaciones')}>{t.home_buttons.meditations}</button>
            <button className="home-btn bright" onClick={() => setMainMode('experiencias')}>✦ {t.home_buttons.experiences}</button>
            <button className="home-btn sanctuary" onClick={() => { setShowSanctuary(true); setActiveTab('catalogo'); }}>{t.home_buttons.sanctuary}</button>
          </div>
        )}
        {mainMode === 'frecuencias' && !freqPillar && (
          <div className="category-stack">
            <p style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', textAlign: 'center', marginBottom: '16px', fontWeight: 200 }}>{t.home_buttons.frequencies}</p>
            {Object.keys(t.freq_pillars).map(key => (
              <div key={key} className="pillar-card" onClick={() => setFreqPillar(key)}>{t.freq_pillars[key]}</div>
            ))}
          </div>
        )}
        {mainMode === 'frecuencias' && freqPillar && !freqSub && (
          <div className="category-stack">
            <p style={{ fontSize: '10px', letterSpacing: '4px', color: '#22d3ee', textAlign: 'center', marginBottom: '16px', fontWeight: 200 }}>{t.freq_pillars[freqPillar]}</p>
            {Object.keys(t.pillars[freqPillar]?.subs || {}).map(sub => (
              <div key={sub} className="pillar-card" onClick={() => setFreqSub(sub)}>{t.pillars[freqPillar].subs[sub]}</div>
            ))}
          </div>
        )}
        {mainMode === 'frecuencias' && freqPillar && freqSub && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', color: '#22d3ee', textAlign: 'center', marginBottom: '16px', fontWeight: 200 }}>{t.pillars[freqPillar]?.subs[freqSub]}</p>
            {(FREQ_TRACKS[freqPillar]?.[freqSub] || []).length === 0
              ? <ComingSoon accent="#22d3ee" />
              : FREQ_TRACKS[freqPillar][freqSub].map(track => <TrackCard key={track.id} track={track} onSelect={playTrack} />)
            }
          </div>
        )}
        {mainMode === 'meditaciones' && !medPillar && (
          <div className="category-stack">
            <p style={{ fontSize: '10px', letterSpacing: '5px', color: violetColor, textAlign: 'center', marginBottom: '16px', fontWeight: 200 }}>{t.home_buttons.meditations}</p>
            {Object.keys(t.med_pillars).map(key => (
              <div key={key} className="pillar-card violet" onClick={() => setMedPillar(key)}>{t.med_pillars[key]}</div>
            ))}
          </div>
        )}
        {mainMode === 'meditaciones' && medPillar && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', color: violetColor, textAlign: 'center', marginBottom: '16px', fontWeight: 200 }}>{t.med_pillars[medPillar]}</p>
            {MED_DATA[medPillar].sessions.map(s => <SessionCard key={s.id} session={s} color="violet" accent={violetColor} />)}
          </div>
        )}
        {mainMode === 'experiencias' && !expLevel && (
          <div className="category-stack">
            <p className="gold-title" style={{ fontSize: '10px', letterSpacing: '5px', textAlign: 'center', marginBottom: '16px', fontWeight: 200 }}>{t.home_buttons.experiences}</p>
            {[
              { key: 'UNVEILING', label: t.exp_levels.UNVEILING, sub: t.exp_levels.UNVEILING_sub },
              { key: 'AWAKENING', label: t.exp_levels.AWAKENING, sub: t.exp_levels.AWAKENING_sub },
              { key: 'CODEX', label: t.exp_levels.CODEX, sub: t.exp_levels.CODEX_sub },
              { key: 'VOICE', label: t.exp_levels.VOICE, sub: t.exp_levels.VOICE_sub },
              { key: 'ALCHEMIST', label: t.exp_levels.ALCHEMIST, sub: t.exp_levels.ALCHEMIST_sub },
              { key: 'MERKABA', label: t.exp_levels.MERKABA, sub: t.exp_levels.MERKABA_sub }
            ].map((lvl, i) => (
              <div key={lvl.key} className="pillar-card gold" onClick={() => setExpLevel(lvl.key)} style={{ maxWidth: '310px', width: '80%' }}>
                <div style={{ fontSize: '9px', color: '#d4af37', letterSpacing: '2px', marginBottom: '4px', opacity: 0.6 }}>NIVEL {i + 1}</div>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#d4af37', textShadow: '0 0 8px rgba(212,175,55,0.4)' }}>{lvl.label}</div>
                <div style={{ fontSize: '9px', color: '#c9a227', letterSpacing: '1px', marginTop: '3px', fontWeight: 200, opacity: 0.75 }}>{lvl.sub}</div>
              </div>
            ))}
          </div>
        )}
        {mainMode === 'experiencias' && expLevel === 'UNVEILING' && !expStage && (
          <div className="category-stack">
            <p className="gold-title" style={{ fontSize: '10px', letterSpacing: '4px', textAlign: 'center', marginBottom: '4px', fontWeight: 200 }}>{t.exp_levels.UNVEILING}</p>
            <p style={{ fontSize: '9px', color: '#c9a227', letterSpacing: '1px', textAlign: 'center', marginBottom: '16px', fontWeight: 200, opacity: 0.7 }}>{t.exp_levels.UNVEILING_sub}</p>
            {['TERRESTRE', 'DIVINO', 'INTERDIMENSIONAL'].map(stage => (
              <div key={stage} className="pillar-card gold" onClick={() => setExpStage(stage)} style={{ maxWidth: '310px', width: '80%' }}>
                <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#d4af37', textShadow: '0 0 8px rgba(212,175,55,0.35)' }}>{t.unveiling_stages[stage]}</div>
                <div style={{ fontSize: '9px', color: '#c9a227', letterSpacing: '1px', marginTop: '3px', fontWeight: 200, opacity: 0.75 }}>{t.unveiling_stages[`${stage}_sub`]}</div>
              </div>
            ))}
          </div>
        )}
        {mainMode === 'experiencias' && expLevel === 'UNVEILING' && expStage && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="gold-title" style={{ fontSize: '10px', letterSpacing: '3px', textAlign: 'center', marginBottom: '4px', fontWeight: 200 }}>{t.unveiling_stages[expStage]}</p>
            <p style={{ fontSize: '9px', color: '#c9a227', textAlign: 'center', marginBottom: '16px', fontWeight: 200, opacity: 0.7 }}>{t.unveiling_stages[`${expStage}_sub`]}</p>
            {EXP_DATA.UNVEILING[expStage].map(s => <SessionCard key={s.id} session={s} color="gold" accent={goldColor} />)}
          </div>
        )}
        {mainMode === 'experiencias' && expLevel && expLevel !== 'UNVEILING' && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="gold-title" style={{ fontSize: '10px', letterSpacing: '3px', textAlign: 'center', marginBottom: '4px', fontWeight: 200 }}>{t.exp_levels[expLevel]}</p>
            <p style={{ fontSize: '9px', color: '#c9a227', textAlign: 'center', marginBottom: '16px', fontWeight: 200, opacity: 0.7 }}>{t.exp_levels[`${expLevel}_sub`]}</p>
            {(EXP_DATA[expLevel] || []).map(s => <SessionCard key={s.id} session={s} color="gold" accent={goldColor} />)}
          </div>
        )}
      </div>
      <BottomBar />
    </div>
  );
};
export default App;
