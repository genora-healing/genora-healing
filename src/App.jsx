import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes breathe {
    0%, 100% { transform: scale(1); opacity: 0.95; }
    50% { transform: scale(1.05); opacity: 1; }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .frecuencia-card { transition: all 0.3s ease; }
  .time-button { transition: all 0.2s ease; cursor: pointer; border-radius: 40px !important; }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('frecuencias');
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [adnLoaded, setAdnLoaded] = useState(false); 
  
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio en espera..."));
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

  const tracks = [
    { id: "01", name: "Alpha Integración", hz: "8 – 10 Hz", type: "frecuencias", desc: "Sincroniza los hemisferios cerebrales.", url: "/audio/alpha-integration.mp3" },
    { id: "02", name: "Alpha Creator", hz: "8 – 12 Hz", type: "frecuencias", desc: "Activa el estado de flujo creativo.", url: "/audio/alpha-creator.mp3" },
    { id: "03", name: "Alpha Void", hz: "8 – 13 Hz", type: "frecuencias", desc: "Punto cero de la consciencia.", url: "/audio/alpha-void.mp3" },
    { id: "04", name: "Alpha Origen", hz: "8 Hz", type: "frecuencias", desc: "Frecuencia Schumann y resonancia primordial.", url: "/audio/alpha-origen.mp3" },
    { id: "05", name: "Gaia Vision", hz: "8,3 Hz", type: "frecuencias", desc: "Expansión sensorial planetaria.", url: "/audio/gaia-vision.mp3" },
    { id: "06", name: "Alpha Voice", hz: "8,22 Hz", type: "frecuencias", desc: "Sintoniza la expresión de tu verdad.", url: "/audio/alpha-voice.mp3" }
  ];

  const accentColor = activeTab === 'frecuencias' ? '#22d3ee' : '#a855f7';

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', maxWidth: '80%', animation: 'breathe 3s infinite ease-in-out' }} alt="Logo" />
        
        {/* RESONANCIA ORIGEN: 18px (Inamovible) */}
        <h1 style={{ 
          fontSize: '18px', 
          fontWeight: '300', 
          letterSpacing: '4px', 
          color: '#22d3ee', 
          textTransform: 'uppercase', 
          marginTop: '30px',
          marginBottom: '5px' 
        }}>
          RESONANCIA ORIGEN
        </h1>
        
        {/* SUBTÍTULO: 10px y Tracking de 3px (Para que expanda sin romper el margen) */}
        <p style={{ 
          fontSize: '10px', 
          fontWeight: '200', 
          letterSpacing: '3px', 
          color: '#fdfcf5', 
          opacity: 0.7, 
          marginTop: '0px', 
          textTransform: 'uppercase',
          width: '100%',
          textAlign: 'center'
        }}>
          ACTIVANDO TU CONSCIENCIA GENÉTICA
        </p>
      </div>
    );
  }

  // REPRODUCTOR Y LISTA (Se mantienen sin cambios para no desordenar)
  if (selectedTrack) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <style>{inlineStyles}</style>
        <audio ref={audioRef} src={selectedTrack.url} loop={selectedTime === '∞'} />
        <button onClick={() => { setSelectedTrack(null); setIsPlaying(false); setAdnLoaded(false); }} style={{ position: 'absolute', top: '25px', left: '25px', background: 'none', border: 'none', color: 'white', fontSize: '24px', opacity: 0.4, cursor: 'pointer' }}>✕</button>
        <p style={{ fontSize: '9px', letterSpacing: '3px', color: '#fdfcf5', opacity: 0.6, marginBottom: '60px', textTransform: 'uppercase', marginTop: '-75px' }}>Resonancia Origen • Álbum Alpha 1</p>
        <div style={{ position: 'relative', width: '170px', height: '170px', marginBottom: '40px', borderRadius: '50%', border: '4px solid #001a33', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617', boxShadow: adnLoaded ? `0 0 45px ${accentColor}33` : 'none', animation: isPlaying ? 'breathe 4s infinite ease-in-out' : 'none', opacity: adnLoaded ? 1 : 0, transition: 'opacity 0.5s' }}><img src="/imagenes/adn-icon.png" onLoad={() => setAdnLoaded(true)} style={{ width: '130%', height: '130%', objectFit: 'cover', borderRadius: '50%', filter: `drop-shadow(0 0 12px ${accentColor}) drop-shadow(0 0 35px ${accentColor}88)` }} alt="ADN" /></div>
        <h2 style={{ fontSize: '24px', fontWeight: '200', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '4px' }}>{selectedTrack.name}</h2>
        <p style={{ color: accentColor, fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold', marginBottom: '20px' }}>{selectedTrack.hz}</p>
        <p style={{ fontSize: '13px', color: '#fdfcf5', opacity: 0.7, maxWidth: '300px', lineHeight: '1.4', marginBottom: '40px' }}>"{selectedTrack.desc}"</p>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>{[15, 30, 60, '∞'].map((time) => (<button key={time} onClick={() => setSelectedTime(time)} className="time-button" style={{ width: '58px', padding: '9px 0', border: `1px solid ${selectedTime === time ? accentColor : 'rgba(255,255,255,0.1)'}`, background: selectedTime === time ? `${accentColor}22` : 'none', color: 'white', fontSize: '12px' }}>{time === '∞' ? time : `${time}'`}</button>))}</div>
        <button onClick={() => setIsPlaying(!isPlaying)} style={{ width: '80px', height: '80px', borderRadius: '50%', border: `1px solid ${accentColor}`, background: isPlaying ? `${accentColor}11` : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><span style={{ fontSize: '26px', color: 'white', marginLeft: isPlaying ? '0' : '5px' }}>{isPlaying ? '||' : '▶'}</span></button>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px', fontFamily: 'sans-serif' }}>
      <style>{inlineStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', paddingTop: '10px' }}><img src="/imagenes/genora-logo-white.png" style={{ height: '140px', width: 'auto' }} alt="Logo" /><div style={{ fontSize: '11px', letterSpacing: '2px', color: accentColor, fontWeight: 'bold', border: `1px solid ${accentColor}33`, padding: '4px 12px', borderRadius: '20px' }}>ES | EN</div></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><div style={{ position: 'relative', width: '170px', height: '170px', marginBottom: '40px', borderRadius: '50%', border: '4px solid #001a33', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617', boxShadow: adnLoaded ? `0 0 50px ${accentColor}44` : 'none', animation: 'breathe 4s infinite ease-in-out', opacity: adnLoaded ? 1 : 0, transition: 'opacity 0.5s' }}><img src="/imagenes/adn-icon.png" onLoad={() => setAdnLoaded(true)} style={{ width: '130%', height: '130%', objectFit: 'cover', borderRadius: '50%', filter: `drop-shadow(0 0 15px ${accentColor}) drop-shadow(0 0 40px ${accentColor}88)` }} alt="ADN" /></div><div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '70px' }}><input type="text" placeholder="BUSCAR..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: '90%', maxWidth: '400px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '25px', padding: '12px 20px', color: 'white', fontSize: '12px', textAlign: 'center', letterSpacing: '3px', outline: 'none', margin: '0 auto', display: 'block' }} /></div><div style={{ display: 'flex', gap: '30px', marginBottom: '35px' }}><span onClick={() => {setActiveTab('frecuencias'); setAdnLoaded(false);}} style={{ cursor: 'pointer', fontSize: '12px', letterSpacing: '2px', color: activeTab === 'frecuencias' ? '#22d3ee' : '#444', borderBottom: activeTab === 'frecuencias' ? '2px solid #22d3ee' : 'none', paddingBottom: '6px', textTransform: 'uppercase' }}>Frecuencias</span><span onClick={() => {setActiveTab('meditaciones'); setAdnLoaded(false);}} style={{ cursor: 'pointer', fontSize: '12px', letterSpacing: '2px', color: activeTab === 'meditaciones' ? '#a855f7' : '#444', borderBottom: activeTab === 'meditaciones' ? '2px solid #a855f7' : 'none', paddingBottom: '6px', textTransform: 'uppercase' }}>Meditaciones</span></div><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%', maxWidth: '480px' }}>{tracks.filter(t => t.type === activeTab && t.name.toLowerCase().includes(searchTerm.toLowerCase())).map(track => (<div key={track.id} onClick={() => {setSelectedTrack(track); setAdnLoaded(false);}} className="frecuencia-card" style={{ padding: '16px 8px', borderRadius: '40px', border: `1px solid ${accentColor}33`, background: 'rgba(255,255,255,0.02)', textAlign: 'center', cursor: 'pointer' }}><div style={{ fontSize: '13px', fontWeight: '300', color: 'white' }}>{track.name}</div><div style={{ fontSize: '9px', color: accentColor, marginTop: '8px', fontWeight: 'bold' }}>{track.hz}</div></div>))}</div></div>
    </div>
  );
};

export default App;