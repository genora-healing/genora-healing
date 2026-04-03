import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [lang, setLang] = useState('es');
  const [activeTrack, setActiveTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [timer, setTimer] = useState(0);
  const [isInfinite, setIsInfinite] = useState(true);
  const audioRef = useRef(null);

  const content = {
    es: {
      splash: "RESONANCIA ORIGEN",
      frecuencias: "Frecuencias",
      meditaciones: "Meditaciones",
      timerEnd: "Cerrando ciclo en",
      infinite: "Repetición Infinita",
      cycle: "Ciclo de 15 min",
      alert: "Sesión de sanación completada ✨",
      tracks: [
        { id: "01", name: "Alpha Integration", hz: "8-10 Hz", file: "/audio/alpha-integration.mp3", desc: "Sincroniza los hemisferios cerebrales para un estado de calma profunda." },
        { id: "02", name: "Alpha Creator", hz: "8-12 Hz", file: "/audio/alpha-creator.mp3", desc: "Activa el estado de flujo creativo e idealiza proyectos desde el origen." },
        { id: "03", name: "Alpha Void", hz: "8-13 Hz", file: "/audio/alpha-void.mp3", desc: "Punto cero de la consciencia. Silencio total para el reordenamiento genético." },
        { id: "04", name: "Alpha Origen", hz: "8 Hz", file: "/audio/alpha-origen.mp3", desc: "Conexión directa con la frecuencia Schumann y la resonancia primordial." },
        { id: "05", name: "Gaia Vision", hz: "8.3 Hz", file: "/audio/gaia-vision.mp3", desc: "Expansión de la percepción sensorial y conexión planetaria." },
        { id: "06", name: "Alpha Voice", hz: "8,22 Hz", file: "/audio/alpha-voice.mp3", desc: "Sintoniza la expresión de tu verdad interna con tu campo vibratorio." }
      ],
      meds: [
        { id: "M1", name: "Activación del Origen", duration: "15 min", file: "/audio/alpha-origen.mp3", desc: "Viaje guiado al centro de tu ADN ancestral." },
        { id: "M2", name: "Coherencia del Ser", duration: "22 min", file: "/audio/alpha-integration.mp3", desc: "Sincroniza corazón y mente en una paz inquebrantable." }
      ]
    },
    en: {
      splash: "ORIGIN RESONANCE",
      frecuencias: "Frequencies",
      meditaciones: "Meditations",
      timerEnd: "Closing cycle in",
      infinite: "Infinite Loop",
      cycle: "15 min Cycle",
      alert: "Healing session completed ✨",
      tracks: [
        { id: "01", name: "Alpha Integration", hz: "8-10 Hz", file: "/audio/alpha-integration.mp3", desc: "Synchronizes brain hemispheres for a state of deep calm." },
        { id: "02", name: "Alpha Creator", hz: "8-12 Hz", file: "/audio/alpha-creator.mp3", desc: "Activates the creative flow state and idealizes projects from the origin." },
        { id: "03", name: "Alpha Void", hz: "8-13 Hz", file: "/audio/alpha-void.mp3", desc: "Consciousness zero point. Total silence for genetic reordering." },
        { id: "04", name: "Alpha Origin", hz: "8 Hz", file: "/audio/alpha-origen.mp3", desc: "Direct connection with the Schumann frequency and primordial resonance." },
        { id: "05", name: "Gaia Vision", hz: "8.3 Hz", file: "/audio/gaia-vision.mp3", desc: "Expansion of sensory perception and planetary connection." },
        { id: "06", name: "Alpha Voice", hz: "8.22 Hz", file: "/audio/alpha-voice.mp3", desc: "Tunes the expression of your inner truth with your vibratory field." }
      ],
      meds: [
        { id: "M1", name: "Origin Activation", duration: "15 min", file: "/audio/alpha-origen.mp3", desc: "Guided journey to the center of your ancestral DNA." },
        { id: "M2", name: "Coherence of Being", duration: "22 min", file: "/audio/alpha-integration.mp3", desc: "Synchronizes heart and mind in unshakable peace." }
      ]
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying && !isInfinite && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && !isInfinite && isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
      alert(content[lang].alert);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timer, isInfinite, lang]);

  const togglePlay = (track) => {
    if (activeTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(track);
      setIsPlaying(true);
      if (!isInfinite) setTimer(900); // 15 min
      if (audioRef.current) {
        audioRef.current.src = track.file;
        audioRef.current.play();
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (showSplash) {
    return (
      <div className="splash">
        <img src="/imagenes/genora-logo-white.png" alt="Genora Logo" className="splash-logo" />
        <h1 className="splash-text">{content[lang].splash}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <img src="/imagenes/adn-icon.png" alt="ADN" className="header-icon" />
        <div className="lang-switch">
          <button onClick={() => setLang('es')} className={lang === 'es' ? 'active' : ''}>ES</button>
          <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <h2 className="section-title">{content[lang].frecuencias}</h2>
          <div className="grid">
            {content[lang].tracks.map((track) => (
              <div 
                key={track.id} 
                className={`card ${activeTrack?.id === track.id ? 'active-card' : ''}`}
                onClick={() => togglePlay(track)}
              >
                <div className="card-info">
                  <span className="track-hz">{track.hz}</span>
                  <h3 className="track-name">{track.name}</h3>
                </div>
                <button className="play-button">
                  {activeTrack?.id === track.id && isPlaying ? '⏸' : '▶'}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">{content[lang].meditaciones}</h2>
          <div className="grid">
            {content[lang].meds.map((med) => (
              <div 
                key={med.id} 
                className={`card med-card ${activeTrack?.id === med.id ? 'active-card' : ''}`}
                onClick={() => togglePlay(med)}
              >
                <div className="card-info">
                  <span className="track-hz">{med.duration}</span>
                  <h3 className="track-name">{med.name}</h3>
                </div>
                <button className="play-button">
                  {activeTrack?.id === med.id && isPlaying ? '▶' : '🎧'}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {activeTrack && (
        <footer className="player">
          <div className="player-top">
            <div className="track-details">
              <h4>{activeTrack.name}</h4>
              <p>{activeTrack.desc}</p>
            </div>
            <div className="controls">
              <button 
                className={`mode-btn ${isInfinite ? 'active' : ''}`}
                onClick={() => setIsInfinite(true)}
              >
                ∞ {content[lang].infinite}
              </button>
              <button 
                className={`mode-btn ${!isInfinite ? 'active' : ''}`}
                onClick={() => {
                  setIsInfinite(false);
                  setTimer(900);
                }}
              >
                ⏱ {content[lang].cycle}
              </button>
            </div>
          </div>
          {!isInfinite && (
            <div className="timer-display">
              {content[lang].timerEnd}: {formatTime(timer)}
            </div>
          )}
          <audio 
            ref={audioRef} 
            src={activeTrack.file} 
            loop={isInfinite}
            onEnded={() => !isInfinite && setIsPlaying(false)}
          />
        </footer>
      )}
    </div>
  );
};

export default App;