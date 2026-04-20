import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(34, 211, 238, 0.4); }
    50% { transform: scale(1.03); box-shadow: 0 0 120px rgba(34, 211, 238, 0.8); }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { background-color: #020617; margin: 0; padding: 0; font-family: sans-serif; color: white; }
  .choice-button {
    width: 90%; max-width: 320px; padding: 22px; margin: 10px 0; border-radius: 40px; 
    text-transform: uppercase; letter-spacing: 4px; font-size: 13px; cursor: pointer; color: white; background: rgba(255,255,255,0.03);
  }
  .track-card {
    width: 90%; max-width: 400px; padding: 20px; margin: 10px 0; border-radius: 40px;
    background: rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center; cursor: pointer; border: 1px solid rgba(255,255,255,0.1);
  }
  .time-btn { width: 60px; padding: 10px 0; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); background: none; color: white; cursor: pointer; }
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
    const timer = setTimeout(() => setShowSplash(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const tracks = [
    { id: "01", category: "MENTE", name: "Alpha Integración", hz: "8 – 10 Hz", url: "/audio/alpha-integration.mp3", desc: "Sincroniza los hemisferios cerebrales." },
    { id: "02", category: "MENTE", name: "Alpha Creator", hz: "8 – 12 Hz", url: "/audio/alpha-creator.mp3", desc: "Activa el estado de flujo creativo." },
    { id: "03", category: "MENTE", name: "Alpha Void", hz: "8 – 13 Hz", url: "/audio/alpha-void.mp3", desc: "Punto cero de la consciencia." },
    { id: "M1", category: "MEDITACIONES", name: "Coherencia del Ser", hz: "963 Hz", url: "/audio/alpha-integration.mp3", desc: "Sincroniza corazón y mente." }
  ];

  useEffect(() => {
    if (audioRef.current && selectedTrack) {
      if (isPlaying) audioRef.current.play().catch(e => console.log("Error de audio"));
      else audioRef.current.pause();
    }
  }, [isPlaying, selectedTrack]);

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', animation: 'logo-breathe 3s infinite' }} />
        <h1 style={{ fontSize: '18px', letterSpacing: '4px', color: '#22d3ee', marginTop: '30px', fontWeight: '300' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '10px', letterSpacing: '2px', color: '#fdfcf5', opacity: 0.8, marginTop: '10px' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
      </div>
    );
  }

  if (selectedTrack) {
    const color = mainMode === 'meditaciones' ? '#a855f7' : '#22d3ee';
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <audio ref={audioRef} src={selectedTrack.url} loop={selectedTime === '∞'} />
        <div onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} style={{ position: 'absolute', top: '40px', left: '30px', fontSize: '35px', color: color }}>‹</div>
        <div style={{ width: '180px', height: '180px', borderRadius: '50%', marginBottom: '40px', animation: isPlaying ? 'aura-supernova 4s infinite' : 'none' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', filter: `drop-shadow(0 0 15px ${color})` }} />
        </div>
        <h2 style={{ fontSize: '24px', letterSpacing: '4px', color: 'white' }}>{selectedTrack.name}</h2>
        <p style={{ color: color, fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold' }}>{selectedTrack.hz}</p>
        <div style={{ display: 'flex', gap: '10px', margin: '30px 0' }}>
          {['15', '30', '∞'].map(t => (
            <button key={t} onClick={() => setSelectedTime(t)} className="time-btn" style={{ borderColor: selectedTime === t ? color : 'rgba(255,255,255,0.2)' }}>{t}</button>
          ))}
        </div>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '80px', height: '80px', borderRadius: '50%', border: `2px solid ${color}`, background: 'none', color: 'white', fontSize: '30px' }}>
          {isPlaying ? '||' : '▶'}
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', padding: '20px', textAlign: 'center' }}>
      <style>{inlineStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '100px' }} onClick={() => setMainMode(null)} />
        <div style={{ color: '#22d3ee', border: '1px solid #22d3ee44', padding: '5px 15px', borderRadius: '20px', fontSize: '12px' }}>ES | EN</div>
      </div>

      <div style={{ width: '160px', height: '160px', margin: '0 auto 40px', animation: 'aura-supernova 8s infinite' }}>
        <img src="/imagenes/adn-icon.png" style={{ width: '100%' }} />
      </div>

      {!mainMode ? (
        <>
          <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '20px' }}>ELIGE TU CAMINO</h2>
          <button className="choice-button" style={{ border: '1px solid #22d3ee66' }} onClick={() => setMainMode('frecuencias')}>Frecuencias</button>
          <button className="choice-button" style={{ border: '1px solid #a855f766' }} onClick={() => setMainMode('meditaciones')}>Meditaciones</button>
          <button className="choice-button" style={{ border: '1px solid #d4af37' }} onClick={() => setMainMode('experiencias')}>💎 Experiencias Genora</button>
        </>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ letterSpacing: '4px', color: mainMode === 'meditaciones' ? '#a855f7' : '#22d3ee', marginBottom: '20px' }}>{mainMode.toUpperCase()}</p>
          {tracks.filter(t => t.category === (mainMode === 'meditaciones' ? 'MEDITACIONES' : 'MENTE')).map(track => (
            <div key={track.id} className="track-card" onClick={() => setSelectedTrack(track)}>
              <span style={{ color: 'white', letterSpacing: '2px' }}>{track.name}</span>
              <span style={{ color: mainMode === 'meditaciones' ? '#a855f7' : '#22d3ee' }}>▶</span>
            </div>
          ))}
          <button onClick={() => setMainMode(null)} style={{ marginTop: '30px', background: 'none', border: 'none', color: '#666', letterSpacing: '2px' }}>VOLVER</button>
        </div>
      )}
    </div>
  );
};
export default App;