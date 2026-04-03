import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [lang, setLang] = useState('es');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // --- CONFIGURACIÓN DE CONTENIDO ---
  const content = {
    es: {
      splash: "RESONANCIA ORIGEN",
      frecuencias: "Frecuencias",
      tracks: [
        { id: "01", name: "Alpha Integration", file: "/audio/alpha-integration.mp3" },
        { id: "02", name: "Alpha Creator", file: "/audio/alpha-creator.mp3" },
        { id: "03", name: "Alpha Void", file: "/audio/alpha-void.mp3" },
        { id: "04", name: "Alpha Origen", file: "/audio/alpha-origen.mp3" },
        { id: "05", name: "Gaia Vision", file: "/audio/gaia-vision.mp3" },
        { id: "06", name: "Alpha Voice", file: "/audio/alpha-voice.mp3" },
        { id: "M2", name: "Coherencia del Ser", file: "/audio/coherencia-ser.mp3" }
      ]
    },
    en: {
      splash: "ORIGIN RESONANCE",
      frecuencias: "Frequencies",
      tracks: [
        { id: "01", name: "Alpha Integration", file: "/audio/alpha-integration.mp3" },
        { id: "02", name: "Alpha Creator", file: "/audio/alpha-creator.mp3" },
        { id: "03", name: "Alpha Void", file: "/audio/alpha-void.mp3" },
        { id: "04", name: "Alpha Origin", file: "/audio/alpha-origen.mp3" },
        { id: "05", name: "Gaia Vision", file: "/audio/gaia-vision.mp3" },
        { id: "06", name: "Alpha Voice", file: "/audio/alpha-voice.mp3" },
        { id: "M2", name: "Coherence of Being", file: "/audio/coherencia-ser.mp3" }
      ]
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-50">
        <img src="/imagenes/genora-logo-white.png" className="h-48 animate-pulse mb-8" alt="GENORA" />
        <h1 className="text-white tracking-[0.3em] font-light text-sm opacity-50">{content[lang].splash}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans p-6 overflow-x-hidden">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-12 max-w-md mx-auto">
        <img src="/imagenes/genora-logo-white.png" className="h-10 opacity-80" alt="Logo" />
        <button 
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="text-xs tracking-widest border border-white/20 px-4 py-1 rounded-full uppercase hover:bg-white/10 transition-all"
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>

      <h2 className="text-3xl font-extralight tracking-tight mb-10 text-center text-white/90 italic">
        {content[lang].frecuencias}
      </h2>

      {/* LISTA DE TRACKS */}
      <div className="grid grid-cols-1 gap-4 w-full max-w-md mx-auto mb-20">
        {content[lang].tracks.map((track) => (
          <button 
            key={track.id} 
            onClick={() => { 
              setSelectedTrack(track); 
              setIsPlaying(false);
              setIsExpanded(true); 
            }}
            className={`p-5 rounded-3xl border transition-all flex items-center gap-5 ${selectedTrack?.id === track.id ? 'border-cyan-500 bg-cyan-950/20' : 'border-white/5 bg-white/[0.02]'}`}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[10px] text-cyan-400 border border-cyan-800/50 font-mono">
              {track.id}
            </div>
            <div className="flex-1 text-left font-light text-base tracking-wide">
              {track.name}
            </div>
            <div className="text-cyan-400 opacity-40">
              <svg xmlns="http://www.w3.org/2003/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </button>
        ))}
      </div>

      {/* REPRODUCTOR EXPANDIDO */}
      {isExpanded && selectedTrack && (
        <div className="fixed inset-0 bg-[#020617] z-[60] flex flex-col items-center justify-center p-8 transition-all duration-500">
          <button 
            onClick={() => { setIsExpanded(false); setIsPlaying(false); audioRef.current.pause(); }}
            className="absolute top-10 left-10 text-white/40 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2003/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className="relative mb-16 flex items-center justify-center">
            <div className={`absolute w-80 h-80 rounded-full border border-cyan-500/20 transition-all duration-[2000ms] ${isPlaying ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
            <img 
              src="/imagenes/adn-icon.png" 
              className={`h-64 w-64 relative z-10 rounded-full transition-all duration-700 ${isPlaying ? 'scale-110 shadow-[0_0_100px_rgba(34,211,238,0.3)]' : 'opacity-40 grayscale'}`} 
              alt="ADN" 
            />
          </div>

          <h3 className="text-2xl font-light tracking-[0.2em] mb-2 text-white text-center">{selectedTrack.name}</h3>
          <p className="text-cyan-400 text-[10px] tracking-[0.5em] uppercase mb-12">Frecuencia Activa</p>

          <button 
            onClick={togglePlay}
            className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-all active:scale-95"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2003/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2003/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            )}
          </button>

          <audio 
            ref={audioRef} 
            src={selectedTrack.file} 
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      )}
    </div>
  );
};

export default App;