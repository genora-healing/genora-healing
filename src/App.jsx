import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  /* --- CAJA FUERTE MAESTRA: ESTILOS INTOCABLES (FUSIÓN MAESTRA) --- */
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  
  /* EL RESPLANDOR ESCANDALOSO - Mantenido al máximo */
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); }
    50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(34, 211, 238, 0.9), 0 0 120px rgba(34, 211, 238, 0.6), 0 0 250px rgba(34, 211, 238, 0.4), 0 0 450px rgba(34, 211, 238, 0.2); }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  
  /* ESTILOS DE BOTONES RESTAURADOS: FINOS Y GRANDES */
  .time-button { transition: all 0.2s ease; cursor: pointer; border-radius: 40px !important; font-size: 13px; font-weight: bold; }
  .back-button-genora {
    width: 42px; height: 42px; border-radius: 50%;
    border: 1px solid rgba(34, 211, 238, 0.4);
    background: rgba(34, 211, 238, 0.05);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
  }
  .frecuencia-card {
    transition: all 0.3s ease; padding: 12px 6px !important; border-radius: 35px;
    border: 1px solid rgba(34, 211, 238, 0.15); background: rgba(255,255,255,0.015);
    text-align: center; cursor: pointer; min-height: 60px !important;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [view, setView] = useState('categories');
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const audioRef = useRef(null);
  const startupAudioRef = useRef(null);
  const timerRef = useRef(null);

  // --- LLAVE MAESTRA DE SONIDO RESTAURADA (SONARÁ AL PRIMER TOQUE) ---
  useEffect(() => {
    const playZen = () => {
      if (startupAudioRef.current) {
        startupAudioRef.current.volume = 0.6;
        startupAudioRef.current.play().catch(() => {
          const playOnGesture = () => {
            if (startupAudioRef.current) startupAudioRef.current.play();
            // Quitamos el oyente para que no suene cada vez
            window.removeEventListener('touchstart', playOnGesture);
            window.removeEventListener('click', playOnGesture);
          };
          window.addEventListener('touchstart', playOnGesture, { once: true });
          window.addEventListener('click', playOnGesture, { once: true });
        });
      }
    };

    playZen();
    const timer = setTimeout(() => setShowSplash(false), 3000); // 3 segundos de Splash
    return () => clearTimeout(timer);
  }, []);

  // Lógica de reproducción de pistas mantenida
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

  // Lista de pistas mantenida
  const tracks = [
    { id: "01", category: "MENTE", name: "Alpha Integración", hz: "8 – 10 Hz", url: "/audio/alpha-integration.mp3" },
    { id: "02", category: "MENTE", name: "Alpha Creator", hz: "8 – 12 Hz", url: "/audio/alpha-creator.mp3" },
    { id: "03", category: "EMOCIONES", name: "Theta Healing", hz: "4 – 7 Hz", url: "/audio/theta.mp3" }
  ];

  const categories = ["MENTE", "EMOCIONES", "CUERPO", "EXPANSIÓN"];

  // PANTALLA 1: SPLASH BLINDADO CON SONIDO
  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <audio ref={startupAudioRef} src="/audio/startup-genora.mp3" preload="auto" />
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', maxWidth: '80%', animation: 'logo-breathe 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '4px', color: '#22d3ee', textTransform: 'uppercase', marginTop: '30px', marginBottom: '5px' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '10px', fontWeight: '200', letterSpacing: '3px', color: '#fdfcf5', opacity: 0.7, textTransform: 'uppercase' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
      </div>
    );
  }

  // PANTALLA REPRODUCTOR: RESTAURADA (CÍRCULO PERFECTO, SIN CUADRO OSCURO)
  if (selectedTrack) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <style>{inlineStyles}</style>
        <audio ref={audioRef} src={selectedTrack.url} loop={selectedTime === '∞'} />
        <div onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} className="back-button-genora" style={{ position: 'absolute', top: '25px', left: '25px', border: '1px solid rgba(255,255,255,0.2)' }}>
             <span style={{ color: '#22d3ee', fontSize: '20px', marginLeft: '-2px' }}>‹</span>
        </div>
        <p style={{ fontSize: '9px', letterSpacing: '3px', color: '#fdfcf5', opacity: 0.6, marginBottom: '60px', textTransform: 'uppercase', marginTop: '-75px' }}>GENORA • {selectedTrack.category}</p>
        
        {/* ADN REPRODUCTOR RESTAURADO (CÍRCULO PERFECTO, RESPLANDOR ESCANDALOSO) */}
        <div style={{ 
          width: '210px', height: '210px', borderRadius: '50% !important', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px',
          animation: isPlaying ? 'aura-supernova 4s infinite ease-in-out' : 'none',
          boxShadow: '0 0 100px rgba(34, 211, 238, 0.3)',
          transition: 'all 0.5s ease',
          overflow: 'hidden'
        }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '120%', filter: 'drop-shadow(0 0 40px #22d3ee)', borderRadius: '50% !important' }} alt="ADN" />
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '200', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '4px' }}>{selectedTrack.name}</h2>
        <p style={{ color: '#22d3ee', fontSize: '13px', letterSpacing: '3px', fontWeight: 'bold' }}>{selectedTrack.hz}</p>
        <div style={{ display: 'flex', gap: '12px', margin: '40px 0' }}>
          {[15, 30, 60, '∞'].map((t) => (
            <button key={t} onClick={() => setSelectedTime(t)} className="time-button" style={{ width: '60px', padding: '10px 0', border: `1px solid ${selectedTime === t ? '#22d3ee' : 'rgba(255,255,255,0.1)'}`, background: selectedTime === t ? '#22d3ee22' : 'none', color: 'white' }}>{t === '∞' ? t : `${t}'`}</button>
          ))}
        </div>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px solid #22d3ee', background: 'none' }}>
          <span style={{ fontSize: '26px', color: '#ffffff' }}>{isPlaying ? '||' : '▶'}</span>
        </button>
      </div>
    );
  }

  // PANTALLA LISTA Y CATEGORÍAS: RESTAURADA (ADN GRANDE, BOTONES FINOS)
  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px' }}>
      <style>{inlineStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', paddingTop: '10px' }}>
        {view === 'list' ? (
          <div onClick={() => setView('categories')} className="back-button-genora">
             <span style={{ color: '#22d3ee', fontSize: '20px', marginLeft: '-2px' }}>‹</span>
          </div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} alt="Logo" />
        )}
        <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', border: '1px solid rgba(34, 211, 238, 0.2)', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>ES | EN</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {view === 'list' && <p style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '25px', textTransform: 'uppercase', fontWeight: 'bold', marginTop: '0px' }}>{activeCategory}</p>}
        
        {/* ADN LISTA RESTAURADO (GRANDE Y CIRCULAR) */}
        <div style={{ width: '150px', height: '150px', borderRadius: '50% !important', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', animation: 'aura-supernova 8s infinite ease-in-out', boxShadow: '0 0 50px rgba(34, 211, 238, 0.2)', overflow: 'hidden' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '125%', filter: 'drop-shadow(0 0 10px #22d3ee)', borderRadius: '50% !important' }} alt="ADN" />
        </div>

        <input type="text" placeholder="BUSCAR..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: '90%', maxWidth: '400px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '25px', padding: '12px', color: 'white', fontSize: '12px', textAlign: 'center', letterSpacing: '3px', marginBottom: '45px', marginTop: '10px', outline: 'none' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '480px' }}>
          {view === 'categories' ? (
            categories.map(cat => (
              <div key={cat} onClick={() => { setActiveCategory(cat); setView('list'); }} className="frecuencia-card">
                {/* TEXTO RESTAURADO: GRANDE Y LEGIBLE */}
                <div style={{ fontSize: '13px', letterSpacing: '2px', fontWeight: 'bold', textTransform: 'uppercase' }}>{cat}</div>
              </div>
            ))
          ) : (
            tracks.filter(t => t.category === activeCategory).map(track => (
              <div key={track.id} onClick={() => setSelectedTrack(track)} className="frecuencia-card">
                {/* TEXTO PISTA RESTAURADO */}
                <div style={{ fontSize: '11px', letterSpacing: '1.2px', textTransform: 'uppercase', color: 'white' }}>{track.name}</div>
                <div style={{ fontSize: '7px', color: '#22d3ee', marginTop: '3px' }}>{track.hz}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;