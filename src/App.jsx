import React, { useState, useEffect } from 'react';

const inlineStyles = `
  @keyframes breathe {
    0%, 100% { transform: scale(1); opacity: 0.95; }
    50% { transform: scale(1.03); opacity: 1; }
  }
  .frecuencia-card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .frecuencia-card:hover {
    transform: translateY(-5px);
    border-color: #22d3ee !important;
    box-shadow: 0 0 25px rgba(34, 211, 238, 0.5);
    background: rgba(34, 211, 238, 0.08) !important;
  }
  .search-input::placeholder {
    color: rgba(255,255,255,0.3);
    letter-spacing: 2px;
    text-align: center;
  }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('frecuencias');
  const [searchTerm, setSearchTerm] = useState("");

  const tracks = [
    { id: "01", name: "Alpha Integración", hz: "8 – 10 Hz", type: "frecuencias" },
    { id: "02", name: "Alpha Creator", hz: "8 – 12 Hz", type: "frecuencias" },
    { id: "03", name: "Alpha Void", hz: "8 – 13 Hz", type: "frecuencias" },
    { id: "04", name: "Alpha Origen", hz: "8 Hz", type: "frecuencias" },
    { id: "05", name: "Gaia Vision", hz: "8,3 Hz", type: "frecuencias" },
    { id: "06", name: "Alpha Voice", hz: "8,22 Hz", type: "frecuencias" },
    { id: "M1", name: "Coherencia del Ser", hz: "963 Hz", type: "meditaciones" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '220px', animation: 'breathe 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '20px', fontWeight: '300', letterSpacing: '8px', color: '#22d3ee', textTransform: 'uppercase' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#fdfcf5', opacity: 0.8, marginTop: '15px' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
      </div>
    );
  }

  const accentColor = activeTab === 'frecuencias' ? '#22d3ee' : '#a855f7';
  const filteredTracks = tracks
    .filter(t => t.type === activeTab)
    .filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', fontFamily: 'sans-serif' }}>
      <style>{inlineStyles}</style>
      
      {/* 🧱 HEADER: LOGO AL DOBLE (160px) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '160px', width: 'auto' }} alt="Logo Header" />
        <div style={{ fontSize: '12px', letterSpacing: '2px', color: accentColor, fontWeight: 'bold', border: `1px solid ${accentColor}33`, padding: '5px 15px', borderRadius: '20px' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* 🧱 ADN: RESPLANDOR AUMENTADO 5 VECES (Supernova Real) */}
        <div style={{ 
          position: 'relative', width: '180px', height: '180px', marginBottom: '40px', 
          borderRadius: '50%', border: '4px solid #001a33', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617', 
          // 💡 CAPAS DE RESPLANDOR MULTIPLICADAS
          boxShadow: `
            0 0 40px ${accentColor}, 
            0 0 80px ${accentColor}88, 
            0 0 120px ${accentColor}44, 
            0 0 160px ${accentColor}22, 
            0 0 200px ${accentColor}11
          `,
          animation: 'breathe 4s infinite ease-in-out'
        }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '130%', height: '130%', objectFit: 'cover', borderRadius: '50%' }} alt="ADN" />
        </div>

        {/* 🧱 BUSCADOR PERFECTAMENTE CENTRADO */}
        <div style={{ width: '100%', maxWidth: '450px', marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
          <input 
            type="text" 
            placeholder="BUSCAR..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            style={{ 
              width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '25px', padding: '14px 25px', color: 'white', fontSize: '12px', outline: 'none',
              textAlign: 'center', letterSpacing: '2px'
            }} 
          />
        </div>

        {/* NAVEGACIÓN */}
        <div style={{ display: 'flex', gap: '35px', marginBottom: '35px' }}>
          <span onClick={() => setActiveTab('frecuencias')} style={{ cursor: 'pointer', fontSize: '13px', letterSpacing: '3px', color: activeTab === 'frecuencias' ? '#22d3ee' : '#444', borderBottom: activeTab === 'frecuencias' ? '2px solid #22d3ee' : 'none', paddingBottom: '8px', textTransform: 'uppercase' }}>Frecuencias</span>
          <span onClick={() => setActiveTab('meditaciones')} style={{ cursor: 'pointer', fontSize: '13px', letterSpacing: '3px', color: activeTab === 'meditaciones' ? '#a855f7' : '#444', borderBottom: activeTab === 'meditaciones' ? '2px solid #a855f7' : 'none', paddingBottom: '8px', textTransform: 'uppercase' }}>Meditaciones</span>
        </div>

        {/* BOTONES OVALADOS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '500px' }}>
          {filteredTracks.map(track => (
            <div key={track.id} className="frecuencia-card" style={{ 
              padding: '18px 10px', 
              borderRadius: '50px', 
              border: `1.5px solid ${accentColor}33`,
              background: 'rgba(255,255,255,0.02)',
              textAlign: 'center',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '14px', fontWeight: '300' }}>{track.name}</div>
              <div style={{ fontSize: '10px', color: accentColor, marginTop: '5px', fontWeight: 'bold' }}>{track.hz}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;