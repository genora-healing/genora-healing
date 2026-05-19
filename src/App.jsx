import React, { useState, useEffect, useRef } from 'react';

// ── TRADUCCIONES ──────────────────────────────────────────────────────────────
const T = {
  es: {
    splash_title: "RESONANCIA ORIGEN",
    splash_sub: "ACTIVANDO TU CONSCIENCIA GENETICA",
    choose_path: "ELIGE TU CAMINO",
    frequencies: "FRECUENCIAS",
    meditations: "MEDITACIONES",
    experiences: "EXPERIENCIAS",
    mind: "MENTE",
    body: "CUERPO",
    expansion: "EXPANSION",
    coherence: "COHERENCIA",
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
    suggestion_label: "✦ Sugerencia de Alineacion",
    coming_soon: "Proximas frecuencias en camino...",
    pillars: {
      MENTE: {
        label: "MENTE",
        subs: {
          "APRENDIZAJE": "APRENDIZAJE & ENFOQUE",
          "CREATIVIDAD": "CREATIVIDAD & RESOLUCION",
          "CLARIDAD": "CLARIDAD MENTAL",
          "RENDIMIENTO": "ACTIVACION MENTAL & RENDIMIENTO"
        }
      },
      COHERENCIA: {
        label: "COHERENCIA",
        subs: {
          "REGULACION": "REGULACION EMOCIONAL",
          "EQUILIBRIO": "EQUILIBRIO INTERNO",
          "INTEGRACION": "INTEGRACION MENTE-CUERPO"
        }
      },
      CUERPO: {
        label: "CUERPO",
        subs: {
          "REGENERACION": "REGENERACION & SANACION",
          "ORGANOS": "ORGANOS & SISTEMAS",
          "DOLOR": "DOLOR & RECUPERACION"
        }
      },
      EXPANSION: {
        label: "EXPANSION",
        subs: {
          "MEDITACION": "MEDITACION & ESTADOS INTERNOS",
          "PERCEPCION": "PERCEPCION & INTUICION",
          "EXPERIENCIAS": "EXPERIENCIAS EXPANDIDAS"
        }
      }
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
    mind: "MIND",
    body: "BODY",
    expansion: "EXPANSION",
    coherence: "COHERENCE",
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
    suggestion_label: "✦ Alignment Suggestion",
    coming_soon: "Upcoming frequencies on their way...",
    pillars: {
      MENTE: {
        label: "MIND",
        subs: {
          "APRENDIZAJE": "LEARNING & FOCUS",
          "CREATIVIDAD": "CREATIVITY & RESOLUTION",
          "CLARIDAD": "MENTAL CLARITY",
          "RENDIMIENTO": "MENTAL ACTIVATION & PERFORMANCE"
        }
      },
      COHERENCIA: {
        label: "COHERENCE",
        subs: {
          "REGULACION": "EMOTIONAL REGULATION",
          "EQUILIBRIO": "INNER BALANCE",
          "INTEGRACION": "MIND-BODY INTEGRATION"
        }
      },
      CUERPO: {
        label: "BODY",
        subs: {
          "REGENERACION": "REGENERATION & HEALING",
          "ORGANOS": "ORGANS & SYSTEMS",
          "DOLOR": "PAIN & RECOVERY"
        }
      },
      EXPANSION: {
        label: "EXPANSION",
        subs: {
          "MEDITACION": "MEDITATION & INNER STATES",
          "PERCEPCION": "PERCEPTION & INTUITION",
          "EXPERIENCIAS": "EXPANDED EXPERIENCES"
        }
      }
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

// ── ESTILOS ───────────────────────────────────────────────────────────────────
const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); }
    50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(34, 211, 238, 0.9), 0 0 120px rgba(34, 211, 238, 0.6), 0 0 250px rgba(34, 211, 238, 0.4); }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; font-family: sans-serif; color: white; }
  .choice-button {
    width: 75%; max-width: 270px; padding: 18px; margin: 10px 0;
    border-radius: 40px; background: rgba(34,211,238,0.04); color: white;
    font-size: 12px; letter-spacing: 6px; text-transform: uppercase; font-weight: 200;
    cursor: pointer; transition: all 0.4s ease; border: 1px solid rgba(34,211,238,0.35);
  }
  .choice-button:hover { background: rgba(34,211,238,0.08); border-color: rgba(34,211,238,0.6); }
  .choice-button.violet { border-color: rgba(168,85,247,0.35); background: rgba(168,85,247,0.04); }
  .choice-button.gold { border-color: rgba(212,175,55,0.35); background: rgba(212,175,55,0.04); }
  .category-stack { display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; margin: 0 auto; }
  .pillar-card {
    width: 70%; max-width: 250px; padding: 18px; border-radius: 40px;
    background: rgba(34,211,238,0.02); border: 1px solid rgba(34,211,238,0.3);
    text-align: center; cursor: pointer; font-size: 11px; letter-spacing: 4px;
    text-transform: uppercase; font-weight: 200; transition: all 0.3s ease; color: white;
  }
  .pillar-card:hover { background: rgba(34,211,238,0.06); border-color: rgba(34,211,238,0.5); }
  .track-card {
    width: 85%; max-width: 340px; padding: 20px 25px; margin: 8px 0; border-radius: 30px;
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1);
    display: flex; justify-content: space-between; align-items: center; cursor: pointer;
  }
  .track-card:active { transform: scale(0.98); }
  .track-card.suggestion { border-color: rgba(34,211,238,0.3); background: rgba(34,211,238,0.04); }
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
  .bar-tab-icon { font-size: 18px; line-height: 1; }
  .lang-switch { display: flex; border: 1px solid rgba(34,211,238,0.35); border-radius: 20px; overflow: hidden; }
  .lang-btn { padding: 5px 12px; background: none; border: none; font-size: 10px; letter-spacing: 2px; cursor: pointer; transition: all 0.2s; color: rgba(255,255,255,0.35); font-weight: 200; }
  .lang-btn.active { background: rgba(34,211,238,0.15); color: #22d3ee; }
  .progress-bar-container { width: 100%; height: 2px; background: rgba(255,255,255,0.1); border-radius: 2px; margin: 8px 0 4px; cursor: pointer; }
  .progress-bar-fill { height: 100%; border-radius: 2px; background: #22d3ee; transition: width 0.5s linear; }
  .reminder-btn {
    padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(34,211,238,0.25);
    background: none; color: rgba(255,255,255,0.4); font-size: 10px;
    letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease;
    text-transform: uppercase; font-weight: 200;
  }
  .reminder-btn.active { border-color: #22d3ee; color: #22d3ee; background: rgba(34,211,238,0.08); }
  .alineacion-banner {
    margin: 0 auto 20px; width: 85%; max-width: 340px; padding: 12px 20px;
    border-radius: 20px; background: rgba(34,211,238,0.05);
    border: 1px solid rgba(34,211,238,0.2); text-align: center;
  }
  .coming-soon-box {
    text-align: center; color: rgba(255,255,255,0.2); padding: 50px 20px;
    font-size: 11px; letter-spacing: 3px; font-weight: 200; line-height: 2;
  }
  .coming-soon-icon { font-size: 28px; margin-bottom: 16px; opacity: 0.4; }
`;

// ── TRACKS ────────────────────────────────────────────────────────────────────
const ALL_TRACKS = {
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
  COHERENCIA: {
    "REGULACION": [],
    "EQUILIBRIO": [],
    "INTEGRACION": []
  },
  CUERPO: {
    "REGENERACION": [],
    "ORGANOS": [],
    "DOLOR": []
  },
  EXPANSION: {
    "MEDITACION": [],
    "PERCEPCION": [],
    "EXPERIENCIAS": []
  }
};

const ALL_TRACKS_FLAT = Object.values(ALL_TRACKS)
  .flatMap(pillar => Object.values(pillar).flat())
  .filter(t => t.url);

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

// ── APP ───────────────────────────────────────────────────────────────────────
const App = () => {
  const [lang, setLang] = useState('es');
  const [showSplash, setShowSplash] = useState(true);
  const [mainMode, setMainMode] = useState(null);
  const [activePillar, setActivePillar] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isSuggestion, setIsSuggestion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeTab, setActiveTab] = useState('catalogo');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showBanner, setShowBanner] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('genora_favorites')) || []; } catch { return []; }
  });

  const [reminderTime, setReminderTime] = useState(() => {
    try { return localStorage.getItem('genora_reminder_time') || null; } catch { return null; }
  });

  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const bannerTimerRef = useRef(null);
  const activeTabRef = useRef(activeTab);
  const favoritesRef = useRef(favorites);
  const selectedTrackRef = useRef(selectedTrack);

  const t = T[lang];

  useEffect(() => { activeTabRef.current = activeTab; }, [activeTab]);
  useEffect(() => { favoritesRef.current = favorites; }, [favorites]);
  useEffect(() => { selectedTrackRef.current = selectedTrack; }, [selectedTrack]);

  // Splash
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  // Recordatorio — verifica cada minuto si coincide la jornada
  useEffect(() => {
    const checkReminder = () => {
      if (reminderTime && reminderTime === getTimeOfDay()) {
        setShowBanner(true);
        if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
        bannerTimerRef.current = setTimeout(() => setShowBanner(false), 10000);
      } else {
        setShowBanner(false);
      }
    };
    checkReminder();
    const interval = setInterval(checkReminder, 60000);
    return () => {
      clearInterval(interval);
      if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
    };
  }, [reminderTime]);

  // Motor de audio
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
      if (selectedTime && selectedTime !== 'inf') {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setIsPlaying(false), selectedTime * 60000);
      }
    } else {
      audioRef.current.pause();
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [isPlaying, selectedTrack, selectedTime]);

  // Guardar favoritos
  useEffect(() => {
    try { localStorage.setItem('genora_favorites', JSON.stringify(favorites)); } catch {}
  }, [favorites]);

  // Guardar recordatorio
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
    const currentFavs = favoritesRef.current;
    const currentTrack = selectedTrackRef.current;

    if (activeTabRef.current === 'favoritos') {
      const favTracks = ALL_TRACKS_FLAT.filter(tr => currentFavs.includes(tr.id));
      const currentIndex = favTracks.findIndex(tr => tr.id === currentTrack?.id);

      if (currentIndex >= 0 && currentIndex < favTracks.length - 1) {
        const nextTrack = favTracks[currentIndex + 1];
        setIsSuggestion(false);
        setSelectedTrack(nextTrack);
        setCurrentTime(0);
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.src = nextTrack.url;
            audioRef.current.play().catch(() => {});
          }
        }, 100);
      } else {
        // Sugerencia aleatoria del catalogo
        const nonFavTracks = ALL_TRACKS_FLAT.filter(tr => !currentFavs.includes(tr.id));
        if (nonFavTracks.length > 0) {
          const randomTrack = nonFavTracks[Math.floor(Math.random() * nonFavTracks.length)];
          setIsSuggestion(true);
          setSelectedTrack(randomTrack);
          setCurrentTime(0);
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.src = randomTrack.url;
              audioRef.current.play().catch(() => {});
            }
          }, 100);
        } else {
          setIsPlaying(false);
          setIsSuggestion(false);
        }
      }
    } else {
      setIsPlaying(false);
    }
  };

  const toggleFavorite = (e, trackId) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(trackId) ? prev.filter(id => id !== trackId) : [...prev, trackId]);
    if (isSuggestion && selectedTrack?.id === trackId) setIsSuggestion(false);
  };

  const isFavorite = (trackId) => favorites.includes(trackId);
  const accentColor = '#22d3ee';

  const handleBack = () => {
    if (activeSub) setActiveSub(null);
    else if (activePillar) setActivePillar(null);
    else setMainMode(null);
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = ratio * duration;
  };

  const getReminderText = () => {
    if (reminderTime === 'manana') return t.reminder_set_morning;
    if (reminderTime === 'tarde') return t.reminder_set_afternoon;
    return t.reminder_set_night;
  };

  const playTrack = (track, suggestion = false) => {
    setSelectedTrack(track);
    setIsSuggestion(suggestion);
    setIsPlaying(true);
  };

  // ── COMPONENTES ───────────────────────────────────────────────────────────

  const LangSwitch = () => (
    <div className="lang-switch">
      <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>ES</button>
      <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
    </div>
  );

  const BottomBar = () => (
    <div className="bottom-bar">
      <button className={`bar-tab ${activeTab === 'catalogo' ? 'active' : ''}`} onClick={() => setActiveTab('catalogo')}>
        <span className="bar-tab-icon">◎</span>
        {t.catalog}
      </button>
      <button className={`bar-tab ${activeTab === 'favoritos' ? 'active' : ''}`} onClick={() => setActiveTab('favoritos')}>
        <span className="bar-tab-icon">{favorites.length > 0 ? '♥' : '♡'}</span>
        {favorites.length > 0 ? `${t.my_alignment} (${favorites.length})` : t.my_alignment}
      </button>
    </div>
  );

  const ReminderSection = () => (
    <div style={{ width: '85%', maxWidth: '340px', margin: '0 auto 24px', padding: '20px', borderRadius: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginBottom: '16px', fontWeight: 200 }}>{t.reminder_title}</p>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { key: 'manana', label: t.reminder_morning, icon: '☀' },
          { key: 'tarde', label: t.reminder_afternoon, icon: '◐' },
          { key: 'noche', label: t.reminder_night, icon: '☽' }
        ].map(opt => (
          <button key={opt.key} className={`reminder-btn ${reminderTime === opt.key ? 'active' : ''}`} onClick={() => setReminderTime(prev => prev === opt.key ? null : opt.key)}>
            {opt.icon} {opt.label}
          </button>
        ))}
      </div>
      {reminderTime && (
        <p style={{ fontSize: '10px', color: 'rgba(34,211,238,0.5)', textAlign: 'center', marginTop: '12px', letterSpacing: '1px', fontWeight: 200 }}>
          {getReminderText()}
        </p>
      )}
    </div>
  );

  const TrackCard = ({ track, onSelect, isSugg = false }) => (
    <div className={`track-card ${isSugg ? 'suggestion' : ''}`} onClick={() => onSelect(track)} style={{ borderLeft: `4px solid ${accentColor}` }}>
      <div style={{ textAlign: 'left', width: '75%' }}>
        {isSugg && <div style={{ fontSize: '9px', letterSpacing: '2px', color: '#22d3ee', opacity: 0.8, marginBottom: '4px', textTransform: 'uppercase' }}>{t.suggestion_label}</div>}
        <div style={{ fontSize: '15px', color: 'white', fontWeight: 300 }}>{track.name}</div>
        <div style={{ fontSize: '10px', color: '#fdfcf5', opacity: 0.6, marginTop: '5px', fontWeight: 200, letterSpacing: '1px' }}>
          {t.tracks[track.id] || ''}
        </div>
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

  const ComingSoon = () => (
    <div className="coming-soon-box">
      <div className="coming-soon-icon">◈</div>
      {t.coming_soon}
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
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <audio
          ref={audioRef}
          src={selectedTrack.url}
          loop={selectedTime === 'inf' && activeTabRef.current !== 'favoritos'}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onEnded={handleAudioEnded}
        />
        <button onClick={() => { setSelectedTrack(null); setIsPlaying(false); setCurrentTime(0); setDuration(0); setIsSuggestion(false); }} style={{ position: 'absolute', top: '35px', left: '30px', background: 'none', border: 'none', color: accentColor, fontSize: '40px', cursor: 'pointer' }}>&#8249;</button>
        <button className="heart-btn" onClick={(e) => toggleFavorite(e, selectedTrack.id)} style={{ position: 'absolute', top: '40px', right: '30px', fontSize: '24px', color: isFavorite(selectedTrack.id) ? '#ff6b9d' : 'rgba(255,255,255,0.4)' }}>
          {isFavorite(selectedTrack.id) ? '♥' : '♡'}
        </button>
        {isSuggestion && (
          <div style={{ position: 'absolute', top: '90px', fontSize: '9px', letterSpacing: '2px', color: 'rgba(34,211,238,0.6)', textTransform: 'uppercase' }}>
            {t.suggestion_label}
          </div>
        )}
        <div style={{ width: '220px', height: '220px', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: isPlaying ? 'logo-breathe 4s infinite' : 'none' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', filter: `drop-shadow(0 0 15px ${accentColor})` }} alt="ADN" />
        </div>
        <h2 style={{ fontSize: '22px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 200 }}>{selectedTrack.name}</h2>
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

  // ── MI ALINEACION ─────────────────────────────────────────────────────────
  if (activeTab === 'favoritos') {
    const favTracks = ALL_TRACKS_FLAT.filter(tr => favorites.includes(tr.id));
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', paddingBottom: '80px' }}>
        <style>{inlineStyles}</style>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', paddingTop: '10px' }}>
          <img src="/imagenes/genora-logo-white.png" style={{ height: '50px', borderRadius: '50%', objectFit: 'contain' }} alt="Logo" />
          <LangSwitch />
        </div>
        {showBanner && (
          <div className="alineacion-banner">
            <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', margin: 0, fontWeight: 200 }}>{t.banner}</p>
          </div>
        )}
        <p style={{ fontSize: '10px', letterSpacing: '4px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginBottom: '24px', fontWeight: 200 }}>{t.my_field}</p>
        <ReminderSection />
        {favTracks.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', textAlign: 'center', color: 'rgba(255,255,255,0.25)' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>♡</div>
            <p style={{ fontSize: '12px', letterSpacing: '2px', lineHeight: '1.8', fontWeight: 200 }}>{t.empty_field}<br />{t.empty_sub}</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {favTracks.map((track) => (
              <TrackCard key={track.id} track={track} onSelect={(tr) => playTrack(tr, false)} />
            ))}
          </div>
        )}
        <BottomBar />
      </div>
    );
  }

  // ── CATALOGO PRINCIPAL ────────────────────────────────────────────────────
  const pillarKeys = ['MENTE', 'COHERENCIA', 'CUERPO', 'EXPANSION'];

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', paddingBottom: '80px' }}>
      <style>{inlineStyles}</style>
      {showBanner && (
        <div className="alineacion-banner" style={{ marginTop: '10px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', margin: 0, fontWeight: 200 }}>{t.banner}</p>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', paddingTop: '10px' }}>
        {mainMode ? (
          <div onClick={handleBack} className="back-button-genora">
            <span style={{ color: accentColor, fontSize: '20px' }}>&#8249;</span>
          </div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '95px', borderRadius: '50%', objectFit: 'contain' }} alt="Logo" />
        )}
        <LangSwitch />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* ADN supernova */}
        <div style={{
          width: activeSub ? '110px' : (activePillar ? '130px' : (mainMode ? '130px' : '165px')),
          height: activeSub ? '110px' : (activePillar ? '130px' : (mainMode ? '130px' : '165px')),
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '35px', transition: 'all 0.5s ease',
          animation: 'aura-supernova 8s infinite ease-in-out'
        }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', borderRadius: '50%' }} alt="ADN" />
        </div>

        {/* NIVEL 1 — HOME */}
        {!mainMode && (
          <div className="category-stack">
            <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '20px', fontWeight: 200 }}>{t.choose_path}</h2>
            <button className="choice-button" onClick={() => setMainMode('frecuencias')}>{t.frequencies}</button>
            <button className="choice-button violet" onClick={() => setMainMode('meditaciones')}>{t.meditations}</button>
            <button className="choice-button gold" onClick={() => setMainMode('experiencias')}>{t.experiences}</button>
          </div>
        )}

        {/* NIVEL 2 — PILARES */}
        {mainMode && !activePillar && (
          <div className="category-stack">
            <p style={{ fontSize: '10px', letterSpacing: '5px', color: accentColor, textAlign: 'center', marginBottom: '35px', fontWeight: 200 }}>{mainMode.toUpperCase()}</p>
            {pillarKeys.map(key => (
              <div key={key} onClick={() => setActivePillar(key)} className="pillar-card">
                {t.pillars[key].label}
              </div>
            ))}
          </div>
        )}

        {/* NIVEL 3 — SUBCATEGORIAS */}
        {activePillar && !activeSub && (
          <div className="category-stack">
            <p style={{ fontSize: '10px', letterSpacing: '5px', color: accentColor, textAlign: 'center', marginBottom: '35px', fontWeight: 200 }}>{t.pillars[activePillar].label}</p>
            {Object.keys(t.pillars[activePillar].subs).map(sub => (
              <div key={sub} onClick={() => setActiveSub(sub)} className="pillar-card">
                {t.pillars[activePillar].subs[sub]}
              </div>
            ))}
          </div>
        )}

        {/* NIVEL 4 — TRACKS o COMING SOON */}
        {activeSub && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', color: accentColor, textAlign: 'center', marginBottom: '25px', fontWeight: 200 }}>
              {t.pillars[activePillar]?.subs[activeSub] || activeSub}
            </p>
            {(ALL_TRACKS[activePillar]?.[activeSub] || []).length === 0
              ? <ComingSoon />
              : (ALL_TRACKS[activePillar][activeSub]).map((track) => (
                  <TrackCard key={track.id} track={track} onSelect={playTrack} />
                ))
            }
          </div>
        )}
      </div>
      <BottomBar />
    </div>
  );
};

export default App;