import React, { useState, useEffect } from 'react';

const inlineStyles = `
  @keyframes breathe {
    0%, 100% { transform: scale(1); opacity: 0.95; }
    50% { transform: scale(1.05); opacity: 1; }
  }
  .fade-in {
    animation: fadeInEffect 1.2s ease-out forwards;
  }
  @keyframes fadeInEffect {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .frecuencia-card { transition: all 0.3s ease-in-out; }
  .time-button { transition: all 0.2s ease-in-out; cursor: pointer; border-radius: 40px !important; }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('frecuencias');
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulamos una precarga para que el navegador se asiente
    const timer = setTimeout(() => {
      setShowSplash(false);
      setTimeout(() => setIsReady(true), 100);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const tracks = [
    { id: "01", name: "Alpha Integración", hz: "8 – 10 Hz", type: "frecuencias", file: "/audio/alpha-integration.mp3", desc: "Sincroniza los hemisferios cerebrales para un estado de calma profunda." },
    { id: "02", name: "Alpha Creator", hz: "8 – 12 Hz", type: "frecuencias", file: "/audio/alpha-creator.mp3", desc: "Activa el estado de flujo creativo e idealiza proyectos desde el origen." },
    { id: "03", name: "Alpha Void", hz: "8 – 13 Hz", type: "frecuencias", file: "/audio/alpha-void.mp3", desc: "Punto cero de la consciencia. Silencio total para el reordenamiento genético." },
    { id: "04", name: "Alpha Origen", hz: "8 Hz", type: "frecuencias", file: "/audio/alpha-origen.mp3", desc: "Conexión directa con la frecuencia Schumann y la resonancia primordial." },
    { id: "05", name: "Gaia Vision", hz: "8,3 Hz", type: "frecuencias", file: "/audio/gaia-vision.mp3", desc: "Expansión de la percepción sensorial y conexión planetaria." },
    { id: "06", name: "Alpha Voice", hz: "8,22 Hz", type: "frecuencias", file: "/audio/alpha-voice.mp3", desc: "Sintoniza la expresión de tu verdad interna con tu campo vibratorio." },
    { id: "M1", name: "Coherencia del Ser", hz: "963 Hz", type: "meditaciones", file: "/audio/coherencia-ser.mp3", desc: "Sincroniza corazón y mente en una paz inquebrantable." }
  ];

  const accentColor = activeTab === 'frecuencias' ? '#22d3ee' : '#a855f7';

  // --- PORTADA CON ENTRADA SUAVE ---
  if (showSplash) {
    return (
      <div className="fade-in" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', height: 'auto', animation: 'breathe 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '4px', color: '#22d3ee', textTransform: 'uppercase', marginTop: '30px' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '10px', letterSpacing: '2px', color: '#fdfcf5', opacity: 0.8, marginTop: '10px' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
      </div>
    );
  }

  // --- REPRODUCTOR COMPACTO ---
  if (selectedTrack) {
    return (
      <div className="fade-in" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <style>{inlineStyles}</style>
        <button onClick={() => { setSelectedTrack(null); setIsPlaying(false); }} style={{ position: 'absolute', top: '30px', left: '25px', background: 'none', border: 'none', color: 'white', fontSize: '24px', opacity: 0.4 }}>✕</button>
        <div style={{ position: 'relative', width: '180px', height: '180px', marginBottom: '25px', borderRadius: '50%', border: `4px solid #001a33`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 50px ${accentColor}33`, animation: 'breathe 4s infinite ease-in-out' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '130%', height: '130%', objectFit: 'cover', borderRadius: '50%', filter: `drop-shadow(0 0 12px ${accentColor}) drop-shadow(0 0 35px ${accentColor}88)` }} alt="ADN" />
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: '200', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '5px' }}>{selectedTrack.name}</h2>
        <p style={{ color: accentColor, fontSize: '11px', letterSpacing: '3px', fontWeight: 'bold', marginBottom: '15px' }}>{selectedTrack.hz}</p>
        <p style={{ fontSize: '12px', color: '#fdfcf5', opacity: 0.7, maxWidth: '300px', lineHeight: '1.4', marginBottom: '30px' }}>"{selectedTrack.desc}"</p>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '35px' }}>
          {[15, 30, 60, '∞'].map((time) => (
            <button key={time} onClick={() => setSelectedTime(time)} className="time-button" style={{ width: '55px', padding: '8px 0', borderRadius: '40px', border: `1px solid ${selectedTime === time ? accentColor : 'rgba(255,255,255,0.1)'}`, background: selectedTime === time ? `${accentColor}22` : 'none', color: 'white', fontSize: '11px' }}>{time === '∞' ? time : `${time}'`}</button>
          ))}
        </div>
        <button style={{ width: '75px', height: '75px', borderRadius: '50%', border: `1px solid ${accentColor}`, background: isPlaying ? `${accentColor}11` : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '24px', color: 'white' }}>{isPlaying ? '||' : '▶'}</span>
        </button>
      </div>
    );
  }

  // --- LISTA PRINCIPAL SIN SALTOS ---
  return (
    <div className={isReady ? "fade-in" : ""} style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px', fontFamily: 'sans-serif', opacity: isReady ? 1 : 0 }}>
      <style>{inlineStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '160px', width: 'auto', marginLeft: '-10px' }} alt="Logo" />
        <div style={{ fontSize: '11px', letterSpacing: '2px', color: accentColor, fontWeight: 'bold', border: `1px solid ${accentColor}33`, padding: '4px 12px', borderRadius: '20px' }}>ES | EN</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '170px', height: '170px', marginBottom: '65px', borderRadius: '50%', border: `4px solid #001a33`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 50px ${accentColor}44`, animation: 'breathe 4s infinite ease-in-out' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '130%', height: '130%', objectFit: 'cover', borderRadius: '50%', filter: `drop-shadow(0 0 15px ${accentColor}) drop-shadow(0 0 40px ${accentColor}88)` }} alt="ADN" />
        </div>
        <div style={{ width: '90%', maxWidth: '400px', marginBottom: '40px' }}>
          <input type="text" placeholder="BUSCAR..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '25px', padding: '12px 20px', color: 'white', fontSize: '12px', textAlign: 'center', letterSpacing: '3px', outline: 'none' }} />
        </div>
        <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
          <span onClick={() => setActiveTab('frecuencias')} style={{ cursor: 'pointer', fontSize: '12px', letterSpacing: '2px', color: activeTab === 'frecuencias' ? '#22d3ee' : '#444', borderBottom: activeTab === 'frecuencias' ? '2px solid #22d3ee' : 'none', paddingBottom: '6px', textTransform: 'uppercase' }}>Frecuencias</span>
          <span onClick={() => setActiveTab('meditaciones')} style={{ cursor: 'pointer', fontSize: '12px', letterSpacing: '2px', color: activeTab === 'meditaciones' ? '#a855f7' : '#444', borderBottom: activeTab === 'meditaciones' ? '2px solid #a855f7' : 'none', paddingBottom: '6px', textTransform: 'uppercase' }}>Meditaciones</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%', maxWidth: '480px' }}>
          {tracks.filter(t => t.type === activeTab && t.name.toLowerCase().includes(searchTerm.toLowerCase())).map(track => (
            <div key={track.id} onClick={() => setSelectedTrack(track)} className="frecuencia-card" style={{ padding: '16px 8px', borderRadius: '40px', border: `1px solid ${accentColor}33`, background: 'rgba(255,255,255,0.02)', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '13px', fontWeight: '300' }}>{track.name}</div>
              <div style={{ fontSize: '9px', color: accentColor, marginTop: '5px', fontWeight: 'bold' }}>{track.hz}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;