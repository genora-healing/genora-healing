import React, { useState, useEffect, useRef } from 'react';

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

  .choice-button {
    width: 90%; max-width: 320px; padding: 22px; margin: 12px 0; border-radius: 40px; 
    text-transform: uppercase; letter-spacing: 4px; font-size: 13px; cursor: pointer; transition: all 0.4s ease;
  }

  .track-card {
    width: 100%; max-width: 400px; padding: 18px 25px; margin: 10px 0; border-radius: 40px;
    background: rgba(255,255,255,0.02); display: flex; justify-content: space-between; 
    align-items: center; cursor: pointer; transition: 0.3s;
  }

  .time-btn {
    width: 58px; padding: 10px 0; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);
    background: none; color: white; font-size: 12px; cursor: pointer;
  }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mainMode, setMainMode] = useState(null); 
  const [activeSub, setActiveSub] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState('15');
  
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // 🔊 TUS RUTAS DE SONIDO REALES
  const tracks = [
    { id: "01", category: "MENTE", name: "Alpha Integración", hz: "8 – 10 Hz", url: "/audio/alpha-integration.mp3", desc: "Sincroniza los hemisferios cerebrales." },
    { id: "02", category: "MENTE", name: "Alpha Creator", hz: "8 – 12 Hz", url: "/audio/alpha-creator.mp3", desc: "Activa el estado de flujo creativo." },
    { id: "03", category: "MENTE", name: "Alpha Void", hz: "8 – 13 Hz", url: "/audio/alpha-void.mp3", desc: "Punto cero de la consciencia." },
    { id: "M1", category: "MEDITACIONES", name: "Coherencia del Ser", hz: "963 Hz", url: "/audio/alpha-integration.mp3", desc: "Sincroniza corazón y mente." }
  ];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) { audioRef.current.play().catch(() => console.log("Play blocked")); }
      else { audioRef.current.pause(); }
    }
  }, [isPlaying, selectedTrack]);

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', animation: 'logo-breathe 3s infinite' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', letterSpacing: '4px', color: '#22d3ee', marginTop: '30px' }}>RESONANCIA ORIGEN</h1>
      </div>
    );
  }

  // PANTALLA REPRODUCTOR
  if (selectedTrack) {
    const accent = mainMode === 'meditaciones' ? '#a855f7' : '#22d3ee';
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <audio ref={audioRef} src={selectedTrack.url} loop={selectedTime === '∞'} />
        <div onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} style={{ position: 'absolute', top: '40px', left: '30px', cursor: 'pointer', fontSize: '35px', color: accent }}>‹</div>
        
        <div style={{ width: '180px', height: '180px', borderRadius: '50%', marginBottom: '40px', animation: isPlaying ? 'aura-supernova 4s infinite' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '120%', filter: `drop-shadow(0 0 10px ${accent})` }} alt="ADN" />
        </div>

        <h2 style={{ fontSize: '24px', letterSpacing: '4px', marginBottom: '5px' }}>{selectedTrack.name}</h2>
        <p style={{ color: accent, fontSize: '12px', letterSpacing: '3px', marginBottom: '30px', fontWeight: 'bold' }}>{selectedTrack.hz}</p>
        <p style={{ fontSize: '13px', opacity: 0.7, maxWidth: '280px', marginBottom: '40px' }}>{selectedTrack.desc}</p>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
          {['15', '30', '60', '∞'].map(t => (
            <button key={t} onClick={() => setSelectedTime(t)} className="time-btn" style={{ borderColor: selectedTime === t ? accent : 'rgba(255,255,255,0.1)', background: selectedTime === t ? `${accent}22` : 'none' }}>{t}{t !== '∞' ? "'" : ""}</button>
          ))}
        </div>

        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '80px', height: '80px', borderRadius: '50%', border: `1px solid ${accent}`, background: 'none', color: 'white', fontSize: '30px' }}>
          {isPlaying ? '||' : '▶'}
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <style>{inlineStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
        {mainMode ? (
          <div onClick={() => { activeSub ? setActiveSub(null) : setMainMode(null) }} style={{ color: activeSub ? (mainMode === 'meditaciones' ? '#a855f7' : '#22d3ee') : '#22d3ee', fontSize: '35px', cursor: 'pointer' }}>‹</div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '100px' }} alt="Logo" />
        )}
        <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', border: '1px solid rgba(34, 211, 238, 0.4)', padding: '6px 16px', borderRadius: '20px' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '170px', height: '170px', borderRadius: '50%', marginBottom: '45px', animation: 'aura-supernova 8s infinite', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '120%' }} alt="ADN" />
        </div>

        {!mainMode ? (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '25px' }}>ELIGE TU CAMINO</h2>
            <button className="choice-button" style={{ border: '1px solid #22d3ee55' }} onClick={() => setMainMode('frecuencias')}>Frecuencias</button>
            <button className="choice-button" style={{ border: '1px solid #a855f755' }} onClick={() => setMainMode('meditaciones')}>Meditaciones</button>
            <button className="choice-button" style={{ border: '1px solid #d4af37' }} onClick={() => setMainMode('experiencias')}>💎 Experiencias Genora</button>
          </div>
        ) : activeSub === 'MENTE' || mainMode === 'meditaciones' ? (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <p style={{ fontSize: '11px', letterSpacing: '5px', color: mainMode === 'meditaciones' ? '#a855f7' : '#22d3ee', marginBottom: '30px' }}>{mainMode.toUpperCase()} {activeSub ? `> ${activeSub}` : ''}</p>
             {tracks.filter(t => t.category === (activeSub || 'MEDITACIONES')).map(track => (
               <div key={track.id} className="track-card" style={{ border: `1px solid ${mainMode === 'meditaciones' ? '#a855f733' : '#22d3ee33'}` }} onClick={() => setSelectedTrack(track)}>
                 <div style={{ textAlign: 'left' }}>
                   <div style={{ fontSize: '14px', letterSpacing: '2px' }}>{track.name}</div>
                   <div style={{ fontSize: '10px', color: mainMode === 'meditaciones' ? '#a855f7' : '#22d3ee', marginTop: '4px' }}>{track.hz}</div>
                 </div>
                 <div style={{ color: mainMode === 'meditaciones' ? '#a855f7' : '#22d3ee' }}>▶</div>
               </div>
             ))}
          </div>
        ) : (
          <div className="fade-in-smooth" style={{ width: '100%', maxWidth: '420px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {['MENTE', 'CUERPO', 'EXPANSIÓN', 'COHERENCIA'].map(sub => (
              <div key={sub} onClick={() => setActiveSub(sub)} style={{ padding: '15px', borderRadius: '35px', border: '1px solid rgba(34, 211, 238, 0.2)', textAlign: 'center', cursor: 'pointer', fontSize: '10px', letterSpacing: '2px' }}>{sub}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;