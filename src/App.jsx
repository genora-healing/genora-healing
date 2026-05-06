import { useState, useRef, useEffect, useCallback } from 'react'

// ─── DATA REAL DE TU CARPETA AUDIO ──────────────────────────────────────────
const FRECUENCIAS = [
  {
    id: 1,
    nombre: { es: 'Alpha Clarity', en: 'Alpha Clarity' },
    hz: 'Alpha',
    archivo: '/audio/alpha-clarity.mp3',
    descripcion: { es: 'Frecuencia para la claridad mental y el enfoque profundo.', en: 'Frequency for mental clarity and deep focus.' },
    color: 'cian',
  },
  {
    id: 2,
    nombre: { es: 'Beta Learning', en: 'Beta Learning' },
    hz: 'Beta',
    archivo: '/audio/beta-learning.mp3',
    descripcion: { es: 'Optimiza el aprendizaje activo y la retención.', en: 'Optimizes active learning and retention.' },
    color: 'violeta',
  },
  {
    id: 3,
    nombre: { es: 'Gaia Vision', en: 'Gaia Vision' },
    hz: 'Gaia',
    archivo: '/audio/gaia-vision.mp3',
    descripcion: { es: 'Conexión con la frecuencia base de la tierra.', en: 'Connection with Earth’s base frequency.' },
    color: 'cian',
  }
]

const MEDITACIONES = [
  {
    id: 101,
    nombre: { es: 'Alpha Origen', en: 'Alpha Origin' },
    hz: 'Alpha',
    archivo: '/audio/alpha-origen.mp3',
    descripcion: { es: 'Regreso al origen de la frecuencia vital.', en: 'Return to the origin of vital frequency.' },
    color: 'violeta',
  }
]

// ─── UTILS ───────────────────────────────────────────────────────────────────
const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0')
  const s = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

// ─── COMPONENTS (ADN Y UI) ──────────────────────────────────────────────────
function ADNOrganism({ isPlaying, colorAura, onClick }) {
  return (
    <div onClick={onClick} className="adn-wrapper" style={{ cursor: 'pointer', position: 'relative', width: 220, height: 220, margin: '0 auto' }}>
      <div className={`adn-aura ${isPlaying ? (colorAura === 'cian' ? 'aura-cian' : 'aura-violeta') : ''}`} style={{ position: 'absolute', inset: 0, borderRadius: '50%', transition: 'all 1.2s ease' }} />
      <div className={`adn-circle ${isPlaying ? 'adn-breathing' : ''}`} style={{ position: 'absolute', inset: 16, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, rgba(0,212,255,0.08), rgba(139,92,246,0.06), transparent 70%)', border: '1px solid rgba(0,212,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M40 20 C50 35, 70 35, 80 50 C70 65, 50 65, 40 80 C50 95, 70 95, 80 110" stroke={colorAura === 'cian' ? '#00d4ff' : '#8b5cf6'} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9" className={isPlaying ? 'dna-pulse' : ''} />
          <path d="M80 20 C70 35, 50 35, 40 50 C50 65, 70 65, 80 80 C70 95, 50 95, 40 110" stroke={colorAura === 'cian' ? '#00d4ff' : '#8b5cf6'} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9" className={isPlaying ? 'dna-pulse' : ''} />
          {!isPlaying ? <polygon points="52,48 52,72 74,60" fill="rgba(255,255,255,0.7)" /> : <g fill="rgba(255,255,255,0.7)"><rect x="50" y="48" width="7" height="24" rx="2" /><rect x="63" y="48" width="7" height="24" rx="2" /></g>}
        </svg>
      </div>
    </div>
  )
}

function MiniPlayer({ track, isPlaying, onToggle, onOpen, lang }) {
  if (!track) return null
  return (
    <div className="mini-player" onClick={onOpen}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div className={`mini-dot ${isPlaying ? 'mini-dot-active' : ''}`} />
        <div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>FRECUENCIA ACTIVA</div>
          <div style={{ fontSize: 13, color: '#fff' }}>{track.nombre[lang]}</div>
        </div>
      </div>
      <button onClick={(e) => { e.stopPropagation(); onToggle() }}>{isPlaying ? '⏸' : '▶'}</button>
    </div>
  )
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState('es')
  const [tab, setTab] = useState('frecuencias')
  const [activeTrack, setActiveTrack] = useState(null)
  const [temploOpen, setTemploOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const lista = tab === 'frecuencias' ? FRECUENCIAS : MEDITACIONES

  const togglePlay = useCallback(() => {
    if (!audioRef.current || !activeTrack) return
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
    else { audioRef.current.play().catch(() => {}); setIsPlaying(true); }
  }, [isPlaying, activeTrack])

  const selectTrack = (track) => {
    setActiveTrack(track); setTemploOpen(true);
    setTimeout(() => {
      if (!audioRef.current) audioRef.current = new Audio()
      audioRef.current.src = track.archivo
      audioRef.current.play().catch(() => {})
      setIsPlaying(true)
    }, 100)
  }

  return (
    <>
      <style>{`
        body { background: #020617; color: #fff; font-family: 'Rajdhani', sans-serif; margin: 0; }
        .header { display: flex; justify-content: space-between; padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .tabs { display: flex; padding: 0 20px; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .tab-btn { background: none; border: none; color: rgba(255,255,255,0.3); padding: 15px; cursor: pointer; letter-spacing: 0.2em; }
        .tab-btn.active { color: #fff; border-bottom: 1px solid #00d4ff; }
        .track-item { display: flex; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer; }
        .mini-player { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(2,6,23,0.95); padding: 15px; display: flex; justify-content: space-between; }
        @keyframes breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .adn-breathing { animation: breathe 4s ease-in-out infinite; }
      `}</style>

      <header className="header">
        <span style={{ letterSpacing: '0.3em', fontWeight: 200 }}>GENORA HEALING</span>
        <div className="lang-btns">
          <button onClick={() => setLang('es')}>ES</button> | <button onClick={() => setLang('en')}>EN</button>
        </div>
      </header>

      <nav className="tabs">
        <button className={`tab-btn ${tab === 'frecuencias' ? 'active' : ''}`} onClick={() => setTab('frecuencias')}>FRECUENCIAS</button>
        <button className={`tab-btn ${tab === 'meditaciones' ? 'active' : ''}`} onClick={() => setTab('meditaciones')}>MEDITACIONES</button>
      </nav>

      <main className="lista">
        {lista.map((track) => (
          <div key={track.id} className="track-item" onClick={() => selectTrack(track)}>
            <span>{track.nombre[lang]}</span>
            <span style={{ color: track.color === 'cian' ? '#00d4ff' : '#8b5cf6' }}>{track.hz}</span>
          </div>
        ))}
      </main>

      {activeTrack && !temploOpen && (
        <MiniPlayer track={activeTrack} isPlaying={isPlaying} onToggle={togglePlay} onOpen={() => setTemploOpen(true)} lang={lang} />
      )}
    </>
  )
}