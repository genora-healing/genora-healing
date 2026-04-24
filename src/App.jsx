import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 60px rgba(34, 211, 238, 0.3); }
    50% { transform: scale(1.05); box-shadow: 0 0 100px rgba(34, 211, 238, 0.6); }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { background-color: #020617; margin: 0; padding: 0; font-family: 'Lexend', sans-serif; color: white; }
  
  .choice-button {
    width: 90%; max-width: 320px; padding: 22px; margin: 10px 0; border-radius: 40px; 
    text-transform: uppercase; letter-spacing: 4px; font-size: 12px; cursor: pointer; color: white; background: rgba(255,255,255,0.03); transition: 0.3s;
  }
  .sub-category-card {
    padding: 20px 10px; border-radius: 30px; border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.02); text-align: center; cursor: pointer; font-size: 10px; letter-spacing: 2px;
  }
  .track-card {
    width: 90%; max-width: 400px; padding: 20px; margin: 10px 0; border-radius: 40px;
    background: rgba(255,255,255,0.04); display: flex; justify-content: space-between; align-items: center; cursor: pointer;
  }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mainMode, setMainMode] = useState(null); 
  const [activeSub, setActiveSub] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // 🔊 BASE DE DATOS ACTUALIZADA CON BETA ATTENTION
  const tracks = [
    { id: "01", category: "CLARIDAD MENTAL", name: "Alpha Integración", hz: "8 – 10 Hz", url: "/audio/alpha-integration.mp3" },
    { id: "02", category: "CLARIDAD MENTAL", name: "Alpha Creator", hz: "8 – 12 Hz", url: "/audio/alpha-creator.mp3" },
    { id: "03", category: "CLARIDAD MENTAL", name: "Alpha Void", hz: "8 – 13 Hz", url: "/audio/alpha-void.mp3" },
    { id: "04", category: "CLARIDAD MENTAL", name: "Beta Attention", hz: "12 – 15 Hz", url: "/audio/beta-attention.mp3" }, // NUEVA INTEGRACIÓN
    { id: "M1", category: "BIO-REGENERACIÓN", name: "Coherencia del Ser", hz: "963 Hz", url: "/audio/alpha-integration.mp3" }
  ];

  useEffect(() => {
    if (audioRef.current && selectedTrack) {
      if (isPlaying) audioRef.current.play().catch(() => console.log("Audio play failed"));
      else audioRef.current.pause();
    }
  }, [isPlaying, selectedTrack]);

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '180px', borderRadius: '50%', animation: 'logo-breathe 3s infinite' }} />
        <h1 style={{ fontSize: '18px', letterSpacing: '4px', color: '#22d3ee', marginTop: '30px' }}>RESONANCIA ORIGEN</h1>
      </div>
    );
  }

  if (selectedTrack) {
    const color = mainMode === 'inmersión' ? '#a855f7' : '#22d3ee';
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <style>{inlineStyles}</style>
        <audio ref={audioRef} src={selectedTrack.url} loop />
        <div onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} style={{ position: 'absolute', top: '40px', left: '30px', fontSize: '35px', color: color }}>‹</div>
        <div style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '40px', animation: isPlaying ? 'aura-supernova 4s infinite' : 'none', border: `1px solid ${color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '80%', borderRadius: '50%' }} />
        </div>
        <h2 style={{ fontSize: '24px', letterSpacing: '3px' }}>{selectedTrack.name}</h2>
        <p style={{ color: color, fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>{selectedTrack.hz}</p>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ marginTop: '50px', width: '80px', height: '80px', borderRadius: '50%', border: `1px solid ${color}`, background: 'none', color: 'white', fontSize: '30px' }}>
          {isPlaying ? '||' : '▶'}
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', padding: '20px' }}>
      <style>{inlineStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '90px', borderRadius: '50%' }} onClick={() => {setMainMode(null); setActiveSub(null);}} />
        <div style={{ color: '#22d3ee', border: '1px solid #22d3ee44', padding: '6px 15px', borderRadius: '20px', fontSize: '11px' }}>ES | EN</div>
      </div>

      <div style={{ width: '150px', height: '150px', margin: '0 auto 40px', borderRadius: '50%', animation: 'aura-supernova 8s infinite', border: '1px solid #ffffff11', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/imagenes/adn-icon.png" style={{ width: '80%', borderRadius: '50%' }} />
      </div>

      {!mainMode ? (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '25px' }}>ELIGE TU CAMINO</h2>
          <button className="choice-button" style={{ border: '1px solid #22d3ee66' }} onClick={() => setMainMode('resonancia')}>Resonancia</button>
          <button className="choice-button" style={{ border: '1px solid #a855f766' }} onClick={() => setMainMode('inmersión')}>Inmersión</button>
          <button className="choice-button" style={{ border: '1px solid #d4af37' }} onClick={() => setMainMode('alquimia')}>💎 Alquimia Genética</button>
        </div>
      ) : !activeSub ? (
        <div className="fade-in-smooth" style={{ textAlign: 'center' }}>
          <p style={{ letterSpacing: '4px', color: mainMode === 'inmersión' ? '#a855f7' : '#22d3ee', marginBottom: '30px' }}>{mainMode.toUpperCase()}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', maxWidth: '400px', margin: '0 auto' }}>
            {(mainMode === 'resonancia' ? ['CLARIDAD MENTAL', 'EQUILIBRIO FÍSICO', 'CONSCIENCIA EXPANDIDA', 'ARMONIZACIÓN INTERNA'] : ['BIO-REGENERACIÓN', 'VÍNCULOS DE LUZ', 'FLUJO DE ORIGEN', 'MEMORIA CELULAR']).map(sub => (
              <div key={sub} onClick={() => setActiveSub(sub)} className="sub-category-card">{sub}</div>
            ))}
          </div>
          <button onClick={() => setMainMode(null)} style={{ marginTop: '40px', background: 'none', border: 'none', color: '#555', letterSpacing: '2px', fontSize: '10px' }}>‹ VOLVER</button>
        </div>
      ) : (
        <div className="fade-in-smooth" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ letterSpacing: '3px', color: mainMode === 'inmersión' ? '#a855f7' : '#22d3ee', marginBottom: '20px', fontSize: '11px' }}>{activeSub}</p>
          {tracks.filter(t => t.category === activeSub).map(track => (
            <div key={track.id} className="track-card" onClick={() => setSelectedTrack(track)}>
              <span style={{ fontSize: '14px', letterSpacing: '2px' }}>{track.name}</span>
              <span style={{ color: mainMode === 'inmersión' ? '#a855f7' : '#22d3ee' }}>▶</span>
            </div>
          ))}
          <button onClick={() => setActiveSub(null)} style={{ marginTop: '30px', background: 'none', border: 'none', color: '#555', letterSpacing: '2px' }}>‹ VOLVER</button>
        </div>
      )}
    </div>
  );
};
export default App;