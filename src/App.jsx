import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); }
    50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(34, 211, 238, 0.9), 0 0 120px rgba(34, 211, 238, 0.6), 0 0 250px rgba(34, 211, 238, 0.4); }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; font-family: sans-serif; color: white; }
  .frecuencias-choice-button {
    width: 75%; max-width: 270px; padding: 18px; margin: 10px 0;
    border-radius: 40px; border: 1.5px solid rgba(34, 211, 238, 0.6);
    background: rgba(34, 211, 238, 0.05); color: white;
    font-size: 12px; letter-spacing: 4px; text-transform: uppercase;
    cursor: pointer; transition: all 0.4s ease;
  }
  .meditaciones-choice-button {
    width: 75%; max-width: 270px; padding: 18px; margin: 10px 0;
    border-radius: 40px; border: 1.5px solid rgba(168, 85, 247, 0.6);
    background: rgba(168, 85, 247, 0.05); color: white;
    font-size: 12px; letter-spacing: 4px; text-transform: uppercase;
    cursor: pointer; transition: all 0.4s ease;
  }
  .category-stack { display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; margin: 0 auto; }
  .sub-category-card {
    width: 70%; max-width: 250px; padding: 18px; border-radius: 40px;
    background: rgba(34, 211, 238, 0.02); border: 1.5px solid rgba(34, 211, 238, 0.5);
    text-align: center; cursor: pointer; font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
    transition: all 0.3s ease; color: white;
  }
  .track-card {
    width: 85%; max-width: 340px; padding: 20px 25px; margin: 8px 0; border-radius: 30px;
    background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex; justify-content: space-between; align-items: center; cursor: pointer;
  }
  .track-card:active { transform: scale(0.98); background: rgba(255, 255, 255, 0.07); }
  .back-button-genora {
    width: 42px; height: 42px; border-radius: 50%; border: 1.5px solid rgba(34, 211, 238, 0.6);
    background: rgba(34, 211, 238, 0.1); display: flex; align-items: center; justify-content: center; cursor: pointer;
  }
  .time-button {
    width: 58px; padding: 10px 0; border-radius: 40px; border: 1px solid rgba(255,255,255,0.2);
    background: none; color: white; font-size: 12px; cursor: pointer; transition: 0.2s;
  }
  .heart-btn {
    background: none; border: none; cursor: pointer;
    font-size: 16px; padding: 4px 8px; line-height: 1;
    transition: transform 0.2s ease; flex-shrink: 0;
  }
  .heart-btn:active { transform: scale(1.4); }
  .bottom-bar {
    position: fixed; bottom: 0; left: 0; right: 0;
    background: rgba(2, 6, 23, 0.96);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    display: flex; justify-content: center;
    z-index: 100; padding: 0;
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
  .progress-bar-container {
    width: 100%; height: 2px; background: rgba(255,255,255,0.1);
    border-radius: 2px; margin: 8px 0 4px; cursor: pointer;
  }
  .progress-bar-fill {
    height: 100%; border-radius: 2px; background: #22d3ee;
    transition: width 0.5s linear;
  }
  .reminder-btn {
    padding: 8px 18px; border-radius: 30px; border: 1px solid rgba(34,211,238,0.3);
    background: none; color: rgba(255,255,255,0.5); font-size: 10px;
    letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease;
    text-transform: uppercase;
  }
  .reminder-btn.active {
    border-color: #22d3ee; color: #22d3ee;
    background: rgba(34,211,238,0.08);
  }
  .alineacion-banner {
    margin: 0 auto 20px; width: 85%; max-width: 340px;
    padding: 14px 20px; border-radius: 20px;
    background: rgba(34,211,238,0.06);
    border: 1px solid rgba(34,211,238,0.25);
    text-align: center;
  }
`;

const subCategoryTitles = {
  "APRENDIZAJE": "APRENDIZAJE & ENFOQUE",
  "CREATIVIDAD": "CREATIVIDAD & RESOLUCION",
  "CLARIDAD": "CLARIDAD MENTAL",
  "RENDIMIENTO": "ACTIVACION MENTAL & RENDIMIENTO"
};

const ALL_TRACKS = {
  "APRENDIZAJE": [
    { id: "alpha-integration", name: "Alpha Integracion", hz: "8-10 Hz", url: "/audio/alpha-integration.mp3", desc: "Integracion de informacion desde la calma." },
    { id: "beta-learning", name: "Beta Learning", hz: "12-14 Hz", url: "/audio/beta-learning.mp3", desc: "Absorcion pasiva de informacion sin esfuerzo." },
    { id: "alpha-intelligence", name: "Alpha Intelligence", hz: "11.5-14.5 Hz", url: "/audio/alpha-intelligence.mp3", desc: "Mejora la capacidad de procesamiento cognitivo." },
    { id: "beta-focus", name: "Beta Focus", hz: "15-18 Hz", url: "/audio/beta-focus.mp3", desc: "Concentracion y vigilancia mental sostenida." },
    { id: "beta-decision", name: "Beta Decision", hz: "13.8 Hz", url: "/audio/beta-decision.mp3", desc: "Claridad en momentos clave de decision." }
  ],
  "CREATIVIDAD": [
    { id: "alpha-creator", name: "Alpha Creator", hz: "8-12 Hz", url: "/audio/alpha-creator.mp3", desc: "Activa el pensamiento positivo e ideas nuevas." },
    { id: "beta-solution", name: "Beta Solution", hz: "12-36 Hz", url: "/audio/beta-solution.mp3", desc: "Resolucion analitica y toma de decisiones." },
    { id: "beta-logic", name: "Beta Logic", hz: "13-40 Hz", url: "/audio/beta-logic.mp3", desc: "Potencia el pensamiento logico y analitico." },
    { id: "beta-attention", name: "Beta Attention", hz: "12-15 Hz", url: "/audio/beta-attention.mp3", desc: "Atencion consciente y respuesta mental agil." }
  ],
  "CLARIDAD": [
    { id: "alpha-balance-mind", name: "Alpha Balance Mind", hz: "11 Hz", url: "/audio/alpha-balance-mind.mp3", desc: "Reduce la tension y mejora estabilidad mental." },
    { id: "alpha-center", name: "Alpha Center", hz: "12 Hz", url: "/audio/alpha-center.mp3", desc: "Centracion, claridad y expresion consciente." },
    { id: "beta-decision-c", name: "Beta Decision", hz: "13.8 Hz", url: "/audio/beta-decision.mp3", desc: "Claridad en momentos clave de decision." },
    { id: "alpha-calm-alert", name: "Alpha Calm Alert", hz: "10 Hz", url: "/audio/alpha-calm-alert.mp3", desc: "Estado de alerta serena y presencia absoluta." },
    { id: "alpha-clarity", name: "Alpha Clarity", hz: "10.5 Hz", url: "/audio/alpha-clarity.mp3", desc: "Purificacion de pensamientos y vision nitida." },
    { id: "gamma-insight", name: "Gamma Insight", hz: "40 Hz", url: "/audio/gamma-insight.mp3", desc: "Destellos de comprension profunda y epifanias." }
  ],
  "RENDIMIENTO": [
    { id: "beta-active-mind", name: "Beta Active Mind", hz: "13-27 Hz", url: "/audio/beta-active-mind.mp3", desc: "Aumenta la atencion externa y actividad mental." },
    { id: "beta-high-performance", name: "Beta High Performance", hz: "14-30 Hz", url: "/audio/beta-high-performance.mp3", desc: "Estimula calculos y funciones cognitivas complejas." },
    { id: "beta-vital-mind", name: "Beta Vital Mind", hz: "14 Hz", url: "/audio/beta-vital-mind.mp3", desc: "Genera energia mental y enfoque en tareas." },
    { id: "beta-cortex", name: "Beta Cortex", hz: "15.4 Hz", url: "/audio/beta-cortex.mp3", desc: "Procesamiento avanzado e inteligencia." },
    { id: "alpha-focus", name: "Alpha Focus", hz: "11-14 Hz", url: "/audio/alpha-focus.mp3", desc: "Concentracion y enfoque mental sostenido." }
  ]
};

const ALL_TRACKS_FLAT = Object.values(ALL_TRACKS).flat();

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

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mainMode, setMainMode] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeTab, setActiveTab] = useState('catalogo');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showReminder, setShowReminder] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('genora_favorites')) || []; } catch { return []; }
  });

  const [reminderTime, setReminderTime] = useState(() => {
    try { return localStorage.getItem('genora_reminder_time') || null; } catch { return null; }
  });

  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const activeTabRef = useRef(activeTab);

  useEffect(() => { activeTabRef.current = activeTab; }, [activeTab]);

  // Splash
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  // Verificar recordatorio al cargar
  useEffect(() => {
    if (reminderTime && reminderTime === getTimeOfDay()) {
      setShowBanner(true);
      const t = setTimeout(() => setShowBanner(false), 8000);
      return () => clearTimeout(t);
    }
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
    if (activeTabRef.current === 'favoritos') {
      const favTracks = ALL_TRACKS_FLAT.filter(t => favorites.includes(t.id));
      const currentIndex = favTracks.findIndex(t => t.id === selectedTrack?.id);
      if (currentIndex >= 0 && currentIndex < favTracks.length - 1) {
        const nextTrack = favTracks[currentIndex + 1];
        setSelectedTrack(nextTrack);
        setCurrentTime(0);
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.src = nextTrack.url;
            audioRef.current.play().catch(() => {});
          }
        }, 100);
      } else {
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(false);
    }
  };

  const toggleFavorite = (e, trackId) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(trackId) ? prev.filter(id => id !== trackId) : [...prev, trackId]);
  };

  const isFavorite = (trackId) => favorites.includes(trackId);
  const accentColor = mainMode === 'meditaciones' ? '#a855f7' : (mainMode === 'experiencias' ? '#d4af37' : '#22d3ee');

  const handleBack = () => {
    if (activeSub) setActiveSub(null);
    else if (activeCategory) setActiveCategory(null);
    else setMainMode(null);
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = ratio * duration;
  };

  const BottomBar = () => (
    <div className="bottom-bar">
      <button className={`bar-tab ${activeTab === 'catalogo' ? 'active' : ''}`} onClick={() => setActiveTab('catalogo')}>
        <span className="bar-tab-icon">◎</span>
        CATALOGO
      </button>
      <button className={`bar-tab ${activeTab === 'favoritos' ? 'active' : ''}`} onClick={() => setActiveTab('favoritos')}>
        <span className="bar-tab-icon">{favorites.length > 0 ? '♥' : '♡'}</span>
        {favorites.length > 0 ? `MI ALINEACION (${favorites.length})` : 'MI ALINEACION'}
      </button>
    </div>
  );

  const ReminderSection = () => (
    <div style={{ width: '85%', maxWidth: '340px', margin: '0 auto 24px', padding: '20px', borderRadius: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginBottom: '16px' }}>RECORDATORIO DE ALINEACION</p>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { key: 'manana', label: 'Manana', icon: '☀' },
          { key: 'tarde', label: 'Tarde', icon: '◐' },
          { key: 'noche', label: 'Noche', icon: '☽' }
        ].map(opt => (
          <button
            key={opt.key}
            className={`reminder-btn ${reminderTime === opt.key ? 'active' : ''}`}
            onClick={() => setReminderTime(prev => prev === opt.key ? null : opt.key)}
          >
            {opt.icon} {opt.label}
          </button>
        ))}
      </div>
      {reminderTime && (
        <p style={{ fontSize: '10px', color: 'rgba(34,211,238,0.5)', textAlign: 'center', marginTop: '12px', letterSpacing: '1px' }}>
          Tu alineacion esta programada para la {reminderTime === 'manana' ? 'manana' : reminderTime === 'tarde' ? 'tarde' : 'noche'}
        </p>
      )}
    </div>
  );

  // SPLASH
  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '180px', borderRadius: '50%', animation: 'logo-breathe 3s infinite ease-in-out', objectFit: 'contain' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '4px', color: '#22d3ee', textTransform: 'uppercase', marginTop: '35px', marginBottom: '8px' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '10px', fontWeight: '200', letterSpacing: '3px', color: '#fdfcf5', opacity: 0.8 }}>ACTIVANDO TU CONSCIENCIA GENETICA</p>
      </div>
    );
  }

  // TEMPLO
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
        <button onClick={() => { setSelectedTrack(null); setIsPlaying(false); setCurrentTime(0); setDuration(0); }} style={{ position: 'absolute', top: '35px', left: '30px', background: 'none', border: 'none', color: accentColor, fontSize: '40px', cursor: 'pointer' }}>&#8249;</button>
        <button className="heart-btn" onClick={(e) => toggleFavorite(e, selectedTrack.id)} style={{ position: 'absolute', top: '40px', right: '30px', fontSize: '24px', color: isFavorite(selectedTrack.id) ? '#ff6b9d' : 'rgba(255,255,255,0.4)' }}>
          {isFavorite(selectedTrack.id) ? '♥' : '♡'}
        </button>
        <div style={{ width: '220px', height: '220px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: isPlaying ? 'logo-breathe 4s infinite' : 'none' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', filter: `drop-shadow(0 0 15px ${accentColor})` }} alt="ADN" />
        </div>
        <h2 style={{ fontSize: '24px', letterSpacing: '4px', textTransform: 'uppercase' }}>{selectedTrack.name}</h2>
        <p style={{ color: accentColor, fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold', marginBottom: '8px' }}>{selectedTrack.hz}</p>
        <p style={{ fontSize: '13px', opacity: 0.7, maxWidth: '300px', lineHeight: '1.5', marginBottom: '24px' }}>{selectedTrack.desc}</p>

        {/* Barra de progreso con tiempo */}
        <div style={{ width: '80%', maxWidth: '300px', marginBottom: '24px' }}>
          <div className="progress-bar-container" onClick={handleProgressClick}>
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1px' }}>{formatTime(currentTime)}</span>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1px' }}>{formatTime(duration)}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '45px' }}>
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

  // FAVORITOS
  if (activeTab === 'favoritos') {
    const favTracks = ALL_TRACKS_FLAT.filter(t => favorites.includes(t.id));
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', paddingBottom: '80px' }}>
        <style>{inlineStyles}</style>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', paddingTop: '10px' }}>
          <img src="/imagenes/genora-logo-white.png" style={{ height: '50px', borderRadius: '50%', objectFit: 'contain' }} alt="Logo" />
          <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.3)', padding: '5px 14px', borderRadius: '20px' }}>ES | EN</div>
        </div>

        {/* Banner de recordatorio */}
        {showBanner && (
          <div className="alineacion-banner">
            <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', margin: 0 }}>✦ Es momento de tu alineacion diaria Genora</p>
          </div>
        )}

        <p style={{ fontSize: '10px', letterSpacing: '4px', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginBottom: '24px' }}>MI CAMPO DE RESONANCIA</p>

        {/* Sección de recordatorio */}
        <ReminderSection />

        {favTracks.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>♡</div>
            <p style={{ fontSize: '12px', letterSpacing: '2px', lineHeight: '1.8' }}>Tu campo de resonancia esta vacio.<br />Toca el corazon de cualquier frecuencia para anclarla en tu campo personal.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {favTracks.map((track) => (
              <div key={track.id} className="track-card" onClick={() => { setSelectedTrack(track); setIsPlaying(true); }} style={{ borderLeft: '4px solid #22d3ee' }}>
                <div style={{ textAlign: 'left', width: '75%' }}>
                  <div style={{ fontSize: '15px', color: 'white', fontWeight: '400' }}>{track.name}</div>
                  <div style={{ fontSize: '10px', color: '#fdfcf5', opacity: 0.7, marginTop: '5px', fontWeight: '200', letterSpacing: '1px' }}>{track.desc}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <button className="heart-btn" onClick={(e) => toggleFavorite(e, track.id)} style={{ color: '#ff6b9d', fontSize: '18px' }}>♥</button>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '9px', color: '#22d3ee', opacity: 0.7 }}>{track.hz}</div>
                    <span style={{ color: '#22d3ee', fontSize: '18px' }}>▶</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <BottomBar />
      </div>
    );
  }

  // CATALOGO PRINCIPAL
  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', paddingBottom: '80px' }}>
      <style>{inlineStyles}</style>

      {/* Banner de recordatorio en catalogo */}
      {showBanner && (
        <div className="alineacion-banner" style={{ marginTop: '10px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', margin: 0 }}>✦ Es momento de tu alineacion diaria Genora</p>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', paddingTop: '10px' }}>
        {mainMode ? (
          <div onClick={handleBack} className="back-button-genora" style={{ borderColor: accentColor }}>
            <span style={{ color: accentColor, fontSize: '20px', fontWeight: 'bold' }}>&#8249;</span>
          </div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '95px', borderRadius: '50%', objectFit: 'contain' }} alt="Logo" />
        )}
        <div style={{ fontSize: '10px', letterSpacing: '2px', color: accentColor, border: `1px solid ${accentColor}88`, padding: '5px 14px', borderRadius: '20px', fontWeight: 'bold' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: activeSub ? '110px' : (mainMode ? '130px' : '165px'), height: activeSub ? '110px' : (mainMode ? '130px' : '165px'), borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '35px', transition: 'all 0.5s ease', animation: 'aura-supernova 8s infinite ease-in-out' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', borderRadius: '50%' }} alt="ADN" />
        </div>

        {!mainMode && (
          <div className="category-stack">
            <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '20px', fontWeight: '300' }}>ELIGE TU CAMINO</h2>
            <button className="frecuencias-choice-button" onClick={() => setMainMode('frecuencias')}>Frecuencias</button>
            <button className="meditaciones-choice-button" onClick={() => setMainMode('meditaciones')}>Meditaciones</button>
            <button style={{ width: '75%', maxWidth: '270px', padding: '18px', borderRadius: '40px', border: '1.5px solid #d4af37', background: 'rgba(212, 175, 55, 0.05)', color: '#fdfcf5', fontSize: '12px', letterSpacing: '4px', cursor: 'pointer' }} onClick={() => setMainMode('experiencias')}>
              EXPERIENCIAS
            </button>
          </div>
        )}

        {mainMode && !activeCategory && (
          <div className="category-stack">
            <p style={{ fontSize: '11px', letterSpacing: '5px', color: accentColor, textAlign: 'center', marginBottom: '35px', fontWeight: 'bold' }}>{mainMode.toUpperCase()}</p>
            {["MENTE", "CUERPO", "EXPANSION", "COHERENCIA"].map(cat => (
              <div key={cat} onClick={() => setActiveCategory(cat)} className="sub-category-card" style={{ borderColor: `${accentColor}88` }}>
                <span style={{ fontWeight: 'bold' }}>{cat}</span>
              </div>
            ))}
          </div>
        )}

        {activeCategory === "MENTE" && !activeSub && (
          <div className="category-stack">
            <p style={{ fontSize: '11px', letterSpacing: '5px', color: accentColor, textAlign: 'center', marginBottom: '35px', fontWeight: 'bold' }}>RESONANCIA MENTE</p>
            {Object.keys(subCategoryTitles).map(sub => (
              <div key={sub} onClick={() => setActiveSub(sub)} className="sub-category-card" style={{ borderColor: `${accentColor}88` }}>
                <span style={{ fontWeight: 'bold' }}>{sub}</span>
              </div>
            ))}
          </div>
        )}

        {activeSub && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '11px', letterSpacing: '3px', color: accentColor, textAlign: 'center', marginBottom: '25px', fontWeight: 'bold' }}>{subCategoryTitles[activeSub] || activeSub}</p>
            {(ALL_TRACKS[activeSub] || []).map((track) => (
              <div key={track.id} className="track-card" onClick={() => setSelectedTrack(track)} style={{ borderLeft: `4px solid ${accentColor}` }}>
                <div style={{ textAlign: 'left', width: '75%' }}>
                  <div style={{ fontSize: '15px', color: 'white', fontWeight: '400' }}>{track.name}</div>
                  <div style={{ fontSize: '10px', color: '#fdfcf5', opacity: 0.7, marginTop: '5px', fontWeight: '200', letterSpacing: '1px' }}>{track.desc}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <button className="heart-btn" onClick={(e) => toggleFavorite(e, track.id)} style={{ color: isFavorite(track.id) ? '#ff6b9d' : 'rgba(255,255,255,0.3)' }}>
                    {isFavorite(track.id) ? '♥' : '♡'}
                  </button>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '9px', color: accentColor, opacity: 0.7 }}>{track.hz}</div>
                    <span style={{ color: accentColor, fontSize: '18px' }}>▶</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <BottomBar />
    </div>
  );
};

export default App;