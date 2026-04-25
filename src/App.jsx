import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  
  @keyframes aura-supernova {
    0%, 100% { 
      transform: scale(1); 
      box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); 
    }
    50% {
      transform: scale(1.03); 
      box-shadow: 0 0 50px rgba(34, 211, 238, 0.9), 0 0 120px rgba(34, 211, 238, 0.6), 0 0 250px rgba(34, 211, 238, 0.4);
    }
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

  .category-stack {
    display: flex; flex-direction: column; align-items: center; gap: 12px;
    width: 100%; margin: 0 auto;
  }

  .sub-category-card {
    width: 70%; max-width: 250px; padding: 18px; border-radius: 40px;
    background: rgba(34, 211, 238, 0.02);
    border: 1.5px solid rgba(34, 211, 238, 0.5);
    text-align: center; cursor: pointer;
    font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
    transition: all 0.3s ease; color: white;
  }

  .track-card {
    width: 85%; max-width: 340px; padding: 20px 25px; margin: 8px 0; border-radius: 30px;
    background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex; justify-content: space-between; align-items: center; cursor: pointer;
    transition: 0.3s;
  }

  .back-button-genora {
    width: 42px; height: 42px; border-radius: 50%;
    border: 1.5px solid rgba(34, 211, 238, 0.6);
    background: rgba(34, 211, 238, 0.1);
    display: flex; align-items: center; justify-content: center; cursor: pointer;
  }

  .time-button {
    width: 58px; padding: 10px 0; border-radius: 40px; border: 1px solid rgba(255,255,255,0.2);
    background: none; color: white; font-size: 12px; cursor: pointer; transition: 0.2s;
  }
`;

const subCategoryTitles = {
  "APRENDIZAJE": "APRENDIZAJE & ENFOQUE",
  "CREATIVIDAD": "CREATIVIDAD & RESOLUCIÓN",
  "CLARIDAD": "CLARIDAD MENTAL",
  "RENDIMIENTO": "ACTIVACIÓN MENTAL & RENDIMIENTO"
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mainMode, setMainMode] = useState(null); 
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => console.log("Error de audio"));
        if (selectedTime && selectedTime !== '∞') {
          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => setIsPlaying(false), selectedTime * 60000);
        }
      } else {
        audioRef.current.pause();
        if (timerRef.current) clearTimeout(timerRef.current);
      }
    }
  }, [isPlaying, selectedTrack, selectedTime]);

  const tracks = {
    "APRENDIZAJE": [
      { name: "Alpha Integración", hz: "8-10 Hz", url: "/audio/alpha-integration.mp3", desc: "Integración de información desde la calma." },
      { name: "Beta Learning", hz: "12-14 Hz", url: "/audio/beta-learning.mp3", desc: "Absorción pasiva de información sin esfuerzo." },
      { name: "Alpha Intelligence", hz: "11.5-14.5 Hz", url: "/audio/alpha-intelligence.mp3", desc: "Mejora la capacidad de procesamiento cognitivo." },
      { name: "Beta Focus", hz: "15-18 Hz", url: "/audio/beta-focus.mp3", desc: "Concentración y vigilancia mental sostenida." }
    ],
    "CREATIVIDAD": [
      { name: "Alpha Creator", hz: "8-12 Hz", url: "/audio/alpha-creator.mp3", desc: "Activa el pensamiento positivo e ideas nuevas." },
      { name: "Beta Solution", hz: "12-36 Hz", url: "/audio/beta-solution.mp3", desc: "Resolución analítica y toma de decisiones." },
      { name: "Beta Logic", hz: "13-40 Hz", url: "/audio/beta-logic.mp3", desc: "Potencia el pensamiento lógico y analítico." }
    ],
    "CLARIDAD": [
      { name: "Alpha Balance Mind", hz: "11 Hz", url: "/audio/alpha-balance-mind.mp3", desc: "Reduce la tensión y mejora estabilidad mental." },
      { name: "Alpha Center", hz: "12 Hz", url: "/audio/alpha-center.mp3", desc: "Centración, claridad y expresión consciente." },
      { name: "Beta Decision", hz: "13.8 Hz", url: "/audio/beta-decision.mp3", desc: "Claridad en momentos clave de decisión." }
    ],
    "RENDIMIENTO": [
      { name: "Beta Active Mind", hz: "13-27 Hz", url: "/audio/beta-active-mind.mp3", desc: "Aumenta la atención externa y actividad mental." },
      { name: "Beta High Performance", hz: "14-30 Hz", url: "/audio/beta-high-performance.mp3", desc: "Estimula cálculos y funciones cognitivas complejas." },
      { name: "Beta Vital Mind", hz: "14 Hz", url: "/audio/beta-vital-mind.mp3", desc: "Genera energía mental y enfoque en tareas." },
      { name: "Beta Cortex", hz: "15.4 Hz", url: "/audio/beta-cortex.mp3", desc: "Procesamiento avanzado e inteligencia." },
      { name: "Alpha Focus", hz: "11-14 Hz", url: "/audio/alpha-focus.mp3", desc: "Concentración y enfoque mental sostenido." },
      { name: "Beta Attention", hz: "12-15 Hz", url: "/audio/beta-attention.mp3", desc: "Atención consciente y respuesta mental ágil." }
    ]
  };

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '180px', borderRadius: '50%', animation: 'logo-breathe 3s infinite ease-in-out', objectFit: 'contain' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '4px', color: '#22d3ee', textTransform: 'uppercase', marginTop: '35px' }}>RESONANCIA ORIGEN</h1>
      </div>
    );
  }

  const accentColor = mainMode === 'meditaciones' ? '#a855f7' : (mainMode === 'experiencias' ? '#d4af37' : '#22d3ee');

  if (selectedTrack) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <audio ref={audioRef} src={selectedTrack.url} loop={selectedTime === '∞'} />
        <button onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} style={{ position: 'absolute', top: '35px', left: '30px', background: 'none', border: 'none', color: accentColor, fontSize: '40px', cursor: 'pointer' }}>‹</button>
        <div style={{ width: '220px', height: '220px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: isPlaying ? 'logo-breathe 4s infinite' : 'none' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', filter: `drop-shadow(0 0 15px ${accentColor})` }} />
        </div>
        <h2 style={{ fontSize: '24px', letterSpacing: '4px', textTransform: 'uppercase' }}>{selectedTrack.name}</h2>
        <p style={{ color: accentColor, fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold', marginBottom: '20px' }}>{selectedTrack.hz}</p>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '45px' }}>
          {[15, 30, 60, '∞'].map((time) => (
            <button key={time} onClick={() => setSelectedTime(time)} className="time-button" style={{ border: `1px solid ${selectedTime === time ? accentColor : 'rgba(255,255,255,0.1)'}`, background: selectedTime === time ? `${accentColor}22` : 'none' }}>{time === '∞' ? time : `${time}'`}</button>
          ))}
        </div>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '85px', height: '85px', borderRadius: '50%', border: `1px solid ${accentColor}`, background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <span style={{ fontSize: '30px', color: 'white' }}>{isPlaying ? '||' : '▶'}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <style>{inlineStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', paddingTop: '10px' }}>
        {mainMode ? (
          <div onClick={() => activeSub ? setActiveSub(null) : (activeCategory ? setActiveCategory(null) : setMainMode(null))} className="back-button-genora" style={{ borderColor: accentColor }}>
             <span style={{ color: accentColor, fontSize: '20px', fontWeight: 'bold' }}>‹</span>
          </div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '95px', borderRadius: '50%', objectFit: 'contain' }} alt="Logo" />
        )}
        <div style={{ fontSize: '10px', letterSpacing: '2px', color: accentColor, border: `1px solid ${accentColor}88`, padding: '5px 14px', borderRadius: '20px', fontWeight: 'bold' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ 
          width: activeSub ? '110px' : (mainMode ? '130px' : '165px'), 
          height: activeSub ? '110px' : (mainMode ? '130px' : '165px'), 
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
          marginBottom: '35px', transition: 'all 0.5s ease',
          animation: 'aura-supernova 8s infinite ease-in-out' 
        }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', borderRadius: '50%' }} alt="ADN" />
        </div>

        {!mainMode && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '8px', fontWeight: '300' }}>ELIGE TU CAMINO</h2>
            {/* FRASE ICÓNICA RESTAURADA */}
            <p style={{ fontSize: '10px', letterSpacing: '2.5px', color: '#fdfcf5', opacity: 0.8, marginBottom: '25px', fontWeight: '200' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
            
            <button className="frecuencias-choice-button" onClick={() => setMainMode('frecuencias')}>Frecuencias</button>
            <button className="meditaciones-choice-button" onClick={() => setMainMode('meditaciones')}>Meditaciones</button>
            <button style={{ width: '75%', maxWidth: '270px', padding: '18px', borderRadius: '40px', border: '1.5px solid #d4af37', background: 'rgba(212, 175, 55, 0.05)', color: '#fdfcf5', fontSize: '12px', letterSpacing: '4px' }} onClick={() => setMainMode('experiencias')}>
              💎 EXPERIENCIAS
            </button>
          </div>
        )}

        {mainMode && !activeCategory && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '11px', letterSpacing: '5px', color: accentColor, textAlign: 'center', marginBottom: '35px', fontWeight: 'bold' }}>{mainMode.toUpperCase()}</p>
            <div className="category-stack">
              {["MENTE", "CUERPO", "EXPANSIÓN", "COHERENCIA"].map(cat => (
                <div key={cat} onClick={() => setActiveCategory(cat)} className="sub-category-card" style={{ borderColor: `${accentColor}88` }}>
                  <span style={{ fontWeight: 'bold' }}>{cat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === "MENTE" && !activeSub && (
          <div className="category-stack">
            <p style={{ fontSize: '11px', letterSpacing: '5px', color: accentColor, textAlign: 'center', marginBottom: '35px', fontWeight: 'bold' }}>RESONANCIA MENTE</p>
            <div className="category-stack">
              {Object.keys(subCategoryTitles).map(sub => (
                <div key={sub} onClick={() => setActiveSub(sub)} className="sub-category-card" style={{ borderColor: `${accentColor}88` }}>
                  <span style={{ fontWeight: 'bold' }}>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSub && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '11px', letterSpacing: '3px', color: accentColor, textAlign: 'center', marginBottom: '25px', fontWeight: 'bold' }}>{subCategoryTitles[activeSub] || activeSub}</p>
            {(tracks[activeSub] || []).map((track, i) => (
              <div key={i} className="track-card" onClick={() => setSelectedTrack(track)} style={{ borderLeft: `4px solid ${accentColor}` }}>
                <div style={{ textAlign: 'left', width: '80%' }}>
                  <div style={{ fontSize: '15px', color: 'white', fontWeight: '400' }}>{track.name}</div>
                  {/* DESCRIPCIÓN BLANCA, DELGADA Y SIN RESALTADO */}
                  <div style={{ fontSize: '10px', color: '#fdfcf5', opacity: 0.7, marginTop: '5px', fontWeight: '200', letterSpacing: '1px' }}>{track.desc}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '9px', color: accentColor, opacity: 0.7 }}>{track.hz}</div>
                  <span style={{ color: accentColor, fontSize: '18px' }}>▶</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;