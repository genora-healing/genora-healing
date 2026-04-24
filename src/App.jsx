import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; font-family: sans-serif; color: white; }
  
  .choice-button {
    width: 90%; max-width: 350px; padding: 22px; margin: 12px 0; border-radius: 50px; 
    text-transform: uppercase; letter-spacing: 4px; font-size: 13px; cursor: pointer; 
    color: white; background: rgba(255,255,255,0.03); transition: all 0.4s ease;
    border: 1px solid rgba(255,255,255,0.1);
  }

  /* NAVEGACIÓN VERTICAL (Para que no se peguen en PC) */
  .vertical-stack {
    display: flex; flex-direction: column; align-items: center; gap: 15px; width: 100%;
  }

  .sub-category-card {
    width: 85%; max-width: 320px; padding: 20px; border-radius: 40px; 
    border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.02);
    text-align: center; cursor: pointer; font-size: 12px; letter-spacing: 2px;
  }

  .track-card {
    width: 90%; max-width: 400px; padding: 20px; margin: 10px 0; border-radius: 40px;
    background: rgba(255,255,255,0.04); display: flex; justify-content: space-between; 
    align-items: center; cursor: pointer; border: 1px solid rgba(255,255,255,0.1);
  }

  .time-button {
    width: 58px; padding: 10px 0; border-radius: 40px; border: 1px solid rgba(255,255,255,0.2);
    background: none; color: white; font-size: 12px; cursor: pointer; transition: 0.2s;
  }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mainMode, setMainMode] = useState(null); 
  const [activeSub, setActiveSub] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [adnLoaded, setAdnLoaded] = useState(false);

  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // MOTOR DE AUDIO BLINDADO
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => console.log("Iniciando frecuencia..."));
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

  // RUTAS SINCRONIZADAS (Incluyendo Beta Attention)
  const tracks = [
    { id: "01", category: "CLARIDAD MENTAL", name: "Alpha Integración", hz: "8 – 10 Hz", url: "/audio/alpha-integration.mp3", desc: "Sincroniza los hemisferios cerebrales." },
    { id: "02", category: "CLARIDAD MENTAL", name: "Alpha Creator", hz: "8 – 12 Hz", url: "/audio/alpha-creator.mp3", desc: "Activa el estado de flujo creativo." },
    { id: "03", category: "CLARIDAD MENTAL", name: "Alpha Void", hz: "8 – 13 Hz", url: "/audio/alpha-void.mp3", desc: "Punto cero de la consciencia." },
    { id: "04", category: "CLARIDAD MENTAL", name: "Beta Attention", hz: "12 – 15 Hz", url: "/audio/beta-attention.mp3", desc: "Enfoque activo y atención plena." },
    { id: "M1", category: "BIO-REGENERACIÓN", name: "Coherencia del Ser", hz: "963 Hz", url: "/audio/alpha-integration.mp3", desc: "Sincroniza corazón y mente." }
  ];

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', animation: 'breathe 3s infinite ease-in-out' }} />
        <h1 style={{ fontSize: '18px', letterSpacing: '4px', color: '#22d3ee', marginTop: '30px' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '10px', letterSpacing: '2px', color: '#fdfcf5', opacity: 0.8, marginTop: '10px' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
      </div>
    );
  }

  if (selectedTrack) {
    const accent = mainMode === 'inmersión' ? '#a855f7' : '#22d3ee';
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <style>{inlineStyles}</style>
        <audio ref={audioRef} src={selectedTrack.url} loop={selectedTime === '∞'} />
        
        <button onClick={() => { setSelectedTrack(null); setIsPlaying(false); setAdnLoaded(false); }} style={{ position: 'absolute', top: '35px', left: '30px', background: 'none', border: 'none', color: accent, fontSize: '40px', cursor: 'pointer' }}>‹</button>

        <p style={{ fontSize: '9px', letterSpacing: '3px', color: '#fdfcf5', opacity: 0.6, marginBottom: '50px', textTransform: 'uppercase' }}>Resonancia Origen • Genora Healing</p>

        {/* LOGO SIN CÍRCULO AZUL - RESPLANDOR LIBRE */}
        <div style={{ width: '220px', height: '220px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: isPlaying ? 'breathe 4s infinite ease-in-out' : 'none' }}>
          <img src="/imagenes/adn-icon.png" onLoad={() => setAdnLoaded(true)} style={{ width: '100%', filter: `drop-shadow(0 0 15px ${accent}) drop-shadow(0 0 40px ${accent}66)` }} />
        </div>

        <h2 style={{ fontSize: '24px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '5px' }}>{selectedTrack.name}</h2>
        <p style={{ color: accent, fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold', marginBottom: '20px' }}>{selectedTrack.hz}</p>
        <p style={{ fontSize: '13px', color: '#fdfcf5', opacity: 0.7, maxWidth: '300px', marginBottom: '40px' }}>"{selectedTrack.desc}"</p>

        {/* CONTEO DE TIEMPO RECUPERADO */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '45px' }}>
          {[15, 30, 60, '∞'].map((time) => (
            <button key={time} onClick={() => setSelectedTime(time)} className="time-button" style={{ border: `1px solid ${selectedTime === time ? accent : 'rgba(255,255,255,0.1)'}`, background: selectedTime === time ? `${accent}22` : 'none' }}>
              {time === '∞' ? time : `${time}'`}
            </button>
          ))}
        </div>

        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '85px', height: '85px', borderRadius: '50%', border: `1px solid ${accent}`, background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <span style={{ fontSize: '30px', color: 'white' }}>{isPlaying ? '||' : '▶'}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', padding: '20px' }}>
      <style>{inlineStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '110px' }} onClick={() => {setMainMode(null); setActiveSub(null);}} />
        <div style={{ color: '#22d3ee', border: '1px solid #22d3ee44', padding: '6px 15px', borderRadius: '20px', fontSize: '12px' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '180px', height: '180px', marginBottom: '50px', animation: 'breathe 4s infinite ease-in-out', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '90%' }} />
        </div>

        {!mainMode ? (
          <div className="vertical-stack">
            <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '20px' }}>ELIGE TU CAMINO</h2>
            <button className="choice-button" style={{ border: '1px solid #22d3ee77' }} onClick={() => setMainMode('resonancia')}>Resonancia</button>
            <button className="choice-button" style={{ border: '1px solid #a855f777' }} onClick={() => setMainMode('inmersión')}>Inmersión</button>
            <button className="choice-button" style={{ border: '1px solid #d4af37' }} onClick={() => setMainMode('alquimia')}>💎 Alquimia Genética</button>
          </div>
        ) : !activeSub ? (
          <div className="vertical-stack">
            <p style={{ letterSpacing: '4px', color: mainMode === 'inmersión' ? '#a855f7' : '#22d3ee', marginBottom: '30px' }}>{mainMode.toUpperCase()}</p>
            {(mainMode === 'resonancia' ? ['CLARIDAD MENTAL', 'EQUILIBRIO FÍSICO', 'CONSCIENCIA EXPANDIDA', 'ARMONIZACIÓN INTERNA'] : ['BIO-REGENERACIÓN', 'VÍNCULOS DE LUZ', 'FLUJO DE ORIGEN', 'MEMORIA CELULAR']).map(sub => (
              <div key={sub} onClick={() => setActiveSub(sub)} className="sub-category-card" style={{ borderColor: mainMode === 'inmersión' ? '#a855f744' : '#22d3ee44' }}>{sub}</div>
            ))}
            <div onClick={() => setMainMode(null)} style={{ marginTop: '30px', cursor: 'pointer', color: '#555', letterSpacing: '2px', fontSize: '12px' }}>‹ VOLVER</div>
          </div>
        ) : (
          <div className="vertical-stack">
            <p style={{ letterSpacing: '3px', color: mainMode === 'inmersión' ? '#a855f7' : '#22d3ee', marginBottom: '25px' }}>{activeSub}</p>
            {tracks.filter(t => t.category === activeSub).map(track => (
              <div key={track.id} className="track-card" onClick={() => setSelectedTrack(track)} style={{ borderColor: mainMode === 'inmersión' ? '#a855f733' : '#22d3ee33' }}>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '15px', letterSpacing: '2px' }}>{track.name}</div>
                  <div style={{ fontSize: '10px', color: mainMode === 'inmersión' ? '#a855f7' : '#22d3ee', marginTop: '4px' }}>{track.hz}</div>
                </div>
                <span style={{ color: mainMode === 'inmersión' ? '#a855f7' : '#22d3ee' }}>▶</span>
              </div>
            ))}
            <div onClick={() => setActiveSub(null)} style={{ marginTop: '30px', cursor: 'pointer', color: '#555', letterSpacing: '2px', fontSize: '12px' }}>‹ VOLVER</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;