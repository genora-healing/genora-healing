import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }\n  @keyframes aura-supernova {
    0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); }
    50% { transform: scale(1.03); box-shadow: 0 0 50px rgba(34, 211, 238, 0.9), 0 0 120px rgba(34, 211, 238, 0.6), 0 0 250px rgba(34, 211, 238, 0.4); }
  }
  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; font-family: sans-serif; color: white; }
  .frecuencias-choice-button {
    width: 75%; max-width: 320px; padding: 14px 20px; background: rgba(30, 41, 59, 0.4);
    border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: white; font-size: 11px;
    letter-spacing: 3px; font-weight: 300; text-transform: uppercase; cursor: pointer;
    transition: all 0.4s ease; backdrop-filter: blur(8px); margin-bottom: 12px; text-align: center;
  }
  .category-pill {
    padding: 10px 18px; border-radius: 20px; font-size: 10px; letter-spacing: 2px;
    text-transform: uppercase; cursor: pointer; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(30, 41, 59, 0.3); border: 1px solid rgba(255, 255, 255, 0.05); color: #94a3b8;
  }
  .track-card {
    display: flex; justify-content: space-between; alignItems: center; background: rgba(15, 23, 42, 0.4);
    border: 1px solid rgba(255,255,255,0.03); padding: 16px 20px; border-radius: 14px; margin-bottom: 10px;
    cursor: pointer; transition: all 0.3s ease; backdrop-filter: blur(10px);
  }
  .track-card:hover { background: rgba(30, 41, 59, 0.4); border-color: rgba(255,255,255,0.1); transform: translateY(-1px); }
  .audio-player-container {
    position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 400px;
    background: rgba(15, 23, 42, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px;
    padding: 20px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(0,0,0,0.5); z-index: 100;
  }
  .control-btn {
    background: none; border: none; color: white; cursor: pointer; display: flex; align-items: center;
    justify-content: center; transition: all 0.2s ease;
  }
  .control-btn:hover { transform: scale(1.1); }
  .heart-btn {
    background: none; border: none; font-size: 20px; cursor: pointer; padding: 4px 8px;
    transition: transform 0.2s ease; display: flex; align-items: center; justify-content: center;
  }
  .heart-btn:hover { transform: scale(1.2); }
  .nav-bar-bottom {
    position: fixed; bottom: 0; left: 0; right: 0; height: 65px; background: rgba(15, 23, 42, 0.95);
    border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-around;
    align-items: center; backdrop-filter: blur(15px); z-index: 90;
  }
  .nav-item {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: none; border: none; color: #64748b; font-size: 9px; letter-spacing: 1.5px;
    text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; gap: 4px;
  }
`;

const ALL_TRACKS = {
  'GEOMETRÍA SAGRADA': [
    { id: 'cubo', name: 'Cubo de Metatrón', hz: '528 Hz', desc: 'Activación del orden cósmico y proporciones divinas', src: '/audio/cubo-metatron.mp3' },
    { id: 'flor', name: 'Flor de la Vida', hz: '432 Hz', desc: 'Patrón de la creación y memoria celular del todo', src: '/audio/flor-vida.mp3' },
    { id: 'vector', name: 'Vector de Equilibrio', hz: '741 Hz', desc: 'Estabilización energética y balance de polaridades', src: '/audio/vector-equilibrio.mp3' },
    { id: 'toroide', name: 'Toroide Dinámico', hz: '639 Hz', desc: 'Flujo constante de abundancia y regeneración vital', src: '/audio/toroide.mp3' },
    { id: 'merkhaba', name: 'Vehículo Merkhaba', hz: '963 Hz', desc: 'Activación del cuerpo de luz y viaje dimensional', src: '/audio/merkhaba.mp3' }
  ],
  'CÉLULAS MADRE': [
    { id: 'regeneracion', name: 'Regeneración Crítica', hz: '111 Hz', desc: 'Frecuencia celular de renovación y autoreparación', src: '/audio/regeneracion.mp3' },
    { id: 'activacion_om', name: 'Activación Primordial', hz: '444 Hz', desc: 'Estímulo de resonancia para vitalidad y nuevo origen', src: '/audio/activacion.mp3' }
  ],
  'MEDICINA FRECUENCIAL': [
    { id: 'limpieza', name: 'Limpieza Mental Aura', hz: '417 Hz', desc: 'Disolución de bloqueos y remoción de toxinas energéticas', src: '/audio/limpieza.mp3' },
    { id: 'glandula', name: 'Glándula Pineal Óptima', hz: '852 Hz', desc: 'Despertar de la visión interna y conexión superior', src: '/audio/pineal.mp3' },
    { id: 'reparacion_dna', name: 'Reparación del DNA', hz: '528 Hz', desc: 'Transformación cuántica y milagros de curación', src: '/audio/528-reparacion.mp3' }
  ],
  'CREATIVIDAD & RESOLUCIÓN': [
    { id: 'beta_attention', name: 'Beta Attention', hz: '15 Hz', desc: 'Enfoque de alta eficiencia, creatividad activa y resolución', src: '/audio/Beta-attention.mp3' }
  ],
  'CLARIDAD MENTAL': [
    { id: 'alpha_clarity', name: 'Alpha Clarity', hz: '10 Hz', desc: 'Claridad mental profunda y aprendizaje acelerado', src: '/audio/alpha-clarity.mp3' },
    { id: 'alpha_calm_alert', name: 'Alpha Calm Alert', hz: '8 Hz', desc: 'Estado de alerta serena, paz mental y reducción de ruido cognitivo', src: '/audio/Alpha-calm-alert.mp3' },
    { id: 'gamma_insight', name: 'Gamma Insight', hz: '40 Hz', desc: 'Procesamiento cognitivo de alto nivel e inspiración cuántica', src: '/audio/gamma-insight.mp3' }
  ]
};

const subCategoryTitles = {
  'GEOMETRÍA SAGRADA': 'GEOMETRÍA SAGRADA FRACTAL',
  'CÉLULAS MADRE': 'ACTIVACIÓN CÉLULAS MADRE',
  'MEDICINA FRECUENCIAL': 'MEDICINA FRECUENCIAL AVANZADA',
  'CREATIVIDAD & RESOLUCIÓN': 'CREATIVIDAD & RESOLUCIÓN ACTIVA',
  'CLARIDAD MENTAL': 'CLARIDAD MENTAL & INSIGHT'
};

export default function App() {
  const [currentTab, setCurrentTab] = useState('EXPLORAR'); // 'EXPLORAR' o 'PLAYLIST'
  const [activeCategory, setActiveCategory] = useState('GEOMETRÍA SAGRADA');
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [favorites, setFavorites] = useState([]);
  
  const audioRef = useRef(null);

  // Cargar favoritos al arrancar
  useEffect(() => {
    const savedFavs = localStorage.getItem('genora_favorites');
    if (savedFavs) {
      try { setFavorites(JSON.parse(savedFavs)); } catch (e) { console.error(e); }
    }
  }, []);

  // Manejar reproducción de audio
  useEffect(() => {
    if (!audioRef.current) return;
    if (selectedTrack) {
      audioRef.current.src = selectedTrack.src;
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [selectedTrack]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Actualizar barra de progreso del audio
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);