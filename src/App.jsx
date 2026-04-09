import React, { useState, useEffect, useRef } from 'react';

// Estilos CSS en línea para asegurar que las animaciones y clases funcionen
const styles = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.05); opacity: 1; }
  }
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 40px rgba(34, 211,238, 0.1); }
    50% { box-shadow: 0 0 60px rgba(34, 211, 238, 0.3); }
  }
  .track-card:hover {
    background-color: rgba(255, 255, 255, 0.05) !important;
    border-color: rgba(34, 211, 238, 0.3) !important;
  }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [lang, setLang] = useState('es');
  const [activeTab, setActiveTab] = useState('frecuencias');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isLooping, setIsLooping] = useState(true);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  // TEXTOS (Incluyendo descripciones y Hz que se habían perdido)
  const content = {
    es: {
      splash: "RESONANCIA ORIGEN",
      frecuencias: "Frecuencias",
      meditaciones: "Meditaciones",
      active: "ACTIVANDO TU CONSCIENCIA GENÉTICA",
      timerEnd: "Cerrando ciclo en",
      infinite: "Repetición Infinita",
      tracks: [
        { id: "01", name: "Alpha Integration", hz: "8-10 Hz", file: "/audio/alpha-integration.mp3", desc: "Sincroniza los hemisferios cerebrales para un estado de calma profunda." },
        { id: "02", name: "Alpha Creator", hz: "8-12 Hz", file: "/audio/alpha-creator.mp3", desc: "Activa el estado de flujo creativo e idealiza proyectos desde el origen." },
        { id: "03", name: "Alpha Void", hz: "8-13 Hz", file: "/audio/alpha-void.mp3", desc: "Punto cero de la consciencia. Silencio total para el reordenamiento genético." },
        { id: "04", name: "Alpha Origen", hz: "8 Hz", file: "/audio/alpha-origen.mp3", desc: "Conexión directa con la frecuencia Schumann y la resonancia primordial." },
        { id: "05", name: "Gaia Vision", hz: "8.3 Hz", file: "/audio/gaia-vision.mp3", desc: "Expansión de la percepción sensorial y conexión planetaria." },
        { id: "06", name: "Alpha Voice", hz: "8.22 Hz", file: "/audio/alpha-voice.mp3", desc: "Sintoniza la expresión de tu verdad interna con tu campo vibratorio." }
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
        { id: "01", name: "Alpha Integration", hz: "8-10 Hz", file: "/audio/alpha-integration.mp3", desc: "Synchronizes brain hemispheres for a state of deep calm." },
        { id: "02", name: "Alpha Creator", hz: "8-12 Hz", file: "/audio/alpha-creator.mp3", desc: "Activates the creative flow state and idealizes projects from the origin." },
        { id: "03", name: "Alpha Void", hz: "8-13 Hz", file: "/audio/alpha-void.mp3", desc: "Consciousness zero point. Total silence for genetic reordering." },
        { id: "04", name: "Alpha Origin", hz: "8 Hz", file: "/audio/alpha-origen.mp3", desc: "Direct connection with the Schumann frequency and primordial resonance." },
        { id: "05", name: "Gaia Vision", hz: "8.3 Hz", file: "/audio/gaia-vision.mp3", desc: "Expansion of sensory perception and planetary connection." },
        { id: "06", name: "Alpha Voice", hz: "8.22 Hz", file: "/audio/alpha-voice.mp3", desc: "Tunes the expression of your inner truth with your vibratory field." }
      ]
    }
  };

  // Lógica del Temporizador
  useEffect(() => {
    if (timeLeft > 0 && isPlaying) {
      timerRef.current = setTimeout(() => setTimeLeft(timeLeft - 1), 60000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      if (audioRef.current) audioRef.current.pause();
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, isPlaying]);

  // Pantalla de bienvenida (Splash)
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(e => console.log(e));
    setIsPlaying(!isPlaying);
  };

  // 1. PANTALLA DE BIENVENIDA ESPECTACULAR (Recuperada)
  if (showSplash) {
    return (
      <>
        <style>{styles}</style>
        <div style={{backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px'}}>
          {/* Logo Grande y Respirando */}
          <img src="/imagenes/genora-logo-white.png" style={{ width: '220px', height: 'auto', marginBottom: '40px', animation: 'pulse 3s infinite ease-in-out' }} alt="Logo" />
          <h1 style={{ letterSpacing: '10px', fontSize: '20px', color: '#22d3ee', fontWeight: '200', textTransform: 'uppercase', marginBottom: '15px' }}>{content[lang].splash}</h1>
          {/* Frase Mágica Recuperada */}
          <p style={{ letterSpacing: '4px', fontSize: '12px', color: '#fdfcf5', fontWeight: '300', opacity: 0.7 }}>{content[lang].active}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* HEADER (Logo pequeño y selector de idioma) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', padding: '0 10px' }}>
          <img src="/imagenes/genora-logo-white.png" style={{ height: '30px', width: 'auto', opacity: 0.8 }} alt="Logo" />
          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={() => setLang('es')} style={{ background: 'none', border: 'none', color: lang === 'es' ? '#22d3ee' : '#444', cursor: 'pointer', fontWeight: lang === 'es' ? 'bold' : 'normal', fontSize: '12px' }}>ES</button>
            <button onClick={() => setLang('en')} style={{ background: 'none', border: 'none', color: lang === 'en' ? '#22d3ee' : '#444', cursor: 'pointer', fontWeight: lang === 'en' ? 'bold' : 'normal', fontSize: '12px' }}>EN</button>
          </div>
        </div>

        {/* TABS (Frecuencias / Meditaciones - Recuperado 'Meditaciones') */}
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', marginBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
          <button onClick={() => setActiveTab('frecuencias')} style={{ background: 'none', border: 'none', paddingBottom: '15px', color: activeTab === 'frecuencias' ? '#22d3ee' : '#555', borderBottom: activeTab === 'frecuencias' ? '2px solid #22d3ee' : 'none', cursor: 'pointer', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '300' }}>{content[lang].frecuencias}</button>
          <button onClick={() => setActiveTab('meditaciones')} style={{ background: 'none', border: 'none', paddingBottom: '15px', color: activeTab === 'meditaciones' ? '#22d3ee' : '#555', borderBottom: activeTab === 'meditaciones' ? '2px solid #22d3ee' : 'none', cursor: 'pointer', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '300' }}>{content[lang].meditaciones}</button>
        </div>

        {/* LISTA DE FRECUENCIAS (Diseño elegante de tarjetas) */}
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
          {content[lang].tracks.map((track) => (
            <div key={track.id} className="track-card" onClick={() => { setSelectedTrack(track); setIsExpanded(true); setTimeLeft(null); setIsLooping(true); }}
                 style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '25px', padding: '25px', display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
              <span style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '14px', opacity: 0.8, width: '30px' }}>{track.id}</span>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '1px' }}>{track.name}</span>
                {/* Hz Recuperados en la lista */}
                <p style={{ color: '#22d3ee', fontSize: '10px', letterSpacing: '2px', marginTop: '5px', opacity: 0.6 }}>{track.hz}</p>
              </div>
              <span style={{ opacity: 0.2, fontSize: '20px' }}>▶</span>
            </div>
          ))}
        </div>

        {/* REPRODUCTOR EXPANDIDO (La joya de la corona - Recuperado al 100%) */}
        {isExpanded && selectedTrack && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: '#020617', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', transition: 'all 0.5s ease-in-out' }}>
            {/* Botón Cerrar Minimalista */}
            <button onClick={() => { setIsExpanded(false); setIsPlaying(false); audioRef.current.pause(); }} style={{ position: 'absolute', top: '40px', left: '40px', background: 'none', border: 'none', color: 'white', fontSize: '30px', cursor: 'pointer', opacity: 0.3 }}>✕</button>
            
            {/* Contenedor del ADN con Resplandor y Aro Azul Profundo Recuperados */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '50px' }}>
              {/* Aro Azul Profundo */}
              <div style={{ absolute: 'absolute', width: '320px', height: '320px', borderRadius: '50%', border: '2px solid rgba(34, 211, 238, 0.05)', box_shadow: '0 0 50px rgba(34, 211, 238, 0.03)' }} />
              {/* Imagen del ADN con Resplandor Latiendo */}
              <img src="/imagenes/adn-icon.png" style={{ width: '300px', height: '300px', borderRadius: '50%', position: 'relative', zIndex: 1, animation: isPlaying ? 'pulse 4s infinite ease-in-out, glow 4s infinite ease-in-out' : 'none', transition: 'all 1s ease' }} alt="ADN" />
            </div>

            {/* Título y Descripción Recuperada */}
            <h3 style={{ fontSize: '32px', fontWeight: '200', marginTop: '20px', letterSpacing: '5px', textTransform: 'uppercase', textAlign: 'center' }}>{selectedTrack.name}</h3>
            <p style={{ color: '#fdfcf5', fontSize: '14px', fontWeight: '300', marginTop: '15px', maxWidth: '400px', textAlign: 'center', lineHeight: '1.6', opacity: 0.8 }}>"{selectedTrack.desc}"</p>
            
            {/* CONTROLES DE TIEMPO (Elegantes y Minimalistas) */}
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              {/* Texto del estado del tiempo */}
              <p style={{ color: '#22d3ee', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                {timeLeft ? `${content[lang].timerEnd} ${timeLeft} MIN` : (isLooping ? content[lang].infinite : "ELIGE DURACIÓN")}
              </p>
              
              {/* Botones de selección de tiempo (Diseño Espectacular) */}
              <div style={{ display: 'flex', gap: '10px' }}>
                {[15, 30, 60].map((time) => (
                  <button key={time} onClick={() => { setTimeLeft(time); setIsLooping(false); }} 
                          style={{ padding: '10px 20px', borderRadius: '25px', border: timeLeft === time ? '2px solid #22d3ee' : '1px solid rgba(255,255,255,0.1)', background: timeLeft === time ? 'rgba(34, 211, 238, 0.1)' : 'none', color: timeLeft === time ? '#fff' : 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '2px', cursor: 'pointer', transition: 'all 0.3s ease', fontWeight: timeLeft === time ? 'bold' : 'normal' }}>
                    {time} MIN
                  </button>
                ))}
                {/* Botón Infinito */}
                <button onClick={() => { setTimeLeft(null); setIsLooping(true); }} 
                        style={{ padding: '10px 20px', borderRadius: '25px', border: isLooping ? '2px solid #22d3ee' : '1px solid rgba(255,255,255,0.1)', background: isLooping ? 'rgba(34, 211, 238, 0.1)' : 'none', color: isLooping ? '#fff' : 'rgba(255,255,255,0.6)', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease' }}>∞</button>
              </div>
            </div>

            {/* BOTÓN PLAY BIG (Diseño Espectacular) */}
            <button onClick={togglePlay} style={{ marginTop: '60px', width: '90px', height: '90px', borderRadius: '50%', border: '1px solid #22d3ee', background: isPlaying ? 'rgba(34,211,238,0.1)' : 'none', color: 'white', fontSize: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: isPlaying ? '0 0 30px rgba(34, 211, 238, 0.2)' : 'none', transition: 'all 0.3s ease' }}>
              {isPlaying ? '||' : '▶'}
            </button>

            <audio ref={audioRef} src={selectedTrack.file} loop={isLooping} onEnded={() => setIsPlaying(false)} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;