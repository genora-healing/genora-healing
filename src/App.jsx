import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); }
    50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(34, 211, 238, 0.9), 0 0 120px rgba(34, 211, 238, 0.6), 0 0 250px rgba(34, 211, 238, 0.4), 0 0 450px rgba(34, 211, 238, 0.2); }
  }

  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; font-family: sans-serif; color: white; }

  /* BOTONES MAESTROS: GRANDES Y ELEGANTES */
  .main-choice-button {
    width: 90%; max-width: 400px; padding: 25px; margin: 10px 0;
    border-radius: 40px; border: 1px solid rgba(34, 211, 238, 0.3);
    background: rgba(34, 211, 238, 0.03); color: white;
    font-size: 16px; letter-spacing: 4px; text-transform: uppercase;
    cursor: pointer; transition: all 0.4s ease;
  }
  .main-choice-button:active { background: rgba(34, 211, 238, 0.2); transform: scale(0.98); }

  /* ACORDEÓN / SUB-CATEGORÍAS */
  .sub-category-item {
    width: 85%; padding: 15px; margin: 5px 0;
    border-radius: 30px; border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.02);
    font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
    animation: fadeIn 0.5s ease-out;
  }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mainMode, setMainMode] = useState(null); // 'frecuencias' o 'meditaciones'
  const [activeSub, setActiveSub] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', animation: 'logo-breathe 3s infinite' }} alt="Logo" />
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ padding: '20px', textAlign: 'center' }}>
      <style>{inlineStyles}</style>
      
      {/* ADN SIEMPRE PRESENTE Y BRILLANTE */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
        <div style={{ width: '150px', height: '150px', borderRadius: '50%', animation: 'aura-supernova 8s infinite ease-in-out' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="ADN" />
        </div>
      </div>

      {!mainMode ? (
        /* PANTALLA DE DECISIÓN MAESTRA */
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <button className="main-choice-button" onClick={() => setMainMode('frecuencias')}>Frecuencias</button>
          <button className="main-choice-button" onClick={() => setMainMode('meditaciones')}>Meditaciones</button>
        </div>
      ) : (
        /* PANTALLA DE ACORDEÓN */
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: '#22d3ee', letterSpacing: '3px', fontSize: '10px', marginBottom: '20px' }}>
            SELECCIONA CATEGORÍA DE {mainMode.toUpperCase()}
          </p>
          
          {['MENTE', 'CUERPO', 'RELACIONES', 'ABUNDANCIA', 'EXPANSIÓN'].map(sub => (
            <div key={sub} className="sub-category-item" onClick={() => setActiveSub(sub)}>
              {sub}
            </div>
          ))}

          <button 
            onClick={() => setMainMode(null)} 
            style={{ marginTop: '30px', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '2px' }}
          >
            ‹ VOLVER AL INICIO
          </button>
        </div>
      )}
    </div>
  );
};

export default App;