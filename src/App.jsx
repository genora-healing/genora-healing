import React, { useState, useEffect, useRef } from 'react';

// Estilos Blindados para Genora
const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); }
    50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(34, 211, 238, 0.9), 0 0 120px rgba(34, 211, 238, 0.6), 0 0 250px rgba(34, 211, 238, 0.4); }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; font-family: sans-serif; color: white; }

  .choice-btn-base {
    width: 75%; max-width: 270px; padding: 18px; margin: 10px 0;
    border-radius: 40px; text-transform: uppercase; letter-spacing: 4px; font-size: 12px; cursor: pointer; transition: 0.4s;
  }
  .frecuencias-choice-button { border: 1.5px solid rgba(34, 211, 238, 0.6); background: rgba(34, 211, 238, 0.05); color: white; }
  .meditaciones-choice-button { border: 1.5px solid rgba(168, 85, 247, 0.6); background: rgba(168, 85, 247, 0.05); color: white; }

  .category-stack { display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; }
  
  .sub-category-card {
    width: 70%; max-width: 250px; padding: 18px; border-radius: 40px;
    background: rgba(34, 211, 238, 0.02); border: 1.5px solid rgba(34, 211, 238, 0.5);
    text-align: center; cursor: pointer; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: white;
  }

  .track-card {
    width: 80%; max-width: 310px; padding: 18px 25px; margin: 8px 0; border-radius: 35px;
    background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex; justify-content: space-between; align-items: center; cursor: pointer;
  }

  .back-button-genora {
    width: 42px; height: 42px; border-radius: 50%; border: 1.5px solid rgba(34, 211, 238, 0.6);
    background: rgba(34, 211, 238, 0.1); display: flex; align-items: center; justify-content: center; cursor: pointer;
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

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const tracks = {
    "APRENDIZAJE": [
      { name: "Alpha Integración", hz: "8 – 10 Hz", url: "/audio/alpha-integration.mp3", desc: "Facilita el aprendizaje y la integración de información desde un estado de calma y enfoque." },
      { name: "Alpha Learning", hz: "12 – 14 Hz", url: "/audio/alpha-learning.mp3", desc: "Favorece la absorción pasiva de información y el aprendizaje sin esfuerzo." },
      { name: "Alpha Intelligence", hz: "11,5 – 14,5 Hz", url: "/audio/alpha-intelligence.mp3", desc: "Estimula la eficiencia mental y mejora la capacidad de procesamiento cognitivo." },
      { name: "Beta Focus", hz: "15 – 18 Hz", url: "/audio/beta-focus.mp3", desc: "Incrementa la concentración, la vigilancia y la claridad mental sostenida." }
    ],
    "CREATIVIDAD": [
      { name: "Alpha Creator", hz: "8 – 12 Hz", url: "/audio/alpha-creator.mp3", desc: "Activa la creatividad, el pensamiento positivo y la resolución de problemas." },
      { name: "Beta Solution", hz: "12 – 36 Hz", url: "/audio/beta-solution.mp3", desc: "Estimula la resolución analítica y la toma de decisiones estructuradas." },
      { name: "Beta Logic", hz: "13 – 40 Hz", url: "/audio/beta-logic.mp3", desc: "Potencia el pensamiento lógico, analítico y la ejecución mental." }
    ],
    "CLARIDAD": [
      { name: "Alpha Balance Mind", hz: "11 Hz", url: "/audio/alpha-balance-mind.mp3", desc: "Promueve alerta con relajación, reduciendo tensión y mejorando estabilidad mental." },
      { name: "Alpha Center", hz: "12 Hz", url: "/audio/alpha-center.mp3", desc: "Favorece la centración, claridad mental y expresión consciente." },
      { name: "Beta Decision", hz: "13,8 Hz", url: "/audio/beta-decision.mp3", desc: "Activa la toma de decisiones y la claridad en momentos clave." }
    ],
    "RENDIMIENTO": [
      { name: "Beta Active Mind", hz: "13 – 27 Hz", url: "/audio/beta-active-mind.mp3", desc: "Aumenta la atención externa y la actividad mental en estado despierto." },
      { name: "Beta High Performance", hz: "14 – 30 Hz", url: "/audio/beta-high-performance.mp3", desc: "Estimula el análisis lógico, cálculos mentales y funciones cognitivas complejas." },
      { name: "Beta Vital Mind", hz: "14 Hz", url: "/audio/beta-vital-mind.mp3", desc: "Genera alerta, energía mental y enfoque en tareas." },
      { name: "Beta Cortex", hz: "15,4 Hz", url: "/audio/beta-cortex.mp3", desc: "Estimula la actividad cerebral asociada a inteligencia y procesamiento avanzado." },
      { name: "Alpha Focus", hz: "11 – 14 Hz", url: "/audio/alpha-focus.mp3", desc: "Activa Concentración y Enfoque Mental Sostenido." },
      { name: "Beta Attention", hz: "12 – 15 Hz", url: "/audio/beta-attention.mp3", desc: "Activa la atención consciente y la capacidad de respuesta mental, permitiendo interactuar con el entorno de forma clara, ágil y enfocada." }
    ]
  };

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '180px', borderRadius: '50%', animation: 'logo-breathe 3s infinite ease-in-out', objectFit: 'contain' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', letterSpacing: '4px', color: '#22d3ee', marginTop: '35px' }}>RESONANCIA ORIGEN</h1>
      </div>
    );
  }

  const accentColor = '#22d3ee';

  if (selectedTrack) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <button onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} style={{ position: 'absolute', top: '35px', left: '30px', background: 'none', border: 'none', color: accentColor, fontSize: '40px', cursor: 'pointer' }}>‹</button>
        <div style={{ width: '220px', height: '220px', marginBottom: '30px', animation: isPlaying ? 'logo-breathe 4s infinite' : 'none' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', filter: `drop-shadow(0 0 15px ${accentColor})` }} />
        </div>
        <h2 style={{ fontSize: '24px', letterSpacing: '3px' }}>{selectedTrack.name}</h2>
        <p style={{ color: accentColor, fontSize: '12px', fontWeight: 'bold', marginBottom: '20px' }}>{selectedTrack.hz}</p>
        <p style={{ fontSize: '13px', opacity: 0.7, maxWidth: '300px', lineHeight: '1.5' }}>{selectedTrack.desc}</p>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '85px', height: '85px', borderRadius: '50%', border: `1px solid ${accentColor}`, background: 'none', color: 'white', fontSize: '30px', marginTop: '40px' }}>{isPlaying ? '||' : '▶'}</button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', padding: '20px' }}>
      <style>{inlineStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        {mainMode ? (
          <div onClick={() => activeSub ? setActiveSub(null) : (activeCategory ? setActiveCategory(null) : setMainMode(null))} className="back-button-genora">
             <span style={{ color: accentColor, fontSize: '20px', fontWeight: 'bold' }}>‹</span>
          </div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '95px', borderRadius: '50%', objectFit: 'contain' }} />
        )}
        <div style={{ fontSize: '10px', color: accentColor, border: `1px solid ${accentColor}88`, padding: '5px 14px', borderRadius: '20px', fontWeight: 'bold' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ 
          width: activeSub ? '110px' : (mainMode ? '130px' : '165px'), 
          height: activeSub ? '110px' : (mainMode ? '130px' : '165px'), 
          marginBottom: '35px', animation: 'aura-supernova 8s infinite ease-in-out' 
        }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', borderRadius: '50%' }} />
        </div>

        {!mainMode && (
          <div className="category-stack">
            <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '20px' }}>ELIGE TU CAMINO</h2>
            <button className="choice-btn-base frecuencias-choice-button" onClick={() => setMainMode('resonancia')}>RESONANCIA</button>
            <button className="choice-btn-base meditaciones-choice-button">INMERSIÓN</button>
          </div>
        )}

        {mainMode === 'resonancia' && !activeCategory && (
          <div className="category-stack">
            <p style={{ fontSize: '11px', letterSpacing: '5px', color: accentColor, marginBottom: '35px', fontWeight: 'bold' }}>RESONANCIA</p>
            {["MENTE", "CUERPO", "EXPANSIÓN", "COHERENCIA"].map(cat => (
              <div key={cat} onClick={() => setActiveCategory(cat)} className="sub-category-card">
                <span style={{ fontWeight: 'bold' }}>{cat}</span>
              </div>
            ))}
          </div>
        )}

        {activeCategory === 'MENTE' && !activeSub && (
          <div className="category-stack">
            <p style={{ fontSize: '11px', letterSpacing: '5px', color: accentColor, marginBottom: '35px', fontWeight: 'bold' }}>RESONANCIA | MENTE</p>
            {Object.keys(subCategoryTitles).map(sub => (
              <div key={sub} onClick={() => setActiveSub(sub)} className="sub-category-card">
                <span style={{ fontWeight: 'bold' }}>{sub}</span>
              </div>
            ))}
          </div>
        )}

        {activeSub && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '11px', letterSpacing: '3px', color: accentColor, textAlign: 'center', marginBottom: '25px', fontWeight: 'bold' }}>{subCategoryTitles[activeSub]}</p>
            {(tracks[activeSub] || []).map((track, i) => (
              <div key={i} className="track-card" onClick={() => setSelectedTrack(track)} style={{ borderLeft: `4px solid ${accentColor}` }}>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '15px' }}>{track.name}</div>
                  <div style={{ fontSize: '10px', color: accentColor, marginTop: '4px' }}>{track.hz}</div>
                </div>
                <span style={{ color: accentColor, fontSize: '20px' }}>▶</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;