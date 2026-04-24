import React, { useState, useEffect } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 60px rgba(34, 211, 238, 0.3), 0 0 100px rgba(34, 211, 238, 0.1); }
    50% { transform: scale(1.02); box-shadow: 0 0 40px rgba(34, 211, 238, 0.6), 0 0 180px rgba(34, 211, 238, 0.3); }
  }
  .fade-in-smooth { animation: fadeIn 0.6s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; font-family: sans-serif; color: white; }

  /* BOTONES HOME */
  .frecuencias-choice-button {
    width: 85%; max-width: 280px; padding: 18px; margin: 10px 0;
    border-radius: 40px; border: 1.5px solid rgba(34, 211, 238, 0.6);
    background: rgba(34, 211, 238, 0.05); color: white; font-size: 12px; letter-spacing: 4px; text-transform: uppercase; cursor: pointer;
  }
  .meditaciones-choice-button {
    width: 85%; max-width: 280px; padding: 18px; margin: 10px 0;
    border-radius: 40px; border: 1.5px solid rgba(168, 85, 247, 0.6);
    background: rgba(168, 85, 247, 0.05); color: white; font-size: 12px; letter-spacing: 4px; text-transform: uppercase; cursor: pointer;
  }

  /* PANTALLA 2: CATEGORÍAS */
  .sub-category-card {
    width: 80%; max-width: 260px; padding: 20px; border-radius: 40px;
    background: rgba(255, 255, 255, 0.02); border: 1.5px solid rgba(34, 211, 238, 0.5);
    text-align: center; cursor: pointer; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: white;
  }

  /* PANTALLA 3: LISTA DE PISTAS (ESTILO CÁPSULA) */
  .track-list-container {
    display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; max-width: 340px; margin: 0 auto;
  }
  .track-card {
    width: 100%; padding: 18px 25px; border-radius: 35px;
    background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.3s ease;
  }
  .track-card:active { transform: scale(0.98); background: rgba(255, 255, 255, 0.07); }

  .back-button-genora {
    width: 42px; height: 42px; border-radius: 50%; border: 1.5px solid rgba(34, 211, 238, 0.6);
    background: rgba(34, 211, 238, 0.1); display: flex; align-items: center; justify-content: center; cursor: pointer;
  }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mainMode, setMainMode] = useState(null); 
  const [activeSub, setActiveSub] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  const subCategories = {
    frecuencias: ["MENTE", "CUERPO", "EXPANSIÓN", "COHERENCIA"],
    meditaciones: ["MENTE", "CUERPO", "RELACIONES", "ABUNDANCIA"]
  };

  const tracks = {
    "MENTE": [
      { name: "Alpha Integración", hz: "8 – 10 Hz" },
      { name: "Alpha Creator", hz: "8 – 12 Hz" },
      { name: "Alpha Void", hz: "8 – 13 Hz" },
      { name: "Beta Attention", hz: "12 – 15 Hz" }
    ],
    "CUERPO": [
      { name: "Alpha Eros", hz: "9 Hz" },
      { name: "Alpha Center", hz: "9.4 Hz" }
    ]
  };

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '180px', animation: 'logo-breathe 3s infinite ease-in-out' }} />
        <h1 style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '4px', color: '#22d3ee', marginTop: '35px' }}>RESONANCIA ORIGEN</h1>
      </div>
    );
  }

  // LÓGICA DE NAVEGACIÓN
  const accentColor = mainMode === 'meditaciones' ? '#a855f7' : '#22d3ee';

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <style>{inlineStyles}</style>
      
      {/* HEADER DINÁMICO */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        {mainMode ? (
          <div onClick={() => activeSub ? setActiveSub(null) : setMainMode(null)} className="back-button-genora" style={{ borderColor: accentColor }}>
             <span style={{ color: accentColor, fontSize: '20px', fontWeight: 'bold' }}>‹</span>
          </div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '90px' }} />
        )}
        <div style={{ fontSize: '10px', letterSpacing: '2px', color: accentColor, border: `1px solid ${accentColor}99`, padding: '5px 14px', borderRadius: '20px' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* ADN CENTRAL CON RESPLANDOR (Se hace más pequeño si hay lista) */}
        <div style={{ 
          width: activeSub ? '100px' : (mainMode ? '120px' : '160px'), 
          height: activeSub ? '100px' : (mainMode ? '120px' : '160px'), 
          marginBottom: '30px', transition: 'all 0.5s ease',
          animation: 'aura-supernova 8s infinite ease-in-out' 
        }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', filter: activeSub ? `drop-shadow(0 0 10px ${accentColor})` : 'none' }} />
        </div>

        {/* PANTALLA 1: HOME */}
        {!mainMode && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '20px' }}>ELIGE TU CAMINO</h2>
            <button className="frecuencias-choice-button" onClick={() => setMainMode('frecuencias')}>Frecuencias</button>
            <button className="meditaciones-choice-button" onClick={() => setMainMode('meditaciones')}>Meditaciones</button>
          </div>
        )}

        {/* PANTALLA 2: CATEGORÍAS */}
        {mainMode && !activeSub && (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '11px', letterSpacing: '5px', color: accentColor, marginBottom: '30px', fontWeight: 'bold' }}>{mainMode.toUpperCase()}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', alignItems: 'center' }}>
              {subCategories[mainMode].map(sub => (
                <div key={sub} onClick={() => setActiveSub(sub)} className="sub-category-card" style={{ borderColor: `${accentColor}88` }}>
                  <span style={{ fontWeight: 'bold' }}>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PANTALLA 3: LISTA DE PISTAS (IMG 2) */}
        {activeSub && (
          <div className="fade-in-smooth" style={{ width: '100%' }}>
            <p style={{ fontSize: '11px', letterSpacing: '5px', color: accentColor, textAlign: 'center', marginBottom: '25px', fontWeight: 'bold' }}>{activeSub}</p>
            <div className="track-list-container">
              {(tracks[activeSub] || []).map((track, i) => (
                <div key={i} className="track-card" style={{ borderLeft: `3px solid ${accentColor}` }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '14px', letterSpacing: '1px', marginBottom: '4px' }}>{track.name}</div>
                    <div style={{ fontSize: '10px', color: accentColor, opacity: 0.8 }}>{track.hz}</div>
                  </div>
                  <span style={{ color: accentColor, fontSize: '18px' }}>▶</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;