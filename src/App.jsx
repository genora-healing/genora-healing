import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('frecuencias');
  const [lang, setLang] = useState('es');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // 1. DATOS DE LA GUÍA (Paso 2.1 y 2.5)
  const tracks = [
    { id: "01", name: "Alpha Integración", hz: "8 – 10 Hz", type: "frecuencias", file: "/audio/alpha-integration.mp3", desc: "Sincroniza los hemisferios cerebrales para un estado de calma profunda." },
    { id: "02", name: "Alpha Creator", hz: "8 – 12 Hz", type: "frecuencias", file: "/audio/alpha-creator.mp3", desc: "Activa el estado de flujo creativo e idealiza proyectos desde el origen." },
    { id: "03", name: "Alpha Void", hz: "8 – 13 Hz", type: "frecuencias", file: "/audio/alpha-void.mp3", desc: "Punto cero de la consciencia. Silencio total para el reordenamiento genético." },
    { id: "04", name: "Alpha Origen", hz: "8 Hz", type: "frecuencias", file: "/audio/alpha-origen.mp3", desc: "Conexión directa con la frecuencia Schumann y la resonancia primordial." },
    { id: "05", name: "Gaia Vision", hz: "8,3 Hz", type: "frecuencias", file: "/audio/gaia-vision.mp3", desc: "Expansión de la percepción sensorial y conexión planetaria." },
    { id: "06", name: "Alpha Voice", hz: "8,22 Hz", type: "frecuencias", file: "/audio/alpha-voice.mp3", desc: "Sintoniza la expresión de tu verdad interna con tu campo vibratorio." },
    { id: "M1", name: "Coherencia del Ser", hz: "963 Hz", type: "meditaciones", file: "/audio/coherencia-ser.mp3", desc: "Sincroniza corazón y mente en una paz inquebrantable." }
  ];

  // 2. EFECTOS Y ANIMACIONES (Paso 1 y 2.5)
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const accentColor = activeTab === 'frecuencias' ? '#22d3ee' : '#a855f7';

  // 🧱 PASO 1: SPLASH SCREEN (Respirando y con frase correcta)
  if (showSplash) {
    return (
      <div style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'sans-serif', padding: '20px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '220px', height: 'auto', marginBottom: '30px', animation: 'pulse 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '20px', fontWeight: '300', letterSpacing: '8px', color: '#22d3ee', textTransform: 'uppercase' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#22d3ee', opacity: 0.6, marginTop: '15px' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
        <style>{` @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.05); opacity: 1; } } `}</style>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px', fontFamily: 'sans-serif' }}>
      
      {/* 🧱 PASO 2.5: HEADER LOGO AUMENTADO (85px) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '85px', width: 'auto' }} alt="Logo Principal" />
        <div style={{ fontSize: '15px', letterSpacing: '2px', color: '#22d3ee', fontWeight: 'bold' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* 🧱 PASO 2.5: ADN RESPIRANDO Y GIGANTE (180px) */}
        <div style={{ width: '180px', height: '180px', marginBottom: '30px', borderRadius: '50%', border: `3px solid ${accentColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#020617', boxShadow: `0 0 35px ${accentColor}66`, animation: 'pulse 3s infinite ease-in-out' }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.3)' }} alt="ADN" />
        </div>

        {/* 🧱 PASO 2.3: NAVEGACIÓN ENTRE SALAS */}
        <div style={{ display: 'flex', gap: '35px', marginBottom: '30px' }}>
          <span onClick={() => setActiveTab('frecuencias')} style={{ cursor: 'pointer', fontSize: '13px', letterSpacing: '3px', color: activeTab === 'frecuencias' ? '#22d3ee' : '#444', borderBottom: activeTab === 'frecuencias' ? '2px solid #22d3ee' : 'none', paddingBottom: '6px', textTransform: 'uppercase' }}>Frecuencias</span>
          <span onClick={() => setActiveTab('meditaciones')} style={{ cursor: 'pointer', fontSize: '13px', letterSpacing: '3px', color: activeTab === 'meditaciones' ? '#a855f7' : '#444', borderBottom: activeTab === 'meditaciones' ? '2px solid #a855f7' : 'none', paddingBottom: '6px', textTransform: 'uppercase' }}>Meditaciones</span>
        </div>

        {/* 🧱 PASO 2.1: CUADRÍCULA DINÁMICA */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '500px' }}>
          {tracks.filter(t => t.type === activeTab).map(track => (
            <div key={track.id} onClick={() => { setSelectedTrack(track); setIsExpanded(true); }} style={{ border: `1.5px solid ${accentColor}`, padding: '20px 10px', borderRadius: '14px', textAlign: 'center', background: `${accentColor}05`, cursor: 'pointer' }}>
              <div style={{ fontSize: '14px', fontWeight: '300', letterSpacing: '1px' }}>{track.name}</div>
              <div style={{ fontSize: '11px', color: accentColor, marginTop: '8px', fontWeight: 'bold' }}>{track.hz}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 🧱 PASO 3.6: REPRODUCTOR EXPANDIDO CON ESTÉTICA CORRECTA */}
      {isExpanded && selectedTrack && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: '#020617', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px' }}>
          <button onClick={() => { setIsExpanded(false); setIsPlaying(false); audioRef.current.pause(); }} style={{ position: 'absolute', top: '40px', left: '40px', background: 'none', border: 'none', color: 'white', fontSize: '30px', cursor: 'pointer', opacity: 0.3 }}>✕</button>
          
          <div style={{ width: '280px', height: '280px', borderRadius: '50%', border: `2px solid ${accentColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: isPlaying ? `0 0 60px ${accentColor}44` : 'none', transition: 'all 1s' }}>
            <img src="/imagenes/adn-icon.png" style={{ width: '80%', animation: isPlaying ? 'pulse 4s infinite ease-in-out' : 'none' }} alt="ADN Play" />
          </div>

          <h3 style={{ fontSize: '28px', fontWeight: '200', marginTop: '40px', letterSpacing: '5px' }}>{selectedTrack.name}</h3>
          <p style={{ color: accentColor, fontSize: '12px', letterSpacing: '4px', marginTop: '10px', opacity: 0.8 }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>

          <button onClick={() => { if(isPlaying) audioRef.current.pause(); else audioRef.current.play(); setIsPlaying(!isPlaying); }} style={{ marginTop: '50px', width: '80px', height: '80px', borderRadius: '50%', border: `1px solid ${accentColor}`, background: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>
            {isPlaying ? '||' : '▶'}
          </button>
          
          <audio ref={audioRef} src={selectedTrack.file} onEnded={() => setIsPlaying(false)} />
        </div>
      )}
    </div>
  );
};

export default App;