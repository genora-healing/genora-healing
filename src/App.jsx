import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 40px rgba(34, 211, 238, 0.3); }
    50% { transform: scale(1.02); box-shadow: 0 0 70px rgba(34, 211, 238, 0.6), 0 0 120px rgba(34, 211, 238, 0.3); }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; }

  .frecuencia-card {
    transition: all 0.3s ease; 
    padding: 12px 10px !important; 
    border-radius: 40px;
    border: 1.5px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.02);
    text-align: center;
    cursor: pointer;
    min-height: 65px !important;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .frecuencia-card:active { transform: scale(0.96); background: rgba(34, 211, 238, 0.05); }

  .adn-container {
    width: 160px; height: 160px; background-color: #000; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden; position: relative;
  }
  .adn-img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [view, setView] = useState('categories'); // 'categories' o 'list'
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const categories = ["MENTE", "EMOCIONES", "CUERPO", "EXPANSIÓN"];
  
  const tracks = [
    { id: "01", category: "MENTE", name: "Alpha Integración", hz: "8 – 10 Hz" },
    { id: "02", category: "MENTE", name: "Alpha Creator", hz: "8 – 12 Hz" },
    { id: "03", category: "EMOCIONES", name: "Theta Healing", hz: "4 – 7 Hz" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '180px', animation: 'logo-breathe 3s infinite ease-in-out' }} alt="Logo" />
      </div>
    );
  }

  // PANTALLA 2: REPRODUCTOR
  if (selectedTrack) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <style>{inlineStyles}</style>
        <button onClick={() => setSelectedTrack(null)} style={{ position: 'absolute', top: '30px', left: '30px', background: 'none', border: 'none', color: 'white', fontSize: '24px' }}>✕</button>
        <div className="adn-container" style={{ width: '220px', height: '220px', marginBottom: '40px', animation: isPlaying ? 'aura-supernova 4s infinite' : 'none' }}>
           <img src="/imagenes/adn-icon.png" className="adn-img" style={{ filter: 'drop-shadow(0 0 30px #22d3ee)' }} />
        </div>
        <h2 style={{ letterSpacing: '3px', fontWeight: '200' }}>{selectedTrack.name}</h2>
        <p style={{ color: '#22d3ee' }}>{selectedTrack.hz}</p>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '70px', height: '70px', borderRadius: '50%', border: '1px solid #22d3ee', background: 'none', marginTop: '30px', color: 'white' }}>
          {isPlaying ? '||' : '▶'}
        </button>
      </div>
    );
  }

  // PANTALLA 1: CATEGORÍAS Y LISTAS
  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <style>{inlineStyles}</style>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        {view === 'list' ? (
          <button onClick={() => setView('categories')} style={{ background: 'none', border: 'none', color: '#22d3ee', fontSize: '20px' }}>‹ VOLVER</button>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '140px', width: 'auto', objectFit: 'contain' }} alt="Logo" />
        )}
        <div style={{ fontSize: '11px', color: '#22d3ee', border: '1px solid rgba(34, 211, 238, 0.2)', padding: '5px 15px', borderRadius: '20px' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="adn-container" style={{ marginBottom: '40px', animation: 'aura-supernova 8s infinite ease-in-out' }}>
          <img src="/imagenes/adn-icon.png" className="adn-img" style={{ filter: 'drop-shadow(0 0 10px #22d3ee)' }} />
        </div>

        <div style={{ width: '100%', maxWidth: '480px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {view === 'categories' ? (
            categories.map(cat => (
              <div key={cat} className="frecuencia-card" onClick={() => { setActiveCategory(cat); setView('list'); }}>
                <div style={{ fontSize: '12px', letterSpacing: '2px', fontWeight: '300' }}>{cat}</div>
              </div>
            ))
          ) : (
            tracks.filter(t => t.category === activeCategory).map(track => (
              <div key={track.id} className="frecuencia-card" onClick={() => setSelectedTrack(track)}>
                <div style={{ fontSize: '11px', letterSpacing: '1px' }}>{track.name}</div>
                <div style={{ fontSize: '8px', color: '#22d3ee' }}>{track.hz}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;