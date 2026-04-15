import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); }
    50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(34, 211, 238, 0.9), 0 0 120px rgba(34, 211, 238, 0.6), 0 0 250px rgba(34, 211, 238, 0.4), 0 0 450px rgba(34, 211, 238, 0.2); }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; }

  .back-button-genora {
    width: 42px; height: 42px; border-radius: 50%;
    border: 1px solid rgba(34, 211, 238, 0.4);
    background: rgba(34, 211, 238, 0.05);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
  }
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

  // --- LÓGICA DE AUDIO DE INICIO ---
  useEffect(() => {
    const playStartup = () => {
      if (startupAudioRef.current) {
        startupAudioRef.current.volume = 0.9;
        const playPromise = startupAudioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // "Llave Maestra": Si el navegador bloquea, suena al primer toque
            const playOnGesture = () => {
              if (startupAudioRef.current) startupAudioRef.current.play();
              document.removeEventListener('click', playOnGesture);
              document.removeEventListener('touchstart', playOnGesture);
            };
            document.addEventListener('click', playOnGesture);
            document.addEventListener('touchstart', playOnGesture);
          });
        }
      }
    };

    playStartup();
    const timer = setTimeout(() => setShowSplash(false), 3000);
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
      } else { 
        audioRef.current.pause(); 
      }
    }
  }, [isPlaying]);

  const tracks = [
    { id: "01", category: "MENTE", name: "Alpha Integración", hz: "8 – 10 Hz", url: "/audio/alpha-integration.mp3" },
    { id: "02", category: "MENTE", name: "Alpha Creator", hz: "8 – 12 Hz", url: "/audio/alpha-creator.mp3" },
    { id: "03", category: "EMOCIONES", name: "Theta Healing", hz: "4 – 7 Hz", url: "/audio/theta.mp3" }
  ];

  const categories = ["MENTE", "EMOCIONES", "CUERPO", "EXPANSIÓN"];

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        
        {/* NOMBRE DEL ARCHIVO SIN ERRORES */}
        <audio ref={startupAudioRef} src="/audio/startup-genora.mp3" preload="auto" />
        
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
        <div onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} className="back-button-genora" style={{ position: 'absolute', top: '25px', left: '25px', border: '1px solid rgba(255,255,255,0.2)' }}>
             <span style={{ color: '#22d3ee', fontSize: '20px', marginLeft: '-2px' }}>‹</span>
        </div>
        <div style={{ width: '210px', height: '210px', marginBottom: '40px', animation: isPlaying ? 'aura-supernova 4s infinite ease-in-out' : 'none' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="ADN" />
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: '200', letterSpacing: '4px', textTransform: 'uppercase' }}>{selectedTrack.name}</h2>
        <p style={{ color: '#22d3ee', fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold' }}>{selectedTrack.hz}</p>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px solid #22d3ee', background: 'none', marginTop: '40px' }}>
          <span style={{ fontSize: '26px', color: '#ffffff' }}>{isPlaying ? '||' : '▶'}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px' }}>
      <style>{inlineStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        {view === 'list' ? (
          <div onClick={() => setView('categories')} className="back-button-genora">
             <span style={{ color: '#22d3ee', fontSize: '20px', marginLeft: '-2px' }}>‹</span>
          </div>
        ) : (
          <img src="/imagenes/genora-logo-white.png" style={{ height: '90px', objectFit: 'contain' }} alt="Logo" />
        )}
        <div style={{ fontSize: '11px', color: '#22d3ee', border: '1px solid rgba(34, 211, 238, 0.2)', padding: '5px 15px', borderRadius: '20px' }}>ES | EN</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '150px', height: '150px', marginBottom: '30px', animation: 'aura-supernova 8s infinite ease-in-out' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="ADN" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '480px' }}>
          {view === 'categories' ? (
            categories.map(cat => (
              <div key={cat} onClick={() => { setActiveCategory(cat); setView('list'); }} style={{ padding: '10px', borderRadius: '35px', border: '1px solid rgba(34, 211, 238, 0.15)', background: 'rgba(255,255,255,0.015)', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '12px', letterSpacing: '2px' }}>{cat}</div>
              </div>
            ))
          ) : (
            tracks.filter(t => t.category === activeCategory).map(track => (
              <div key={track.id} onClick={() => setSelectedTrack(track)} style={{ padding: '10px', borderRadius: '35px', border: '1px solid rgba(34, 211, 238, 0.15)', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '10px' }}>{track.name}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;