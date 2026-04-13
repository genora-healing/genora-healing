import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  /* --- CAJA FUERTE MAESTRA: INTOCABLE --- */
  @keyframes logo-breathe {
    0%, 100% { transform: scale(1); opacity: 0.95; }
    50% { transform: scale(1.05); opacity: 1; }
  }
  
  @keyframes aura-supernova {
    0%, 100% { 
      transform: scale(1); 
      box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); 
    }
    50% { 
      transform: scale(1.03); 
      box-shadow: 
        0 0 50px rgba(34, 211, 238, 0.9),
        0 0 120px rgba(34, 211, 238, 0.6),
        0 0 250px rgba(34, 211, 238, 0.4),
        0 0 450px rgba(34, 211, 238, 0.2);
    }
  }

  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .time-button { transition: all 0.2s ease; cursor: pointer; border-radius: 40px !important; }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; }

  /* BOTÓN VOLVER CIRCULAR (RESTABLECIDO) */
  .back-button-circular {
    width: 42px; height: 42px; border-radius: 50%;
    border: 1px solid rgba(34, 211, 238, 0.4);
    background: rgba(34, 211, 238, 0.05);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.3s ease;
  }

  /* --- MICRO-AJUSTE AUTORIZADO: TAMAÑO DE BOTONES PEQUEÑOS --- */
  .frecuencia-card {
    transition: all 0.3s ease;
    padding: 8px 5px !important; 
    border-radius: 35px;
    border: 1px solid rgba(34, 211, 238, 0.15); 
    background: rgba(255,255,255,0.015);
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 58px !important; /* El tamaño fino que te gusta */
  }

  @media (max-width: 768px) {
    .frecuencia-name-text {
      font-size: 10px !important; 
      letter-spacing: 1.2px !important;
      text-transform: uppercase;
      font-weight: 300;
      color: white;
    }
    .frecuencia-hz-text {
      font-size: 7px !important;
      color: #22d3ee;
      margin-top: 3px;
    }
  }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState('categories');
  const [activeCategory, setActiveCategory] = useState(null);
  
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  const tracks = [
    { id: "01", category: "MENTE", name: "Alpha Integración", hz: "8 – 10 Hz" },
    { id: "02", category: "MENTE", name: "Alpha Creator", hz: "8 – 12 Hz" },
    { id: "03", category: "EMOCIONES", name: "Theta Healing", hz: "4 – 7 Hz" }
  ];

  const categories = ["MENTE", "EMOCIONES", "CUERPO", "EXPANSIÓN"];

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', maxWidth: '80%', animation: 'logo-breathe 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '4px', color: '#22d3ee', textTransform: 'uppercase', marginTop: '30px' }}>RESONANCIA ORIGEN</h1>
      </div>
    );
  }

  // PANTALLA REPRODUCTOR (BLINDADA)
  if (selectedTrack) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <style>{inlineStyles}</style>
        <div onClick={() => setSelectedTrack(null)} className="back-button-circular" style={{ position: 'absolute', top: '25px', left: '25px', border: '1px solid rgba(255,255,255,0.2)' }}>
             <span style={{ color: 'white', fontSize: '20px', marginLeft: '-2px', opacity: 0.7 }}>‹</span>
        </div>
        <div style={{ width: '210px', height: '210px', backgroundColor: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', animation: isPlaying ? 'aura-supernova 4s infinite ease-in-out' : 'none', boxShadow: '0 0 100px rgba(34, 211, 238, 0.3)' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '120%', filter: 'drop-shadow(0 0 40px #22d3ee)' }} />
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: '200', letterSpacing: '4px', textTransform: 'uppercase' }}>{selectedTrack.name}</h2>
        <p style={{ color: '#22d3ee', fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold' }}>{selectedTrack.hz}</p>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px solid #22d3ee', background: 'none', marginTop: '40px' }}>
          <span style={{ fontSize: '26px' }}>{isPlaying ? '||' : '▶'}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px' }}>
      <style>{inlineStyles}</style>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', paddingTop: '10px' }}>
        {view === 'list' ? (
          <div onClick={() => setView('categories')} className="back-button-circular">
             <span style={{ color: '#22d3ee', fontSize: '20px', marginLeft: '-2px' }}>‹</span>
          </div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '100px', width: 'auto', objectFit: 'contain' }} alt="Logo" />
        )}
        <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', border: '1px solid rgba(34, 211, 238, 0.2)', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {view === 'list' && <p style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '25px', textTransform: 'uppercase', fontWeight: 'bold' }}>{activeCategory}</p>}
        
        <div style={{ width: '150px', height: '150px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', animation: 'aura-supernova 8s infinite ease-in-out', overflow: 'hidden' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '125%', height: '125%', objectFit: 'cover', borderRadius: '50%', filter: 'drop-shadow(0 0 10px #22d3ee)' }} />
        </div>

        <input 
          type="text" placeholder="BUSCAR..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
          style={{ width: '90%', maxWidth: '400px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '25px', padding: '12px', color: 'white', fontSize: '12px', textAlign: 'center', letterSpacing: '3px', marginBottom: '45px', outline: 'none' }} 
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '480px' }}>
          {view === 'categories' ? (
            categories.map(cat => (
              <div key={cat} onClick={() => { setActiveCategory(cat); setView('list'); }} className="frecuencia-card">
                <div style={{ fontSize: '12px', letterSpacing: '2px', fontWeight: '300' }}>{cat}</div>
              </div>
            ))
          ) : (
            tracks.filter(t => t.category === activeCategory).map(track => (
              <div key={track.id} onClick={() => setSelectedTrack(track)} className="frecuencia-card">
                <div className="frecuencia-name-text">{track.name}</div>
                <div className="frecuencia-hz-text">{track.hz}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;