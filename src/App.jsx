import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  const [lang, setLang] = useState('es'); 
  const [activeTab, setActiveTab] = useState('frecuencias'); 
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSplash, setShowSplash] = useState(true); 
  const [isExpanded, setIsExpanded] = useState(false); 
  const [timeLeft, setTimeLeft] = useState(null); 
  const [isLooping, setIsLooping] = useState(true); 
  const audioRef = useRef(null);
  const timerRef = useRef(null);

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
        { id: "01", name: "Alpha Integration", hz: "8-10 Hz", file: "Alpha Integration.mp3", desc: "Sincroniza los hemisferios cerebrales para un estado de calma profunda." },
        { id: "02", name: "Alpha Creator", hz: "8-12 Hz", file: "Alpha Creator.mp3", desc: "Activa el estado de flujo creativo e idealiza proyectos desde el origen." },
        { id: "03", name: "Alpha Void", hz: "8-13 Hz", file: "Alpha Void.mp3", desc: "Punto cero de la consciencia. Silencio total para el reordenamiento genético." },
        { id: "04", name: "Alpha Origen", hz: "8 Hz", file: "Alpha Origen.mp3", desc: "Conexión directa con la frecuencia Schumann y la resonancia primordial." },
        { id: "05", name: "Gaia Vision", hz: "8.3 Hz", file: "Gaia Vision.mp3", desc: "Expansión de la percepción sensorial y conexión planetaria." },
        { id: "06", name: "Alpha Voice", hz: "8,22 Hz", file: "Alpha Voice.mp3", desc: "Sintoniza la expresión de tu verdad interna con tu campo vibratorio." }
      ],
      meds: [
        { id: "M1", name: "Activación del Origen", duration: "15 min", file: "Activación del Origen.mp3", desc: "Viaje guiado al centro de tu ADN ancestral." },
        { id: "M2", name: "Coherencia del Ser", duration: "22 min", file: "Coherencia del Ser.mp3", desc: "Sincroniza corazón y mente en una paz inquebrantable." }
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
        { id: "01", name: "Alpha Integration", hz: "8-10 Hz", file: "Alpha Integration.mp3", desc: "Synchronizes brain hemispheres for a state of deep calm." },
        { id: "02", name: "Alpha Creator", hz: "8-12 Hz", file: "Alpha Creator.mp3", desc: "Activates the creative flow state and idealizes projects from the origin." },
        { id: "03", name: "Alpha Void", hz: "8-13 Hz", file: "Alpha Void.mp3", desc: "Consciousness zero point. Total silence for genetic reordering." },
        { id: "04", name: "Alpha Origin", hz: "8 Hz", file: "Alpha Origin.mp3", desc: "Direct connection with the Schumann frequency and primordial resonance." },
        { id: "05", name: "Gaia Vision", hz: "8.3 Hz", file: "Gaia Vision.mp3", desc: "Expansion of sensory perception and planetary connection." },
        { id: "06", name: "Alpha Voice", hz: "8.22 Hz", file: "Alpha Voice.mp3", desc: "Tunes the expression of your inner truth with your vibratory field." }
      ],
      meds: [
        { id: "M1", name: "Origin Activation", duration: "15 min", file: "Activación del Origen.mp3", desc: "Guided journey to the center of your ancestral DNA." },
        { id: "M2", name: "Coherence of Being", duration: "22 min", file: "Coherencia del Ser.mp3", desc: "Synchronizes heart and mind in unshakable peace." }
      ]
    }
  };

  useEffect(() => {
    if (timeLeft > 0 && isPlaying) {
      timerRef.current = setTimeout(() => setTimeLeft(timeLeft - 1), 60000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      audioRef.current.pause();
      setTimeLeft(null);
      setIsLooping(false);
      alert(content[lang].alert);
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, isPlaying, lang]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer); 
  }, []);

  const currentTracks = activeTab === 'frecuencias' ? content[lang].tracks : content[lang].meds;

  const togglePlay = () => {
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
    else { audioRef.current.play(); setIsPlaying(true); }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center font-sans relative overflow-hidden">
      
      {showSplash && (
        <div className="absolute inset-0 bg-[#020617] z-[100] flex flex-col items-center justify-center text-center p-6">
          <img src="genora-logo-white.png" className="h-40" alt="GENORA" />
          <p className="text-[10px] tracking-[0.5em] text-cyan-400 mt-8 animate-pulse font-bold uppercase">{content[lang].splash}</p>
        </div>
      )}

      {!showSplash && (
        <div className="w-full flex flex-col items-center p-6 animate-fade-in relative z-10">
          <div className="w-full max-w-4xl flex justify-between items-center mb-6">
            <div className="text-[10px] text-slate-500 tracking-[0.2em] uppercase font-bold">GENORA Healing</div>
            <div className="flex items-center gap-4">
              <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
                <button onClick={() => setLang('es')} className={`px-2 py-1 text-[9px] rounded-full transition-all ${lang === 'es' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'}`}>ES</button>
                <button onClick={() => setLang('en')} className={`px-2 py-1 text-[9px] rounded-full transition-all ${lang === 'en' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'}`}>EN</button>
              </div>
              <div className="w-10 h-10 rounded-full border border-cyan-500 bg-cyan-900/30 flex items-center justify-center font-bold text-cyan-400 text-xs">PC</div>
            </div>
          </div>

          <div className="flex gap-10 mb-8 border-b border-white/5 w-full max-w-4xl justify-center pb-4">
            <button onClick={() => {setActiveTab('frecuencias'); setSelectedTrack(null);}} className={`text-[10px] tracking-[0.3em] uppercase font-black pb-2 transition-all ${activeTab === 'frecuencias' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500'}`}>{content[lang].frecuencias}</button>
            <button onClick={() => {setActiveTab('meditaciones'); setSelectedTrack(null);}} className={`text-[10px] tracking-[0.3em] uppercase font-black pb-2 transition-all ${activeTab === 'meditaciones' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-slate-500'}`}>{content[lang].meditaciones}</button>
          </div>

          <div className="mb-14 relative">
             <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] scale-150 animate-pulse" />
             <img src="adn-icon.png" className="h-60 w-60 relative z-10 animate-pulse rounded-full" alt="ADN" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl mb-48 px-2">
            {currentTracks.map((track) => (
              <button key={track.id} onClick={() => { setSelectedTrack(track); setIsPlaying(false); setIsExpanded(true); setTimeLeft(null); setIsLooping(true); }}
                className={`p-6 rounded-[2.5rem] border-2 transition-all duration-300 flex items-center gap-5 
                  ${selectedTrack?.id === track.id ? (activeTab === 'frecuencias' ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'bg-purple-950/40 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]') : (activeTab === 'frecuencias' ? 'bg-white/[0.03] border-cyan-900/50' : 'bg-white/[0.03] border-purple-900/50')}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-[10px] font-mono border ${activeTab === 'frecuencias' ? 'border-cyan-800 text-cyan-400' : 'border-purple-800 text-purple-400'}`}>{track.id}</div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-light text-white">{track.name}</h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{track.hz || track.duration}</p>
                </div>
              </button>
            ))}
          </div>

          {selectedTrack && (
            <div className={`fixed inset-0 bg-[#020617] z-[150] transition-all duration-700 ease-in-out transform ${isExpanded ? 'translate-y-0' : 'translate-y-full'}`}>
              <button onClick={() => setIsExpanded(false)} className="absolute top-10 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-white/20 rounded-full z-[160]" />
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="mb-10 relative">
                  <div className={`absolute inset-0 ${activeTab === 'frecuencias' ? 'bg-cyan-500/20' : 'bg-purple-500/20'} blur-[150px] animate-pulse`} />
                  <img src="adn-icon.png" className={`h-64 w-64 relative z-10 rounded-full ${isPlaying ? 'animate-pulse' : ''}`} alt="ADN" />
                </div>
                <h2 className="text-3xl font-light mb-4 uppercase tracking-tight">{selectedTrack.name}</h2>
                <p className="text-slate-400 text-sm italic opacity-80 leading-relaxed mb-8 px-4">"{selectedTrack.desc}"</p>
                
                <div className="flex flex-col items-center gap-6 mb-12">
                   <p className="text-[10px] tracking-[0.3em] uppercase text-slate-500 font-bold">
                     {timeLeft ? `${content[lang].timerEnd} ${timeLeft} min` : (isLooping ? content[lang].infinite : content[lang].cycle)}
                   </p>
                   <div className="flex gap-3">
                     {[15, 30, 60].map((time) => (
                       <button key={time} onClick={() => { setTimeLeft(time); setIsLooping(time > 15); }} className={`px-5 py-2 rounded-full border text-[10px] font-black transition-all ${timeLeft === time ? (activeTab === 'frecuencias' ? 'bg-cyan-500 border-cyan-400 text-black' : 'bg-purple-500 border-purple-400 text-black') : 'border-white/10 text-slate-400'}`}>{time} MIN</button>
                     ))}
                     <button onClick={() => { setTimeLeft(null); setIsLooping(true); }} className={`px-6 py-2 rounded-full border text-base font-black transition-all ${isLooping && !timeLeft ? (activeTab === 'frecuencias' ? 'bg-cyan-500 border-cyan-400 text-black' : 'bg-purple-500 border-purple-400 text-black') : 'border-white/10 text-slate-400'}`}>∞</button>
                   </div>
                </div>
                <button onClick={togglePlay} className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all ${activeTab === 'frecuencias' ? 'bg-cyan-600 shadow-cyan-500/50' : 'bg-purple-600 shadow-purple-500/50'}`}>
                  {isPlaying ? <div className="flex gap-1.5"><div className="w-1.5 h-6 bg-white rounded-full" /><div className="w-1.5 h-6 bg-white rounded-full" /></div> : <div className="ml-1.5 w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent" />}
                </button>
              </div>
            </div>
          )}
          <audio ref={audioRef} src={selectedTrack ? selectedTrack.file : ""} loop={isLooping} />
        </div>
      )}
    </div>
  );
}