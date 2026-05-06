import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, ArrowLeft, Brain, Sparkles, Zap, Activity } from 'lucide-react';

const App = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  // MAPA MAESTRO DE FRECUENCIAS INTEGRADO Y CORREGIDO
  const tracks = {
    "APRENDIZAJE": [
      { name: "Alpha Integración", hz: "8-10 Hz", url: "/audio/alpha-integration.mp3", desc: "Integración de información desde la calma." },
      { name: "Beta Learning", hz: "12-14 Hz", url: "/audio/beta-learning.mp3", desc: "Absorción pasiva de información sin esfuerzo." },
      { name: "Alpha Intelligence", hz: "11.5-14.5 Hz", url: "/audio/alpha-intelligence.mp3", desc: "Mejora la capacidad de procesamiento cognitivo." },
      { name: "Beta Focus", hz: "15-18 Hz", url: "/audio/beta-focus.mp3", desc: "Concentración y vigilancia mental sostenida." },
      { name: "Beta Decision", hz: "13.8 Hz", url: "/audio/beta-decision.mp3", desc: "Claridad en momentos clave de decisión." }
    ],
    "CREATIVIDAD": [
      { name: "Alpha Creator", hz: "8-12 Hz", url: "/audio/alpha-creator.mp3", desc: "Activa el pensamiento positivo e ideas nuevas." },
      { name: "Beta Solution", hz: "12-36 Hz", url: "/audio/beta-solution.mp3", desc: "Resolución analítica y toma de decisiones." },
      { name: "Beta Logic", hz: "13-40 Hz", url: "/audio/beta-logic.mp3", desc: "Potencia el pensamiento lógico y analítico." }
    ],
    "CLARIDAD": [
      { name: "Alpha Balance Mind", hz: "11 Hz", url: "/audio/alpha-balance-mind.mp3", desc: "Reduce la tensión y mejora estabilidad mental." },
      { name: "Alpha Center", hz: "12 Hz", url: "/audio/alpha-center.mp3", desc: "Centración, claridad y expresión consciente." },
      { name: "Alpha Clarity", hz: "10.5 Hz", url: "/audio/alpha-clarity.mp3", desc: "Purificación de pensamientos y visión nítida." },
      { name: "Alpha Calm Alert", hz: "10 Hz", url: "/audio/alpha-calm-alert.mp3", desc: "Estado de alerta serena y presencia absoluta." },
      { name: "Gamma Insight", hz: "40 Hz", url: "/audio/gamma-insight.mp3", desc: "Destellos de comprensión profunda y epifanías." }
    ],
    "RENDIMIENTO": [
      { name: "Beta Active Mind", hz: "13-27 Hz", url: "/audio/beta-active-mind.mp3", desc: "Aumenta la atención externa y actividad mental." },
      { name: "Beta High Performance", hz: "14-30 Hz", url: "/audio/beta-high-performance.mp3", desc: "Estimula cálculos y funciones cognitivas complejas." },
      { name: "Beta Vital Mind", hz: "14 Hz", url: "/audio/beta-vital-mind.mp3", desc: "Genera energía mental y enfoque en tareas." },
      { name: "Beta Cortex", hz: "15.4 Hz", url: "/audio/beta-cortex.mp3", desc: "Procesamiento avanzado e inteligencia." },
      { name: "Alpha Focus", hz: "11-14 Hz", url: "/audio/alpha-focus.mp3", desc: "Concentración y enfoque mental sostenido." },
      { name: "Beta Attention", hz: "12-15 Hz", url: "/audio/beta-attention.mp3", desc: "Atención consciente y respuesta mental ágil." }
    ]
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  if (currentCategory) {
    return (
      <div className="min-h-screen bg-[#F6F2EB] p-8 font-sans">
        <button onClick={() => setCurrentCategory(null)} className="flex items-center text-[#3F567A] mb-12 hover:opacity-70 transition-all">
          <ArrowLeft size={24} className="mr-2" />
          <span className="tracking-widest text-sm font-light uppercase">Volver</span>
        </button>
        <h2 className="text-[#3F567A] text-4xl font-extralight tracking-[0.2em] mb-16 text-center uppercase italic">{currentCategory}</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {tracks[currentCategory].map((track) => (
            <button key={track.name} onClick={() => playTrack(track)}
              className={`w-full p-8 rounded-full border border-[#D8D3C9] flex flex-col items-center transition-all duration-700
                ${currentTrack?.name === track.name ? 'bg-white shadow-xl scale-105' : 'bg-transparent hover:bg-white/50'}`}>
              <span className="text-[#3F567A] tracking-[0.3em] font-light uppercase mb-2">{track.name}</span>
              <span className="text-[#C6A45E] text-xs tracking-widest font-light">{track.hz}</span>
              {currentTrack?.name === track.name && (
                <p className="text-[#8e8a84] text-[10px] tracking-widest mt-4 font-light italic">{track.desc}</p>
              )}
            </button>
          ))}
        </div>
        {currentTrack && (
          <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-md p-8 border-t border-[#D8D3C9]">
            <div className="max-w-md mx-auto">
              <audio ref={audioRef} src={currentTrack.url} onEnded={() => setIsPlaying(false)} autoPlay />
              <div className="flex flex-col items-center space-y-6">
                <div className="text-center">
                  <p className="text-[#3F567A] tracking-[0.4em] font-light uppercase text-sm mb-1">{currentTrack.name}</p>
                  <p className="text-[#C6A45E] text-[10px] tracking-[0.2em] uppercase font-light italic">{currentTrack.hz}</p>
                </div>
                <button onClick={togglePlay} className="w-16 h-16 rounded-full border border-[#D8D3C9] flex items-center justify-center text-[#3F567A] hover:bg-[#F6F2EB] transition-all">
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                </button>
                <div className="w-full flex items-center space-x-4">
                  <Volume2 size={16} className="text-[#D8D3C9]" />
                  <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} className="w-full accent-[#3F567A]" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F2EB] flex flex-col items-center justify-center p-8 font-sans">
      <div className="mb-24 text-center">
        <h1 className="text-[#3F567A] text-5xl font-extralight tracking-[0.4em] mb-4 uppercase">GENORA</h1>
        <p className="text-[#C6A45E] tracking-[0.3em] text-xs font-light uppercase italic">Healing & Consciousness</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {[
          { id: 'APRENDIZAJE', icon: <Brain size={28} /> },
          { id: 'CREATIVIDAD', icon: <Sparkles size={28} /> },
          { id: 'CLARIDAD', icon: <Zap size={28} /> },
          { id: 'RENDIMIENTO', icon: <Activity size={28} /> }
        ].map((cat) => (
          <button key={cat.id} onClick={() => setCurrentCategory(cat.id)}
            className="group aspect-square rounded-full border border-[#D8D3C9] bg-transparent hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-1000 flex flex-col items-center justify-center p-8">
            <div className="text-[#3F567A] mb-6 group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100">{cat.icon}</div>
            <span className="text-[#3F567A] tracking-[0.4em] font-light text-sm uppercase group-hover:tracking-[0.6em] transition-all duration-1000">{cat.id}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;