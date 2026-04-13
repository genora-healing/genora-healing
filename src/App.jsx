import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); }
    50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(34, 211, 238, 0.9), 0 0 120px rgba(34, 211, 238, 0.6), 0 0 250px rgba(34, 211, 238, 0.4), 0 0 450px rgba(34, 211, 238, 0.2); }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .time-button { transition: all 0.2s ease; cursor: pointer; border-radius: 40px !important; }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; }

  /* BOTÓN VOLVER CIRCULAR (ESTILO ADN) */
  .back-button-circular {
    width: 45px; height: 45px; border-radius: 50%;
    border: 1px solid rgba(34, 211, 238, 0.4);
    background: rgba(34, 211, 238, 0.05);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; box-shadow: 0 0 15px rgba(34, 211, 238, 0.2);
    transition: all 0.3s ease;
  }
  .back-button-circular:active { transform: scale(0.9); box-shadow: 0 0 5px rgba(34, 211, 238, 0.5); }

  .frecuencia-card {
    transition: all 0.3s ease; padding: 12px 8px; border-radius: 35px;
    border: 1px solid rgba(34, 211, 238, 0.15); background: rgba(255,255,255,0.02);
    text-align: center; cursor: pointer; display: flex; flex-direction: column;
    justify-content: center; align-items: center; min-height: 65px;
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

  useEffect(() => {
    if (audioRef.current && selectedTrack) {
      audioRef.current.load();
      if (isPlaying) audioRef.current.play().catch(e => console.log(e));
    }
  }, [selectedTrack]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        if (selectedTime && selectedTime !== '∞') {
          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => setIsPlaying(false), selectedTime * 60000);
        }
      } else { audioRef.current.pause(); }
    }
  }, [isPlaying, selectedTime]);

  const tracks = [
    { id: "01", category: "MENTE", name: "Alpha Integración", hz: "8 – 10 Hz", url: "/audio/alpha-integration.mp3" },
    { id: "02", category: "MENTE", name: "Alpha Creator", hz: "8 – 12 Hz", url: "/audio/alpha-creator.mp3" },
    { id: "03", category: "EMOCIONES", name: "Theta Healing", hz: "4 – 7 Hz", url: "/audio/theta.mp3" },
    { id: "04", category: "CUERPO", name: "Delta Repair", hz: "1 – 4 Hz", url: "/audio/delta.mp3" },
    { id: "05", category: "EXPANSIÓN", name: "Gaia Vision", hz: "8,3 Hz", url: "/audio/gaia-vision.mp3" }
  ];

  const categories = ["MENTE", "EMOCIONES", "CUERPO", "EXPANSIÓN"];

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', maxWidth: '80%', animation: 'logo-breathe 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '4px', color: '#22d3ee', textTransform: 'uppercase', marginTop: '30px' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '10px', fontWeight: '200', letterSpacing: '3px', color: '#fdfcf5', opacity: 0.7 }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
      </div>
    );
  }

  if (selectedTrack) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <style>{inlineStyles}</style>
        <audio ref={audioRef} src={selectedTrack.url} loop={selectedTime === '∞'} />
        <button onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} style={{ position: 'absolute', top: '25px', left: '25px', background: 'none', border: 'none', color: 'white', fontSize: '24px', opacity: 0.4, cursor: 'pointer' }}>✕</button>
        <p style={{ fontSize: '9px', letterSpacing: '3px', color: '#fdfcf5', opacity: 0.6, marginBottom: '60px', textTransform: 'uppercase', marginTop: '-75px' }}>Genora • {selectedTrack.category}</p>
        <div style={{ width: '210px', height: '210px', backgroundColor: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', animation: isPlaying ? 'aura-supernova 4s infinite ease-in-out' : 'none', boxShadow: '0 0 100px rgba(34, 211, 238, 0.3)' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '120%', filter: 'drop-shadow(0 0 40px #22d3ee)' }} alt="ADN" />
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: '200', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '4px' }}>{selectedTrack.name}</h2>
        <p style={{ color: '#22d3ee', fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold' }}>{selectedTrack.hz}</p>
        <div style={{ display: 'flex', gap: '12px', margin: '40px 0' }}>
          {[15, 30, 60, '∞'].map((t) => (
            <button key={t} onClick={() => setSelectedTime(t)} className="time-button" style={{ width: '58px', padding: '9px 0', border: `1px solid ${selectedTime === t ? '#22d3ee' : 'rgba(255,255,255,0.1)'}`, background: selectedTime === t ? '#22d3ee22' : 'none', color: 'white' }}>{t === '∞' ? t : `${t}'`}</button>
          ))}
        </div>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px solid #22d3ee', background: 'none', cursor: 'pointer' }}>
          <span style={{ fontSize: '26px', color: 'white', marginLeft: isPlaying ? '0' : '5px' }}>{isPlaying ? '||' : '▶'}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px' }}>
      <style>{inlineStyles}</style>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', paddingTop: '10px' }}>
        {view === 'list' ? (
          /* BOTÓN VOLVER CIRCULAR ESTILO ADN */
          <div onClick={() => setView('categories')} className="back-button-circular">
             <span style={{ color: '#22d3ee', fontSize: '20px', fontWeight: 'bold', marginLeft: '-2px' }}>‹</span>
          </div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '100px', width: 'auto', objectFit: 'contain' }} alt="Logo" />
        )}
        
        <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', border: '1px solid rgba(34, 211, 238, 0.2)', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '150px', height: '150px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', animation: 'aura-supernova 8s infinite ease-in-out' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '125%', filter: 'drop-shadow(0 0 10px #22d3ee)' }} alt="ADN" />
        </div>

        <input 
          type="text" placeholder="BUSCAR..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
          style={{ width: '90%', maxWidth: '400px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '25px', padding: '12px', color: 'white', fontSize: '12px', textAlign: 'center', letterSpacing: '3px', marginBottom: '45px', outline: 'none' }} 
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '480px' }}>
          {view === 'categories' ? (
            categories.map(cat => (
              <div key={cat} onClick={() => { setActiveCategory(cat); setView('list'); }} className="frecuencia-card">
                <div style={{ fontSize: '12px', letterSpacing: '2px', fontWeight: '300', textTransform: 'uppercase' }}>{cat}</div>
              </div>
            ))
          ) : (
            tracks.filter(t => t.category === activeCategory).map(track => (
              <div key={track.id} onClick={() => setSelectedTrack(track)} className="frecuencia-card">
                <div style={{ fontSize: '11px', letterSpacing: '1.2px', textTransform: 'uppercase' }}>{track.name}</div>
                <div style={{ fontSize: '8px', color: '#22d3ee', marginTop: '5px' }}>{track.hz}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;