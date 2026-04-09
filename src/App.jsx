import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('frecuencias');
  const [lang, setLang] = useState('es');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // 1. BASE DE DATOS FIEL AL PASO 2.5 (Con Hz y Descripciones)
  const tracks = [
    { id: "01", name: "Alpha Integración", hz: "8 – 10 Hz", type: "frecuencias", file: "/audio/alpha-integration.mp3", desc: "Sincroniza los hemisferios cerebrales para un estado de calma profunda." },
    { id: "02", name: "Alpha Creator", hz: "8 – 12 Hz", type: "frecuencias", file: "/audio/alpha-creator.mp3", desc: "Activa el estado de flujo creativo e idealiza proyectos desde el origen." },
    { id: "03", name: "Alpha Void", hz: "8 – 13 Hz", type: "frecuencias", file: "/audio/alpha-void.mp3", desc: "Punto cero de la consciencia. Silencio total para el reordenamiento genético." },
    { id: "04", name: "Alpha Origen", hz: "8 Hz", type: "frecuencias", file: "/audio/alpha-origen.mp3", desc: "Conexión directa con la frecuencia Schumann y la resonancia primordial." },
    { id: "05", name: "Gaia Vision", hz: "8,3 Hz", type: "frecuencias", file: "/audio/gaia-vision.mp3", desc: "Expansión de la percepción sensorial y conexión planetaria." },
    { id: "06", name: "Alpha Voice", hz: "8,22 Hz", type: "frecuencias", file: "/audio/alpha-voice.mp3", desc: "Sintoniza la expresión de tu verdad interna con tu campo vibratorio." },
    { id: "M1", name: "Coherencia del Ser", hz: "963 Hz", type: "meditaciones", file: "/audio/alpha-integration.mp3", desc: "Sincroniza corazón y mente en una paz inquebrantable." }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const accentColor = activeTab === 'frecuencias' ? '#22d3ee' : '#a855f7';

  // 🧱 PASO 1: SPLASH SCREEN CON FRASE BLANCA (No azul)
  if (showSplash) {
    return (
      <div style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'sans-serif', padding: '20px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '220px', height: 'auto', marginBottom: '30px', animation: 'breathe 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '20px', fontWeight: '300', letterSpacing: '8px', color: '#22d3ee' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#fdfcf5', opacity: 0.8, marginTop: '15px' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
        <style>{` @keyframes breathe { 0%, 100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.05); opacity: 1; } } `}</style>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* 🧱 PASO 2.5: HEADER LOGO 85px Y LÍNEAS REDONDEADAS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '85px', width: 'auto' }} alt="Logo" />
        <div style={{ fontSize: '12px', letterSpacing: '2px', color: accentColor, fontWeight: 'bold', border: `1px solid ${accentColor}33`, padding: '5px 15px', borderRadius: '20px' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* 🧱 PASO 3.6: ADN CON RESPLANDOR Y ARO PROFUNDO */}
        <div style={{ position: 'relative', width: '200px', height: '200px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', width: '240px', height: '240px', borderRadius: '50%', border: `1px solid ${accentColor}22`, animation: 'pulseRing 4s infinite' }} />
          <div style={{ width: '190px', height: '190px', borderRadius: '50%', border: `2px solid ${accentColor}`, overflow: 'hidden', boxShadow: `0 0 40px ${accentColor}44`, animation: 'breathe 4s infinite ease-in-out' }}>
            <img src="/imagenes/adn-icon.png" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.2)' }} alt="ADN Central" />
          </div>
        </div>

        {/* 🧱 PASO 2.3: NAVEGACIÓN LIMPIA */}
        <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
          {['frecuencias', 'meditaciones'].map(tab => (
            <span key={tab} onClick={() => setActiveTab(tab)} style={{ cursor: 'pointer', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: activeTab === tab ? accentColor : '#444', borderBottom: activeTab === tab ? `2px solid ${accentColor}` : 'none', paddingBottom: '8px' }}>{tab}</span>
          ))}
        </div>

        {/* 🧱 PASO 3.1: BOTONES OVALADOS (No rectángulos) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '500px' }}>
          {tracks.filter(t => t.type === activeTab).map(track => (
            <div key={track.id} onClick={() => { setSelectedTrack(track); setIsExpanded(true); }} 
                 style={{ border: `1px solid ${accentColor}44`, padding: '25px 10px', borderRadius: '20px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', cursor: 'pointer', transition: '0.3s' }}>
              <div style={{ fontSize: '15px', fontWeight: '300' }}>{track.name}</div>
              <div style={{ fontSize: '10px', color: accentColor, marginTop: '10px', letterSpacing: '2px' }}>{track.hz}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 🧱 PASO 3.6: REPRODUCTOR CON DESCRIPCIÓN */}
      {isExpanded && selectedTrack && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: '#020617', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
          <button onClick={() => { setIsExpanded(false); setIsPlaying(false); audioRef.current.pause(); }} style={{ position: 'absolute', top: '40px', left: '40px', background: 'none', border: 'none', color: 'white', fontSize: '30px', opacity: 0.3 }}>✕</button>
          
          <div style={{ width: '280px', height: '280px', borderRadius: '50%', border: `1px solid ${accentColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: isPlaying ? `0 0 60px ${accentColor}33` : 'none' }}>
            <img src="/imagenes/adn-icon.png" style={{ width: '80%', animation: isPlaying ? 'breathe 3s infinite ease-in-out' : 'none' }} alt="ADN Play" />
          </div>

          <h3 style={{ fontSize: '28px', fontWeight: '200', marginTop: '40px', letterSpacing: '5px' }}>{selectedTrack.name}</h3>
          <p style={{ color: '#fdfcf5', fontSize: '13px', textAlign: 'center', maxWidth: '350px', marginTop: '15px', opacity: 0.7, lineHeight: '1.6' }}>{selectedTrack.desc}</p>

          <button onClick={() => { if(isPlaying) audioRef.current.pause(); else audioRef.current.play(); setIsPlaying(!isPlaying); }} style={{ marginTop: '50px', width: '80px', height: '80px', borderRadius: '50%', border: `1px solid ${accentColor}`, background: isPlaying ? `${accentColor}22` : 'none', color: 'white', fontSize: '24px' }}>
            {isPlaying ? '||' : '▶'}
          </button>
          
          <audio ref={audioRef} src={selectedTrack.file} onEnded={() => setIsPlaying(false)} />
        </div>
      )}
      <style>{`
        @keyframes pulseRing { 0% { transform: scale(0.8); opacity: 0; } 50% { opacity: 0.3; } 100% { transform: scale(1.3); opacity: 0; } }
        @keyframes breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
      `}</style>
    </div>
  );
};

export default App;