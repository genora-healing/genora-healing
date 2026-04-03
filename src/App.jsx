import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [lang, setLang] = useState('es');
  const [activeTab, setActiveTab] = useState('frecuencias');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const content = {
    es: {
      splash: "RESONANCIA ORIGEN",
      tabs: { frecuencias: "Frecuencias", meditaciones: "Meditaciones" },
      active: "Frecuencia Activa",
      tracks: [
        { id: "01", name: "Alpha Integration", file: "/audio/alpha-integration.mp3", type: "frecuencias" },
        { id: "02", name: "Alpha Creator", file: "/audio/alpha-creator.mp3", type: "frecuencias" },
        { id: "03", name: "Alpha Void", file: "/audio/alpha-void.mp3", type: "frecuencias" },
        { id: "04", name: "Alpha Origen", file: "/audio/alpha-origen.mp3", type: "frecuencias" },
        { id: "05", name: "Gaia Vision", file: "/audio/gaia-vision.mp3", type: "frecuencias" },
        { id: "06", name: "Alpha Voice", file: "/audio/alpha-voice.mp3", type: "frecuencias" },
        { id: "M2", name: "Coherencia del Ser", file: "/audio/coherencia-ser.mp3", type: "meditaciones" }
      ]
    },
    en: {
      splash: "ORIGIN RESONANCE",
      tabs: { frecuencias: "Frequencies", meditaciones: "Meditations" },
      active: "Active Frequency",
      tracks: [
        { id: "01", name: "Alpha Integration", file: "/audio/alpha-integration.mp3", type: "frecuencias" },
        { id: "02", name: "Alpha Creator", file: "/audio/alpha-creator.mp3", type: "frecuencias" },
        { id: "03", name: "Alpha Void", file: "/audio/alpha-void.mp3", type: "frecuencias" },
        { id: "04", name: "Alpha Origin", file: "/audio/alpha-origen.mp3", type: "frecuencias" },
        { id: "05", name: "Gaia Vision", file: "/audio/gaia-vision.mp3", type: "frecuencias" },
        { id: "06", name: "Alpha Voice", file: "/audio/alpha-voice.mp3", type: "frecuencias" },
        { id: "M2", name: "Coherence of Being", file: "/audio/coherencia-ser.mp3", type: "meditaciones" }
      ]
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-50">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
          <img src="/imagenes/genora-logo-white.png" className="h-40 relative z-10 animate-pulse" alt="GENORA" />
        </div>
        <h1 className="text-white tracking-[0.5em] font-light text-xs mt-10 opacity-50">{content[lang].splash}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans p-6 overflow-x-hidden">
      {/* HEADER TOP */}
      <div className="flex justify-between items-center max-w-md mx-auto mb-10">
        <img src="/imagenes/genora-logo-white.png" className="h-8 opacity-80" alt="Logo" />
        <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10">
          <button onClick={() => setLang('es')} className={`px-3 py-1 rounded-full text-[10px] transition-all ${lang === 'es' ? 'bg-cyan-500 text-white' : 'text-white/40'}`}>ES</button>
          <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-[10px] transition-all ${lang === 'en' ? 'bg-cyan-500 text-white' : 'text-white/40'}`}>EN</button>
        </div>
      </div>

      {/* TABS SELECTOR */}
      <div className="flex gap-4 max-w-md mx-auto mb-12 border-b border-white/5">
        {['frecuencias', 'meditaciones'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm tracking-widest uppercase transition-all relative ${activeTab === tab ? 'text-cyan-400 font-medium' : 'text-white/30'}`}
          >
            {content[lang].tabs[tab]}
            {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 shadow-[0_0_10px_#22d3ee]"></div>}
          </button>
        ))}
      </div>

      {/* TRACKS LIST */}
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto mb-32">
        {content[lang].tracks.filter(t => t.type === activeTab).map((track) => (
          <button 
            key={track.id} 
            onClick={() => { setSelectedTrack(track); setIsPlaying(false); setIsExpanded(true); }}
            className={`group p-6 rounded-[2rem] border transition-all duration-500 flex items-center gap-6 ${selectedTrack?.id === track.id ? 'border-cyan-500 bg-cyan-950/40 shadow-[0_0_20px_rgba(34,211,238,0.2)]' : 'border-white/5 bg-white/[0.03] hover:bg-white/[0.07]'}`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-[10px] font-mono border ${selectedTrack?.id === track.id ? 'text-cyan-400 border-cyan-400' : 'text-white/20 border-white/10 group-hover:border-white/30'}`}>
              {track.id}
            </div>
            <div className="flex-1 text-left font-light text-lg tracking-wide">{track.name}</div>
            <div className={selectedTrack?.id === track.id ? 'text-cyan-400' : 'text-white/10'}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div>
          </button>
        ))}
      </div>

      {/* PLAYER PANEL */}
      {isExpanded && selectedTrack && (
        <div className="fixed inset-0 bg-[#020617] z-[100] flex flex-col items-center justify-center p-8 animate-in fade-in zoom-in duration-500">
          <button onClick={() => { setIsExpanded(false); setIsPlaying(false); audioRef.current.pause(); }} className="absolute top-10 left-10 text-white/30 hover:text-white"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m15 18-6-6 6-6"/></svg></button>
          
          <div className="relative mb-20">
            <div className={`absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full transition-opacity duration-1000 ${isPlaying ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
            <img 
              src="/imagenes/adn-icon.png" 
              className={`h-64 w-64 md:h-80 md:w-80 relative z-10 rounded-full transition-all duration-1000 ${isPlaying ? 'scale-105 shadow-[0_0_100px_rgba(34,211,238,0.4)] brightness-110 animate-[pulse_4s_infinite]' : 'opacity-30 grayscale blur-[2px]'}`} 
              alt="ADN" 
            />
          </div>

          <h3 className="text-3xl font-extralight tracking-[0.2em] mb-4 text-white text-center uppercase">{selectedTrack.name}</h3>
          <p className="text-cyan-400 text-[10px] tracking-[0.6em] uppercase font-bold mb-16">{content[lang].active}</p>

          <button onClick={togglePlay} className={`w-28 h-28 rounded-full border flex items-center justify-center transition-all duration-500 ${isPlaying ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.3)]' : 'bg-white/5 border-white/20'}`}>
            {isPlaying ? <svg className="text-cyan-400" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> : <svg className="text-white ml-2" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>}
          </button>
          <audio ref={audioRef} src={selectedTrack.file} onEnded={() => setIsPlaying(false)} />
        </div>
      )}
    </div>
  );
};

export default App;