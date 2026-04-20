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
    width: 90%; max-width: 320px; padding: 20px; margin: 10px 0; border-radius: 40px; 
    text-transform: uppercase; letter-spacing: 4px; font-size: 13px; cursor: pointer; transition: all 0.4s ease; background: rgba(255,255,255,0.03);
  }

  .sub-category-card {
    transition: all 0.3s ease; padding: 12px; border-radius: 35px; border: 1px solid rgba(34, 211, 238, 0.15);
    background: rgba(255,255,255,0.015); text-align: center; cursor: pointer; width: 100%; max-width: 175px; margin: 0 auto;
  }

  .track-card {
    width: 100%; max-width: 400px; padding: 15px 25px; margin: 8px 0; border-radius: 20px;
    border: 1px solid rgba(34, 211, 238, 0.1); background: rgba(255,255,255,0.02);
    display: flex; justify-content: space-between; align-items: center; cursor: pointer;
  }

  .time-btn {
    width: 55px; height: 35px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2);
    background: none; color: white; font-size: 12px; cursor: pointer; transition: 0.3s;
  }
  .time-btn.active { border-color: #22d3ee; background: rgba(34, 211, 238, 0.1); color: #22d3ee; }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mainMode, setMainMode] = useState(null); 
  const [activeSub, setActiveSub] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState('∞');
  
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Simulación de tracks para MENTE (Aquí anidaremos tus nombres reales)
  const menteTracks = [
    { id: 1, name: "ALPHA ORIGEN", hz: "8-12 Hz", url: "/audio/alpha.mp3" },
    { id: 2, name: "FOCO TOTAL", hz: "14-30 Hz", url: "/audio/beta.mp3" },
    { id: 3, name: "RECALIBRACIÓN MENTAL", hz: "40 Hz", url: "/audio/gamma.mp3" }
  ];

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', animation: 'logo-breathe 3s infinite' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', letterSpacing: '4px', color: '#22d3ee', marginTop: '30px' }}>RESONANCIA ORIGEN</h1>
      </div>
    );
  }

  // PANTALLA DE REPRODUCTOR
  if (selectedTrack) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <style>{inlineStyles}</style>
        <div onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} style={{ position: 'absolute', top: '40px', left: '30px', cursor: 'pointer', fontSize: '30px', color: '#22d3ee' }}>‹</div>
        
        <div style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '50px', animation: isPlaying ? 'aura-supernova 4s infinite ease-in-out' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%' }} alt="ADN" />
        </div>

        <h2 style={{ fontSize: '20px', letterSpacing: '5px', marginBottom: '5px' }}>{selectedTrack.name}</h2>
        <p style={{ color: '#22d3ee', fontSize: '12px', letterSpacing: '3px', marginBottom: '40px' }}>{selectedTrack.hz}</p>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '50px' }}>
          {['15', '30', '∞'].map(t => (
            <button key={t} onClick={() => setDuration(t)} className={`time-btn ${duration === t ? 'active' : ''}`}>{t}{t !== '∞' ? "'" : ""}</button>
          ))}
        </div>

        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px solid #22d3ee', background: 'none', color: 'white', fontSize: '30px' }}>
          {isPlaying ? 'Ⅱ' : '▶'}
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <style>{inlineStyles}</style>
      
      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        {mainMode ? (
          <div onClick={() => { activeSub ? setActiveSub(null) : setMainMode(null) }} style={{ color: '#22d3ee', fontSize: '30px', cursor: 'pointer' }}>‹</div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '100px' }} alt="Logo" />
        )}
        <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#22d3ee', border: '1px solid rgba(34, 211, 238, 0.4)', padding: '6px 16px', borderRadius: '20px' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '160px', height: '160px', borderRadius: '50%', marginBottom: '40px', animation: 'aura-supernova 8s infinite ease-in-out', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%' }} alt="ADN" />
        </div>

        {!mainMode ? (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '20px' }}>ELIGE TU CAMINO</h2>
            <button className="choice-button" style={{ border: '1px solid #22d3ee55' }} onClick={() => setMainMode('frecuencias')}>Frecuencias</button>
            <button className="choice-button" style={{ border: '1px solid #a855f755' }} onClick={() => setMainMode('meditaciones')}>Meditaciones</button>
            <button className="choice-button" style={{ border: '1px solid #d4af37' }} onClick={() => setMainMode('experiencias')}>💎 Experiencias Genora</button>
          </div>
        ) : activeSub === 'MENTE' ? (
          <div className="fade-in-smooth" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <p style={{ fontSize: '11px', letterSpacing: '5px', color: '#22d3ee', marginBottom: '30px' }}>FRECUENCIAS > MENTE</p>
             {menteTracks.map(track => (
               <div key={track.id} className="track-card" onClick={() => setSelectedTrack(track)}>
                 <div style={{ textAlign: 'left' }}>
                   <div style={{ fontSize: '13px', letterSpacing: '2px' }}>{track.name}</div>
                   <div style={{ fontSize: '10px', color: '#22d3ee', marginTop: '4px' }}>{track.hz}</div>
                 </div>
                 <div style={{ color: '#22d3ee' }}>▶</div>
               </div>
             ))}
          </div>
        ) : (
          <div className="fade-in-smooth" style={{ width: '100%', maxWidth: '400px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '5px', color: '#22d3ee', textAlign: 'center', marginBottom: '30px' }}>{mainMode.toUpperCase()}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {(mainMode === 'frecuencias' ? ['MENTE', 'CUERPO', 'EXPANSIÓN', 'COHERENCIA'] : []).map(sub => (
                <div key={sub} onClick={() => setActiveSub(sub)} className="sub-category-card">
                  <span style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: 'bold' }}>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;