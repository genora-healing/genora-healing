import React, { useState, useEffect } from 'react';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('frecuencias');

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

  // PORTADA PERFECTA (Validada por Pamela)
  if (showSplash) {
    return (
      <div style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '220px', animation: 'breathe 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '20px', letterSpacing: '8px', color: '#22d3ee', marginTop: '30px', fontWeight: '300', textTransform: 'uppercase' }}>RESONANCIA ORIGEN</h1>
        <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#fdfcf5', opacity: 0.8, marginTop: '15px' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
        <style>{` @keyframes breathe { 0%, 100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.05); opacity: 1; } } `}</style>
      </div>
    );
  }

  const accentColor = activeTab === 'frecuencias' ? '#22d3ee' : '#a855f7';

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* 🧱 HEADER: LOGO 85PX SIN FRASES EXTRAURDARIAS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '85px', width: 'auto' }} alt="Header Logo" />
        <div style={{ fontSize: '12px', letterSpacing: '2px', color: accentColor, fontWeight: 'bold', border: `1px solid ${accentColor}33`, padding: '5px 12px', borderRadius: '20px' }}>ES | EN</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* 🧱 ADN GIGANTE 180PX CON RESPLANDOR (Paso 2.5) */}
        <div style={{ 
          position: 'relative', width: '180px', height: '180px', marginBottom: '35px', 
          borderRadius: '50%', border: `2px solid ${accentColor}`, display: 'flex', 
          alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
          boxShadow: `0 0 40px ${accentColor}44`, animation: 'breathe 4s infinite ease-in-out'
        }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.2)' }} alt="ADN" />
        </div>

        {/* NAVEGACIÓN LIMPIA */}
        <div style={{ display: 'flex', gap: '35px', marginBottom: '35px' }}>
          {['frecuencias', 'meditaciones'].map(tab => (
            <span key={tab} onClick={() => setActiveTab(tab)} style={{ 
              cursor: 'pointer', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
              color: activeTab === tab ? accentColor : '#444', borderBottom: activeTab === tab ? `2px solid ${accentColor}` : 'none', paddingBottom: '6px'
            }}>{tab}</span>
          ))}
        </div>

        {/* 🧱 BOTONES OVALADOS (Paso 2.5) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '500px' }}>
          {tracks.filter(t => t.type === activeTab).map(track => (
            <div key={track.id} style={{ 
              border: `1px solid ${accentColor}33`, padding: '22px 10px', borderRadius: '20px', 
              textAlign: 'center', background: 'rgba(255,255,255,0.02)', cursor: 'pointer' 
            }}>
              <div style={{ fontSize: '14px', fontWeight: '300' }}>{track.name}</div>
              <div style={{ fontSize: '10px', color: accentColor, marginTop: '8px', fontWeight: 'bold' }}>{track.hz}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{` @keyframes breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } } `}</style>
    </div>
  );
};

export default App;