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
      CUERPO: { label: "CUERPO", subs: { "REGENERACION": "REGENERACION & SANACION", "ORGANOS": "ORGANOS & SISTEMAS", "DOLOR": "DOLOR & RECUPERACION", "VITALIDAD": "VITALIDAD FISICA" } },
      EXPANSION: { label: "EXPANSION", subs: { "MEDITACION": "MEDITACION & ESTADOS INTERNOS", "PERCEPCION": "INTUICION & PERCEPCION", "EXPERIENCIAS": "EXPERIENCIAS EXPANDIDAS", "CONSCIENCIA_EXP": "CONSCIENCIA EXPANDIDA" } },
      EXPERIENCIAS_G: { label: "EXPERIENCIAS GENORA", subs: { "RITUALES": "PROCESOS DE ACTIVACION", "CEREMONIAS": "CEREMONIAS SONORAS", "BIENESTAR_F": "BIENESTAR FEMENINO" } },
      ARMONIZACION: { label: "ARMONIZACION BIOLOGICA", subs: { "ADN": "REPROGRAMACION DE ADN", "CAMPOS": "CAMPOS BIOENERGETICOS", "CELULAR": "REGENERACION CELULAR" } }
    },
    tracks: {
      "alpha-integration": "Integracion y aprendizaje de informacion desde un estado de calma y enfoque.",
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
      "alpha-focus": "Concentracion y enfoque mental sostenido.",
      "alpha-dreambridge": "Visualizacion consciente, estados luidos y exploracion interior.",
      "alpha-gateway-exp": "Acceso consciente a estados de sueno y visualizacion profunda.",
      "alpha-gateway-mente": "Transicion entre estados de atencion y relajacion.",
      "alpha-eros": "Conexion con el cuerpo y la energia vital, consciencia corporal.",
      "alpha-lucent-mente": "Observacion consciente y comprension de procesos internos.",
      "alpha-lucent-cuerpo": "Equilibrio asociado al sistema reproductor masculino.",
      "femin-essence": "Experiencia para el bienestar femenino, equilibrio y armonia hormonal.",
      "theta-emotional-reset": "Estados de calma emocional, receptividad y equilibrio interior.",
      "alpha-origen-regen": "Reparacion y restauracion biologica.",
      "alpha-origen-organos": "Equilibrio energetico de rinones y suprarrenales.",
      "alpha-origen-vitalidad": "Recuperacion de energia corporal.",
      "alpha-origen-aprend": "Sincronizacion cerebral e integracion mental.",
      "alpha-origen-exp": "Estado expandido de presencia y apertura consciente.",
      "alpha-voice": "Expresion verbal y comunicacion consciente.",
      "alpha-void": "Silencio mental e introspeccion profunda.",
      "gaia-vision": "Visualizacion interna, percepcion de imagenes mentales.",
      "gaia-pulse-consciencia": "Facilita la conexion con ritmos naturales de la Tierra.",
      "gaia-pulse-exp": "Favorece la sensacion de estabilidad y sincronizacion natural.",
      "pyramid-resonance": "Favorece estados de introspeccion y percepcion ampliada.",
      "alpha-harmony-reg": "Favorece la armonizacion emocional y la comprension interpersonal.",
      "alpha-harmony-perc": "Favorece la armonia interior y la percepcion intuitiva.",
      "alpha-lucid-flow": "Manifestacion mediante visualizacion consciente.",
      "alpha-harmony": "Armonia interior y equilibrio vibracional.",
      "pyramid-resonance": "Resonancia geometrica sagrada para la coherencia energetica.",
      "gaia-pulse": "Pulso terrestre para el arraigo y la vitalidad.",
      "alpha-lucid-flow": "Flujo consciente y claridad en estados expandidos.",
      "alpha-eros-organos": "Regula el sistema reproductor y las gonadas.",
      "alpha-eros-integracion": "Consciencia del origen de los desequilibrios.",
      "alpha-eros-meditacion": "Observacion interior y autoconocimiento.",
      "alpha-eros-reproductor": "Equilibrio del sistema reproductor."
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
      CUERPO: { label: "BODY", subs: { "REGENERACION": "REGENERATION & HEALING", "ORGANOS": "ORGANS & SYSTEMS", "DOLOR": "PAIN & RECOVERY", "VITALIDAD": "PHYSICAL VITALITY" } },
      EXPANSION: { label: "EXPANSION", subs: { "MEDITACION": "MEDITATION & INNER STATES", "PERCEPCION": "INTUITION & PERCEPTION", "EXPERIENCIAS": "EXPANDED EXPERIENCES", "CONSCIENCIA_EXP": "EXPANDED CONSCIOUSNESS" } },
      EXPERIENCIAS_G: { label: "GENORA EXPERIENCES", subs: { "RITUALES": "ACTIVATION PROCESSES", "CEREMONIAS": "SOUND CEREMONIES", "BIENESTAR_F": "FEMININE WELLBEING" } },
      ARMONIZACION: { label: "BIOLOGICAL HARMONIZATION", subs: { "ADN": "DNA REPROGRAMMING", "CAMPOS": "BIOENERGETIC FIELDS", "CELULAR": "CELLULAR REGENERATION" } }
    },
    tracks: {
      "alpha-integration": "Integration and learning of information from a state of calm and focus.",
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
      "alpha-focus": "Sustained concentration and mental focus.",
      "alpha-dreambridge": "Conscious visualization, lucid states and inner exploration.",
      "alpha-gateway-exp": "Conscious access to sleep states and deep visualization.",
      "alpha-gateway-mente": "Transition between states of attention and relaxation.",
      "alpha-eros": "Connection with the body and vital energy, body awareness.",
      "alpha-lucent-mente": "Conscious observation and understanding of internal processes.",
      "alpha-lucent-cuerpo": "Balance associated with the male reproductive system.",
      "femin-essence": "Experience for feminine wellbeing, hormonal balance and harmony.",
      "theta-emotional-reset": "States of emotional calm, receptivity and inner balance.",
      "alpha-origen-regen": "Biological repair and restoration.",
      "alpha-origen-organos": "Energetic balance of kidneys and adrenal glands.",
      "alpha-origen-vitalidad": "Recovery of body energy.",
      "alpha-origen-aprend": "Brain synchronization and mental integration.",
      "alpha-origen-exp": "Expanded state of presence and conscious openness.",
      "alpha-voice": "Verbal expression and conscious communication.",
      "alpha-void": "Mental silence and deep introspection.",
      "gaia-vision": "Inner visualization, perception of mental images.",
      "gaia-pulse-consciencia": "Facilitates connection with natural rhythms of the Earth.",
      "gaia-pulse-exp": "Favors stability and natural synchronization.",
      "pyramid-resonance": "Favors states of introspection and expanded perception.",
      "alpha-harmony-reg": "Favors emotional harmonization and interpersonal understanding.",
      "alpha-harmony-perc": "Favors inner harmony and intuitive perception.",
      "alpha-lucid-flow": "Manifestation through conscious visualization.",
      "alpha-harmony": "Inner harmony and vibrational balance.",
      "pyramid-resonance": "Sacred geometric resonance for energetic coherence.",
      "gaia-pulse": "Earth pulse for grounding and vitality.",
      "alpha-lucid-flow": "Conscious flow and clarity in expanded states.",
      "alpha-eros-organos": "Regulates the reproductive system and gonads.",
      "alpha-eros-integracion": "Awareness of the origin of imbalances.",
      "alpha-eros-meditacion": "Inner observation and self-knowledge.",
      "alpha-eros-reproductor": "Balance of the reproductive system."
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
      { id: "beta-decision", name: "Beta Decision", hz: "13.8 Hz", url: "/audio/beta-decision.mp3" },
      { id: "alpha-origen-aprend", name: "Alpha Origen", hz: "8 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-origen.wav" }
    ],
    "CREATIVIDAD": [
      { id: "alpha-creator", name: "Alpha Creator", hz: "8-12 Hz", url: "/audio/alpha-creator.mp3" },
      { id: "beta-solution", name: "Beta Solution", hz: "12-36 Hz", url: "/audio/beta-solution.mp3" },
      { id: "beta-logic", name: "Beta Logic", hz: "13-40 Hz", url: "/audio/beta-logic.mp3" },
      { id: "beta-attention", name: "Beta Attention", hz: "12-15 Hz", url: "/audio/beta-attention.mp3" },
      { id: "alpha-voice", name: "Alpha Voice", hz: "8.22 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-voice.wav" }
    ],
    "CLARIDAD": [
      { id: "alpha-balance-mind", name: "Alpha Balance Mind", hz: "11 Hz", url: "/audio/alpha-balance-mind.mp3" },
      { id: "alpha-center", name: "Alpha Center", hz: "12 Hz", url: "/audio/alpha-center.mp3" },
      { id: "beta-decision-c", name: "Beta Decision", hz: "13.8 Hz", url: "/audio/beta-decision.mp3" },
      { id: "alpha-calm-alert", name: "Alpha Calm Alert", hz: "10.6 Hz", url: "/audio/alpha-calm-alert.mp3" },
      { id: "alpha-clarity", name: "Alpha Clarity", hz: "9.8-10.6 Hz", url: "/audio/alpha-clarity.mp3" },
      { id: "gamma-insight", name: "Gamma Insight", hz: "40 Hz", url: "/audio/gamma-insight.mp3" },
      { id: "alpha-gateway-mente", name: "Alpha Gateway", hz: "9.5-10 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-gateway.wav" },
      { id: "alpha-lucent-mente", name: "Alpha Lucent", hz: "9.4 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-lucent.wav" }
    ],
    "RENDIMIENTO": [
      { id: "beta-active-mind", name: "Beta Active Mind", hz: "13-27 Hz", url: "/audio/beta-active-mind.mp3" },
      { id: "beta-vital-mind", name: "Beta Vital Mind", hz: "14 Hz", url: "/audio/beta-vital-mind.mp3" },
      { id: "beta-cortex", name: "Beta Cortex", hz: "15.4 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/beta-cortex.wav" },
      { id: "alpha-focus", name: "Alpha Focus", hz: "11-14 Hz", url: "/audio/alpha-focus.mp3" }
    ]
  },
  COHERENCIA: { "REGULACION": [
    { id: "theta-emotional-reset", name: "Theta Emotional Reset", hz: "3.5 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/theta-emotional-reset.wav" }
  ], "EQUILIBRIO": [
    { id: "alpha-eros", name: "Alpha Eros", hz: "9 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-eros.wav" }
  ], "INTEGRACION": [
    { id: "alpha-eros-integracion", name: "Alpha Eros", hz: "9 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-eros.wav" }
  ] },
  CUERPO: { "REGENERACION": [
    { id: "alpha-origen-regen", name: "Alpha Origen", hz: "8 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-origen.wav" }
  ], "ORGANOS": [
    { id: "alpha-lucent-cuerpo", name: "Alpha Lucent", hz: "9.4 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-lucent.wav" },
    { id: "alpha-origen-organos", name: "Alpha Origen", hz: "8 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-origen.wav" },
    { id: "alpha-eros-organos", name: "Alpha Eros", hz: "9 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-eros.wav" }
  ], "DOLOR": [], "VITALIDAD": [
    { id: "alpha-origen-vitalidad", name: "Alpha Origen", hz: "8 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-origen.wav" }
  ] },
  EXPANSION: { "MEDITACION": [
    { id: "alpha-eros-meditacion", name: "Alpha Eros", hz: "9 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-eros.wav" }
  ], "PERCEPCION": [
    { id: "gaia-vision", name: "Gaia Vision", hz: "8.3 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/gaia-vision.wav" },
    { id: "alpha-harmony-perc", name: "Alpha Harmony", hz: "9.19 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-harmony.wav" }
  ], "EXPERIENCIAS": [
    { id: "alpha-origen-exp", name: "Alpha Origen", hz: "8 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-origen.wav" },
    { id: "gaia-pulse-exp", name: "Gaia Pulse", hz: "9.6 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/gaia-pulse.wav" }
  ], "CONSCIENCIA_EXP": [
    { id: "alpha-dreambridge", name: "Alpha Dreambridge", hz: "9-13 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-dreambridge.wav" },
    { id: "alpha-gateway-exp", name: "Alpha Gateway", hz: "9.5-10 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-gateway.wav" },
    { id: "alpha-void", name: "Alpha Void", hz: "8-13 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-void.wav" },
    { id: "gaia-pulse-consciencia", name: "Gaia Pulse", hz: "9.6 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/gaia-pulse.wav" },
    { id: "pyramid-resonance", name: "Pyramid Resonance", hz: "9.41 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/pyramid-resonance.wav" }
  ] },
  EXPERIENCIAS_G: { "RITUALES": [], "CEREMONIAS": [], "BIENESTAR_F": [
    { id: "femin-essence", name: "Feminine Essence", hz: "—", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/femin-essence.wav" }
  ] },
  ARMONIZACION: { "ADN": [], "CAMPOS": [], "CELULAR": [], "REPRODUCTOR": [
    { id: "alpha-eros-reproductor", name: "Alpha Eros", hz: "9 Hz", url: "https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/alpha-eros.wav" }
  ] }
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
    0%, 100% { transform: scale(1); box-shadow: 0 0 60px rgba(124,92,230,0.35), 0 0 130px rgba(79,61,161,0.2); }
    50% { transform: scale(1.02); box-shadow: 0 0 50px rgba(124,92,230,0.65), 0 0 110px rgba(79,61,161,0.45), 0 0 200px rgba(79,61,161,0.2); }
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
  .home-btn.violet { border-color: rgba(124,92,230,0.45); background: rgba(79,61,161,0.04); }
  .home-btn.violet:hover { background: rgba(79,61,161,0.08); border-color: rgba(124,92,230,0.8); box-shadow: 0 0 18px rgba(124,92,230,0.45), 0 0 35px rgba(79,61,161,0.2); }
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
  .pillar-card.violet { border-color: rgba(124,92,230,0.45); background: rgba(79,61,161,0.04); }
  .pillar-card.violet:hover { background: rgba(79,61,161,0.08); border-color: rgba(124,92,230,0.75); box-shadow: 0 0 18px rgba(124,92,230,0.4), 0 0 35px rgba(79,61,161,0.2); }
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
  .session-card.violet { border-color: rgba(124,92,230,0.4); box-shadow: inset 0 0 20px rgba(79,61,161,0.05); }
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
  .lang-switch.violet-border { border-color: rgba(124,92,230,0.5); box-shadow: 0 0 8px rgba(124,92,230,0.2); }
  .lang-btn { padding: 5px 12px; background: none; border: none; font-size: 10px; letter-spacing: 2px; cursor: pointer; transition: all 0.2s; color: rgba(255,255,255,0.35); font-weight: 200; }
  .lang-btn.active { background: rgba(34,211,238,0.15); color: #22d3ee; }
  .lang-btn.active.gold-text { background: rgba(212,175,55,0.1); color: #d4af37; }
  .lang-btn.active.violet-text { background: rgba(124,92,230,0.15); color: #7c5ce6; }
  .progress-bar-container { width: 100%; height: 2px; background: rgba(255,255,255,0.1); border-radius: 2px; margin: 8px 0 4px; cursor: pointer; }
  .progress-bar-fill { height: 100%; border-radius: 2px; background: #22d3ee; transition: width 0.5s linear; }
  .reminder-btn { padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(34,211,238,0.25); background: none; color: rgba(255,255,255,0.4); font-size: 10px; letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; font-weight: 200; }
  .reminder-btn.active { border-color: #22d3ee; color: #22d3ee; background: rgba(34,211,238,0.08); }
  .alineacion-banner { animation: fadeInDown 0.4s ease forwards; margin: 0 auto 12px; width: 85%; max-width: 340px; padding: 10px 16px; border-radius: 20px; background: rgba(34,211,238,0.05); border: 1px solid rgba(34,211,238,0.15); text-align: center; }
  .suggestion-badge { animation: fadeInDown 0.3s ease forwards; font-size: 9px; letter-spacing: 2px; color: rgba(34,211,238,0.75); text-transform: uppercase; font-weight: 200; }
  .coming-soon-box { text-align: center; color: rgba(255,255,255,0.2); padding: 40px 20px; font-size: 11px; letter-spacing: 3px; font-weight: 200; line-height: 2; }
  .coming-soon-icon { font-size: 28px; margin-bottom: 16px; opacity: 0.4; }
  .logo-filtro-dorado { filter: sepia(1) hue-rotate(-12deg) saturate(2.3) brightness(0.88) drop-shadow(0 0 20px rgba(212,175,55,0.65)) !important; transition: all 0.8s ease-in-out; }
  .logo-filtro-violeta { filter: sepia(1) hue-rotate(215deg) saturate(2.5) brightness(0.75) drop-shadow(0 0 18px rgba(124,92,230,0.6)) !important; transition: all 0.8s ease-in-out; }
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
  .mi-al-handle {
    display: flex; flex-direction: column; gap: 3px;
    padding: 12px 10px; margin: -12px -4px -12px -4px; opacity: 0.25;
    transition: opacity 0.2s, transform 0.2s;
    flex-shrink: 0; cursor: grab; touch-action: none;
  }
  .mi-al-card:hover .mi-al-handle { opacity: 0.55; }
  .mi-al-handle.is-grabbing {
    opacity: 0.9;
    cursor: grabbing;
    transform: scale(1.25);
  }
  @keyframes centralPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 15px 5px rgba(34,211,238,0.3); }
    50%       { transform: scale(1.06); box-shadow: 0 0 25px 10px rgba(34,211,238,0.5); }
  }
  @keyframes etherealWave {
    0%   { transform: scale(0.5);   opacity: 0.85; }
    35%  { opacity: 0.6; }
    70%  { opacity: 0.25; }
    100% { transform: scale(2.7); opacity: 0; }
  }
  @keyframes sparkle-appear {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
  }
  @keyframes adn-breathe-deep {
    0%, 100% { transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 12px #22d3ee); }
    25% { transform: scale(1.06) rotate(1deg); filter: drop-shadow(0 0 22px #22d3ee); }
    50% { transform: scale(1.1) rotate(0deg); filter: drop-shadow(0 0 30px #22d3ee) brightness(1.15); }
    75% { transform: scale(1.06) rotate(-1deg); filter: drop-shadow(0 0 22px #22d3ee); }
  }
  @keyframes slow-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .templo-orb-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    margin-bottom: 30px;
    overflow: visible;
  }
  .templo-wave-svg {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
    z-index: 1;
  }
  .templo-wave-group {
    transform-box: fill-box;
    transform-origin: 50% 50%;
    animation: etherealWave 4s ease-out infinite;
  }
  @keyframes haloBlurTravel {
    0%   { filter: blur(1.5px); stroke-width: 10px; opacity: 0.95; }
    35%  { filter: blur(5px);   stroke-width: 13px; opacity: 0.6; }
    70%  { filter: blur(11px);  stroke-width: 17px; opacity: 0.3; }
    100% { filter: blur(18px);  stroke-width: 22px; opacity: 0; }
  }
  .templo-wave-halo {
    fill: none;
    stroke: rgba(0, 243, 255, 0.95);
    animation: haloBlurTravel 4s ease-out infinite;
  }
  .templo-wave-line {
    fill: none;
    stroke: rgba(34,211,238,0.9);
    stroke-width: 1.5px;
    vector-effect: non-scaling-stroke;
  }
  .templo-sparkle {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px 3px #22d3ee, 0 0 16px 4px rgba(34,211,238,0.4);
  }
  .sp1 { top: 5%; left: 48%; animation: sparkle-appear 2.2s infinite 0s; }
  .sp2 { top: 20%; right: 3%; animation: sparkle-appear 2.2s infinite 0.4s; }
  .sp3 { bottom: 8%; right: 12%; animation: sparkle-appear 2.2s infinite 0.8s; }
  .sp4 { bottom: 5%; left: 18%; animation: sparkle-appear 2.2s infinite 1.2s; }
  .sp5 { top: 28%; left: 1%; animation: sparkle-appear 2.2s infinite 1.6s; }
  .sp6 { top: 58%; right: 4%; animation: sparkle-appear 2.2s infinite 0.3s; }
  .sp7 { top: 12%; left: 18%; animation: sparkle-appear 2.2s infinite 1.0s; width: 4px; height: 4px; }
  .sp8 { bottom: 22%; left: 2%; animation: sparkle-appear 2.2s infinite 1.8s; width: 4px; height: 4px; }
  .templo-adn-img {
    width: 85px;
    height: 85px;
    object-fit: contain;
    position: relative;
    z-index: 3;
    border-radius: 50%;
    background: radial-gradient(circle, #0d1f3c 40%, #020617 100%);
    padding: 12px;
    animation: centralPulse 3s ease-in-out infinite;
  }
  .templo-adn-img.playing {
    animation: centralPulse 2.5s ease-in-out infinite;
    box-shadow: 0 0 20px 6px rgba(34,211,238,0.3);
  }
  .templo-adn-img.playing {
    animation: adn-breathe-deep 4s ease-in-out infinite;
  }
  .templo-rotate-ring {
    position: absolute;
    width: 92%;
    height: 92%;
    border-radius: 50%;
    border: 1px solid rgba(34,211,238,0.15);
    border-top-color: rgba(34,211,238,0.5);
    border-right-color: rgba(34,211,238,0.3);
    animation: slow-rotate 8s linear infinite;
  }
  .mi-al-handle span { display: block; width: 16px; height: 1.5px; border-radius: 2px; background: #d4af37; transition: background 0.2s; }
  .mi-al-handle.is-grabbing span { background: #f0d896; box-shadow: 0 0 4px rgba(212,175,55,0.6); }
`;
const MICROCOPYS = {
  es: {
    APRENDIZAJE: "Frecuencias orientadas a potenciar la concentracion, la memoria y la integracion de nueva informacion.",
    CLARIDAD: "Facilita estados de atencion consciente, estabilidad mental y toma de decisiones.",
    CREATIVIDAD: "Estimula el pensamiento creativo, la inspiracion y la resolucion de desafios mentales.",
    RENDIMIENTO: "Frecuencias orientadas a potenciar la atencion, la agilidad mental y el rendimiento cognitivo.",
    REGENERACION: "Frecuencias orientadas al descanso, la restauracion energetica y los procesos naturales de recuperacion.",
    ORGANOS: "Agrupa frecuencias asociadas al equilibrio funcional de organos y sistemas corporales.",
    DOLOR: "Apoya procesos de confort fisico, relajacion y recuperacion corporal.",
    VITALIDAD: "Frecuencias orientadas a la recuperacion y sostenimiento de la energia fisica.",
    CONSCIENCIA_EXP: "Favorece la introspeccion, la percepcion ampliada y la conexion interior.",
    PERCEPCION: "Frecuencias disenadas para fortalecer la intuicion, la sensibilidad y la comprension interna.",
    MEDITACION: "Facilita el acceso a estados profundos de descanso, meditacion y exploracion interior.",
    EXPERIENCIAS: "Experiencias de expansion consciencial guiadas por frecuencias.",
    REGULACION: "Favorece estados de estabilidad, calma y autorregulacion emocional.",
    EQUILIBRIO: "Promueve la armonia entre mente, emocion y cuerpo.",
    INTEGRACION: "Ayuda a sostener estados de atencion plena y coherencia personal.",
    RITUALES: "Procesos de activacion disenados para anclar frecuencias en el campo energetico personal.",
    CEREMONIAS: "Experiencias sonoras colectivas para la armonizacion y expansion de la consciencia.",
    BIENESTAR_F: "Experiencia disenada para acompanar el bienestar femenino, equilibrio y armonia durante los cambios naturales del sistema hormonal.",
    ADN: "Frecuencias orientadas a la reprogramacion y activacion del potencial genetico.",
    CAMPOS: "Apoyo vibracional para el equilibrio y coherencia de los campos bioenergeticos.",
    CELULAR: "Frecuencias para acompanar procesos de regeneracion y vitalidad celular.",
    REPRODUCTOR: "Frecuencias orientadas al equilibrio y bienestar del sistema reproductor.",
  },
  en: {
    APRENDIZAJE: "Frequencies oriented to enhance concentration, memory and integration of new information.",
    CLARIDAD: "Facilitates states of conscious attention, mental stability and decision making.",
    CREATIVIDAD: "Stimulates creative thinking, inspiration and resolution of mental challenges.",
    RENDIMIENTO: "Frequencies oriented to enhance attention, mental agility and cognitive performance.",
    REGENERACION: "Frequencies oriented to rest, energetic restoration and natural recovery processes.",
    ORGANOS: "Groups frequencies associated with functional balance of organs and body systems.",
    DOLOR: "Supports processes of physical comfort, relaxation and body recovery.",
    VITALIDAD: "Frequencies oriented to recovery and sustaining physical energy.",
    CONSCIENCIA_EXP: "Favors introspection, expanded perception and inner connection.",
    PERCEPCION: "Frequencies designed to strengthen intuition, sensitivity and internal understanding.",
    MEDITACION: "Facilitates access to deep states of rest, meditation and inner exploration.",
    EXPERIENCIAS: "Consciousness expansion experiences guided by frequencies.",
    REGULACION: "Favors states of stability, calm and emotional self-regulation.",
    EQUILIBRIO: "Promotes harmony between mind, emotion and body.",
    INTEGRACION: "Helps sustain states of full attention and personal coherence.",
    RITUALES: "Activation processes designed to anchor frequencies in the personal energetic field.",
    CEREMONIAS: "Collective sound experiences for harmonization and expansion of consciousness.",
    BIENESTAR_F: "Experience designed to support feminine wellbeing, balance and harmony during natural hormonal changes.",
    ADN: "Frequencies oriented to reprogramming and activation of genetic potential.",
    CAMPOS: "Vibrational support for balance and coherence of bioenergetic fields.",
    CELULAR: "Frequencies to accompany processes of regeneration and cellular vitality.",
    REPRODUCTOR: "Frequencies oriented to the balance and wellbeing of the reproductive system.",
  }
};
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
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [listMountKey, setListMountKey] = useState(0);
  const [favOrder, setFavOrder] = useState([]);
  const [draggingId, setDraggingId] = useState(null);
  const [overIdx, setOverIdx] = useState(null);
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

  // Reanudar audio cuando el usuario vuelve a la pantalla
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && isPlaying && audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [isPlaying]);
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
        // Media Session API — controles en pantalla de bloqueo
        if ('mediaSession' in navigator && selectedTrack) {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: selectedTrack.name || 'GENORA Healing',
            artist: 'GENORA',
            album: `${selectedTrack.hz || ''} Hz`,
          });
          navigator.mediaSession.setActionHandler('play', () => {
            audioRef.current?.play().catch(() => {});
            setIsPlaying(true);
          });
          navigator.mediaSession.setActionHandler('pause', () => {
            audioRef.current?.pause();
            setIsPlaying(false);
          });
        }
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
    if (mainMode === 'meditaciones') return '#7c5ce6';
    if (mainMode === 'experiencias') return '#d4af37';
    return '#22d3ee';
  };
  const accentColor = getAccentColor();
  const goldColor = '#d4af37';
  const violetColor = '#7c5ce6';
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
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', paddingTop: '10px' }}>
      {mainMode ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div onClick={handleBack} className="back-button-genora" style={{ borderColor: `${accentColor}88` }}>
            <span style={{ color: accentColor, fontSize: '20px' }}>&#8249;</span>
          </div>
          <SmallSearchButton />
        </div>
      ) : (
        <img src="/imagenes/genora-logo-white.png" style={{ height: '55px', borderRadius: '50%', objectFit: 'contain' }} alt="Logo" />
      )}
      <LangSwitch isGold={isGold} isViolet={isViolet} />
    </div>
  );
  const ADNOrb = ({ auraClass = 'aura-supernova', filterClass = 'logo-normal', size = '110px' }) => (
    <div style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', transition: 'all 0.5s ease', animation: `${auraClass} 8s infinite ease-in-out`, position: 'relative', borderRadius: '50%' }}>
      <img src="/imagenes/adn-icon.png" className={filterClass} style={{ width: '70%', objectFit: 'contain', borderRadius: '50%', background: 'rgba(2,6,23,0.85)', padding: '12%' }} alt="ADN" />
    </div>
  );
  // ── SPLASH ────────────────────────────────────────────────────────────────
  const searchResults = searchQuery.trim().length > 0
    ? ALL_TRACKS_FLAT.filter(tr =>
        tr.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    : [];
  const SmallSearchButton = () => (
    <button
      onClick={() => setShowSearch(true)}
      style={{
        width: '30px', height: '30px', borderRadius: '50%',
        background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', flexShrink: 0,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  );
  const SearchOverlay = () => (
    <div className="fade-in-smooth" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(2,6,23,0.97)', backdropFilter: 'blur(10px)', zIndex: 200, display: 'flex', flexDirection: 'column', padding: '24px 20px', overflowY: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <button onClick={() => { setShowSearch(false); setSearchQuery(''); }} style={{ background: 'none', border: 'none', color: '#d4af37', fontSize: '32px', cursor: 'pointer', lineHeight: 1, padding: 0 }}>&#8249;</button>
        <input autoFocus type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={lang === 'es' ? 'Buscar frecuencia...' : 'Search frequency...'}
          style={{ flex: 1, background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '24px', padding: '12px 18px', color: 'white', fontSize: '14px', letterSpacing: '1px', outline: 'none' }}
        />
      </div>
      {searchQuery.trim().length === 0 ? (
        <p style={{ textAlign: 'center', color: 'rgba(212,175,55,0.4)', fontSize: '11px', letterSpacing: '2px', marginTop: '40px', fontWeight: 200 }}>
          {lang === 'es' ? 'Escribe el nombre de una frecuencia' : 'Type a frequency name'}
        </p>
      ) : searchResults.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '11px', letterSpacing: '2px', marginTop: '40px', fontWeight: 200 }}>
          {lang === 'es' ? 'No se encontraron resultados' : 'No results found'}
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          {searchResults.map(track => (
            <div key={track.id} onClick={() => { setShowSearch(false); setSearchQuery(''); playTrack(track, false); }}
              className="track-card" style={{ borderLeft: '4px solid #d4af37', width: '100%', maxWidth: '340px' }}>
              <div style={{ textAlign: 'left', width: '75%' }}>
                <div style={{ fontSize: '14px', color: 'white', fontWeight: 300 }}>{track.name}</div>
                <div style={{ fontSize: '10px', color: '#fdfcf5', opacity: 0.6, marginTop: '4px', fontWeight: 200, letterSpacing: '1px' }}>{t.tracks[track.id] || ''}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '9px', color: '#d4af37', opacity: 0.7 }}>{track.hz}</div>
                <span style={{ color: '#d4af37', fontSize: '18px' }}>&#9658;</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
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
        <div className="templo-orb-container">
          <svg className="templo-wave-svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
            <g className="templo-wave-group" style={{ animationDelay: '0s' }}>
              <path className="templo-wave-halo" style={{ animationDelay: '0s' }} d="M 186.00,100.00 C 188.29,103.74 191.51,108.12 192.13,112.13 C 192.76,116.14 191.88,120.59 189.76,124.05 C 187.65,127.52 183.00,130.33 179.45,132.91 C 175.91,135.49 171.27,137.00 168.48,139.54 C 165.69,142.07 164.01,144.59 162.73,148.14 C 161.45,151.68 161.84,156.55 160.81,160.81 C 159.78,165.08 158.96,170.45 156.57,173.72 C 154.18,177.00 150.41,179.52 146.46,180.48 C 142.52,181.43 137.24,180.14 132.91,179.45 C 128.58,178.77 124.23,176.55 120.47,176.38 C 116.70,176.20 113.73,176.79 110.32,178.40 C 106.91,180.00 103.74,183.71 100.00,186.00 C 96.26,188.29 91.88,191.51 87.87,192.13 C 83.86,192.76 79.41,191.88 75.95,189.76 C 72.48,187.65 69.67,183.00 67.09,179.45 C 64.51,175.91 63.00,171.27 60.46,168.48 C 57.93,165.69 55.41,164.01 51.86,162.73 C 48.32,161.45 43.45,161.84 39.19,160.81 C 34.92,159.78 29.55,158.96 26.28,156.57 C 23.00,154.18 20.48,150.41 19.52,146.46 C 18.57,142.52 19.86,137.24 20.55,132.91 C 21.23,128.58 23.45,124.23 23.62,120.47 C 23.80,116.70 23.21,113.73 21.60,110.32 C 20.00,106.91 16.29,103.74 14.00,100.00 C 11.71,96.26 8.49,91.88 7.87,87.87 C 7.24,83.86 8.12,79.41 10.24,75.95 C 12.35,72.48 17.00,69.67 20.55,67.09 C 24.09,64.51 28.73,63.00 31.52,60.46 C 34.31,57.93 35.99,55.41 37.27,51.86 C 38.55,48.32 38.16,43.45 39.19,39.19 C 40.22,34.92 41.04,29.55 43.43,26.28 C 45.82,23.00 49.59,20.48 53.54,19.52 C 57.48,18.57 62.76,19.86 67.09,20.55 C 71.42,21.23 75.77,23.45 79.53,23.62 C 83.30,23.80 86.27,23.21 89.68,21.60 C 93.09,20.00 96.26,16.29 100.00,14.00 C 103.74,11.71 108.12,8.49 112.13,7.87 C 116.14,7.24 120.59,8.12 124.05,10.24 C 127.52,12.35 130.33,17.00 132.91,20.55 C 135.49,24.09 137.00,28.73 139.54,31.52 C 142.07,34.31 144.59,35.99 148.14,37.27 C 151.68,38.55 156.55,38.16 160.81,39.19 C 165.08,40.22 170.45,41.04 173.72,43.43 C 177.00,45.82 179.52,49.59 180.48,53.54 C 181.43,57.48 180.14,62.76 179.45,67.09 C 178.77,71.42 176.55,75.77 176.38,79.53 C 176.20,83.30 176.79,86.27 178.40,89.68 C 180.00,93.09 183.71,96.26 186.00,100.00 Z" />
              <path className="templo-wave-line" d="M 186.00,100.00 C 188.29,103.74 191.51,108.12 192.13,112.13 C 192.76,116.14 191.88,120.59 189.76,124.05 C 187.65,127.52 183.00,130.33 179.45,132.91 C 175.91,135.49 171.27,137.00 168.48,139.54 C 165.69,142.07 164.01,144.59 162.73,148.14 C 161.45,151.68 161.84,156.55 160.81,160.81 C 159.78,165.08 158.96,170.45 156.57,173.72 C 154.18,177.00 150.41,179.52 146.46,180.48 C 142.52,181.43 137.24,180.14 132.91,179.45 C 128.58,178.77 124.23,176.55 120.47,176.38 C 116.70,176.20 113.73,176.79 110.32,178.40 C 106.91,180.00 103.74,183.71 100.00,186.00 C 96.26,188.29 91.88,191.51 87.87,192.13 C 83.86,192.76 79.41,191.88 75.95,189.76 C 72.48,187.65 69.67,183.00 67.09,179.45 C 64.51,175.91 63.00,171.27 60.46,168.48 C 57.93,165.69 55.41,164.01 51.86,162.73 C 48.32,161.45 43.45,161.84 39.19,160.81 C 34.92,159.78 29.55,158.96 26.28,156.57 C 23.00,154.18 20.48,150.41 19.52,146.46 C 18.57,142.52 19.86,137.24 20.55,132.91 C 21.23,128.58 23.45,124.23 23.62,120.47 C 23.80,116.70 23.21,113.73 21.60,110.32 C 20.00,106.91 16.29,103.74 14.00,100.00 C 11.71,96.26 8.49,91.88 7.87,87.87 C 7.24,83.86 8.12,79.41 10.24,75.95 C 12.35,72.48 17.00,69.67 20.55,67.09 C 24.09,64.51 28.73,63.00 31.52,60.46 C 34.31,57.93 35.99,55.41 37.27,51.86 C 38.55,48.32 38.16,43.45 39.19,39.19 C 40.22,34.92 41.04,29.55 43.43,26.28 C 45.82,23.00 49.59,20.48 53.54,19.52 C 57.48,18.57 62.76,19.86 67.09,20.55 C 71.42,21.23 75.77,23.45 79.53,23.62 C 83.30,23.80 86.27,23.21 89.68,21.60 C 93.09,20.00 96.26,16.29 100.00,14.00 C 103.74,11.71 108.12,8.49 112.13,7.87 C 116.14,7.24 120.59,8.12 124.05,10.24 C 127.52,12.35 130.33,17.00 132.91,20.55 C 135.49,24.09 137.00,28.73 139.54,31.52 C 142.07,34.31 144.59,35.99 148.14,37.27 C 151.68,38.55 156.55,38.16 160.81,39.19 C 165.08,40.22 170.45,41.04 173.72,43.43 C 177.00,45.82 179.52,49.59 180.48,53.54 C 181.43,57.48 180.14,62.76 179.45,67.09 C 178.77,71.42 176.55,75.77 176.38,79.53 C 176.20,83.30 176.79,86.27 178.40,89.68 C 180.00,93.09 183.71,96.26 186.00,100.00 Z" />
            </g>
            <g className="templo-wave-group" style={{ animationDelay: '0.8s' }}>
              <path className="templo-wave-halo" style={{ animationDelay: '0.8s' }} d="M 191.15,100.00 C 192.90,103.85 193.98,108.43 193.07,112.25 C 192.16,116.08 188.76,119.85 185.70,122.96 C 182.64,126.08 177.70,128.26 174.69,130.94 C 171.69,133.62 169.09,135.77 167.66,139.06 C 166.22,142.36 166.60,146.46 166.07,150.70 C 165.54,154.93 165.94,160.49 164.46,164.46 C 162.97,168.42 160.50,172.41 157.15,174.48 C 153.80,176.54 148.73,176.80 144.36,176.84 C 139.99,176.87 134.96,174.92 130.94,174.69 C 126.92,174.46 123.56,174.15 120.22,175.46 C 116.88,176.77 114.24,179.95 110.87,182.57 C 107.50,185.18 103.85,189.40 100.00,191.15 C 96.15,192.90 91.57,193.98 87.75,193.07 C 83.92,192.16 80.15,188.76 77.04,185.70 C 73.92,182.64 71.74,177.70 69.06,174.69 C 66.38,171.69 64.23,169.09 60.94,167.66 C 57.64,166.22 53.54,166.60 49.30,166.07 C 45.07,165.54 39.51,165.94 35.54,164.46 C 31.58,162.97 27.59,160.50 25.52,157.15 C 23.46,153.80 23.20,148.73 23.16,144.36 C 23.13,139.99 25.08,134.96 25.31,130.94 C 25.54,126.92 25.85,123.56 24.54,120.22 C 23.23,116.88 20.05,114.24 17.43,110.87 C 14.82,107.50 10.60,103.85 8.85,100.00 C 7.10,96.15 6.02,91.57 6.93,87.75 C 7.84,83.92 11.24,80.15 14.30,77.04 C 17.36,73.92 22.30,71.74 25.31,69.06 C 28.31,66.38 30.91,64.23 32.34,60.94 C 33.78,57.64 33.40,53.54 33.93,49.30 C 34.46,45.07 34.06,39.51 35.54,35.54 C 37.03,31.58 39.50,27.59 42.85,25.52 C 46.20,23.46 51.27,23.20 55.64,23.16 C 60.01,23.13 65.04,25.08 69.06,25.31 C 73.08,25.54 76.44,25.85 79.78,24.54 C 83.12,23.23 85.76,20.05 89.13,17.43 C 92.50,14.82 96.15,10.60 100.00,8.85 C 103.85,7.10 108.43,6.02 112.25,6.93 C 116.08,7.84 119.85,11.24 122.96,14.30 C 126.08,17.36 128.26,22.30 130.94,25.31 C 133.62,28.31 135.77,30.91 139.06,32.34 C 142.36,33.78 146.46,33.40 150.70,33.93 C 154.93,34.46 160.49,34.06 164.46,35.54 C 168.42,37.03 172.41,39.50 174.48,42.85 C 176.54,46.20 176.80,51.27 176.84,55.64 C 176.87,60.01 174.92,65.04 174.69,69.06 C 174.46,73.08 174.15,76.44 175.46,79.78 C 176.77,83.12 179.95,85.76 182.57,89.13 C 185.18,92.50 189.40,96.15 191.15,100.00 Z" />
              <path className="templo-wave-line" d="M 191.15,100.00 C 192.90,103.85 193.98,108.43 193.07,112.25 C 192.16,116.08 188.76,119.85 185.70,122.96 C 182.64,126.08 177.70,128.26 174.69,130.94 C 171.69,133.62 169.09,135.77 167.66,139.06 C 166.22,142.36 166.60,146.46 166.07,150.70 C 165.54,154.93 165.94,160.49 164.46,164.46 C 162.97,168.42 160.50,172.41 157.15,174.48 C 153.80,176.54 148.73,176.80 144.36,176.84 C 139.99,176.87 134.96,174.92 130.94,174.69 C 126.92,174.46 123.56,174.15 120.22,175.46 C 116.88,176.77 114.24,179.95 110.87,182.57 C 107.50,185.18 103.85,189.40 100.00,191.15 C 96.15,192.90 91.57,193.98 87.75,193.07 C 83.92,192.16 80.15,188.76 77.04,185.70 C 73.92,182.64 71.74,177.70 69.06,174.69 C 66.38,171.69 64.23,169.09 60.94,167.66 C 57.64,166.22 53.54,166.60 49.30,166.07 C 45.07,165.54 39.51,165.94 35.54,164.46 C 31.58,162.97 27.59,160.50 25.52,157.15 C 23.46,153.80 23.20,148.73 23.16,144.36 C 23.13,139.99 25.08,134.96 25.31,130.94 C 25.54,126.92 25.85,123.56 24.54,120.22 C 23.23,116.88 20.05,114.24 17.43,110.87 C 14.82,107.50 10.60,103.85 8.85,100.00 C 7.10,96.15 6.02,91.57 6.93,87.75 C 7.84,83.92 11.24,80.15 14.30,77.04 C 17.36,73.92 22.30,71.74 25.31,69.06 C 28.31,66.38 30.91,64.23 32.34,60.94 C 33.78,57.64 33.40,53.54 33.93,49.30 C 34.46,45.07 34.06,39.51 35.54,35.54 C 37.03,31.58 39.50,27.59 42.85,25.52 C 46.20,23.46 51.27,23.20 55.64,23.16 C 60.01,23.13 65.04,25.08 69.06,25.31 C 73.08,25.54 76.44,25.85 79.78,24.54 C 83.12,23.23 85.76,20.05 89.13,17.43 C 92.50,14.82 96.15,10.60 100.00,8.85 C 103.85,7.10 108.43,6.02 112.25,6.93 C 116.08,7.84 119.85,11.24 122.96,14.30 C 126.08,17.36 128.26,22.30 130.94,25.31 C 133.62,28.31 135.77,30.91 139.06,32.34 C 142.36,33.78 146.46,33.40 150.70,33.93 C 154.93,34.46 160.49,34.06 164.46,35.54 C 168.42,37.03 172.41,39.50 174.48,42.85 C 176.54,46.20 176.80,51.27 176.84,55.64 C 176.87,60.01 174.92,65.04 174.69,69.06 C 174.46,73.08 174.15,76.44 175.46,79.78 C 176.77,83.12 179.95,85.76 182.57,89.13 C 185.18,92.50 189.40,96.15 191.15,100.00 Z" />
            </g>
            <g className="templo-wave-group" style={{ animationDelay: '1.6s' }}>
              <path className="templo-wave-halo" style={{ animationDelay: '1.6s' }} d="M 193.88,100.00 C 194.27,103.91 192.59,108.30 190.34,111.89 C 188.09,115.48 183.43,118.54 180.40,121.54 C 177.37,124.54 173.90,126.74 172.17,129.89 C 170.44,133.04 170.34,136.42 170.04,140.44 C 169.75,144.46 171.03,149.71 170.42,154.04 C 169.81,158.36 168.88,163.34 166.39,166.39 C 163.89,169.43 159.60,171.34 155.47,172.29 C 151.34,173.24 145.88,172.10 141.62,172.08 C 137.36,172.06 133.34,171.16 129.89,172.17 C 126.45,173.18 123.98,175.49 120.93,178.12 C 117.88,180.76 115.07,185.38 111.59,188.00 C 108.10,190.63 103.91,193.49 100.00,193.88 C 96.09,194.27 91.70,192.59 88.11,190.34 C 84.52,188.09 81.46,183.43 78.46,180.40 C 75.46,177.37 73.26,173.90 70.11,172.17 C 66.96,170.44 63.58,170.34 59.56,170.04 C 55.54,169.75 50.29,171.03 45.96,170.42 C 41.64,169.81 36.66,168.88 33.61,166.39 C 30.57,163.89 28.66,159.60 27.71,155.47 C 26.76,151.34 27.90,145.88 27.92,141.62 C 27.94,137.36 28.84,133.34 27.83,129.89 C 26.82,126.45 24.51,123.98 21.88,120.93 C 19.24,117.88 14.62,115.07 12.00,111.59 C 9.37,108.10 6.51,103.91 6.12,100.00 C 5.73,96.09 7.41,91.70 9.66,88.11 C 11.91,84.52 16.57,81.46 19.60,78.46 C 22.63,75.46 26.10,73.26 27.83,70.11 C 29.56,66.96 29.66,63.58 29.96,59.56 C 30.25,55.54 28.97,50.29 29.58,45.96 C 30.19,41.64 31.12,36.66 33.61,33.61 C 36.11,30.57 40.40,28.66 44.53,27.71 C 48.66,26.76 54.12,27.90 58.38,27.92 C 62.64,27.94 66.66,28.84 70.11,27.83 C 73.55,26.82 76.02,24.51 79.07,21.88 C 82.12,19.24 84.93,14.62 88.41,12.00 C 91.90,9.37 96.09,6.51 100.00,6.12 C 103.91,5.73 108.30,7.41 111.89,9.66 C 115.48,11.91 118.54,16.57 121.54,19.60 C 124.54,22.63 126.74,26.10 129.89,27.83 C 133.04,29.56 136.42,29.66 140.44,29.96 C 144.46,30.25 149.71,28.97 154.04,29.58 C 158.36,30.19 163.34,31.12 166.39,33.61 C 169.43,36.11 171.34,40.40 172.29,44.53 C 173.24,48.66 172.10,54.12 172.08,58.38 C 172.06,62.64 171.16,66.66 172.17,70.11 C 173.18,73.55 175.49,76.02 178.12,79.07 C 180.76,82.12 185.38,84.93 188.00,88.41 C 190.63,91.90 193.49,96.09 193.88,100.00 Z" />
              <path className="templo-wave-line" d="M 193.88,100.00 C 194.27,103.91 192.59,108.30 190.34,111.89 C 188.09,115.48 183.43,118.54 180.40,121.54 C 177.37,124.54 173.90,126.74 172.17,129.89 C 170.44,133.04 170.34,136.42 170.04,140.44 C 169.75,144.46 171.03,149.71 170.42,154.04 C 169.81,158.36 168.88,163.34 166.39,166.39 C 163.89,169.43 159.60,171.34 155.47,172.29 C 151.34,173.24 145.88,172.10 141.62,172.08 C 137.36,172.06 133.34,171.16 129.89,172.17 C 126.45,173.18 123.98,175.49 120.93,178.12 C 117.88,180.76 115.07,185.38 111.59,188.00 C 108.10,190.63 103.91,193.49 100.00,193.88 C 96.09,194.27 91.70,192.59 88.11,190.34 C 84.52,188.09 81.46,183.43 78.46,180.40 C 75.46,177.37 73.26,173.90 70.11,172.17 C 66.96,170.44 63.58,170.34 59.56,170.04 C 55.54,169.75 50.29,171.03 45.96,170.42 C 41.64,169.81 36.66,168.88 33.61,166.39 C 30.57,163.89 28.66,159.60 27.71,155.47 C 26.76,151.34 27.90,145.88 27.92,141.62 C 27.94,137.36 28.84,133.34 27.83,129.89 C 26.82,126.45 24.51,123.98 21.88,120.93 C 19.24,117.88 14.62,115.07 12.00,111.59 C 9.37,108.10 6.51,103.91 6.12,100.00 C 5.73,96.09 7.41,91.70 9.66,88.11 C 11.91,84.52 16.57,81.46 19.60,78.46 C 22.63,75.46 26.10,73.26 27.83,70.11 C 29.56,66.96 29.66,63.58 29.96,59.56 C 30.25,55.54 28.97,50.29 29.58,45.96 C 30.19,41.64 31.12,36.66 33.61,33.61 C 36.11,30.57 40.40,28.66 44.53,27.71 C 48.66,26.76 54.12,27.90 58.38,27.92 C 62.64,27.94 66.66,28.84 70.11,27.83 C 73.55,26.82 76.02,24.51 79.07,21.88 C 82.12,19.24 84.93,14.62 88.41,12.00 C 91.90,9.37 96.09,6.51 100.00,6.12 C 103.91,5.73 108.30,7.41 111.89,9.66 C 115.48,11.91 118.54,16.57 121.54,19.60 C 124.54,22.63 126.74,26.10 129.89,27.83 C 133.04,29.56 136.42,29.66 140.44,29.96 C 144.46,30.25 149.71,28.97 154.04,29.58 C 158.36,30.19 163.34,31.12 166.39,33.61 C 169.43,36.11 171.34,40.40 172.29,44.53 C 173.24,48.66 172.10,54.12 172.08,58.38 C 172.06,62.64 171.16,66.66 172.17,70.11 C 173.18,73.55 175.49,76.02 178.12,79.07 C 180.76,82.12 185.38,84.93 188.00,88.41 C 190.63,91.90 193.49,96.09 193.88,100.00 Z" />
            </g>
            <g className="templo-wave-group" style={{ animationDelay: '2.4s' }}>
              <path className="templo-wave-halo" style={{ animationDelay: '2.4s' }} d="M 192.91,100.00 C 191.75,103.89 187.98,107.81 185.22,111.22 C 182.46,114.63 178.38,117.28 176.36,120.46 C 174.33,123.63 173.38,126.51 173.07,130.27 C 172.77,134.03 174.41,138.64 174.52,143.02 C 174.63,147.41 175.21,152.81 173.74,156.58 C 172.27,160.36 169.26,163.76 165.69,165.69 C 162.12,167.63 156.69,167.73 152.33,168.19 C 147.96,168.65 143.20,167.65 139.52,168.46 C 135.85,169.27 133.14,170.63 130.27,173.07 C 127.39,175.52 125.29,179.93 122.27,183.11 C 119.25,186.29 115.84,190.52 112.13,192.16 C 108.42,193.79 103.89,194.06 100.00,192.91 C 96.11,191.75 92.19,187.98 88.78,185.22 C 85.37,182.46 82.72,178.38 79.54,176.36 C 76.37,174.33 73.49,173.38 69.73,173.07 C 65.97,172.77 61.36,174.41 56.98,174.52 C 52.59,174.63 47.19,175.21 43.42,173.74 C 39.64,172.27 36.24,169.26 34.31,165.69 C 32.37,162.12 32.27,156.69 31.81,152.33 C 31.35,147.96 32.35,143.20 31.54,139.52 C 30.73,135.85 29.37,133.14 26.93,130.27 C 24.48,127.39 20.07,125.29 16.89,122.27 C 13.71,119.25 9.48,115.84 7.84,112.13 C 6.21,108.42 5.94,103.89 7.09,100.00 C 8.25,96.11 12.02,92.19 14.78,88.78 C 17.54,85.37 21.62,82.72 23.64,79.54 C 25.67,76.37 26.62,73.49 26.93,69.73 C 27.23,65.97 25.59,61.36 25.48,56.98 C 25.37,52.59 24.79,47.19 26.26,43.42 C 27.73,39.64 30.74,36.24 34.31,34.31 C 37.88,32.37 43.31,32.27 47.67,31.81 C 52.04,31.35 56.80,32.35 60.48,31.54 C 64.15,30.73 66.86,29.37 69.73,26.93 C 72.61,24.48 74.71,20.07 77.73,16.89 C 80.75,13.71 84.16,9.48 87.87,7.84 C 91.58,6.21 96.11,5.94 100.00,7.09 C 103.89,8.25 107.81,12.02 111.22,14.78 C 114.63,17.54 117.28,21.62 120.46,23.64 C 123.63,25.67 126.51,26.62 130.27,26.93 C 134.03,27.23 138.64,25.59 143.02,25.48 C 147.41,25.37 152.81,24.79 156.58,26.26 C 160.36,27.73 163.76,30.74 165.69,34.31 C 167.63,37.88 167.73,43.31 168.19,47.67 C 168.65,52.04 167.65,56.80 168.46,60.48 C 169.27,64.15 170.63,66.86 173.07,69.73 C 175.52,72.61 179.93,74.71 183.11,77.73 C 186.29,80.75 190.52,84.16 192.16,87.87 C 193.79,91.58 194.06,96.11 192.91,100.00 Z" />
              <path className="templo-wave-line" d="M 192.91,100.00 C 191.75,103.89 187.98,107.81 185.22,111.22 C 182.46,114.63 178.38,117.28 176.36,120.46 C 174.33,123.63 173.38,126.51 173.07,130.27 C 172.77,134.03 174.41,138.64 174.52,143.02 C 174.63,147.41 175.21,152.81 173.74,156.58 C 172.27,160.36 169.26,163.76 165.69,165.69 C 162.12,167.63 156.69,167.73 152.33,168.19 C 147.96,168.65 143.20,167.65 139.52,168.46 C 135.85,169.27 133.14,170.63 130.27,173.07 C 127.39,175.52 125.29,179.93 122.27,183.11 C 119.25,186.29 115.84,190.52 112.13,192.16 C 108.42,193.79 103.89,194.06 100.00,192.91 C 96.11,191.75 92.19,187.98 88.78,185.22 C 85.37,182.46 82.72,178.38 79.54,176.36 C 76.37,174.33 73.49,173.38 69.73,173.07 C 65.97,172.77 61.36,174.41 56.98,174.52 C 52.59,174.63 47.19,175.21 43.42,173.74 C 39.64,172.27 36.24,169.26 34.31,165.69 C 32.37,162.12 32.27,156.69 31.81,152.33 C 31.35,147.96 32.35,143.20 31.54,139.52 C 30.73,135.85 29.37,133.14 26.93,130.27 C 24.48,127.39 20.07,125.29 16.89,122.27 C 13.71,119.25 9.48,115.84 7.84,112.13 C 6.21,108.42 5.94,103.89 7.09,100.00 C 8.25,96.11 12.02,92.19 14.78,88.78 C 17.54,85.37 21.62,82.72 23.64,79.54 C 25.67,76.37 26.62,73.49 26.93,69.73 C 27.23,65.97 25.59,61.36 25.48,56.98 C 25.37,52.59 24.79,47.19 26.26,43.42 C 27.73,39.64 30.74,36.24 34.31,34.31 C 37.88,32.37 43.31,32.27 47.67,31.81 C 52.04,31.35 56.80,32.35 60.48,31.54 C 64.15,30.73 66.86,29.37 69.73,26.93 C 72.61,24.48 74.71,20.07 77.73,16.89 C 80.75,13.71 84.16,9.48 87.87,7.84 C 91.58,6.21 96.11,5.94 100.00,7.09 C 103.89,8.25 107.81,12.02 111.22,14.78 C 114.63,17.54 117.28,21.62 120.46,23.64 C 123.63,25.67 126.51,26.62 130.27,26.93 C 134.03,27.23 138.64,25.59 143.02,25.48 C 147.41,25.37 152.81,24.79 156.58,26.26 C 160.36,27.73 163.76,30.74 165.69,34.31 C 167.63,37.88 167.73,43.31 168.19,47.67 C 168.65,52.04 167.65,56.80 168.46,60.48 C 169.27,64.15 170.63,66.86 173.07,69.73 C 175.52,72.61 179.93,74.71 183.11,77.73 C 186.29,80.75 190.52,84.16 192.16,87.87 C 193.79,91.58 194.06,96.11 192.91,100.00 Z" />
            </g>
            <g className="templo-wave-group" style={{ animationDelay: '3.2s' }}>
              <path className="templo-wave-halo" style={{ animationDelay: '3.2s' }} d="M 188.68,100.00 C 186.52,103.80 182.32,107.18 180.12,110.55 C 177.92,113.92 175.99,116.67 175.47,120.22 C 174.95,123.78 176.39,127.66 176.98,131.89 C 177.56,136.11 179.39,141.38 178.97,145.59 C 178.55,149.80 177.18,154.29 174.47,157.14 C 171.76,160.00 166.92,161.54 162.71,162.71 C 158.49,163.87 153.14,163.29 149.20,164.11 C 145.26,164.94 141.95,165.52 139.07,167.66 C 136.18,169.81 134.46,173.57 131.89,176.98 C 129.31,180.38 126.87,185.40 123.60,188.08 C 120.33,190.76 116.19,192.96 112.25,193.06 C 108.32,193.16 103.80,190.84 100.00,188.68 C 96.20,186.52 92.82,182.32 89.45,180.12 C 86.08,177.92 83.33,175.99 79.78,175.47 C 76.22,174.95 72.34,176.39 68.11,176.98 C 63.89,177.56 58.62,179.39 54.41,178.97 C 50.20,178.55 45.71,177.18 42.86,174.47 C 40.00,171.76 38.46,166.92 37.29,162.71 C 36.13,158.49 36.71,153.14 35.89,149.20 C 35.06,145.26 34.48,141.95 32.34,139.07 C 30.19,136.18 26.43,134.46 23.02,131.89 C 19.62,129.31 14.60,126.87 11.92,123.60 C 9.24,120.33 7.04,116.19 6.94,112.25 C 6.84,108.32 9.16,103.80 11.32,100.00 C 13.48,96.20 17.68,92.82 19.88,89.45 C 22.08,86.08 24.01,83.33 24.53,79.78 C 25.05,76.22 23.61,72.34 23.02,68.11 C 22.44,63.89 20.61,58.62 21.03,54.41 C 21.45,50.20 22.82,45.71 25.53,42.86 C 28.24,40.00 33.08,38.46 37.29,37.29 C 41.51,36.13 46.86,36.71 50.80,35.89 C 54.74,35.06 58.05,34.48 60.93,32.34 C 63.82,30.19 65.54,26.43 68.11,23.02 C 70.69,19.62 73.13,14.60 76.40,11.92 C 79.67,9.24 83.81,7.04 87.75,6.94 C 91.68,6.84 96.20,9.16 100.00,11.32 C 103.80,13.48 107.18,17.68 110.55,19.88 C 113.92,22.08 116.67,24.01 120.22,24.53 C 123.78,25.05 127.66,23.61 131.89,23.02 C 136.11,22.44 141.38,20.61 145.59,21.03 C 149.80,21.45 154.29,22.82 157.14,25.53 C 160.00,28.24 161.54,33.08 162.71,37.29 C 163.87,41.51 163.29,46.86 164.11,50.80 C 164.94,54.74 165.52,58.05 167.66,60.93 C 169.81,63.82 173.57,65.54 176.98,68.11 C 180.38,70.69 185.40,73.13 188.08,76.40 C 190.76,79.67 192.96,83.81 193.06,87.75 C 193.16,91.68 190.84,96.20 188.68,100.00 Z" />
              <path className="templo-wave-line" d="M 188.68,100.00 C 186.52,103.80 182.32,107.18 180.12,110.55 C 177.92,113.92 175.99,116.67 175.47,120.22 C 174.95,123.78 176.39,127.66 176.98,131.89 C 177.56,136.11 179.39,141.38 178.97,145.59 C 178.55,149.80 177.18,154.29 174.47,157.14 C 171.76,160.00 166.92,161.54 162.71,162.71 C 158.49,163.87 153.14,163.29 149.20,164.11 C 145.26,164.94 141.95,165.52 139.07,167.66 C 136.18,169.81 134.46,173.57 131.89,176.98 C 129.31,180.38 126.87,185.40 123.60,188.08 C 120.33,190.76 116.19,192.96 112.25,193.06 C 108.32,193.16 103.80,190.84 100.00,188.68 C 96.20,186.52 92.82,182.32 89.45,180.12 C 86.08,177.92 83.33,175.99 79.78,175.47 C 76.22,174.95 72.34,176.39 68.11,176.98 C 63.89,177.56 58.62,179.39 54.41,178.97 C 50.20,178.55 45.71,177.18 42.86,174.47 C 40.00,171.76 38.46,166.92 37.29,162.71 C 36.13,158.49 36.71,153.14 35.89,149.20 C 35.06,145.26 34.48,141.95 32.34,139.07 C 30.19,136.18 26.43,134.46 23.02,131.89 C 19.62,129.31 14.60,126.87 11.92,123.60 C 9.24,120.33 7.04,116.19 6.94,112.25 C 6.84,108.32 9.16,103.80 11.32,100.00 C 13.48,96.20 17.68,92.82 19.88,89.45 C 22.08,86.08 24.01,83.33 24.53,79.78 C 25.05,76.22 23.61,72.34 23.02,68.11 C 22.44,63.89 20.61,58.62 21.03,54.41 C 21.45,50.20 22.82,45.71 25.53,42.86 C 28.24,40.00 33.08,38.46 37.29,37.29 C 41.51,36.13 46.86,36.71 50.80,35.89 C 54.74,35.06 58.05,34.48 60.93,32.34 C 63.82,30.19 65.54,26.43 68.11,23.02 C 70.69,19.62 73.13,14.60 76.40,11.92 C 79.67,9.24 83.81,7.04 87.75,6.94 C 91.68,6.84 96.20,9.16 100.00,11.32 C 103.80,13.48 107.18,17.68 110.55,19.88 C 113.92,22.08 116.67,24.01 120.22,24.53 C 123.78,25.05 127.66,23.61 131.89,23.02 C 136.11,22.44 141.38,20.61 145.59,21.03 C 149.80,21.45 154.29,22.82 157.14,25.53 C 160.00,28.24 161.54,33.08 162.71,37.29 C 163.87,41.51 163.29,46.86 164.11,50.80 C 164.94,54.74 165.52,58.05 167.66,60.93 C 169.81,63.82 173.57,65.54 176.98,68.11 C 180.38,70.69 185.40,73.13 188.08,76.40 C 190.76,79.67 192.96,83.81 193.06,87.75 C 193.16,91.68 190.84,96.20 188.68,100.00 Z" />
            </g>
          </svg>
          <span className="templo-sparkle sp1" />
          <span className="templo-sparkle sp2" />
          <span className="templo-sparkle sp3" />
          <span className="templo-sparkle sp4" />
          <span className="templo-sparkle sp5" />
          <div style={{
            position: 'absolute',
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            border: '2px solid rgba(34,211,238,0.9)',
            boxShadow: '0 0 20px 8px rgba(34,211,238,0.8), 0 0 50px 20px rgba(34,211,238,0.4), inset 0 0 20px 5px rgba(34,211,238,0.3)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />
          <img src="/imagenes/adn-icon.png" className={`templo-adn-img ${isPlaying ? 'playing' : ''}`} alt="ADN" />
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
                  }}
                >
                  <div
                    className={['mi-al-handle', isDragging ? 'is-grabbing' : ''].filter(Boolean).join(' ')}
                    aria-hidden="true"
                    style={{ touchAction: 'none' }}
                    onTouchStart={(e) => {
                      if (navigator.vibrate) navigator.vibrate(8);
                      handleTouchStart(e, track.id, idx);
                    }}
                    onTouchEnd={handleTouchEnd}
                  >
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
  if (showSearch) {
    return <SearchOverlay />;
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
          size={!mainMode ? '140px' : '110px'}
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
            <p style={{ fontSize: '10px', letterSpacing: '3px', color: '#22d3ee', textAlign: 'center', marginBottom: '4px', fontWeight: 200 }}>{t.pillars[freqPillar]?.subs[freqSub]}</p>
            {MICROCOPYS[lang]?.[freqSub] && (
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginBottom: '16px', fontWeight: 200, letterSpacing: '0.5px', maxWidth: '300px', lineHeight: 1.6, fontStyle: 'italic' }}>
                {MICROCOPYS[lang][freqSub]}
              </p>
            )}
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