import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@200;400&display=swap');

  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  
  @keyframes aura-supernova {
    0%, 100% { box-shadow: 0 0 50px rgba(34, 211, 238, 0.2); }
    50% { box-shadow: 0 0 120px rgba(34, 211, 238, 0.6); }
  }

  .fade-in-smooth { animation: fadeIn 1s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  body, html { 
    background-color: #020617; margin: 0; padding: 0; 
    font-family: 'Lexend', sans-serif; color: white; overflow-x: hidden;
  }

  /* BOTONES PRINCIPALES */
  .choice-button {
    width: 90%; max-width: 350px; padding: 22px; margin: 15px 0; border-radius: 50px; 
    text-transform: uppercase; letter-spacing: 4px; font-size: 13px; cursor: pointer; 
    color: white; background: rgba(255,255,255,0.03); transition: all 0.4s ease;
    border: 1px solid rgba(255,255,255,0.1);
  }

  /* BOTONES DE CATEGORÍA (IMG 2 CORRECCIÓN) */
  .grid-categories {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px; 
    width: 95%; max-width: 500px; margin: 20px auto;
  }

  .sub-category-card {
    padding: 25px 10px; border-radius: 35px; border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.02); text-align: center; cursor: pointer; 
    font-size: 10px; letter-spacing: 2px; transition: 0.3s; color: white;
  }

  .track-card {
    width: 90%; max-width: 450px; padding: 22px 30px; margin: 12px 0; border-radius: 50px;
    background: rgba(255,255,255,0.05); display: flex; justify-content: space-between; 
    align-items: center; cursor: pointer; border: 1px solid rgba(255,255,255,0.1);
  }

  .back-arrow {
    position: absolute; top: 40px; left: 30px; font-size: 40px; cursor: pointer; z-index: 100;
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
    const timer = setTimeout(() => setShowSplash(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const tracks = [
    { id: "01", category: "CLARIDAD MENTAL", name: "Alpha Integración", hz: "8 – 10 Hz", url: "/audio/alpha-integration.mp3" },
    { id: "02", category: "CLARIDAD MENTAL", name: "Alpha Creator", hz: "8 – 12 Hz", url: "/audio/alpha-creator.mp3" },
    { id: "03", category: "CLARIDAD MENTAL", name: "Alpha Void", hz: "8 – 13 Hz", url: "/audio/alpha-void.mp3" },
    { id: "04", category: "CLARIDAD MENTAL", name: "Beta Attention", hz: "12 – 15 Hz", url: "/audio/beta-attention.mp3" }
  ];

  useEffect(() => {
    if (audioRef.current && selectedTrack) {
      if (isPlaying) audioRef.current.play().catch(e => console.error("Error audio:", e));
      else audioRef.current.pause();
    }
  }, [isPlaying, selectedTrack]);

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '220px', animation: 'logo-breathe 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '20px', letterSpacing: '5px', color: '#22d3ee', marginTop: '30px', fontWeight: '200' }}>RESONANCIA ORIGEN</h1>
        {/* CORRECCIÓN IMG 1: FRASE EN BLANCO RECUPERADA */}
        <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#FFFFFF', opacity: 0.9, marginTop: '15px' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
      </div>
    );
  }

  if (selectedTrack) {
    const accent = mainMode === 'inmersión' ? '#a855f7' : '#22d3ee';
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <audio ref={audioRef} src={selectedTrack.url} loop />
        <div onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} className="back-arrow" style={{ color: accent }}>‹</div>
        
        {/* CORRECCIÓN IMG 3: LOGO SIN CÍRCULO OSCURO Y CON RESPLANDOR */}
        <div style={{ width: '220px', height: '220px', borderRadius: '50%', marginBottom: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: isPlaying ? 'aura-supernova 4s infinite' : 'none' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', filter: `drop-shadow(0 0 20px ${accent})` }} alt="ADN" />
        </div>

        <h2 style={{ fontSize: '28px', letterSpacing: '4px', marginBottom: '10px' }}>{selectedTrack.name}</h2>
        <p style={{ color: accent, fontSize: '14px', fontWeight: 'bold', letterSpacing: '3px' }}>{selectedTrack.hz}</p>

        <button onClick={() => setIsPlaying(!isPlaying)} style={{ marginTop: '60px', width: '90px', height: '90px', borderRadius: '50%', border: `2px solid ${accent}`, background: 'none', color: 'white', fontSize: '35px', cursor: 'pointer' }}>
          {isPlaying ? '||' : '▶'}
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', padding: '30px 20px' }}>
      <style>{inlineStyles}</style>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
        {mainMode ? (
           <div onClick={() => { activeSub ? setActiveSub(null) : setMainMode(null) }} style={{ fontSize: '40px', color: '#22d3ee', cursor: 'pointer' }}>‹</div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '110px' }} alt="Logo" />
        )}
        <div style={{ color: '#22d3ee', border: '1px solid #22d3ee55', padding: '8px 20px', borderRadius: '30px', fontSize: '12px' }}>ES | EN</div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '180px', height: '180px', margin: '0 auto 50px', borderRadius: '50%', animation: 'aura-supernova 8s infinite', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '90%' }} alt="ADN" />
        </div>

        {!mainMode ? (
          <>
            <h2 style={{ fontSize: '11px', letterSpacing: '6px', color: '#22d3ee', marginBottom: '30px' }}>ELIGE TU CAMINO</h2>
            <button className="choice-button" style={{ border: '1px solid #22d3ee88' }} onClick={() => setMainMode('resonancia')}>Resonancia</button>
            <button className="choice-button" style={{ border: '1px solid #a855f788' }} onClick={() => setMainMode('inmersión')}>Inmersión</button>
            <button className="choice-button" style={{ border: '1px solid #d4af37' }} onClick={() => setMainMode('alquimia')}>💎 Alquimia Genética</button>
          </>
        ) : !activeSub ? (
          <div className="fade-in-smooth">
            <p style={{ letterSpacing: '5px', color: mainMode === 'inmersión' ? '#a855f7' : '#22d3ee', marginBottom: '40px', fontSize: '14px' }}>{mainMode.toUpperCase()}</p>
            {/* CORRECCIÓN IMG 2: GRILLA CON ESPACIADO PARA QUE NO SE PEGUEN */}
            <div className="grid-categories">
              {(mainMode === 'resonancia' ? ['CLARIDAD MENTAL', 'EQUILIBRIO FÍSICO', 'CONSCIENCIA EXPANDIDA', 'ARMONIZACIÓN INTERNA'] : ['BIO-REGENERACIÓN', 'VÍNCULOS DE LUZ', 'FLUJO DE ORIGEN', 'MEMORIA CELULAR']).map(sub => (
                <div key={sub} onClick={() => setActiveSub(sub)} className="sub-category-card" style={{ borderColor: mainMode === 'inmersión' ? '#a855f744' : '#22d3ee44' }}>
                  {sub}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="fade-in-smooth" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ letterSpacing: '4px', color: mainMode === 'inmersión' ? '#a855f7' : '#22d3ee', marginBottom: '30px' }}>{activeSub}</p>
            {tracks.filter(t => t.category === activeSub).map(track => (
              <div key={track.id} className="track-card" onClick={() => setSelectedTrack(track)} style={{ borderColor: mainMode === 'inmersión' ? '#a855f733' : '#22d3ee33' }}>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '16px', letterSpacing: '2px', color: 'white' }}>{track.name}</div>
                  <div style={{ fontSize: '11px', color: mainMode === 'inmersión' ? '#a855f7' : '#22d3ee', marginTop: '5px' }}>{track.hz}</div>
                </div>
                <span style={{ color: mainMode === 'inmersión' ? '#a855f7' : '#22d3ee', fontSize: '20px' }}>▶</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;