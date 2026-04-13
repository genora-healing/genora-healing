import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  /* --- CAJA FUERTE MAESTRA GENORA (INTOCABLE) --- */
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

  /* ESTILO DE BOTONES (PANTALLA 3 - LISTA) */
  .frecuencia-card {
    transition: all 0.3s ease; 
    padding: 16px 8px !important;
    border-radius: 40px;
    border: 1px solid rgba(34, 211, 238, 0.2); 
    background: rgba(255,255,255,0.02);
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 85px;
  }
  .frecuencia-card:active { transform: scale(0.98); background: rgba(34, 211, 238, 0.05); }

  @media (max-width: 768px) {
    .frecuencia-name-text {
      font-size: 11px !important; 
      letter-spacing: 1.5px !important;
      text-transform: uppercase;
      font-weight: 300;
      color: white;
    }
    .frecuencia-hz-text {
      font-size: 8px !important;
      color: #22d3ee;
      margin-top: 5px;
      opacity: 0.5;
    }
  }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [openCat, setOpenCat] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
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
        audioRef.current.play().catch(e => console.log("Frecuencia activa..."));
        if (selectedTime && selectedTime !== '∞') {
          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => setIsPlaying(false), selectedTime * 60000);
        }
      } else {
        audioRef.current.pause();
        if (timerRef.current) clearTimeout(timerRef.current);
      }
    }
  }, [isPlaying, selectedTime]);

  // Lista de prueba para validar tamaños
  const tracks = [
    { id: "01", name: "Alpha Integración", hz: "8-10 Hz" },
    { id: "02", name: "Alpha Creator", hz: "8-12 Hz" },
    { id: "03", name: "Delta Repair", hz: "1-4 Hz" }
  ];

  const categorias = ["Mente", "Cuerpo", "Emociones", "Expansión"];

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', maxWidth: '80%', animation: 'logo-breathe 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '4px', color: '#22d3ee', textTransform: 'uppercase', marginTop: '30px', marginBottom: '5px' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '10px', fontWeight: '200', letterSpacing: '3px', color: '#fdfcf5', opacity: 0.7, marginTop: '0px' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
      </div>
    );
  }

  if (selectedTrack) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <style>{inlineStyles}</style>
        <audio ref={audioRef} src={`/audio/${selectedTrack.id}.mp3`} loop={selectedTime === '∞'} />
        <button onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} style={{ position: 'absolute', top: '25px', left: '25px', background: 'none', border: 'none', color: 'white', fontSize: '24px', opacity: 0.4 }}>✕</button>
        <p style={{ fontSize: '9px', letterSpacing: '3px', color: '#fdfcf5', opacity: 0.6, marginBottom: '60px', textTransform: 'uppercase', marginTop: '-75px' }}>Genora • Alpha 1</p>
        
        {/* REPRODUCTOR: CÍRCULO 210px CON BLINDAJE CIRCULAR (INTOCABLE) */}
        <div style={{ width: '210px', height: '210px', backgroundColor: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', animation: isPlaying ? 'aura-supernova 4s infinite ease-in-out' : 'none', boxShadow: '0 0 100px rgba(34, 211, 238, 0.3)', position: 'relative', zIndex: 1 }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '120%', height: '120%', objectFit: 'cover', borderRadius: '50%', filter: `drop-shadow(0 0 40px #22d3ee)` }} alt="ADN" />
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: '200', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '4px' }}>{selectedTrack.name}</h2>
        <p style={{ color: '#22d3ee', fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold', marginBottom: '20px' }}>{selectedTrack.hz}</p>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
          {[15, 30, 60, '∞'].map((time) => (
            <button key={time} onClick={() => setSelectedTime(time)} className="time-button" style={{ width: '58px', padding: '9px 0', border: `1px solid ${selectedTime === time ? '#22d3ee' : 'rgba(255,255,255,0.1)'}`, background: selectedTime === time ? '#22d3ee22' : 'none', color: 'white', fontSize: '12px' }}>{time === '∞' ? time : `${time}'`}</button>
          ))}
        </div>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '80px', height: '80px', borderRadius: '50%', border: `1px solid #22d3ee`, background: isPlaying ? `#22d3ee11` : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '26px', color: 'white', marginLeft: isPlaying ? '0' : '5px' }}>{isPlaying ? '||' : '▶'}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px' }}>
      <style>{inlineStyles}</style>
      
      {/* CABECERA BLINDADA: LOGO GENORA RESTAURADO (SIN CÍRCULO) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', paddingTop: '10px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '100px', width: 'auto', objectFit: 'contain' }} alt="Logo" />
        <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', fontWeight: 'bold', border: '1px solid rgba(34, 211, 238, 0.2)', padding: '5px 15px', borderRadius: '20px' }}>ES | EN</div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* LISTA: ADN CENTRAL CON BLINDAJE CIRCULAR (ELIMINA EL CUADRADO - PASO 2.3.11) */}
        <div style={{ width: '160px', height: '160px', backgroundColor: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', animation: 'aura-supernova 6s infinite ease-in-out', position: 'relative' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '125%', height: '125%', objectFit: 'cover', borderRadius: '50%', filter: `drop-shadow(0 0 10px #22d3ee)` }} alt="ADN" />
        </div>
        
        <input 
          type="text" 
          placeholder="BUSCAR..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          style={{ width: '90%', maxWidth: '400px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '25px', padding: '12px', color: 'white', textAlign: 'center', fontSize: '12px', letterSpacing: '3px', marginBottom: '45px', outline: 'none' }} 
        />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '480px' }}>
          {view === 'categories' ? (
            categorias.map(cat => (
              <div key={cat} onClick={() => { setActiveCategory(cat); setView('list'); }} className="frecuencia-card">
                <div style={{ fontSize: '12px', letterSpacing: '2px', fontWeight: '300', textTransform: 'uppercase' }}>{cat}</div>
              </div>
            ))
          ) : (
            tracks.filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase())).map(track => (
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