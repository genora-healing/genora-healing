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
    setProgress(0);
  };

  const handleProgressBarClick = (e) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newPercentage = clickX / width;
    const duration = audioRef.current.duration || 0;
    audioRef.current.currentTime = newPercentage * duration;
    setProgress(newPercentage * 100);
  };

  // Lógica de favoritos (Corazoncitos)
  const toggleFavorite = (e, trackId) => {
    e.stopPropagation(); // Evita que al dar clic al corazón se reproduzca el track de inmediato
    let updated;
    if (favorites.includes(trackId)) {
      updated = favorites.filter(id => id !== trackId);
    } else {
      updated = [...favorites, trackId];
    }
    setFavorites(updated);
    localStorage.setItem('genora_favorites', JSON.stringify(updated));
  };

  const isFavorite = (trackId) => favorites.includes(trackId);

  // Obtener todos los tracks de forma plana para filtrar favoritos
  const getAllTracksList = () => {
    const list = [];
    Object.values(ALL_TRACKS).forEach(tracks => list.push(...tracks));
    return list;
  };

  const favoriteTracks = getAllTracksList().filter(track => isFavorite(track.id));

  const accentColor = '#22d3ee'; // Azul Profundo High-End

  return (
    <div style={{ paddingBottom: '160px', paddingTop: '40px', minHeight: '100vh', boxSizing: 'border-box', textAlign: 'center', px: '20px' }} className="fade-in-smooth">
      <style>{inlineStyles}</style>
      
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleAudioEnded} />

      {/* Identidad de la Marca */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '24px', letterSpacing: '8px', color: 'white', fontWeight: '200', textTransform: 'uppercase', margin: '0 0 8px 0' }}>GENORA</h1>
        <p style={{ fontSize: '9px', letterSpacing: '4px', color: accentColor, opacity: 0.8, textTransform: 'uppercase', margin: 0, fontWeight: '300' }}>HEALING & CONSCIOUSNESS</p>
      </div>

      {/* VISTA 1: EXPLORAR CATÁLOGO */}
      {currentTab === 'EXPLORAR' && (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '0 20px' }}>
          {/* Píldoras de Categorías */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '15px', marginBottom: '30px', justifyContent: 'flex-start', scrollbarWidth: 'none' }}>
            {Object.keys(ALL_TRACKS).map((cat) => (
              <button
                key={cat}
                className="category-pill"
                onClick={() => setActiveCategory(cat)}
                style={{
                  backgroundColor: activeCategory === cat ? 'rgba(34, 211, 238, 0.15)' : 'rgba(30, 41, 59, 0.3)',
                  borderColor: activeCategory === cat ? accentColor : 'rgba(255, 255, 255, 0.05)',
                  color: activeCategory === cat ? 'white' : '#94a3b8',
                  fontWeight: activeCategory === cat ? '500' : '300'
                }}
              >
                {cat.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Subtítulo Dinámico */}
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: accentColor, textAlign: 'center', marginBottom: '25px', fontWeight: 'bold' }}>
            {subCategoryTitles[activeCategory]}
          </p>

          {/* Lista de Frecuencias de la Categoría */}
          {(ALL_TRACKS[activeCategory] || []).map((track) => (
            <div key={track.id} className="track-card" onClick={() => setSelectedTrack(track)} style={{ borderLeft: `4px solid ${accentColor}` }}>
              <div style={{ textAlign: 'left', width: '75%' }}>
                <div style={{ fontSize: '15px', color: 'white', fontWeight: '400' }}>{track.name}</div>
                <div style={{ fontSize: '10px', color: '#fdfcf5', opacity: 0.7, marginTop: '5px', fontWeight: '200', letterSpacing: '1px' }}>{track.desc}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button className=\"heart-btn\" onClick={(e) => toggleFavorite(e, track.id)} style={{ color: isFavorite(track.id) ? '#ff6b9d' : 'rgba(255,255,255,0.3)' }}>
                  {isFavorite(track.id) ? '♥' : '♡'}
                </button>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: accentColor, fontWeight: 'bold' }}>{track.hz}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VISTA 2: PLAYLIST DE FAVORITOS */}
      {currentTab === 'PLAYLIST' && (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '0 20px' }} className="fade-in-smooth">
          <p style={{ fontSize: '12px', letterSpacing: '4px', color: accentColor, textAlign: 'center', marginBottom: '30px', fontWeight: 'bold' }}>
            💖 MI ALINEACIÓN PERSONALIZADA
          </p>

          {favoriteTracks.length === 0 ? (
            <div style={{ padding: '40px 20px', background: 'rgba(30, 41, 59, 0.2)', borderRadius: '16px', border: '1px dashed rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '200', margin: '0 0 15px 0', letterSpacing: '1px' }}>Tu playlist está vacía.</p>
              <button className="frecuencias-choice-button" onClick={() => setCurrentTab('EXPLORAR')} style={{ fontSize: '9px', width: 'auto', padding: '10px 20px' }}>
                ← Explorar Frecuencias
              </button>
            </div>
          ) : (
            favoriteTracks.map((track) => (
              <div key={track.id} className="track-card" onClick={() => setSelectedTrack(track)} style={{ borderLeft: '4px solid #ff6b9d' }}>
                <div style={{ textAlign: 'left', width: '75%' }}>
                  <div style={{ fontSize: '15px', color: 'white', fontWeight: '400' }}>{track.name}</div>
                  <div style={{ fontSize: '10px', color: '#fdfcf5', opacity: 0.7, marginTop: '5px', fontWeight: '200' }}>{track.desc}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button className="heart-btn" onClick={(e) => toggleFavorite(e, track.id)} style={{ color: '#ff6b9d' }}>
                    ♥
                  </button>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', color: '#ff6b9d', fontWeight: 'bold' }}>{track.hz}</div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* REPRODUCTOR DE AUDIO FLOTANTE */}
      {selectedTrack && (
        <div className="audio-player-container fade-in-smooth">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div style={{ textAlign: 'left', maxWidth: '75%' }}>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: 'white', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{selectedTrack.name}</div>
              <div style={{ fontSize: '10px', color: accentColor, marginTop: '2px' }}>{selectedTrack.hz}</div>
            </div>
            <button className="control-btn" onClick={() => setSelectedTrack(null)} style={{ fontSize: '18px', opacity: 0.5 }}>✕</button>
          </div>

          {/* Barra de Progreso */}
          <div onClick={handleProgressBarClick} style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', cursor: 'pointer', marginBottom: '18px', position: 'relative' }}>
            <div style={{ width: `${progress}%`, height: '100%', background: `linear-gradient(90deg, ${accentColor}, #3b82f6)`, borderRadius: '2px', transition: 'width 0.1s linear' }} />
          </div>

          {/* Botón de Play / Pause */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="control-btn" onClick={() => setIsPlaying(!isPlaying)} style={{ background: 'white', color: '#020617', width: '45px', height: '45px', borderRadius: '50%', boxShadow: '0 4px 15px rgba(34,211,238,0.3)' }}>
              {isPlaying ? (
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>❚❚</span>
              ) : (
                <span style={{ fontSize: '20px', marginLeft: '4px' }}>▶</span>
              )}
            </button>
          </div>
        </div>
      )}

      {/* BARRA DE NAVEGACIÓN INFERIOR ZEN */}
      <nav className="nav-bar-bottom">
        <button className="nav-item" onClick={() => setCurrentTab('EXPLORAR')} style={{ color: currentTab === 'EXPLORAR' ? accentColor : '#64748b' }}>
          <span style={{ fontSize: '18px' }}>🌟</span>
          <span>Frecuencias</span>
        </button>
        <button className="nav-item" onClick={() => setCurrentTab('PLAYLIST')} style={{ color: currentTab === 'PLAYLIST' ? '#ff6b9d' : '#64748b' }}>
          <span style={{ fontSize: '18px' }}>{favoriteTracks.length > 0 ? '♥' : '♡'}</span>
          <span>Mi Playlist</span>
        </button>
      </nav>
    </div>
  );
}