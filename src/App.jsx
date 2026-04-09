import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [lang, setLang] = useState('es');
  const [activeTab, setActiveTab] = useState('frecuencias');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null); // Conteo en minutos
  const [isLooping, setIsLooping] = useState(true);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  const content = {
    es: {
      splash: "RESONANCIA ORIGEN",
      frecuencias: "Frecuencias",
      meditaciones: "Meditaciones",
      active: "ACTIVANDO TU CONSCIENCIA GENÉTICA",
      timerEnd: "Cerrando ciclo en",
      infinite: "Repetición Infinita",
      tracks: [
        { id: "01", name: "Alpha Integration", hz: "8-10 Hz", file: "/audio/alpha-integration.mp3" },
        { id: "02", name: "Alpha Creator", hz: "8-12 Hz", file: "/audio/alpha-creator.mp3" },
        { id: "03", name: "Alpha Void", hz: "8-13 Hz", file: "/audio/alpha-void.mp3" },
        { id: "04", name: "Alpha Origen", hz: "8 Hz", file: "/audio/alpha-origen.mp3" },
        { id: "05", name: "Gaia Vision", hz: "8.3 Hz", file: "/audio/gaia-vision.mp3" },
        { id: "06", name: "Alpha Voice", hz: "8.22 Hz", file: "/audio/alpha-voice.mp3" }
      ]
    },
    en: {
      splash: "ORIGIN RESONANCE",
      frecuencias: "Frequencies",
      meditaciones: "Meditations",
      active: "ACTIVATING YOUR GENETIC CONSCIOUSNESS",
      timerEnd: "Closing cycle in",
      infinite: "Infinite Loop",
      tracks: [
        { id: "01", name: "Alpha Integration", file: "/audio/alpha-integration.mp3" },
        { id: "02", name: "Alpha Creator", file: "/audio/alpha-creator.mp3" },
        { id: "03", name: "Alpha Void", file: "/audio/alpha-void.mp3" },
        { id: "04", name: "Alpha Origin", file: "/audio/alpha-origen.mp3" },
        { id: "05", name: "Gaia Vision", file: "/audio/gaia-vision.mp3" },
        { id: "06", name: "Alpha Voice", file: "/audio/alpha-voice.mp3" }
      ]
    }
  };

  // Lógica del conteo
  useEffect(() => {
    if (timeLeft > 0 && isPlaying) {
      timerRef.current = setTimeout(() => setTimeLeft(timeLeft - 1), 60000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      if (audioRef.current) audioRef.current.pause();
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, isPlaying]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(e => console.log(e));
    setIsPlaying(!isPlaying);
  };

  if (showSplash) {
    return (
      <div style={{backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '220px', marginBottom: '30px', animation: 'pulse 3s infinite' }} alt="Logo" />
        <h1 style={{ letterSpacing: '8px', fontSize: '18px', color: '#22d3ee', fontWeight: '300' }}>{content[lang].splash}</h1>
        <p style={{ letterSpacing: '3px', fontSize: '10px', color: '#fdfcf5', marginTop: '10px', opacity: 0.8 }}>{content[lang].active}</p>
        <style>{`@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.05); opacity: 1; } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '35px' }} alt="Logo" />
        <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '10px' }}>{lang.toUpperCase()}</button>
      </div>

      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '200', fontStyle: 'italic', marginBottom: '40px' }}>{content[lang].frecuencias}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
          {content[lang].tracks.map((track) => (
            <div key={track.id} onClick={() => { setSelectedTrack(track); setIsExpanded(true); setTimeLeft(null); setIsLooping(true); }}
                 style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: '20px', display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer' }}>
              <span style={{ color: '#22d3ee', fontFamily: 'monospace' }}>{track.id}</span>
              <span style={{ flex: 1, fontSize: '18px', fontWeight: '300' }}>{track.name}</span>
              <span style={{ opacity: 0.2 }}>▶</span>
            </div>
          ))}
        </div>
      </div>

      {isExpanded && selectedTrack && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: '#020617', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <button onClick={() => { setIsExpanded(false); setIsPlaying(false); audioRef.current.pause(); }} style={{ position: 'absolute', top: '40px', left: '40px', background: 'none', border: 'none', color: 'white', fontSize: '30px', opacity: 0.3 }}>✕</button>
          <img src="/imagenes/adn-icon.png" style={{ width: '300px', height: '300px', borderRadius: '50%', boxShadow: isPlaying ? '0 0 60px rgba(34,211,238,0.3)' : 'none', transition: 'all 1s' }} />
          <h3 style={{ fontSize: '28px', fontWeight: '200', marginTop: '40px', letterSpacing: '4px' }}>{selectedTrack.name}</h3>
          
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p style={{ color: '#22d3ee', fontSize: '10px', letterSpacing: '4px', marginBottom: '15px' }}>
               {timeLeft ? `${content[lang].timerEnd} ${timeLeft} MIN` : (isLooping ? content[lang].infinite : "ELIGE TIEMPO")}
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              {[15, 30, 60].map(time => (
                <button key={time} onClick={() => { setTimeLeft(time); setIsLooping(false); }} style={{ background: timeLeft === time ? 'rgba(34,211,238,0.2)' : 'none', border: '1px solid #22d3ee', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '10px' }}>{time} MIN</button>
              ))}
              <button onClick={() => { setTimeLeft(null); setIsLooping(true); }} style={{ background: isLooping ? 'rgba(34,211,238,0.2)' : 'none', border: '1px solid #22d3ee', color: 'white', padding: '5px 15px', borderRadius: '20px' }}>∞</button>
            </div>
          </div>

          <button onClick={togglePlay} style={{ marginTop: '40px', width: '80px', height: '80px', borderRadius: '50%', border: '1px solid #22d3ee', background: isPlaying ? 'rgba(34,211,238,0.1)' : 'none', color: 'white' }}>
            {isPlaying ? '||' : '▶'}
          </button>
          <audio ref={audioRef} src={selectedTrack.file} loop={isLooping} />
        </div>
      )}
    </div>
  );
};

export default App;