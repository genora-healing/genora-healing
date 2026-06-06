import React, { useState, useEffect, useRef } from &#39;react&#39;;
const T = {
es: {
splash_title: &quot;RESONANCIA ORIGEN&quot;,
splash_sub: &quot;ACTIVANDO TU CONSCIENCIA GENETICA&quot;,
choose_path: &quot;ELIGE TU CAMINO&quot;,
frequencies: &quot;FRECUENCIAS&quot;,
meditations: &quot;MEDITACIONES&quot;,
experiences: &quot;EXPERIENCIAS&quot;,
catalog: &quot;CATALOGO&quot;,
my_alignment: &quot;MI ALINEACION&quot;,
my_field: &quot;MI CAMPO DE RESONANCIA&quot;,
empty_field: &quot;Tu campo de resonancia esta vacio.&quot;,
empty_sub: &quot;Toca el corazon de cualquier frecuencia para anclarla en tu campo personal.&quot;,
reminder_title: &quot;RECORDATORIO DE ALINEACION&quot;,
reminder_morning: &quot;Manana&quot;,
reminder_afternoon: &quot;Tarde&quot;,
reminder_night: &quot;Noche&quot;,
reminder_set_morning: &quot;Tu alineacion esta programada para la manana&quot;,
reminder_set_afternoon: &quot;Tu alineacion esta programada para la tarde&quot;,
reminder_set_night: &quot;Tu alineacion esta programada para la noche&quot;,
banner: &quot;✦ Es momento de tu alineacion diaria Genora&quot;,
suggestion_label: &quot;SUGERENCIA DE ALINEACION&quot;,
coming_soon: &quot;Proximas frecuencias en camino...&quot;,
sanctuary_title: &quot;SANTUARIO GENORA&quot;,
sanctuary_micro: &quot;Un espacio reservado para las herramientas que apoyan tu camino.&quot;,
sanctuary_access: &quot;Acceso exclusivo mediante codigo de acceso.&quot;,
sanctuary_placeholder: &quot;Ingresa tu codigo de acceso&quot;,
sanctuary_enter: &quot;ACCEDER&quot;,
sanctuary_error: &quot;Codigo no verificado. Solicita tu codigo de acceso.&quot;,
sanctuary_loading: &quot;Sintonizando frecuencia de alta fidelidad...&quot;,
sanctuary_library_sub: &quot;Frecuencias y videos para tu proceso de sanacion.&quot;,
home_buttons: { frequencies: &quot;FRECUENCIAS&quot;, meditations: &quot;MEDITACIONES&quot;, experiences:

&quot;EXPERIENCIAS&quot;, sanctuary: &quot;SANTUARIO GENORA&quot; },
freq_pillars: { MENTE: &quot;MENTE&quot;, COHERENCIA: &quot;COHERENCIA&quot;, CUERPO: &quot;CUERPO&quot;, EXPANSION:
&quot;EXPANSION&quot;, EXPERIENCIAS_G: &quot;EXPERIENCIAS GENORA&quot;, ARMONIZACION: &quot;ARMONIZACION
BIOLOGICA&quot; },
med_pillars: { LINAJE: &quot;LINAJE &amp; ORIGEN&quot;, CONSCIENCIA: &quot;CONSCIENCIA &amp; UNIFICACION&quot;,
ELEVACION: &quot;ELEVACION &amp; TRANSMUTACION&quot; },
exp_levels: {
UNVEILING: &quot;THE UNVEILING&quot;, UNVEILING_sub: &quot;Activando el Potencial del Ser Humano de Luz&quot;,
AWAKENING: &quot;PATH OF AWAKENING&quot;, AWAKENING_sub: &quot;El Sendero de los Dones Superiores&quot;,
CODEX: &quot;CODEX OF WISDOM&quot;, CODEX_sub: &quot;Conocimiento, Sanacion y Clarividencia&quot;,
VOICE: &quot;VOICE OF LIGHT&quot;, VOICE_sub: &quot;Clariaudiencia y Conexion Multidimensional&quot;,
ALCHEMIST: &quot;ALCHEMIST PATH&quot;, ALCHEMIST_sub: &quot;Transmutacion y Precognicion&quot;,
MERKABA: &quot;MERKABA ASCENSION&quot;, MERKABA_sub: &quot;Ensonacion, Resurreccion y Omnipotencia&quot;
},
unveiling_stages: {
TERRESTRE: &quot;ETAPA I · GENOMA HUMANO TERRESTRE&quot;, TERRESTRE_sub: &quot;El Despertar de las
Maestrias Fundamentales&quot;,
DIVINO: &quot;ETAPA II · GENOMA HUMANO DIVINO&quot;, DIVINO_sub: &quot;La Expansion de la Consciencia
Superior&quot;,
INTERDIMENSIONAL: &quot;ETAPA III · GENOMA HUMANO INTERDIMENSIONAL&quot;,
INTERDIMENSIONAL_sub: &quot;La Integracion del Ser de Luz&quot;
},
pillars: {
MENTE: { label: &quot;MENTE&quot;, subs: { &quot;APRENDIZAJE&quot;: &quot;APRENDIZAJE &amp; ENFOQUE&quot;, &quot;CREATIVIDAD&quot;:
&quot;CREATIVIDAD &amp; RESOLUCION&quot;, &quot;CLARIDAD&quot;: &quot;CLARIDAD MENTAL&quot;, &quot;RENDIMIENTO&quot;: &quot;ACTIVACION
MENTAL &amp; RENDIMIENTO&quot; } },
COHERENCIA: { label: &quot;COHERENCIA&quot;, subs: { &quot;REGULACION&quot;: &quot;REGULACION EMOCIONAL&quot;,
&quot;EQUILIBRIO&quot;: &quot;EQUILIBRIO INTERNO&quot;, &quot;INTEGRACION&quot;: &quot;INTEGRACION MENTE-CUERPO&quot; } },
CUERPO: { label: &quot;CUERPO&quot;, subs: { &quot;REGENERACION&quot;: &quot;REGENERACION &amp; SANACION&quot;,
&quot;ORGANOS&quot;: &quot;ORGANOS &amp; SISTEMAS&quot;, &quot;DOLOR&quot;: &quot;DOLOR &amp; RECUPERACION&quot; } },
EXPANSION: { label: &quot;EXPANSION&quot;, subs: { &quot;MEDITACION&quot;: &quot;MEDITACION &amp; ESTADOS INTERNOS&quot;,
&quot;PERCEPCION&quot;: &quot;PERCEPCION &amp; INTUICION&quot;, &quot;EXPERIENCIAS&quot;: &quot;EXPERIENCIAS EXPANDIDAS&quot; } },
EXPERIENCIAS_G: { label: &quot;EXPERIENCIAS GENORA&quot;, subs: { &quot;SESIONES&quot;: &quot;SESIONES EN VIVO&quot;,
&quot;RITUALES&quot;: &quot;RITUALES DE ACTIVACION&quot;, &quot;CEREMONIAS&quot;: &quot;CEREMONIAS SONORAS&quot; } },
ARMONIZACION: { label: &quot;ARMONIZACION BIOLOGICA&quot;, subs: { &quot;ADN&quot;: &quot;REPROGRAMACION DE
ADN&quot;, &quot;CAMPOS&quot;: &quot;CAMPOS BIOENERGETICOS&quot;, &quot;CELULAR&quot;: &quot;REGENERACION CELULAR&quot; } }
},
tracks: {
&quot;alpha-integration&quot;: &quot;Integracion de informacion desde un estado de calma.&quot;,
&quot;beta-learning&quot;: &quot;Absorcion pasiva de informacion sin esfuerzo.&quot;,
&quot;alpha-intelligence&quot;: &quot;Mejora la capacidad de procesamiento cognitivo.&quot;,
&quot;beta-focus&quot;: &quot;Concentracion y claridad mental sostenida.&quot;,
&quot;beta-decision&quot;: &quot;Claridad en momentos clave de decision.&quot;,
&quot;alpha-creator&quot;: &quot;Activa el pensamiento positivo e ideas nuevas.&quot;,

&quot;beta-solution&quot;: &quot;Resolucion analitica y toma de decisiones.&quot;,
&quot;beta-logic&quot;: &quot;Potencia el pensamiento logico y analitico.&quot;,
&quot;beta-attention&quot;: &quot;Atencion consciente y respuesta mental agil.&quot;,
&quot;alpha-balance-mind&quot;: &quot;Reduce la tension y mejora la estabilidad mental.&quot;,
&quot;alpha-center&quot;: &quot;Centracion, claridad y expresion consciente.&quot;,
&quot;beta-decision-c&quot;: &quot;Claridad en momentos clave de decision.&quot;,
&quot;alpha-calm-alert&quot;: &quot;Estado de alerta serena y presencia absoluta.&quot;,
&quot;alpha-clarity&quot;: &quot;Purificacion de pensamientos y vision nitida.&quot;,
&quot;gamma-insight&quot;: &quot;Destellos de comprension profunda y epifanias.&quot;,
&quot;beta-active-mind&quot;: &quot;Aumenta la atencion externa y actividad mental.&quot;,
&quot;beta-vital-mind&quot;: &quot;Genera energia mental y enfoque en tareas.&quot;,
&quot;beta-cortex&quot;: &quot;Procesamiento avanzado e inteligencia.&quot;,
&quot;alpha-focus&quot;: &quot;Concentracion y enfoque mental sostenido.&quot;
}
},
en: {
splash_title: &quot;ORIGIN RESONANCE&quot;,
splash_sub: &quot;ACTIVATING YOUR GENETIC CONSCIOUSNESS&quot;,
choose_path: &quot;CHOOSE YOUR PATH&quot;,
frequencies: &quot;FREQUENCIES&quot;,
meditations: &quot;MEDITATIONS&quot;,
experiences: &quot;EXPERIENCES&quot;,
catalog: &quot;CATALOG&quot;,
my_alignment: &quot;MY ALIGNMENT&quot;,
my_field: &quot;MY RESONANCE FIELD&quot;,
empty_field: &quot;Your resonance field is empty.&quot;,
empty_sub: &quot;Tap the heart on any frequency to anchor it to your personal field.&quot;,
reminder_title: &quot;ALIGNMENT REMINDER&quot;,
reminder_morning: &quot;Morning&quot;,
reminder_afternoon: &quot;Afternoon&quot;,
reminder_night: &quot;Night&quot;,
reminder_set_morning: &quot;Your alignment is scheduled for the morning&quot;,
reminder_set_afternoon: &quot;Your alignment is scheduled for the afternoon&quot;,
reminder_set_night: &quot;Your alignment is scheduled for the night&quot;,
banner: &quot;✦ It is time for your daily Genora alignment&quot;,
suggestion_label: &quot;ALIGNMENT SUGGESTION&quot;,
coming_soon: &quot;Upcoming frequencies on their way...&quot;,
sanctuary_title: &quot;GENORA SANCTUARY&quot;,
sanctuary_micro: &quot;A reserved space for the tools that support your journey.&quot;,
sanctuary_access: &quot;Exclusive access via access code.&quot;,
sanctuary_placeholder: &quot;Enter your access code&quot;,
sanctuary_enter: &quot;ENTER&quot;,
sanctuary_error: &quot;Code not verified. Request your access code.&quot;,
sanctuary_loading: &quot;Tuning high-fidelity frequency...&quot;,

sanctuary_library_sub: &quot;Frequencies and videos for your healing process.&quot;,
home_buttons: { frequencies: &quot;FREQUENCIES&quot;, meditations: &quot;MEDITATIONS&quot;, experiences:
&quot;EXPERIENCES&quot;, sanctuary: &quot;GENORA SANCTUARY&quot; },
freq_pillars: { MENTE: &quot;MIND&quot;, COHERENCIA: &quot;COHERENCE&quot;, CUERPO: &quot;BODY&quot;, EXPANSION:
&quot;EXPANSION&quot;, EXPERIENCIAS_G: &quot;GENORA EXPERIENCES&quot;, ARMONIZACION: &quot;BIOLOGICAL
HARMONIZATION&quot; },
med_pillars: { LINAJE: &quot;LINEAGE &amp; ORIGIN&quot;, CONSCIENCIA: &quot;CONSCIOUSNESS &amp; UNIFICATION&quot;,
ELEVACION: &quot;ELEVATION &amp; TRANSMUTATION&quot; },
exp_levels: {
UNVEILING: &quot;THE UNVEILING&quot;, UNVEILING_sub: &quot;Activating the Potential of the Human Being of
Light&quot;,
AWAKENING: &quot;PATH OF AWAKENING&quot;, AWAKENING_sub: &quot;The Path of Superior Gifts&quot;,
CODEX: &quot;CODEX OF WISDOM&quot;, CODEX_sub: &quot;Knowledge, Healing and Clairvoyance&quot;,
VOICE: &quot;VOICE OF LIGHT&quot;, VOICE_sub: &quot;Clairaudience and Multidimensional Connection&quot;,
ALCHEMIST: &quot;ALCHEMIST PATH&quot;, ALCHEMIST_sub: &quot;Transmutation and Precognition&quot;,
MERKABA: &quot;MERKABA ASCENSION&quot;, MERKABA_sub: &quot;Dreaming, Resurrection and Omnipotence&quot;
},
unveiling_stages: {
TERRESTRE: &quot;STAGE I · TERRESTRIAL HUMAN GENOME&quot;, TERRESTRE_sub: &quot;The Awakening of
Fundamental Masteries&quot;,
DIVINO: &quot;STAGE II · DIVINE HUMAN GENOME&quot;, DIVINO_sub: &quot;The Expansion of Superior
Consciousness&quot;,
INTERDIMENSIONAL: &quot;STAGE III · INTERDIMENSIONAL HUMAN GENOME&quot;,
INTERDIMENSIONAL_sub: &quot;The Integration of the Being of Light&quot;
},
pillars: {
MENTE: { label: &quot;MIND&quot;, subs: { &quot;APRENDIZAJE&quot;: &quot;LEARNING &amp; FOCUS&quot;, &quot;CREATIVIDAD&quot;:
&quot;CREATIVITY &amp; RESOLUTION&quot;, &quot;CLARIDAD&quot;: &quot;MENTAL CLARITY&quot;, &quot;RENDIMIENTO&quot;: &quot;MENTAL
ACTIVATION &amp; PERFORMANCE&quot; } },
COHERENCIA: { label: &quot;COHERENCE&quot;, subs: { &quot;REGULACION&quot;: &quot;EMOTIONAL REGULATION&quot;,
&quot;EQUILIBRIO&quot;: &quot;INNER BALANCE&quot;, &quot;INTEGRACION&quot;: &quot;MIND-BODY INTEGRATION&quot; } },
CUERPO: { label: &quot;BODY&quot;, subs: { &quot;REGENERACION&quot;: &quot;REGENERATION &amp; HEALING&quot;, &quot;ORGANOS&quot;:
&quot;ORGANS &amp; SYSTEMS&quot;, &quot;DOLOR&quot;: &quot;PAIN &amp; RECOVERY&quot; } },
EXPANSION: { label: &quot;EXPANSION&quot;, subs: { &quot;MEDITACION&quot;: &quot;MEDITATION &amp; INNER STATES&quot;,
&quot;PERCEPCION&quot;: &quot;PERCEPTION &amp; INTUITION&quot;, &quot;EXPERIENCIAS&quot;: &quot;EXPANDED EXPERIENCES&quot; } },
EXPERIENCIAS_G: { label: &quot;GENORA EXPERIENCES&quot;, subs: { &quot;SESIONES&quot;: &quot;LIVE SESSIONS&quot;,
&quot;RITUALES&quot;: &quot;ACTIVATION RITUALS&quot;, &quot;CEREMONIAS&quot;: &quot;SOUND CEREMONIES&quot; } },
ARMONIZACION: { label: &quot;BIOLOGICAL HARMONIZATION&quot;, subs: { &quot;ADN&quot;: &quot;DNA
REPROGRAMMING&quot;, &quot;CAMPOS&quot;: &quot;BIOENERGETIC FIELDS&quot;, &quot;CELULAR&quot;: &quot;CELLULAR
REGENERATION&quot; } }
},
tracks: {
&quot;alpha-integration&quot;: &quot;Information integration from a state of calm.&quot;,
&quot;beta-learning&quot;: &quot;Passive information absorption without effort.&quot;,

&quot;alpha-intelligence&quot;: &quot;Improves cognitive processing capacity.&quot;,
&quot;beta-focus&quot;: &quot;Concentration and sustained mental clarity.&quot;,
&quot;beta-decision&quot;: &quot;Clarity in key decision moments.&quot;,
&quot;alpha-creator&quot;: &quot;Activates positive thinking and new ideas.&quot;,
&quot;beta-solution&quot;: &quot;Analytical resolution and decision making.&quot;,
&quot;beta-logic&quot;: &quot;Enhances logical and analytical thinking.&quot;,
&quot;beta-attention&quot;: &quot;Conscious attention and agile mental response.&quot;,
&quot;alpha-balance-mind&quot;: &quot;Reduces tension and improves mental stability.&quot;,
&quot;alpha-center&quot;: &quot;Centering, clarity and conscious expression.&quot;,
&quot;beta-decision-c&quot;: &quot;Clarity in key decision moments.&quot;,
&quot;alpha-calm-alert&quot;: &quot;Serene alertness and absolute presence.&quot;,
&quot;alpha-clarity&quot;: &quot;Purification of thoughts and clear vision.&quot;,
&quot;gamma-insight&quot;: &quot;Flashes of deep understanding and epiphanies.&quot;,
&quot;beta-active-mind&quot;: &quot;Increases external attention and mental activity.&quot;,
&quot;beta-vital-mind&quot;: &quot;Generates mental energy and task focus.&quot;,
&quot;beta-cortex&quot;: &quot;Advanced processing and intelligence.&quot;,
&quot;alpha-focus&quot;: &quot;Sustained concentration and mental focus.&quot;
}
}
};
const SANCTUARY_CODE = &quot;GENORA2026&quot;;
const SANCTUARY_TOOLS = [
{ id: &quot;frecuencia-adn-001&quot;, name: &quot;Frecuencia ADN — Activacion Primaria&quot;, type: &quot;audio&quot;, description:
&quot;Frecuencia de alta fidelidad para activacion genetica profunda.&quot;, duration: &quot;60 min&quot;, url:
&quot;https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1/genora/frecuencias/frecuencia-adn-
001.wav&quot; },
{ id: &quot;frecuencia-celular-001&quot;, name: &quot;Regeneracion Celular — Campo Cuantico&quot;, type: &quot;audio&quot;, description:
&quot;Soporte vibracional para procesos de sanacion celular.&quot;, duration: &quot;45 min&quot;, url:
&quot;https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1/genora/frecuencias/frecuencia-celular-
001.wav&quot; },
{ id: &quot;video-meditacion-001&quot;, name: &quot;Meditacion Guiada — Matrices Perinatales&quot;, type: &quot;video&quot;, description:
&quot;Proceso guiado para liberacion de matrices perinatales.&quot;, duration: &quot;35 min&quot;, url:
&quot;https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1/genora/videos/meditacion-matrices-
001.mp4&quot;, thumbnail: &quot;&quot; },
{ id: &quot;frecuencia-ancestral-001&quot;, name: &quot;Liberacion Ancestral — Limpieza de Campo&quot;, type: &quot;audio&quot;,
description: &quot;Frecuencia para desbloqueo de patrones heredados.&quot;, duration: &quot;55 min&quot;, url:
&quot;https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1/genora/frecuencias/frecuencia-ancestral-
001.wav&quot; },
{ id: &quot;atraer-clientes-dinero&quot;, name: &quot;Atraer Clientes &amp; Dinero&quot;, type: &quot;audio&quot;, description: &quot;Frecuencia de
alta gama para activar el flujo de abundancia, clientes y prosperidad.&quot;, duration: &quot;60 min&quot;, url:
&quot;https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/atraer-clientes-dinero.wav&quot; },
{ id: &quot;ganar-dinero-tener-buena-suerte&quot;, name: &quot;Ganar Dinero &amp; Buena Suerte&quot;, type: &quot;audio&quot;, description:
&quot;Frecuencia vibracional para sintonizar con la buena fortuna y la expansion financiera.&quot;, duration: &quot;60 min&quot;,
url: &quot;https://genora-global-frecuencias.s3.us-east-2.amazonaws.com/ganar-dinero-tener-buena-suerte.wav&quot;

},
];
const FREQ_TRACKS = {
MENTE: {
&quot;APRENDIZAJE&quot;: [
{ id: &quot;alpha-integration&quot;, name: &quot;Alpha Integration&quot;, hz: &quot;8-10 Hz&quot;, url: &quot;/audio/alpha-integration.mp3&quot; },
{ id: &quot;beta-learning&quot;, name: &quot;Beta Learning&quot;, hz: &quot;12-14 Hz&quot;, url: &quot;/audio/beta-learning.mp3&quot; },
{ id: &quot;alpha-intelligence&quot;, name: &quot;Alpha Intelligence&quot;, hz: &quot;11.5-14.5 Hz&quot;, url: &quot;/audio/alpha-
intelligence.mp3&quot; },
{ id: &quot;beta-focus&quot;, name: &quot;Beta Focus&quot;, hz: &quot;15-18 Hz&quot;, url: &quot;/audio/beta-focus.mp3&quot; },
{ id: &quot;beta-decision&quot;, name: &quot;Beta Decision&quot;, hz: &quot;13.8 Hz&quot;, url: &quot;/audio/beta-decision.mp3&quot; }
],
&quot;CREATIVIDAD&quot;: [
{ id: &quot;alpha-creator&quot;, name: &quot;Alpha Creator&quot;, hz: &quot;8-12 Hz&quot;, url: &quot;/audio/alpha-creator.mp3&quot; },
{ id: &quot;beta-solution&quot;, name: &quot;Beta Solution&quot;, hz: &quot;12-36 Hz&quot;, url: &quot;/audio/beta-solution.mp3&quot; },
{ id: &quot;beta-logic&quot;, name: &quot;Beta Logic&quot;, hz: &quot;13-40 Hz&quot;, url: &quot;/audio/beta-logic.mp3&quot; },
{ id: &quot;beta-attention&quot;, name: &quot;Beta Attention&quot;, hz: &quot;12-15 Hz&quot;, url: &quot;/audio/beta-attention.mp3&quot; }
],
&quot;CLARIDAD&quot;: [
{ id: &quot;alpha-balance-mind&quot;, name: &quot;Alpha Balance Mind&quot;, hz: &quot;11 Hz&quot;, url: &quot;/audio/alpha-balance-
mind.mp3&quot; },
{ id: &quot;alpha-center&quot;, name: &quot;Alpha Center&quot;, hz: &quot;12 Hz&quot;, url: &quot;/audio/alpha-center.mp3&quot; },
{ id: &quot;beta-decision-c&quot;, name: &quot;Beta Decision&quot;, hz: &quot;13.8 Hz&quot;, url: &quot;/audio/beta-decision.mp3&quot; },
{ id: &quot;alpha-calm-alert&quot;, name: &quot;Alpha Calm Alert&quot;, hz: &quot;10.6 Hz&quot;, url: &quot;/audio/alpha-calm-alert.mp3&quot; },
{ id: &quot;alpha-clarity&quot;, name: &quot;Alpha Clarity&quot;, hz: &quot;10.5 Hz&quot;, url: &quot;/audio/alpha-clarity.mp3&quot; },
{ id: &quot;gamma-insight&quot;, name: &quot;Gamma Insight&quot;, hz: &quot;40 Hz&quot;, url: &quot;/audio/gamma-insight.mp3&quot; }
],
&quot;RENDIMIENTO&quot;: [
{ id: &quot;beta-active-mind&quot;, name: &quot;Beta Active Mind&quot;, hz: &quot;13-27 Hz&quot;, url: &quot;/audio/beta-active-mind.mp3&quot; },
{ id: &quot;beta-vital-mind&quot;, name: &quot;Beta Vital Mind&quot;, hz: &quot;14 Hz&quot;, url: &quot;/audio/beta-vital-mind.mp3&quot; },
{ id: &quot;beta-cortex&quot;, name: &quot;Beta Cortex&quot;, hz: &quot;15.4 Hz&quot;, url: &quot;/audio/beta-cortex.mp3&quot; },
{ id: &quot;alpha-focus&quot;, name: &quot;Alpha Focus&quot;, hz: &quot;11-14 Hz&quot;, url: &quot;/audio/alpha-focus.mp3&quot; }
]
},
COHERENCIA: { &quot;REGULACION&quot;: [], &quot;EQUILIBRIO&quot;: [], &quot;INTEGRACION&quot;: [] },
CUERPO: { &quot;REGENERACION&quot;: [], &quot;ORGANOS&quot;: [], &quot;DOLOR&quot;: [] },
EXPANSION: { &quot;MEDITACION&quot;: [], &quot;PERCEPCION&quot;: [], &quot;EXPERIENCIAS&quot;: [] },
EXPERIENCIAS_G: { &quot;SESIONES&quot;: [], &quot;RITUALES&quot;: [], &quot;CEREMONIAS&quot;: [] },
ARMONIZACION: { &quot;ADN&quot;: [], &quot;CAMPOS&quot;: [], &quot;CELULAR&quot;: [] }
};
const ALL_TRACKS_FLAT = Object.values(FREQ_TRACKS).flatMap(p =&gt; Object.values(p).flat()).filter(t =&gt;
t.url);
const MED_DATA = {
LINAJE: { sessions: [
{ id: &quot;crimson-genesis&quot;, name: &quot;Crimson Genesis&quot;, sub: &quot;Sanacion del Linaje y Memorias Profundas&quot;,

desc: &quot;Exploracion de emociones profundas, memorias ancestrales y patrones grabados en las capas
geneticas del ADN.&quot; },
{ id: &quot;golden-legacy&quot;, name: &quot;Golden Legacy&quot;, sub: &quot;Reconexion con el Linaje Ancestral y Galactico&quot;,
desc: &quot;Viaje de reconocimiento y restauracion de la herencia ancestral y galactica.&quot; }
]},
CONSCIENCIA: { sessions: [
{ id: &quot;chamber-translove&quot;, name: &quot;Chamber of Translove&quot;, sub: &quot;La Camara de la Unificacion Interior&quot;,
desc: &quot;Acceso a la camara interna donde habitan los sentimientos ennoblecidos que permiten vivir desde la
unidad y la compasion.&quot; },
{ id: &quot;codex-unity&quot;, name: &quot;Codex of Unity&quot;, sub: &quot;El Viaje de la Dualidad a la Neutralidad&quot;, desc:
&quot;Recorrido por los niveles superiores de consciencia para integrar el conocimiento unificador.&quot; }
]},
ELEVACION: { sessions: [
{ id: &quot;ascension-192&quot;, name: &quot;Ascension 192&quot;, sub: &quot;Activacion de la Consciencia Humana Genuina&quot;,
desc: &quot;Meditacion de expansion espiritual enfocada en el reconocimiento del ser humano como portador de
frecuencias elevadas.&quot; },
{ id: &quot;obsidian-light&quot;, name: &quot;Obsidian Light&quot;, sub: &quot;Transmutacion y Liberacion de Densidades&quot;, desc:
&quot;Proceso de limpieza energetica profunda para favorecer la liberacion, transmutacion y restauracion del
equilibrio interno.&quot; }
]}
};
const EXP_DATA = {
UNVEILING: {
TERRESTRE: [
{ id: &quot;eternal-grace&quot;, name: &quot;Eternal Grace&quot;, sub: &quot;Maestrias de la Eternidad, el Poder y la Gracia&quot;, desc:
&quot;La primera iniciacion del camino.&quot; },
{ id: &quot;sacred-power&quot;, name: &quot;Sacred Power&quot;, sub: &quot;Maestrias del Poder, la Sabiduria y la Energia&quot;, desc:
&quot;Experiencia para fortalecer la relacion consciente con la energia personal.&quot; },
{ id: &quot;grace-in-motion&quot;, name: &quot;Grace in Motion&quot;, sub: &quot;Maestrias de la Gracia, el Poder y la Energia&quot;,
desc: &quot;La integracion armonica entre la fuerza interior y la fluidez consciente.&quot; },
{ id: &quot;golden-freedom&quot;, name: &quot;Golden Freedom&quot;, sub: &quot;Maestrias del Amor, la Luz Dorada y la Libertad&quot;,
desc: &quot;Iniciacion orientada a la expansion del corazon.&quot; }
],
DIVINO: [
{ id: &quot;nature-eternal&quot;, name: &quot;Nature Eternal&quot;, sub: &quot;Maestrias de la Naturaleza y la Eternidad&quot;, desc:
&quot;Reconexion con los principios vivos de la creacion.&quot; },
{ id: &quot;wisdom-freedom&quot;, name: &quot;Wisdom of Freedom&quot;, sub: &quot;Maestrias de la Sabiduria y la Libertad&quot;,
desc: &quot;La verdadera libertad surge del conocimiento consciente de uno mismo.&quot; },
{ id: &quot;infinite-current&quot;, name: &quot;Infinite Current&quot;, sub: &quot;Maestrias de la Eternidad y la Energia&quot;, desc:
&quot;Inmersion en los principios energeticos que sostienen la continuidad de la vida.&quot; },
{ id: &quot;grace-eternity&quot;, name: &quot;Grace of Eternity&quot;, sub: &quot;Maestrias de la Sabiduria, la Gracia y la
Eternidad&quot;, desc: &quot;Integracion de la sabiduria y la gracia.&quot; }
],
INTERDIMENSIONAL: [
{ id: &quot;heart-of-light&quot;, name: &quot;Heart of Light&quot;, sub: &quot;Maestrias de la Gracia, el Amor y la Energia&quot;, desc:

&quot;Activacion del corazon como puente entre la energia y la expansion de la consciencia.&quot; },
{ id: &quot;golden-wisdom&quot;, name: &quot;Golden Wisdom&quot;, sub: &quot;Maestrias de la Sabiduria, la Luz Dorada y la
Libertad&quot;, desc: &quot;Integracion de la vision superior y la claridad interior.&quot; },
{ id: &quot;eternal-nature&quot;, name: &quot;Eternal Nature&quot;, sub: &quot;Maestrias de la Naturaleza, la Energia y la
Eternidad&quot;, desc: &quot;Reconocimiento de la conexion profunda entre la vida y la energia universal.&quot; },
{ id: &quot;sovereign-light&quot;, name: &quot;Sovereign Light&quot;, sub: &quot;Maestrias del Poder, la Energia y la Eternidad&quot;,
desc: &quot;La iniciacion final. Sintesis de las maestrias desarrolladas.&quot; }
]
},
AWAKENING: [
{ id: &quot;apertura-dones&quot;, name: &quot;Apertura de Dones&quot;, desc: &quot;Activacion y reconocimiento de los dones
superiores del ser.&quot; },
{ id: &quot;telepatia-cosmica&quot;, name: &quot;Telepatia Cosmica&quot;, desc: &quot;Expansion de la percepcion hacia niveles
superiores de consciencia.&quot; },
{ id: &quot;creacion-abundancia&quot;, name: &quot;Creacion de Abundancia&quot;, desc: &quot;Conexion con los principios
creativos de la abundancia universal.&quot; }
],
CODEX: [
{ id: &quot;don-conocimiento&quot;, name: &quot;Don del Conocimiento&quot;, desc: &quot;Despertar de la sabiduria interior y la
percepcion profunda.&quot; },
{ id: &quot;don-sanacion&quot;, name: &quot;Don de Sanacion&quot;, desc: &quot;Activacion de las capacidades naturales de
sanacion consciente.&quot; },
{ id: &quot;clarividencia&quot;, name: &quot;Clarividencia&quot;, desc: &quot;Desarrollo de la percepcion visual expandida.&quot; },
{ id: &quot;omnibenevolencia&quot;, name: &quot;Virtud de la Omnibenevolencia&quot;, desc: &quot;Activacion del servicio
consciente desde la bondad universal.&quot; }
],
VOICE: [
{ id: &quot;clariaudiencia&quot;, name: &quot;Don de Clariaudiencia&quot;, desc: &quot;Desarrollo de la escucha interna y la
percepcion auditiva expandida.&quot; },
{ id: &quot;equipos-luz&quot;, name: &quot;Conexion con Equipos de Luz&quot;, desc: &quot;Fortalecimiento de la conexion con
niveles ampliados de guia.&quot; },
{ id: &quot;dimensiones-luz&quot;, name: &quot;Conexion con Dimensiones de Luz&quot;, desc: &quot;Acceso a niveles expandidos
de percepcion multidimensional.&quot; },
{ id: &quot;omnipresencia&quot;, name: &quot;Virtud de la Omnipresencia&quot;, desc: &quot;Reconocimiento de la presencia
consciente en todos los niveles.&quot; }
],
ALCHEMIST: [
{ id: &quot;don-transmutacion&quot;, name: &quot;Don de Transmutacion&quot;, desc: &quot;Transformacion consciente de patrones
y densidades.&quot; },
{ id: &quot;don-precognicion&quot;, name: &quot;Don de Precognicion&quot;, desc: &quot;Reconocimiento de patrones emergentes
dentro del proceso evolutivo.&quot; }
],
MERKABA: [
{ id: &quot;don-ensonacion&quot;, name: &quot;Don de la Ensonacion&quot;, desc: &quot;Activacion del estado de ensonacion
consciente.&quot; },

{ id: &quot;ensonacion-luz&quot;, name: &quot;Activacion de la Ensonacion de Luz&quot;, desc: &quot;Expansion del estado de
ensonacion hacia niveles de luz.&quot; },
{ id: &quot;vehiculo-luz&quot;, name: &quot;Activacion del Vehiculo de Luz Merkaba&quot;, desc: &quot;Activacion del cuerpo de luz
multidimensional.&quot; },
{ id: &quot;don-resurreccion&quot;, name: &quot;Don de la Resurreccion&quot;, desc: &quot;Reconocimiento del poder de renovacion
consciente.&quot; },
{ id: &quot;omnipotencia&quot;, name: &quot;Virtud de la Omnipotencia&quot;, desc: &quot;Integracion del potencial creador ilimitado
del ser.&quot; }
]
};
const formatTime = (secs) =&gt; {
if (!secs || isNaN(secs) || !isFinite(secs)) return &#39;00:00&#39;;
const m = Math.floor(secs / 60);
const s = Math.floor(secs % 60);
return `${String(m).padStart(2, &#39;0&#39;)}:${String(s).padStart(2, &#39;0&#39;)}`;
};
const getTimeOfDay = () =&gt; {
const h = new Date().getHours();
if (h &gt;= 5 &amp;&amp; h &lt; 12) return &#39;manana&#39;;
if (h &gt;= 12 &amp;&amp; h &lt; 19) return &#39;tarde&#39;;
return &#39;noche&#39;;
};
const inlineStyles = `
@keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05);
opacity: 1; } }
@keyframes aura-supernova {
0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(34,211,238,0.4), 0 0 150px
rgba(34,211,238,0.2); }
50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(34,211,238,0.9), 0 0 120px
rgba(34,211,238,0.6), 0 0 250px rgba(34,211,238,0.4); }
}
@keyframes aura-violet {
0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(168,85,247,0.35), 0 0 150px
rgba(168,85,247,0.15); }
50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(168,85,247,0.8), 0 0 120px
rgba(168,85,247,0.5), 0 0 250px rgba(168,85,247,0.3); }
}
@keyframes aura-gold {
0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(212,175,55,0.35), 0 0 150px
rgba(212,175,55,0.15); }
50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(212,175,55,0.8), 0 0 120px
rgba(212,175,55,0.5), 0 0 250px rgba(212,175,55,0.3); }
}
@keyframes aura-gold-santuario {
0%, 100% { transform: scale(1); box-shadow: 0 0 60px rgba(212,175,55,0.25), 0 0 120px

rgba(212,175,55,0.12); }
50% { transform: scale(1.02); box-shadow: 0 0 40px rgba(212,175,55,0.6), 0 0 100px
rgba(212,175,55,0.35); }
}
@keyframes micro-orbe-breathe {
0%, 100% { transform: scale(1); opacity: 0.7; box-shadow: 0 0 6px #d4af37; }
50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 12px #d4af37; }
}
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform:
translateY(0); } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform:
translateY(0); } }
@keyframes pulse-glow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
@keyframes glance-sway {
0% { transform: translateX(0); }
20% { transform: translateX(4px); }
40% { transform: translateX(-3px); }
60% { transform: translateX(2px); }
80% { transform: translateX(-1px); }
100% { transform: translateX(0); }
}
@keyframes golden-border-pulse {
0%, 100% { box-shadow: 0 0 0 1px rgba(212,175,55,0.5), 0 8px 32px rgba(212,175,55,0.15); }
50% { box-shadow: 0 0 0 2px rgba(212,175,55,0.9), 0 12px 40px rgba(212,175,55,0.35); }
}
.fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
.fade-in-up { animation: fadeInUp 0.6s ease forwards; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; font-family: sans-serif;
color: white; }
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
.home-btn.bright:hover { background: rgba(34,211,238,0.1); border-color: rgba(34,211,238,0.8); box-
shadow: 0 0 20px rgba(34,211,238,0.2); }
.home-btn.violet { border-color: rgba(168,85,247,0.3); background: rgba(168,85,247,0.03); }

.home-btn.violet:hover { background: rgba(168,85,247,0.08); border-color: rgba(168,85,247,0.6); }
.home-btn.sanctuary { border-color: rgba(212,175,55,0.4); background: rgba(212,175,55,0.04); margin-top:
16px; }
.home-btn.sanctuary:hover { background: rgba(212,175,55,0.1); border-color: rgba(212,175,55,0.7); box-
shadow: 0 0 15px rgba(212,175,55,0.15); }
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
background: rgba(34,211,238,0.08); display: flex; align-items: center; justify-content: center; cursor:
pointer;
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
.lang-btn { padding: 5px 12px; background: none; border: none; font-size: 10px; letter-spacing: 2px; cursor:
pointer; transition: all 0.2s; color: rgba(255,255,255,0.35); font-weight: 200; }
.lang-btn.active { background: rgba(34,211,238,0.15); color: #22d3ee; }
.lang-btn.active.gold-text { background: rgba(212,175,55,0.1); color: #d4af37; }
.lang-btn.active.violet-text { background: rgba(168,85,247,0.1); color: #a855f7; }
.progress-bar-container { width: 100%; height: 2px; background: rgba(255,255,255,0.1); border-radius: 2px;
margin: 8px 0 4px; cursor: pointer; }
.progress-bar-fill { height: 100%; border-radius: 2px; background: #22d3ee; transition: width 0.5s linear; }
.reminder-btn { padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(34,211,238,0.25);
background: none; color: rgba(255,255,255,0.4); font-size: 10px; letter-spacing: 2px; cursor: pointer;
transition: all 0.3s ease; text-transform: uppercase; font-weight: 200; }
.reminder-btn.active { border-color: #22d3ee; color: #22d3ee; background: rgba(34,211,238,0.08); }
.alineacion-banner { animation: fadeInDown 0.4s ease forwards; margin: 0 auto 12px; width: 85%; max-
width: 340px; padding: 10px 16px; border-radius: 20px; background: rgba(34,211,238,0.05); border: 1px
solid rgba(34,211,238,0.15); text-align: center; }
.suggestion-badge { animation: fadeInDown 0.3s ease forwards; font-size: 9px; letter-spacing: 2px; color:
rgba(34,211,238,0.75); text-transform: uppercase; font-weight: 200; }
.coming-soon-box { text-align: center; color: rgba(255,255,255,0.2); padding: 40px 20px; font-size: 11px;
letter-spacing: 3px; font-weight: 200; line-height: 2; }
.coming-soon-icon { font-size: 28px; margin-bottom: 16px; opacity: 0.4; }
.logo-filtro-dorado { filter: sepia(1) hue-rotate(-12deg) saturate(2.3) brightness(0.88) drop-shadow(0 0 20px
rgba(212,175,55,0.65)) !important; transition: all 0.8s ease-in-out; }
.logo-filtro-violeta { filter: sepia(1) hue-rotate(220deg) saturate(3) brightness(0.85) drop-shadow(0 0 20px
rgba(168,85,247,0.65)) !important; transition: all 0.8s ease-in-out; }

.logo-normal { filter: drop-shadow(0 0 15px #22d3ee); transition: all 0.8s ease-in-out; }
.sanctuary-input { width: 70%; max-width: 260px; padding: 14px 20px; border-radius: 30px; background:
rgba(255,255,255,0.03); border: 1px solid rgba(212,175,55,0.3); color: white; font-size: 12px; letter-spacing:
3px; text-align: center; text-transform: uppercase; outline: none; transition: all 0.3s ease; font-weight: 200; }
.sanctuary-input:focus { border-color: rgba(212,175,55,0.7); background: rgba(212,175,55,0.05); }
.sanctuary-input::placeholder { color: rgba(255,255,255,0.2); text-transform: none; letter-spacing: 1px; }
.sanctuary-enter-btn { width: 70%; max-width: 260px; padding: 14px; border-radius: 30px; background:
rgba(212,175,55,0.06); border: 1px solid rgba(212,175,55,0.4); color: #d4af37 !important; font-size: 11px;
letter-spacing: 4px; cursor: pointer; transition: all 0.3s ease; font-weight: 200; text-shadow: 0 0 8px
rgba(212,175,55,0.3); }
.sanctuary-enter-btn:hover { background: rgba(212,175,55,0.12); border-color: rgba(212,175,55,0.75); }
.sanctuary-tool-card { width: 85%; max-width: 340px; padding: 20px 22px; margin: 8px 0; border-radius:
24px; background: rgba(212,175,55,0.03); border: 1px solid rgba(212,175,55,0.18); transition: all 0.3s ease;
cursor: pointer; }
.sanctuary-tool-card:hover { background: rgba(212,175,55,0.06); border-color: rgba(212,175,55,0.45); }
.micro-orbe-vivo { width: 7px; height: 7px; border-radius: 50%; background: #d4af37; display: inline-block;
animation: micro-orbe-breathe 2.5s infinite ease-in-out; }
.streaming-indicator { animation: pulse-glow 2s infinite ease-in-out; font-size: 10px; letter-spacing: 2px;
color: #d4af37 !important; text-align: center; padding: 8px 0; font-weight: 200; }
.sanctuary-video { width: 100%; border-radius: 16px; margin-top: 12px; background: #000; border: 1px solid
rgba(212,175,55,0.2); }
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
.mi-al-handle { display: flex; flex-direction: column; gap: 3px; padding: 4px 6px; opacity: 0.2; transition:

opacity 0.2s; flex-shrink: 0; }
.mi-al-card:hover .mi-al-handle, .mi-al-card.is-dragging .mi-al-handle { opacity: 0.55; }
.mi-al-handle span { display: block; width: 16px; height: 1.5px; border-radius: 2px; background: #d4af37; }
`;
const App = () =&gt; {
const [lang, setLang] = useState(&#39;es&#39;);
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
const [activeTab, setActiveTab] = useState(&#39;catalogo&#39;);
const [showBanner, setShowBanner] = useState(false);
const [favorites, setFavorites] = useState(() =&gt; {
try { return JSON.parse(localStorage.getItem(&#39;genora_favorites&#39;)) || []; } catch { return []; }
});
const [reminderTime, setReminderTime] = useState(() =&gt; {
try { return localStorage.getItem(&#39;genora_reminder_time&#39;) || null; } catch { return null; }
});
const [showSanctuary, setShowSanctuary] = useState(false);
const [sanctuaryUnlocked, setSanctuaryUnlocked] = useState(false);
const [sanctuaryCode, setSanctuaryCode] = useState(&#39;&#39;);
const [sanctuaryError, setSanctuaryError] = useState(false);
const [activeSanctuaryTool, setActiveSanctuaryTool] = useState(null);
const [sanctuaryLoading, setSanctuaryLoading] = useState(false);
// ── DRAG &amp; DROP ───────────────────────────────────────────────────────────
const [favOrder, setFavOrder] = useState([]);
const [draggingId, setDraggingId] = useState(null);
const [overIdx, setOverIdx] = useState(null);
const dragItem = useRef(null);
const touchStartY = useRef(null);
const touchCurrentIdx = useRef(null);
const audioRef = useRef(null);
const sanctuaryMediaRef = useRef(null);
const timerRef = useRef(null);
const bannerTimerRef = useRef(null);

const activeTabRef = useRef(activeTab);
const favoritesRef = useRef(favorites);
const selectedTrackRef = useRef(selectedTrack);
const t = T[lang];
useEffect(() =&gt; { activeTabRef.current = activeTab; }, [activeTab]);
useEffect(() =&gt; { favoritesRef.current = favorites; }, [favorites]);
useEffect(() =&gt; { selectedTrackRef.current = selectedTrack; }, [selectedTrack]);
useEffect(() =&gt; {
setFavOrder(prev =&gt; {
const kept = prev.filter(id =&gt; favorites.includes(id));
const added = favorites.filter(id =&gt; !kept.includes(id));
return [...kept, ...added];
});
}, [favorites]);
useEffect(() =&gt; {
try { if (selectedTrack) localStorage.setItem(&#39;genora_last_track&#39;, JSON.stringify(selectedTrack)); } catch {}
}, [selectedTrack]);
useEffect(() =&gt; {
const interval = setInterval(() =&gt; {
if (audioRef.current &amp;&amp; isPlaying) {
try { localStorage.setItem(&#39;genora_last_time&#39;, String(audioRef.current.currentTime)); } catch {}
}
}, 5000);
return () =&gt; clearInterval(interval);
}, [isPlaying]);
useEffect(() =&gt; {
const timer = setTimeout(() =&gt; setShowSplash(false), 4500);
return () =&gt; clearTimeout(timer);
}, []);
useEffect(() =&gt; {
const check = () =&gt; {
if (reminderTime &amp;&amp; reminderTime === getTimeOfDay()) {
setShowBanner(true);
if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
bannerTimerRef.current = setTimeout(() =&gt; setShowBanner(false), 10000);
}
};
check();
const interval = setInterval(check, 60000);
return () =&gt; { clearInterval(interval); if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current); };
}, [reminderTime]);
useEffect(() =&gt; {
if (audioRef.current) {
if (isPlaying) {
audioRef.current.play().catch(() =&gt; console.log(&#39;Verificar audio en /public/audio/&#39;));

if (selectedTime &amp;&amp; selectedTime !== &#39;inf&#39;) {
if (timerRef.current) clearTimeout(timerRef.current);
timerRef.current = setTimeout(() =&gt; setIsPlaying(false), selectedTime * 60000);
}
} else {
audioRef.current.pause();
if (timerRef.current) clearTimeout(timerRef.current);
}
}
}, [isPlaying, selectedTrack, selectedTime]);
useEffect(() =&gt; {
try { localStorage.setItem(&#39;genora_favorites&#39;, JSON.stringify(favorites)); } catch {}
}, [favorites]);
useEffect(() =&gt; {
try {
if (reminderTime) localStorage.setItem(&#39;genora_reminder_time&#39;, reminderTime);
else localStorage.removeItem(&#39;genora_reminder_time&#39;);
} catch {}
}, [reminderTime]);
const handleTimeUpdate = () =&gt; {
if (!audioRef.current) return;
setCurrentTime(audioRef.current.currentTime || 0);
setDuration(audioRef.current.duration || 0);
};
const handleAudioEnded = () =&gt; {
try { localStorage.removeItem(&#39;genora_last_time&#39;); } catch {}
const currentFavs = favoritesRef.current;
const currentTrack = selectedTrackRef.current;
if (activeTabRef.current === &#39;favoritos&#39;) {
const favTracks = ALL_TRACKS_FLAT.filter(tr =&gt; currentFavs.includes(tr.id));
const idx = favTracks.findIndex(tr =&gt; tr.id === currentTrack?.id);
if (idx &gt;= 0 &amp;&amp; idx &lt; favTracks.length - 1) {
const next = favTracks[idx + 1];
setIsSuggestion(false); setSelectedTrack(next); setCurrentTime(0);
setTimeout(() =&gt; { if (audioRef.current) { audioRef.current.src = next.url; audioRef.current.play().catch(()
=&gt; {}); } }, 100);
} else {
const nonFav = ALL_TRACKS_FLAT.filter(tr =&gt; !currentFavs.includes(tr.id));
if (nonFav.length &gt; 0) {
const rand = nonFav[Math.floor(Math.random() * nonFav.length)];
setIsSuggestion(true); setSelectedTrack(rand); setCurrentTime(0);
setTimeout(() =&gt; { if (audioRef.current) { audioRef.current.src = rand.url;
audioRef.current.play().catch(() =&gt; {}); } }, 100);
} else { setIsPlaying(false); setIsSuggestion(false); }
}

} else { setIsPlaying(false); }
};
const toggleFavorite = (e, trackId) =&gt; {
e.stopPropagation();
setFavorites(prev =&gt; prev.includes(trackId) ? prev.filter(id =&gt; id !== trackId) : [...prev, trackId]);
if (isSuggestion &amp;&amp; selectedTrack?.id === trackId) setIsSuggestion(false);
};
const handleReminderSelect = (key) =&gt; {
const val = reminderTime === key ? null : key;
setReminderTime(val);
if (val) { setShowBanner(true); if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
bannerTimerRef.current = setTimeout(() =&gt; setShowBanner(false), 10000); }
else setShowBanner(false);
};
const handleSanctuarySubmit = () =&gt; {
if (sanctuaryCode.trim().toUpperCase() === SANCTUARY_CODE) { setSanctuaryUnlocked(true);
setSanctuaryError(false); }
else setSanctuaryError(true);
};
const isFavorite = (id) =&gt; favorites.includes(id);
const getAccentColor = () =&gt; {
if (mainMode === &#39;meditaciones&#39;) return &#39;#a855f7&#39;;
if (mainMode === &#39;experiencias&#39;) return &#39;#d4af37&#39;;
return &#39;#22d3ee&#39;;
};
const accentColor = getAccentColor();
const goldColor = &#39;#d4af37&#39;;
const violetColor = &#39;#a855f7&#39;;
const handleBack = () =&gt; {
if (mainMode === &#39;frecuencias&#39;) {
if (freqSub) setFreqSub(null);
else if (freqPillar) setFreqPillar(null);
else setMainMode(null);
} else if (mainMode === &#39;meditaciones&#39;) {
if (medPillar) setMedPillar(null);
else setMainMode(null);
} else if (mainMode === &#39;experiencias&#39;) {
if (expStage) setExpStage(null);
else if (expLevel) setExpLevel(null);
else setMainMode(null);
} else setMainMode(null);
};
const handleProgressClick = (e) =&gt; {
if (!audioRef.current || !duration) return;
const rect = e.currentTarget.getBoundingClientRect();

audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
};
const playTrack = (track, suggestion = false) =&gt; {
setSelectedTrack(track); setIsSuggestion(suggestion); setIsPlaying(true);
};
const getReminderText = () =&gt; {
if (reminderTime === &#39;manana&#39;) return t.reminder_set_morning;
if (reminderTime === &#39;tarde&#39;) return t.reminder_set_afternoon;
return t.reminder_set_night;
};
const LangSwitch = ({ isGold = false, isViolet = false }) =&gt; (
&lt;div className={`lang-switch ${isGold ? &#39;gold-border&#39; : &#39;&#39;} ${isViolet ? &#39;violet-border&#39; : &#39;&#39;}`}&gt;
&lt;button className={`lang-btn ${lang === &#39;es&#39; ? &#39;active&#39; : &#39;&#39;} ${isGold &amp;&amp; lang === &#39;es&#39; ? &#39;gold-text&#39; : &#39;&#39;}
${isViolet &amp;&amp; lang === &#39;es&#39; ? &#39;violet-text&#39; : &#39;&#39;}`} onClick={() =&gt; setLang(&#39;es&#39;)}&gt;ES&lt;/button&gt;
&lt;button className={`lang-btn ${lang === &#39;en&#39; ? &#39;active&#39; : &#39;&#39;} ${isGold &amp;&amp; lang === &#39;en&#39; ? &#39;gold-text&#39; : &#39;&#39;}
${isViolet &amp;&amp; lang === &#39;en&#39; ? &#39;violet-text&#39; : &#39;&#39;}`} onClick={() =&gt; setLang(&#39;en&#39;)}&gt;EN&lt;/button&gt;
&lt;/div&gt;
);
const BottomBar = ({ isGold = false }) =&gt; (
&lt;div className=&quot;bottom-bar&quot;&gt;
&lt;button className={`bar-tab ${activeTab === &#39;catalogo&#39; ? &#39;active&#39; : &#39;&#39;} ${isGold &amp;&amp; activeTab ===
&#39;catalogo&#39; ? &#39;gold-tab&#39; : &#39;&#39;}`} onClick={() =&gt; { setActiveTab(&#39;catalogo&#39;); setShowSanctuary(false); }}&gt;
&lt;span className=&quot;bar-tab-icon&quot;&gt;◎&lt;/span&gt;{t.catalog}
&lt;/button&gt;
&lt;button className={`bar-tab ${activeTab === &#39;favoritos&#39; ? &#39;active&#39; : &#39;&#39;}`} onClick={() =&gt; {
setActiveTab(&#39;favoritos&#39;); setShowSanctuary(false); }}&gt;
&lt;span className=&quot;bar-tab-icon&quot;&gt;{favorites.length &gt; 0 ? &#39;♥&#39; : &#39;♡&#39;}&lt;/span&gt;
{favorites.length &gt; 0 ? `${t.my_alignment} (${favorites.length})` : t.my_alignment}
&lt;/button&gt;
&lt;/div&gt;
);
const ReminderSection = () =&gt; (
&lt;div style={{ width: &#39;85%&#39;, maxWidth: &#39;340px&#39;, margin: &#39;0 auto 24px&#39;, padding: &#39;18px&#39;, borderRadius: &#39;24px&#39;,
background: &#39;rgba(255,255,255,0.02)&#39;, border: &#39;1px solid rgba(255,255,255,0.06)&#39; }}&gt;
&lt;p style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;3px&#39;, color: &#39;rgba(255,255,255,0.3)&#39;, textAlign: &#39;center&#39;,
marginBottom: &#39;14px&#39;, fontWeight: 200 }}&gt;{t.reminder_title}&lt;/p&gt;
&lt;div style={{ display: &#39;flex&#39;, gap: &#39;8px&#39;, justifyContent: &#39;center&#39;, flexWrap: &#39;wrap&#39; }}&gt;
{[{ key: &#39;manana&#39;, label: t.reminder_morning, icon: &#39;☀&#39; }, { key: &#39;tarde&#39;, label: t.reminder_afternoon, icon:
&#39;◐&#39; }, { key: &#39;noche&#39;, label: t.reminder_night, icon: &#39;☽&#39; }].map(opt =&gt; (
&lt;button key={opt.key} className={`reminder-btn ${reminderTime === opt.key ? &#39;active&#39; : &#39;&#39;}`}
onClick={() =&gt; handleReminderSelect(opt.key)}&gt;
{opt.icon} {opt.label}
&lt;/button&gt;
))}
&lt;/div&gt;

{reminderTime &amp;&amp; &lt;p style={{ fontSize: &#39;10px&#39;, color: &#39;rgba(34,211,238,0.5)&#39;, textAlign: &#39;center&#39;,
marginTop: &#39;10px&#39;, letterSpacing: &#39;1px&#39;, fontWeight: 200 }}&gt;{getReminderText()}&lt;/p&gt;}
&lt;/div&gt;
);
const TrackCard = ({ track, onSelect, isSugg = false }) =&gt; (
&lt;div className={`track-card ${isSugg ? &#39;suggestion&#39; : &#39;&#39;}`} onClick={() =&gt; onSelect(track)} style={{
borderLeft: `4px solid ${accentColor}` }}&gt;
&lt;div style={{ textAlign: &#39;left&#39;, width: &#39;75%&#39; }}&gt;
{isSugg &amp;&amp; &lt;div className=&quot;suggestion-badge&quot;&gt;{t.suggestion_label}&lt;/div&gt;}
&lt;div style={{ fontSize: &#39;14px&#39;, color: &#39;white&#39;, fontWeight: 300 }}&gt;{track.name}&lt;/div&gt;
&lt;div style={{ fontSize: &#39;10px&#39;, color: &#39;#fdfcf5&#39;, opacity: 0.6, marginTop: &#39;4px&#39;, fontWeight: 200,
letterSpacing: &#39;1px&#39; }}&gt;{t.tracks[track.id] || &#39;&#39;}&lt;/div&gt;
&lt;/div&gt;
&lt;div style={{ display: &#39;flex&#39;, alignItems: &#39;center&#39;, gap: &#39;4px&#39; }}&gt;
&lt;button className=&quot;heart-btn&quot; onClick={(e) =&gt; toggleFavorite(e, track.id)} style={{ color:
isFavorite(track.id) ? &#39;#ff6b9d&#39; : &#39;rgba(255,255,255,0.25)&#39; }}&gt;
{isFavorite(track.id) ? &#39;♥&#39; : &#39;♡&#39;}
&lt;/button&gt;
&lt;div style={{ textAlign: &#39;right&#39; }}&gt;
&lt;div style={{ fontSize: &#39;9px&#39;, color: accentColor, opacity: 0.6 }}&gt;{track.hz}&lt;/div&gt;
&lt;span style={{ color: accentColor, fontSize: &#39;18px&#39; }}&gt;▶&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
const SessionCard = ({ session, color = &#39;white&#39;, accent = &#39;#22d3ee&#39; }) =&gt; (
&lt;div className={`session-card ${color === &#39;violet&#39; ? &#39;violet&#39; : color === &#39;gold&#39; ? &#39;gold&#39; : &#39;&#39;}`} style={{
borderLeft: `3px solid ${accent}33` }}&gt;
&lt;div style={{ fontSize: &#39;13px&#39;, color: &#39;white&#39;, fontWeight: 300, marginBottom: &#39;4px&#39;
}}&gt;{session.name}&lt;/div&gt;
{session.sub &amp;&amp; &lt;div style={{ fontSize: &#39;10px&#39;, color: color === &#39;gold&#39; ? &#39;#d4af37&#39; : `${accent}99`,
letterSpacing: &#39;1px&#39;, fontWeight: 200, marginBottom: &#39;4px&#39;, textShadow: color === &#39;gold&#39; ? &#39;0 0 6px
rgba(212,175,55,0.3)&#39; : &#39;none&#39; }}&gt;{session.sub}&lt;/div&gt;}
&lt;div style={{ fontSize: &#39;10px&#39;, color: &#39;rgba(212,175,55,0.75)&#39;, fontWeight: 200, lineHeight: 1.6
}}&gt;{session.desc}&lt;/div&gt;
&lt;div style={{ marginTop: &#39;10px&#39;, fontSize: &#39;9px&#39;, color: color === &#39;gold&#39; ? &#39;#d4af37&#39; : `${accent}77`,
letterSpacing: &#39;2px&#39;, fontWeight: 200, opacity: 0.7 }}&gt;
{lang === &#39;es&#39; ? &#39;PROXIMAMENTE&#39; : &#39;COMING SOON&#39;}
&lt;/div&gt;
&lt;/div&gt;
);
const ComingSoon = ({ accent = &#39;#22d3ee&#39; }) =&gt; (
&lt;div className=&quot;coming-soon-box&quot;&gt;
&lt;div className=&quot;coming-soon-icon&quot; style={{ color: accent }}&gt;◈&lt;/div&gt;

{t.coming_soon}
&lt;/div&gt;
);
const PageHeader = ({ isGold = false, isViolet = false }) =&gt; (
&lt;div style={{ display: &#39;flex&#39;, justifyContent: &#39;space-between&#39;, alignItems: &#39;center&#39;, marginBottom: &#39;16px&#39;,
paddingTop: &#39;10px&#39; }}&gt;
{mainMode ? (
&lt;div onClick={handleBack} className=&quot;back-button-genora&quot; style={{ borderColor: `${accentColor}88`
}}&gt;
&lt;span style={{ color: accentColor, fontSize: &#39;20px&#39; }}&gt;&amp;#8249;&lt;/span&gt;
&lt;/div&gt;
) : (
&lt;img src=&quot;/imagenes/genora-logo-white.png&quot; style={{ height: &#39;55px&#39;, borderRadius: &#39;50%&#39;, objectFit:
&#39;contain&#39; }} alt=&quot;Logo&quot; /&gt;
)}
&lt;LangSwitch isGold={isGold} isViolet={isViolet} /&gt;
&lt;/div&gt;
);
const ADNOrb = ({ auraClass = &#39;aura-supernova&#39;, filterClass = &#39;logo-normal&#39;, size = &#39;110px&#39; }) =&gt; (
&lt;div style={{ width: size, height: size, borderRadius: &#39;50%&#39;, display: &#39;flex&#39;, alignItems: &#39;center&#39;,
justifyContent: &#39;center&#39;, marginBottom: &#39;20px&#39;, transition: &#39;all 0.5s ease&#39;, animation: `${auraClass} 8s infinite
ease-in-out` }}&gt;
&lt;img src=&quot;/imagenes/adn-icon.png&quot; className={filterClass} style={{ width: &#39;100%&#39;, borderRadius: &#39;50%&#39;
}} alt=&quot;ADN&quot; /&gt;
&lt;/div&gt;
);
// ── SPLASH ────────────────────────────────────────────────────────────────
if (showSplash) {
return (
&lt;div className=&quot;fade-in-smooth&quot; style={{ backgroundColor: &#39;#020617&#39;, minHeight: &#39;100vh&#39;, display:
&#39;flex&#39;, flexDirection: &#39;column&#39;, alignItems: &#39;center&#39;, justifyContent: &#39;center&#39;, textAlign: &#39;center&#39; }}&gt;
&lt;style&gt;{inlineStyles}&lt;/style&gt;
&lt;img src=&quot;/imagenes/genora-logo-white.png&quot; style={{ width: &#39;180px&#39;, borderRadius: &#39;50%&#39;, animation:
&#39;logo-breathe 3s infinite ease-in-out&#39;, objectFit: &#39;contain&#39; }} alt=&quot;Logo&quot; /&gt;
&lt;h1 style={{ fontSize: &#39;18px&#39;, fontWeight: 200, letterSpacing: &#39;6px&#39;, color: &#39;#22d3ee&#39;, textTransform:
&#39;uppercase&#39;, marginTop: &#39;35px&#39;, marginBottom: &#39;8px&#39; }}&gt;{t.splash_title}&lt;/h1&gt;
&lt;p style={{ fontSize: &#39;10px&#39;, fontWeight: 200, letterSpacing: &#39;3px&#39;, color: &#39;#fdfcf5&#39;, opacity: 0.7
}}&gt;{t.splash_sub}&lt;/p&gt;
&lt;/div&gt;
);
}
// ── TEMPLO ────────────────────────────────────────────────────────────────
if (selectedTrack) {
const progress = duration &gt; 0 ? (currentTime / duration) * 100 : 0;
const temploAccent = &quot;#22d3ee&quot;;

return (
&lt;div key={selectedTrack.id} className=&quot;fade-in-smooth&quot; style={{ backgroundColor: &#39;#020617&#39;,
minHeight: &#39;100vh&#39;, display: &#39;flex&#39;, flexDirection: &#39;column&#39;, alignItems: &#39;center&#39;, justifyContent: &#39;center&#39;,
textAlign: &#39;center&#39;, position: &#39;relative&#39;, padding: &#39;20px&#39; }}&gt;
&lt;style&gt;{inlineStyles}&lt;/style&gt;
&lt;audio ref={audioRef} src={selectedTrack.url}
loop={selectedTime === &#39;inf&#39; &amp;&amp; activeTabRef.current !== &#39;favoritos&#39;}
onTimeUpdate={handleTimeUpdate}
onLoadedMetadata={(e) =&gt; { handleTimeUpdate(); if (currentTime &gt; 0 &amp;&amp; e.target.duration &gt;
currentTime) e.target.currentTime = currentTime; }}
onEnded={handleAudioEnded} /&gt;
&lt;div style={{ position: &#39;absolute&#39;, top: &#39;35px&#39;, left: &#39;30px&#39;, right: &#39;30px&#39;, display: &#39;flex&#39;, alignItems: &#39;center&#39;,
justifyContent: &#39;space-between&#39; }}&gt;
&lt;button onClick={() =&gt; { setIsPlaying(false); setSelectedTrack(null); setCurrentTime(0);
setDuration(0); }} style={{ background: &#39;none&#39;, border: &#39;none&#39;, color: temploAccent, fontSize: &#39;40px&#39;, cursor:
&#39;pointer&#39;, lineHeight: 1, padding: 0 }}&gt;&amp;#8249;&lt;/button&gt;
{isSuggestion &amp;&amp; &lt;div className=&quot;suggestion-badge&quot;&gt;✦ {t.suggestion_label}&lt;/div&gt;}
&lt;button className=&quot;heart-btn&quot; onClick={(e) =&gt; toggleFavorite(e, selectedTrack.id)} style={{ fontSize:
&#39;24px&#39;, color: isFavorite(selectedTrack.id) ? &#39;#ff6b9d&#39; : &#39;rgba(255,255,255,0.4)&#39;, padding: 0 }}&gt;
{isFavorite(selectedTrack.id) ? &#39;♥&#39; : &#39;♡&#39;}
&lt;/button&gt;
&lt;/div&gt;
&lt;div style={{ width: &#39;220px&#39;, height: &#39;220px&#39;, marginBottom: &#39;30px&#39;, display: &#39;flex&#39;, alignItems: &#39;center&#39;,
justifyContent: &#39;center&#39;, animation: isPlaying ? &#39;logo-breathe 4s infinite&#39; : &#39;none&#39; }}&gt;
&lt;img src=&quot;/imagenes/adn-icon.png&quot; style={{ width: &#39;100%&#39;, filter: `drop-shadow(0 0 15px
${accentColor})` }} alt=&quot;ADN&quot; /&gt;
&lt;/div&gt;
&lt;h2 style={{ fontSize: &#39;20px&#39;, letterSpacing: &#39;4px&#39;, textTransform: &#39;uppercase&#39;, fontWeight: 200
}}&gt;{selectedTrack.name}&lt;/h2&gt;
&lt;p style={{ color: accentColor, fontSize: &#39;11px&#39;, letterSpacing: &#39;3px&#39;, fontWeight: 300, marginBottom:
&#39;8px&#39; }}&gt;{selectedTrack.hz}&lt;/p&gt;
&lt;p style={{ fontSize: &#39;12px&#39;, opacity: 0.6, maxWidth: &#39;300px&#39;, lineHeight: &#39;1.6&#39;, marginBottom: &#39;20px&#39;,
fontWeight: 200 }}&gt;{t.tracks[selectedTrack.id] || &#39;&#39;}&lt;/p&gt;
&lt;div style={{ width: &#39;80%&#39;, maxWidth: &#39;300px&#39;, marginBottom: &#39;20px&#39; }}&gt;
&lt;div className=&quot;progress-bar-container&quot; onClick={handleProgressClick}&gt;
&lt;div className=&quot;progress-bar-fill&quot; style={{ width: `${progress}%` }} /&gt;
&lt;/div&gt;
&lt;div style={{ display: &#39;flex&#39;, justifyContent: &#39;space-between&#39; }}&gt;
&lt;span style={{ fontSize: &#39;10px&#39;, color: &#39;rgba(255,255,255,0.3)&#39;, letterSpacing: &#39;1px&#39;
}}&gt;{formatTime(currentTime)}&lt;/span&gt;
&lt;span style={{ fontSize: &#39;10px&#39;, color: &#39;rgba(255,255,255,0.3)&#39;, letterSpacing: &#39;1px&#39;
}}&gt;{formatTime(duration)}&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;

&lt;div style={{ display: &#39;flex&#39;, gap: &#39;12px&#39;, marginBottom: &#39;40px&#39; }}&gt;
{[15, 30, 60, &#39;inf&#39;].map((time) =&gt; (
&lt;button key={time} onClick={() =&gt; setSelectedTime(time)} className=&quot;time-button&quot; style={{ border:
`1px solid ${selectedTime === time ? accentColor : &#39;rgba(255,255,255,0.1)&#39;}`, background: selectedTime
=== time ? `${accentColor}22` : &#39;none&#39; }}&gt;
{time === &#39;inf&#39; ? &#39;∞&#39; : `${time}&#39;`}
&lt;/button&gt;
))}
&lt;/div&gt;
&lt;button onClick={() =&gt; setIsPlaying(!isPlaying)} style={{ width: &#39;85px&#39;, height: &#39;85px&#39;, borderRadius:
&#39;50%&#39;, border: `1px solid ${accentColor}`, background: &#39;none&#39;, display: &#39;flex&#39;, alignItems: &#39;center&#39;,
justifyContent: &#39;center&#39;, cursor: &#39;pointer&#39; }}&gt;
&lt;span style={{ fontSize: &#39;30px&#39;, color: &#39;white&#39; }}&gt;{isPlaying ? &#39;||&#39; : &#39;▶&#39;}&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;
);
}
// ── SANTUARIO ─────────────────────────────────────────────────────────────
if (showSanctuary) {
if (sanctuaryUnlocked &amp;&amp; activeSanctuaryTool) {
const tool = activeSanctuaryTool;
return (
&lt;div className=&quot;fade-in-smooth&quot; style={{ backgroundColor: &#39;#020617&#39;, minHeight: &#39;100vh&#39;, color:
&#39;white&#39;, padding: &#39;20px&#39;, paddingBottom: &#39;80px&#39; }}&gt;
&lt;style&gt;{inlineStyles}&lt;/style&gt;
&lt;div style={{ display: &#39;flex&#39;, justifyContent: &#39;space-between&#39;, alignItems: &#39;center&#39;, marginBottom: &#39;30px&#39;,
paddingTop: &#39;10px&#39; }}&gt;
&lt;button onClick={() =&gt; setActiveSanctuaryTool(null)} style={{ background: &#39;none&#39;, border: &#39;none&#39;,
color: goldColor, fontSize: &#39;40px&#39;, cursor: &#39;pointer&#39;, lineHeight: 1, padding: 0 }}&gt;&amp;#8249;&lt;/button&gt;
&lt;LangSwitch isGold /&gt;
&lt;/div&gt;
&lt;div style={{ display: &#39;flex&#39;, flexDirection: &#39;column&#39;, alignItems: &#39;center&#39;, textAlign: &#39;center&#39;,
paddingBottom: &#39;40px&#39; }}&gt;
&lt;ADNOrb auraClass=&quot;aura-gold-santuario&quot; filterClass=&quot;logo-filtro-dorado&quot; size=&quot;120px&quot; /&gt;
&lt;h2 className=&quot;gold-title&quot; style={{ fontSize: &#39;14px&#39;, letterSpacing: &#39;4px&#39;, textTransform: &#39;uppercase&#39;,
fontWeight: 200, marginBottom: &#39;8px&#39; }}&gt;{tool.name}&lt;/h2&gt;
&lt;p className=&quot;gold-sub&quot; style={{ fontSize: &#39;11px&#39;, letterSpacing: &#39;1px&#39;, fontWeight: 200,
marginBottom: &#39;6px&#39;, maxWidth: &#39;280px&#39;, lineHeight: 1.7 }}&gt;{tool.description}&lt;/p&gt;
&lt;p className=&quot;gold-micro&quot; style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;2px&#39;, fontWeight: 200,
marginBottom: &#39;24px&#39; }}&gt;{tool.duration}&lt;/p&gt;
{sanctuaryLoading &amp;&amp; &lt;div className=&quot;streaming-indicator&quot;&gt;◈ {t.sanctuary_loading}&lt;/div&gt;}
{tool.type === &#39;audio&#39; &amp;&amp; (
&lt;audio ref={sanctuaryMediaRef} src={tool.url} controls preload=&quot;metadata&quot;
onCanPlay={() =&gt; setSanctuaryLoading(false)} onLoadStart={() =&gt; setSanctuaryLoading(true)}

style={{ width: &#39;85%&#39;, maxWidth: &#39;340px&#39;, borderRadius: &#39;30px&#39;, accentColor: goldColor }} /&gt;
)}
{tool.type === &#39;video&#39; &amp;&amp; (
&lt;div style={{ width: &#39;90%&#39;, maxWidth: &#39;360px&#39;, borderRadius: &#39;20px&#39;, overflow: &#39;hidden&#39;, border: `1px
solid ${goldColor}33` }}&gt;
&lt;video ref={sanctuaryMediaRef} src={tool.url} poster={tool.thumbnail || &#39;&#39;} controls
preload=&quot;metadata&quot;
playsInline onCanPlay={() =&gt; setSanctuaryLoading(false)} onLoadStart={() =&gt;
setSanctuaryLoading(true)}
className=&quot;sanctuary-video&quot; style={{ display: &#39;block&#39; }} /&gt;
&lt;/div&gt;
)}
&lt;/div&gt;
&lt;BottomBar isGold /&gt;
&lt;/div&gt;
);
}
if (sanctuaryUnlocked) {
return (
&lt;div className=&quot;fade-in-smooth&quot; style={{ backgroundColor: &#39;#020617&#39;, minHeight: &#39;100vh&#39;, color:
&#39;white&#39;, padding: &#39;20px&#39;, paddingBottom: &#39;80px&#39; }}&gt;
&lt;style&gt;{inlineStyles}&lt;/style&gt;
&lt;div style={{ display: &#39;flex&#39;, justifyContent: &#39;space-between&#39;, alignItems: &#39;center&#39;, marginBottom: &#39;30px&#39;,
paddingTop: &#39;10px&#39; }}&gt;
&lt;button onClick={() =&gt; { setShowSanctuary(false); setSanctuaryUnlocked(false);
setSanctuaryCode(&#39;&#39;); }} style={{ background: &#39;none&#39;, border: &#39;none&#39;, color: goldColor, fontSize: &#39;40px&#39;, cursor:
&#39;pointer&#39;, lineHeight: 1, padding: 0 }}&gt;&amp;#8249;&lt;/button&gt;
&lt;LangSwitch isGold /&gt;
&lt;/div&gt;
&lt;div style={{ textAlign: &#39;center&#39;, marginBottom: &#39;28px&#39; }}&gt;
&lt;div style={{ display: &#39;flex&#39;, justifyContent: &#39;center&#39;, marginBottom: &#39;12px&#39; }}&gt;
&lt;div className=&quot;micro-orbe-vivo&quot; style={{ width: &#39;10px&#39;, height: &#39;10px&#39; }}&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;h2 className=&quot;gold-title&quot; style={{ fontSize: &#39;13px&#39;, letterSpacing: &#39;5px&#39;, fontWeight: 200,
textTransform: &#39;uppercase&#39;, marginBottom: &#39;6px&#39; }}&gt;{t.sanctuary_title}&lt;/h2&gt;
&lt;p className=&quot;gold-sub&quot; style={{ fontSize: &#39;11px&#39;, letterSpacing: &#39;1px&#39;, fontWeight: 200, maxWidth:
&#39;260px&#39;, margin: &#39;0 auto&#39;, lineHeight: 1.7 }}&gt;{t.sanctuary_library_sub}&lt;/p&gt;
&lt;/div&gt;
&lt;div style={{ display: &#39;flex&#39;, flexDirection: &#39;column&#39;, alignItems: &#39;center&#39; }}&gt;
{SANCTUARY_TOOLS.map((tool) =&gt; (
&lt;div key={tool.id} className=&quot;sanctuary-tool-card&quot; onClick={() =&gt; { setActiveSanctuaryTool(tool);
setSanctuaryLoading(true); setTimeout(() =&gt; setSanctuaryLoading(false), 3000); }}&gt;
&lt;div style={{ display: &#39;flex&#39;, justifyContent: &#39;space-between&#39;, alignItems: &#39;flex-start&#39; }}&gt;
&lt;div style={{ flex: 1, textAlign: &#39;left&#39; }}&gt;

&lt;div style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;2px&#39;, color: &#39;#d4af37&#39;, fontWeight: 200,
marginBottom: &#39;6px&#39;, textTransform: &#39;uppercase&#39;, opacity: 0.7 }}&gt;{tool.type === &#39;audio&#39; ? &#39;◎ AUDIO&#39; : &#39;◈
VIDEO&#39;}&lt;/div&gt;
&lt;div style={{ fontSize: &#39;14px&#39;, fontWeight: 300, color: &#39;#d4af37&#39;, marginBottom: &#39;6px&#39;, lineHeight:
1.4 }}&gt;{tool.name}&lt;/div&gt;
&lt;div style={{ fontSize: &#39;10px&#39;, color: &#39;rgba(212,175,55,0.75)&#39;, fontWeight: 200, lineHeight: 1.6
}}&gt;{tool.description}&lt;/div&gt;
&lt;/div&gt;
&lt;div style={{ marginLeft: &#39;16px&#39;, display: &#39;flex&#39;, flexDirection: &#39;column&#39;, alignItems: &#39;flex-end&#39;, gap:
&#39;6px&#39; }}&gt;
&lt;span style={{ color: &#39;#d4af37&#39;, fontSize: &#39;20px&#39;, textShadow: &#39;0 0 8px rgba(212,175,55,0.4)&#39;
}}&gt;▶&lt;/span&gt;
&lt;span style={{ fontSize: &#39;9px&#39;, color: &#39;#d4af37&#39;, letterSpacing: &#39;1px&#39;, fontWeight: 200, opacity: 0.6
}}&gt;{tool.duration}&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
))}
&lt;/div&gt;
&lt;BottomBar isGold /&gt;
&lt;/div&gt;
);
}
return (
&lt;div className=&quot;fade-in-smooth&quot; style={{ backgroundColor: &#39;#020617&#39;, minHeight: &#39;100vh&#39;, display:
&#39;flex&#39;, flexDirection: &#39;column&#39;, alignItems: &#39;center&#39;, justifyContent: &#39;center&#39;, textAlign: &#39;center&#39;, padding: &#39;30px&#39;,
position: &#39;relative&#39; }}&gt;
&lt;style&gt;{inlineStyles}&lt;/style&gt;
&lt;button onClick={() =&gt; { setShowSanctuary(false); setSanctuaryCode(&#39;&#39;); setSanctuaryError(false); }}
style={{ position: &#39;absolute&#39;, top: &#39;35px&#39;, left: &#39;30px&#39;, background: &#39;none&#39;, border: &#39;none&#39;, color: goldColor,
fontSize: &#39;40px&#39;, cursor: &#39;pointer&#39;, lineHeight: 1, padding: 0 }}&gt;&amp;#8249;&lt;/button&gt;
&lt;ADNOrb auraClass=&quot;aura-gold-santuario&quot; filterClass=&quot;logo-filtro-dorado&quot; size=&quot;160px&quot; /&gt;
&lt;h2 className=&quot;gold-title&quot; style={{ fontSize: &#39;13px&#39;, letterSpacing: &#39;5px&#39;, fontWeight: 200,
textTransform: &#39;uppercase&#39;, marginBottom: &#39;10px&#39; }}&gt;{t.sanctuary_title}&lt;/h2&gt;
&lt;p className=&quot;gold-sub&quot; style={{ fontSize: &#39;11px&#39;, maxWidth: &#39;260px&#39;, lineHeight: 1.8, fontWeight: 200,
marginBottom: &#39;6px&#39; }}&gt;{t.sanctuary_micro}&lt;/p&gt;
&lt;p className=&quot;gold-micro&quot; style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;2px&#39;, fontWeight: 200,
marginBottom: &#39;36px&#39; }}&gt;{t.sanctuary_access}&lt;/p&gt;
&lt;div style={{ display: &#39;flex&#39;, flexDirection: &#39;column&#39;, alignItems: &#39;center&#39;, gap: &#39;14px&#39;, width: &#39;100%&#39; }}&gt;
&lt;input className=&quot;sanctuary-input&quot; type=&quot;text&quot; placeholder={t.sanctuary_placeholder}
value={sanctuaryCode}
onChange={(e) =&gt; { setSanctuaryCode(e.target.value); setSanctuaryError(false); }}
onKeyDown={(e) =&gt; e.key === &#39;Enter&#39; &amp;&amp; handleSanctuarySubmit()} /&gt;
{sanctuaryError &amp;&amp; &lt;p className=&quot;fade-in-up&quot; style={{ fontSize: &#39;10px&#39;, color: &#39;rgba(239,68,68,0.7)&#39;,

letterSpacing: &#39;1px&#39;, fontWeight: 200, maxWidth: &#39;260px&#39;, lineHeight: 1.6 }}&gt;{t.sanctuary_error}&lt;/p&gt;}
&lt;button className=&quot;sanctuary-enter-btn&quot;
onClick={handleSanctuarySubmit}&gt;{t.sanctuary_enter}&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
// ── MI ALINEACION ─────────────────────────────────────────────────────────
if (activeTab === &#39;favoritos&#39;) {
const orderedTracks = favOrder
.map(id =&gt; ALL_TRACKS_FLAT.find(tr =&gt; tr.id === id))
.filter(Boolean);
const handleTouchStart = (e, id, idx) =&gt; {
dragItem.current = idx;
touchCurrentIdx.current = idx;
touchStartY.current = e.touches[0].clientY;
setDraggingId(id);
};
const handleTouchMove = (e) =&gt; {
if (dragItem.current === null) return;
e.preventDefault();
const touchY = e.touches[0].clientY;
const container = e.currentTarget.closest(&#39;[data-list]&#39;);
if (!container) return;
const cards = Array.from(container.querySelectorAll(&#39;[data-card]&#39;));
let newIdx = dragItem.current;
cards.forEach((card, i) =&gt; {
const rect = card.getBoundingClientRect();
const midY = rect.top + rect.height / 2;
if (touchY &gt; midY &amp;&amp; i &gt; dragItem.current) newIdx = i;
if (touchY &lt; midY &amp;&amp; i &lt; dragItem.current) newIdx = i;
});
if (newIdx !== touchCurrentIdx.current) {
setFavOrder(prev =&gt; {
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
const handleTouchEnd = () =&gt; {

dragItem.current = null;
touchCurrentIdx.current = null;
touchStartY.current = null;
setDraggingId(null);
setOverIdx(null);
};
return (
&lt;div className=&quot;fade-in-smooth&quot; style={{ backgroundColor: &#39;#020617&#39;, minHeight: &#39;100vh&#39;, color: &#39;white&#39;,
padding: &#39;20px&#39;, paddingBottom: &#39;80px&#39; }}&gt;
&lt;style&gt;{inlineStyles}&lt;/style&gt;
&lt;div style={{ display: &#39;flex&#39;, justifyContent: &#39;space-between&#39;, alignItems: &#39;center&#39;, marginBottom: &#39;20px&#39;,
paddingTop: &#39;10px&#39; }}&gt;
&lt;img src=&quot;/imagenes/genora-logo-white.png&quot; style={{ height: &#39;50px&#39;, borderRadius: &#39;50%&#39;, objectFit:
&#39;contain&#39; }} alt=&quot;Logo&quot; /&gt;
&lt;LangSwitch /&gt;
&lt;/div&gt;
{showBanner &amp;&amp; (
&lt;div className=&quot;alineacion-banner&quot;&gt;
&lt;p style={{ fontSize: &#39;11px&#39;, letterSpacing: &#39;2px&#39;, color: &#39;#22d3ee&#39;, margin: 0, fontWeight: 200
}}&gt;{t.banner}&lt;/p&gt;
&lt;/div&gt;
)}
&lt;p style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;4px&#39;, color: &#39;rgba(255,255,255,0.35)&#39;, textAlign: &#39;center&#39;,
marginBottom: &#39;20px&#39;, fontWeight: 200 }}&gt;
{t.my_field}
&lt;/p&gt;
&lt;ReminderSection /&gt;
{orderedTracks.length === 0 ? (
&lt;div style={{ display: &#39;flex&#39;, flexDirection: &#39;column&#39;, alignItems: &#39;center&#39;, padding: &#39;40px 20px&#39;, textAlign:
&#39;center&#39;, color: &#39;rgba(255,255,255,0.25)&#39; }}&gt;
&lt;div style={{ fontSize: &#39;40px&#39;, marginBottom: &#39;16px&#39; }}&gt;♡&lt;/div&gt;
&lt;p style={{ fontSize: &#39;12px&#39;, letterSpacing: &#39;2px&#39;, lineHeight: &#39;1.8&#39;, fontWeight: 200 }}&gt;
{t.empty_field}&lt;br /&gt;{t.empty_sub}
&lt;/p&gt;
&lt;/div&gt;
) : (
&lt;div data-list style={{ display: &#39;flex&#39;, flexDirection: &#39;column&#39;, alignItems: &#39;center&#39; }}&gt;
{orderedTracks.map((track, idx) =&gt; {
const isDragging = draggingId === track.id;
const isOver = overIdx === idx &amp;&amp; !isDragging;
return (
&lt;div
key={track.id}
className={[&#39;mi-al-card&#39;, isDragging ? &#39;is-dragging&#39; : &#39;&#39;, isOver ? &#39;is-over&#39; : &#39;&#39;].filter(Boolean).join(&#39;

&#39;)}
style={{
borderLeft: isDragging ? &#39;4px solid rgba(212,175,55,0.7)&#39; : `4px solid ${accentColor}`,
animationName: &#39;glance-sway&#39;,
animationDuration: &#39;0.72s&#39;,
animationTimingFunction: &#39;ease-in-out&#39;,
animationFillMode: &#39;both&#39;,
animationDelay: `${idx * 65}ms`,
}}
data-card
onTouchStart={(e) =&gt; handleTouchStart(e, track.id, idx)}
onTouchMove={handleTouchMove}
onTouchEnd={handleTouchEnd}
style={{
borderLeft: isDragging ? &#39;4px solid rgba(212,175,55,0.7)&#39; : `4px solid ${accentColor}`,
animationName: &#39;glance-sway&#39;,
animationDuration: &#39;0.72s&#39;,
animationTimingFunction: &#39;ease-in-out&#39;,
animationFillMode: &#39;both&#39;,
animationDelay: `${idx * 65}ms`,
touchAction: &#39;none&#39;,
}}
&gt;
&lt;div className=&quot;mi-al-handle&quot; aria-hidden=&quot;true&quot;&gt;
&lt;span /&gt;&lt;span /&gt;&lt;span /&gt;
&lt;/div&gt;
&lt;div style={{ textAlign: &#39;left&#39;, flex: 1, margin: &#39;0 10px&#39; }}&gt;
&lt;div style={{ fontSize: &#39;14px&#39;, color: &#39;white&#39;, fontWeight: 300 }}&gt;{track.name}&lt;/div&gt;
&lt;div style={{ fontSize: &#39;10px&#39;, color: &#39;#fdfcf5&#39;, opacity: 0.6, marginTop: &#39;4px&#39;, fontWeight: 200,
letterSpacing: &#39;1px&#39; }}&gt;
{t.tracks[track.id] || &#39;&#39;}
&lt;/div&gt;
&lt;/div&gt;
&lt;div style={{ display: &#39;flex&#39;, alignItems: &#39;center&#39;, gap: &#39;4px&#39; }}&gt;
&lt;button
className=&quot;heart-btn&quot;
onClick={(e) =&gt; toggleFavorite(e, track.id)}
style={{ color: isFavorite(track.id) ? &#39;#ff6b9d&#39; : &#39;rgba(255,255,255,0.25)&#39; }}
&gt;
{isFavorite(track.id) ? &#39;♥&#39; : &#39;♡&#39;}
&lt;/button&gt;
&lt;div style={{ textAlign: &#39;right&#39; }}&gt;
&lt;div style={{ fontSize: &#39;9px&#39;, color: accentColor, opacity: 0.6 }}&gt;{track.hz}&lt;/div&gt;
&lt;span style={{ color: accentColor, fontSize: &#39;18px&#39;, cursor: &#39;pointer&#39; }} onClick={() =&gt;

playTrack(track, false)}&gt;▶&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
})}
&lt;/div&gt;
)}
&lt;BottomBar /&gt;
&lt;/div&gt;
);
}
// ── CATALOGO PRINCIPAL ────────────────────────────────────────────────────
return (
&lt;div className=&quot;fade-in-smooth&quot; style={{ backgroundColor: &#39;#020617&#39;, minHeight: &#39;100vh&#39;, color: &#39;white&#39;,
padding: &#39;20px&#39;, paddingBottom: &#39;80px&#39; }}&gt;
&lt;style&gt;{inlineStyles}&lt;/style&gt;
{showBanner &amp;&amp; &lt;div className=&quot;alineacion-banner&quot; style={{ marginTop: &#39;10px&#39; }}&gt;&lt;p style={{ fontSize:
&#39;11px&#39;, letterSpacing: &#39;2px&#39;, color: &#39;#22d3ee&#39;, margin: 0, fontWeight: 200 }}&gt;{t.banner}&lt;/p&gt;&lt;/div&gt;}
&lt;PageHeader isGold={mainMode === &#39;experiencias&#39;} isViolet={mainMode === &#39;meditaciones&#39;} /&gt;
&lt;div style={{ display: &#39;flex&#39;, flexDirection: &#39;column&#39;, alignItems: &#39;center&#39; }}&gt;
&lt;ADNOrb
auraClass={mainMode === &#39;meditaciones&#39; ? &#39;aura-violet&#39; : mainMode === &#39;experiencias&#39; ? &#39;aura-gold&#39; :
&#39;aura-supernova&#39;}
filterClass={mainMode === &#39;experiencias&#39; ? &#39;logo-filtro-dorado&#39; : mainMode === &#39;meditaciones&#39; ? &#39;logo-
filtro-violeta&#39; : &#39;logo-normal&#39;}
size={!mainMode ? &#39;130px&#39; : &#39;90px&#39;}
/&gt;
{!mainMode &amp;&amp; (
&lt;div className=&quot;category-stack&quot;&gt;
&lt;h2 style={{ fontSize: &#39;9px&#39;, letterSpacing: &#39;5px&#39;, color: &#39;#22d3ee&#39;, marginBottom: &#39;10px&#39;, fontWeight:
200 }}&gt;{t.choose_path}&lt;/h2&gt;
&lt;button className=&quot;home-btn&quot; onClick={() =&gt;
setMainMode(&#39;frecuencias&#39;)}&gt;{t.home_buttons.frequencies}&lt;/button&gt;
&lt;button className=&quot;home-btn violet&quot; onClick={() =&gt;
setMainMode(&#39;meditaciones&#39;)}&gt;{t.home_buttons.meditations}&lt;/button&gt;
&lt;button className=&quot;home-btn bright&quot; onClick={() =&gt; setMainMode(&#39;experiencias&#39;)}&gt;✦
{t.home_buttons.experiences}&lt;/button&gt;
&lt;button className=&quot;home-btn sanctuary&quot; onClick={() =&gt; { setShowSanctuary(true);
setActiveTab(&#39;catalogo&#39;); }}&gt;{t.home_buttons.sanctuary}&lt;/button&gt;
&lt;/div&gt;
)}
{mainMode === &#39;frecuencias&#39; &amp;&amp; !freqPillar &amp;&amp; (
&lt;div className=&quot;category-stack&quot;&gt;
&lt;p style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;5px&#39;, color: &#39;#22d3ee&#39;, textAlign: &#39;center&#39;, marginBottom:

&#39;16px&#39;, fontWeight: 200 }}&gt;{t.home_buttons.frequencies}&lt;/p&gt;
{Object.keys(t.freq_pillars).map(key =&gt; (
&lt;div key={key} className=&quot;pillar-card&quot; onClick={() =&gt; setFreqPillar(key)}&gt;{t.freq_pillars[key]}&lt;/div&gt;
))}
&lt;/div&gt;
)}
{mainMode === &#39;frecuencias&#39; &amp;&amp; freqPillar &amp;&amp; !freqSub &amp;&amp; (
&lt;div className=&quot;category-stack&quot;&gt;
&lt;p style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;4px&#39;, color: &#39;#22d3ee&#39;, textAlign: &#39;center&#39;, marginBottom:
&#39;16px&#39;, fontWeight: 200 }}&gt;{t.freq_pillars[freqPillar]}&lt;/p&gt;
{Object.keys(t.pillars[freqPillar]?.subs || {}).map(sub =&gt; (
&lt;div key={sub} className=&quot;pillar-card&quot; onClick={() =&gt;
setFreqSub(sub)}&gt;{t.pillars[freqPillar].subs[sub]}&lt;/div&gt;
))}
&lt;/div&gt;
)}
{mainMode === &#39;frecuencias&#39; &amp;&amp; freqPillar &amp;&amp; freqSub &amp;&amp; (
&lt;div className=&quot;fade-in-smooth&quot; style={{ width: &#39;100%&#39;, display: &#39;flex&#39;, flexDirection: &#39;column&#39;,
alignItems: &#39;center&#39; }}&gt;
&lt;p style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;3px&#39;, color: &#39;#22d3ee&#39;, textAlign: &#39;center&#39;, marginBottom:
&#39;16px&#39;, fontWeight: 200 }}&gt;{t.pillars[freqPillar]?.subs[freqSub]}&lt;/p&gt;
{(FREQ_TRACKS[freqPillar]?.[freqSub] || []).length === 0
? &lt;ComingSoon accent=&quot;#22d3ee&quot; /&gt;
: FREQ_TRACKS[freqPillar][freqSub].map(track =&gt; &lt;TrackCard key={track.id} track={track}
onSelect={playTrack} /&gt;)
}
&lt;/div&gt;
)}
{mainMode === &#39;meditaciones&#39; &amp;&amp; !medPillar &amp;&amp; (
&lt;div className=&quot;category-stack&quot;&gt;
&lt;p style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;5px&#39;, color: violetColor, textAlign: &#39;center&#39;, marginBottom:
&#39;16px&#39;, fontWeight: 200 }}&gt;{t.home_buttons.meditations}&lt;/p&gt;
{Object.keys(t.med_pillars).map(key =&gt; (
&lt;div key={key} className=&quot;pillar-card violet&quot; onClick={() =&gt;
setMedPillar(key)}&gt;{t.med_pillars[key]}&lt;/div&gt;
))}
&lt;/div&gt;
)}
{mainMode === &#39;meditaciones&#39; &amp;&amp; medPillar &amp;&amp; (
&lt;div className=&quot;fade-in-smooth&quot; style={{ width: &#39;100%&#39;, display: &#39;flex&#39;, flexDirection: &#39;column&#39;,
alignItems: &#39;center&#39; }}&gt;
&lt;p style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;3px&#39;, color: violetColor, textAlign: &#39;center&#39;, marginBottom:
&#39;16px&#39;, fontWeight: 200 }}&gt;{t.med_pillars[medPillar]}&lt;/p&gt;
{MED_DATA[medPillar].sessions.map(s =&gt; &lt;SessionCard key={s.id} session={s} color=&quot;violet&quot;
accent={violetColor} /&gt;)}

&lt;/div&gt;
)}
{mainMode === &#39;experiencias&#39; &amp;&amp; !expLevel &amp;&amp; (
&lt;div className=&quot;category-stack&quot;&gt;
&lt;p className=&quot;gold-title&quot; style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;5px&#39;, textAlign: &#39;center&#39;,
marginBottom: &#39;16px&#39;, fontWeight: 200 }}&gt;{t.home_buttons.experiences}&lt;/p&gt;
{[
{ key: &#39;UNVEILING&#39;, label: t.exp_levels.UNVEILING, sub: t.exp_levels.UNVEILING_sub },
{ key: &#39;AWAKENING&#39;, label: t.exp_levels.AWAKENING, sub: t.exp_levels.AWAKENING_sub },
{ key: &#39;CODEX&#39;, label: t.exp_levels.CODEX, sub: t.exp_levels.CODEX_sub },
{ key: &#39;VOICE&#39;, label: t.exp_levels.VOICE, sub: t.exp_levels.VOICE_sub },
{ key: &#39;ALCHEMIST&#39;, label: t.exp_levels.ALCHEMIST, sub: t.exp_levels.ALCHEMIST_sub },
{ key: &#39;MERKABA&#39;, label: t.exp_levels.MERKABA, sub: t.exp_levels.MERKABA_sub }
].map((lvl, i) =&gt; (
&lt;div key={lvl.key} className=&quot;pillar-card gold&quot; onClick={() =&gt; setExpLevel(lvl.key)} style={{
maxWidth: &#39;310px&#39;, width: &#39;80%&#39; }}&gt;
&lt;div style={{ fontSize: &#39;9px&#39;, color: &#39;#d4af37&#39;, letterSpacing: &#39;2px&#39;, marginBottom: &#39;4px&#39;, opacity: 0.6
}}&gt;NIVEL {i + 1}&lt;/div&gt;
&lt;div style={{ fontSize: &#39;11px&#39;, letterSpacing: &#39;3px&#39;, color: &#39;#d4af37&#39;, textShadow: &#39;0 0 8px
rgba(212,175,55,0.4)&#39; }}&gt;{lvl.label}&lt;/div&gt;
&lt;div style={{ fontSize: &#39;9px&#39;, color: &#39;#c9a227&#39;, letterSpacing: &#39;1px&#39;, marginTop: &#39;3px&#39;, fontWeight:
200, opacity: 0.75 }}&gt;{lvl.sub}&lt;/div&gt;
&lt;/div&gt;
))}
&lt;/div&gt;
)}
{mainMode === &#39;experiencias&#39; &amp;&amp; expLevel === &#39;UNVEILING&#39; &amp;&amp; !expStage &amp;&amp; (
&lt;div className=&quot;category-stack&quot;&gt;
&lt;p className=&quot;gold-title&quot; style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;4px&#39;, textAlign: &#39;center&#39;,
marginBottom: &#39;4px&#39;, fontWeight: 200 }}&gt;{t.exp_levels.UNVEILING}&lt;/p&gt;
&lt;p style={{ fontSize: &#39;9px&#39;, color: &#39;#c9a227&#39;, letterSpacing: &#39;1px&#39;, textAlign: &#39;center&#39;, marginBottom:
&#39;16px&#39;, fontWeight: 200, opacity: 0.7 }}&gt;{t.exp_levels.UNVEILING_sub}&lt;/p&gt;
{[&#39;TERRESTRE&#39;, &#39;DIVINO&#39;, &#39;INTERDIMENSIONAL&#39;].map(stage =&gt; (
&lt;div key={stage} className=&quot;pillar-card gold&quot; onClick={() =&gt; setExpStage(stage)} style={{
maxWidth: &#39;310px&#39;, width: &#39;80%&#39; }}&gt;
&lt;div style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;3px&#39;, color: &#39;#d4af37&#39;, textShadow: &#39;0 0 8px
rgba(212,175,55,0.35)&#39; }}&gt;{t.unveiling_stages[stage]}&lt;/div&gt;
&lt;div style={{ fontSize: &#39;9px&#39;, color: &#39;#c9a227&#39;, letterSpacing: &#39;1px&#39;, marginTop: &#39;3px&#39;, fontWeight:
200, opacity: 0.75 }}&gt;{t.unveiling_stages[`${stage}_sub`]}&lt;/div&gt;
&lt;/div&gt;
))}
&lt;/div&gt;
)}
{mainMode === &#39;experiencias&#39; &amp;&amp; expLevel === &#39;UNVEILING&#39; &amp;&amp; expStage &amp;&amp; (
&lt;div className=&quot;fade-in-smooth&quot; style={{ width: &#39;100%&#39;, display: &#39;flex&#39;, flexDirection: &#39;column&#39;,

alignItems: &#39;center&#39; }}&gt;
&lt;p className=&quot;gold-title&quot; style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;3px&#39;, textAlign: &#39;center&#39;,
marginBottom: &#39;4px&#39;, fontWeight: 200 }}&gt;{t.unveiling_stages[expStage]}&lt;/p&gt;
&lt;p style={{ fontSize: &#39;9px&#39;, color: &#39;#c9a227&#39;, textAlign: &#39;center&#39;, marginBottom: &#39;16px&#39;, fontWeight: 200,
opacity: 0.7 }}&gt;{t.unveiling_stages[`${expStage}_sub`]}&lt;/p&gt;
{EXP_DATA.UNVEILING[expStage].map(s =&gt; &lt;SessionCard key={s.id} session={s} color=&quot;gold&quot;
accent={goldColor} /&gt;)}
&lt;/div&gt;
)}
{mainMode === &#39;experiencias&#39; &amp;&amp; expLevel &amp;&amp; expLevel !== &#39;UNVEILING&#39; &amp;&amp; (
&lt;div className=&quot;fade-in-smooth&quot; style={{ width: &#39;100%&#39;, display: &#39;flex&#39;, flexDirection: &#39;column&#39;,
alignItems: &#39;center&#39; }}&gt;
&lt;p className=&quot;gold-title&quot; style={{ fontSize: &#39;10px&#39;, letterSpacing: &#39;3px&#39;, textAlign: &#39;center&#39;,
marginBottom: &#39;4px&#39;, fontWeight: 200 }}&gt;{t.exp_levels[expLevel]}&lt;/p&gt;
&lt;p style={{ fontSize: &#39;9px&#39;, color: &#39;#c9a227&#39;, textAlign: &#39;center&#39;, marginBottom: &#39;16px&#39;, fontWeight: 200,
opacity: 0.7 }}&gt;{t.exp_levels[`${expLevel}_sub`]}&lt;/p&gt;
{(EXP_DATA[expLevel] || []).map(s =&gt; &lt;SessionCard key={s.id} session={s} color=&quot;gold&quot;
accent={goldColor} /&gt;)}
&lt;/div&gt;
)}
&lt;/div&gt;
&lt;BottomBar /&gt;
&lt;/div&gt;
);
};
export default App;