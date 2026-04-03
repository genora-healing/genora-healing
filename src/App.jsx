import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [lang, setLang] = useState('es');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const content = {
    es: {
      splash: "RESONANCIA ORIGEN",
      frecuencias: "Frecuencias",
      active: "Frecuencia Activa",
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
      active: "Active Frequency",
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
      <div className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-50 p-6 text-center">
        <img src="/imagenes/genora-logo-white.png" className="h-32 md:h-48 animate-pulse mb-8 object-contain" alt="GENORA" />
        <h1 className="text-white tracking-[0.4em] font-light text-xs md:text-sm opacity-40 uppercase">{content[lang].splash}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans p-6 overflow-x-hidden selection:bg-cyan-500/30">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-16 max-w-2xl mx-auto">
        <img src="/imagenes/genora-logo-white.png" className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity" alt="Logo" />
        <button 
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="text-[10px] tracking-[0.2em] border border-white/10 px-5 py-2 rounded-full hover:bg-white/5 hover:border-white/30 transition-all font-light"
        >
          {lang === 'es' ? 'ENGLISH' : 'ESPAÑOL'}
        </button>
      </div>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-extralight tracking-tight mb-12 text-center text-white/90 italic">
          {content[lang].frecuencias}
        </h2>

        {/* LISTA DE TRACKS */}
        <div className="grid grid-cols-1 gap-5 mb-32">
          {content[lang].tracks.map((track) => (
            <button 
              key={track.id} 
              onClick={() => { 
                setSelectedTrack(track); 
                setIsPlaying(false);
                setIsExpanded(true); 
              }}
              className={`group p-6 rounded-[2rem] border transition-all duration-500 flex items-center gap-6 ${
                selectedTrack?.id === track.id 
                ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_25px_rgba(34,211,238,0.15)]' 
                : 'border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-[10px] font-mono border transition-colors duration-500 ${
                selectedTrack?.id === track.id ? 'text-cyan-400 border-cyan-400' : 'text-white/20 border-white/10 group-hover:border-white/30'
              }`}>
                {track.id}
              </div>
              <div className={`flex-1 text-left font-light text-lg tracking-wide transition-colors ${
                selectedTrack?.id === track.id ? 'text-white' : 'text-white/60 group-hover:text-white/90'
              }`}>
                {track.name}
              </div>
              <div className={`transition-all duration-500 ${selectedTrack?.id === track.id ? 'text-cyan-400 scale-110' : 'text-white/10 group-hover:text-white/30'}`}>
                <svg xmlns="http://www.w3.org/2003/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* REPRODUCTOR EXPANDIDO */}
      {isExpanded && selectedTrack && (
        <div className="fixed inset-0 bg-[#020617] z-[70] flex flex-col items-center justify-center p-8 animate-in fade-in zoom-in duration-500">
          <button 
            onClick={() => { setIsExpanded(false); setIsPlaying(false); audioRef.current.pause(); }}
            className="absolute top-12 left-12 text-white/30 hover:text-white transition-colors p-2"
          >
            <svg xmlns="http://www.w3.org/2003/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className="relative mb-20 flex items-center justify-center">
            {/* Anillos de expansión cuando suena */}
            <div className={`absolute w-72 h-72 rounded-full border border-cyan-500/20 transition-all duration-[3000ms] ${isPlaying ? 'scale-[2] opacity-0' : 'scale-100 opacity-0'}`}></div>
            <div className={`absolute w-72 h-72 rounded-full border border-cyan-400/10 transition-all duration-[2000ms] delay-500 ${isPlaying ? 'scale-[1.8] opacity-0' : 'scale-100 opacity-0'}`}></div>
            
            <img 
              src="/imagenes/adn-icon.png" 
              className={`h-64 w-64 md:h-80 md:w-80 relative z-10 rounded-full transition-all duration-1000 ${
                isPlaying 
                ? 'scale-105 shadow-[0_0_90px_rgba(34,211,238,0.3)] animate-[pulse_4s_infinite]' 
                : 'opacity-30 grayscale blur-[2px] scale-95'
              }`} 
              alt="ADN" 
            />
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-extralight tracking-[0.2em] mb-3 text-white">{selectedTrack.name}</h3>
            <p className="text-cyan-400 text-[10px] tracking-[0.6em] uppercase font-medium">{content[lang].active}</p>
          </div>

          <button 
            onClick={togglePlay}
            className={`w-28 h-28 rounded-full border flex items-center justify-center transition-all duration-500 active:scale-90 ${
              isPlaying ? 'bg-cyan-500/10 border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/30'
            }`}
          >
            {isPlaying ? (
              <svg className="text-cyan-400" xmlns="http://www.w3.org/2003/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            ) : (
              <svg className="text-white ml-2" xmlns="http://www.w3.org/2003/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
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