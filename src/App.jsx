import React, { useState, useEffect } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  
  @keyframes aura-supernova {
    0%, 100% { 
      transform: scale(1); 
      box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); 
    }
    50% {
      transform: scale(1.03); 
      box-shadow: 0 0 50px rgba(34, 211, 238, 0.9), 0 0 120px rgba(34, 211, 238, 0.6), 0 0 250px rgba(34, 211, 238, 0.4), 0 0 450px rgba(34, 211, 238, 0.2);
    }
  }

  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; font-family: sans-serif; color: white; }

  .main-choice-button {
    width: 90%; max-width: 320px; padding: 20px; margin: 10px 0;
    border-radius: 40px; border: 1px solid rgba(34, 211, 238, 0.3);
    background: rgba(34, 211, 238, 0.03); color: white;
    font-size: 13px; letter-spacing: 4px; text-transform: uppercase;
    cursor: pointer; transition: all 0.4s ease;
  }

  /* BOTÓN PREMIUM: EXPERIENCIAS GENORA */
  .premium-choice-button {
    width: 90%; max-width: 320px; padding: 20px; margin: 10px 0;
    border-radius: 40px; 
    border: 1px solid #d4af37; /* Dorado Mate */
    background: rgba(212, 175, 55, 0.05); color: #fdfcf5;
    font-size: 13px; letter-spacing: 4px; text-transform: uppercase;
    cursor: pointer; transition: all 0.4s ease;
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
    display: flex; align-items: center; justify-content: center; gap: 10px;
  }

  .sub-category-card {
    transition: all 0.3s ease; padding: 10px 4px; border-radius: 35px;
    border: 1px solid rgba(34, 211, 238, 0.15); background: rgba(255,255,255,0.015);
    text-align: center; cursor: pointer; min-height: 52px;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    width: 100%; max-width: 175px; margin: 0 auto;
  }

  .back-button-genora {
    width: 42px; height: 42px; border-radius: 50%;
    border: 1px solid rgba(34, 211, 238, 0.4);
    background: rgba(34, 211, 238, 0.05);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
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
    meditaciones: ["MENTE", "CUERPO", "RELACIONES", "ABUNDANCIA", "LINAJE ANCESTRAL", "RECALIBRACIÓN"],
    experiencias: ["ACTIVACIÓN DONES", "ABUNDANCIA G5", "ESTADOS PROFUNDOS", "PROTOCOLOS ÉLITE"]
  };

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', animation: 'logo-breathe 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '4px', color: '#22d3ee', textTransform: 'uppercase', marginTop: '35px', marginBottom: '8px' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '10px', fontWeight: '200', letterSpacing: '3px', color: '#fdfcf5', opacity: 0.7, textTransform: 'uppercase' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <style>{inlineStyles}</style>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', paddingTop: '10px' }}>
        {mainMode ? (
          <div onClick={() => { activeSub ? setActiveSub(null) : setMainMode(null) }} className="back-button-genora">
             <span style={{ color: '#22d3ee', fontSize: '20px' }}>‹</span>
          </div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '105px', width: 'auto', objectFit: 'contain' }} alt="Logo" />
        )}
        <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', border: '1px solid rgba(34, 211, 238, 0.4)', padding: '6px 16px', borderRadius: '20px', fontWeight: 'bold' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ 
          width: mainMode ? '130px' : '170px', height: mainMode ? '130px' : '170px', 
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
          marginBottom: '35px', transition: 'all 0.5s ease',
          animation: 'aura-supernova 8s infinite ease-in-out' 
        }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', objectFit: 'contain' }} alt="ADN" />
        </div>

        {!mainMode ? (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', opacity: 0.8, marginBottom: '20px', textTransform: 'uppercase' }}>ELIGE TU CAMINO</h2>
            <button className="main-choice-button" onClick={() => setMainMode('frecuencias')}>Frecuencias</button>
            <button className="main-choice-button" onClick={() => setMainMode('meditaciones')}>Meditaciones</button>
            
            {/* EL BOTÓN PREMIUM */}
            <button className="premium-choice-button" onClick={() => setMainMode('experiencias')}>
              <span style={{ fontSize: '16px' }}>💎</span> EXPERIENCIAS GENORA
            </button>
          </div>
        ) : (
          <div className="fade-in-smooth" style={{ width: '100%', maxWidth: '390px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '5px', color: mainMode === 'experiencias' ? '#d4af37' : '#22d3ee', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase', fontWeight: 'bold' }}>
              {mainMode === 'experiencias' ? '💎 EXPERIENCIAS GENORA' : mainMode}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', justifyContent: 'center', width: '100%' }}>
              {subCategories[mainMode].map(sub => (
                <div key={sub} onClick={() => setActiveSub(sub)} className="sub-category-card" style={{ borderColor: mainMode === 'experiencias' ? 'rgba(212, 175, 55, 0.3)' : 'rgba(34, 211, 238, 0.15)' }}>
                  <span style={{ fontSize: '9px', letterSpacing: '2px', fontWeight: 'bold' }}>{sub}</span>
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