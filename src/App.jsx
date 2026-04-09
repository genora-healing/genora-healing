import React, { useState, useEffect } from 'react';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('frecuencias');

  const tracks = [
    { id: 1, name: "Alpha Integración", hz: "8 – 10 Hz", type: "frecuencias" },
    { id: 2, name: "Alpha Creator", hz: "8 – 12 Hz", type: "frecuencias" },
    { id: 3, name: "Alpha Void", hz: "8 – 13 Hz", type: "frecuencias" },
    { id: 4, name: "Alpha Origen", hz: "8 Hz", type: "frecuencias" },
    { id: 5, name: "Gaia Vision", hz: "8,3 Hz", type: "frecuencias" },
    { id: 6, name: "Alpha Voice", hz: "8,22 Hz", type: "frecuencias" },
    { id: 7, name: "Coherencia del Ser", hz: "963 Hz", type: "meditaciones" }
  ];

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(t);
  }, []);

  if (showSplash) {
    return (
      <div style={{backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px'}}>
        <img src="/imagenes/genora-logo-white.png" style={{width: '180px', marginBottom: '30px', animation: 'breathe 3s infinite ease-in-out'}} alt="Logo" />
        <h1 style={{letterSpacing: '5px', fontSize: '20px', color: '#22d3ee', textAlign: 'center'}}>RESONANCIA ORIGEN</h1>
        <p style={{fontSize: '11px', letterSpacing: '3px', color: '#22d3ee', opacity: 0.7, marginTop: '10px', textAlign: 'center'}}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
        <style>{` @keyframes breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } } `}</style>
      </div>
    );
  }

  const accentColor = activeTab === 'frecuencias' ? '#22d3ee' : '#a855f7';

  return (
    <div style={{backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px', fontFamily: 'sans-serif'}}>
      
      {/* 🧱 HEADER: LOGO AUMENTADO A 85PX (Paso 2.5) */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px'}}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '85px', width: 'auto' }} alt="Logo Principal" />
        <div style={{fontSize: '15px', letterSpacing: '2px', color: '#22d3ee', fontWeight: 'bold'}}>ES | EN</div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        
        {/* 🧱 ADN IMPONENTE: 180PX Y CIRCULARIDAD REAL (Paso 2.5) */}
        <div style={{ 
          width: '180px', 
          height: '180px', 
          marginBottom: '35px', 
          borderRadius: '50%', 
          border: `3px solid ${accentColor}`, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          overflow: 'hidden', 
          backgroundColor: '#020617', 
          boxShadow: `0 0 35px ${accentColor}66`,
          animation: 'breathe 3s infinite ease-in-out'
        }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.3)' }} alt="ADN Circular" />
        </div>

        {/* NAVEGACIÓN */}
        <div style={{display: 'flex', gap: '35px', marginBottom: '35px'}}>
          <span onClick={() => setActiveTab('frecuencias')} style={{cursor: 'pointer', fontSize: '13px', letterSpacing: '3px', color: activeTab === 'frecuencias' ? '#22d3ee' : '#444', borderBottom: activeTab === 'frecuencias' ? '2px solid #22d3ee' : 'none', paddingBottom: '6px', textTransform: 'uppercase'}}>Frecuencias</span>
          <span onClick={() => setActiveTab('meditaciones')} style={{cursor: 'pointer', fontSize: '13px', letterSpacing: '3px', color: activeTab === 'meditaciones' ? '#a855f7' : '#444', borderBottom: activeTab === 'meditaciones' ? '2px solid #a855f7' : 'none', paddingBottom: '6px', textTransform: 'uppercase'}}>Meditaciones</span>
        </div>

        {/* CUADRÍCULA: BOTONES COMPACTOS (Paso 2.5) */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '500px'}}>
          {tracks.filter(t => t.type === activeTab).map(track => (
            <div key={track.id} style={{border: `1.5px solid ${accentColor}`, padding: '20px 10px', borderRadius: '14px', textAlign: 'center', background: `${accentColor}05`, cursor: 'pointer'}}>
              <div style={{fontSize: '14px', fontWeight: '300', letterSpacing: '1px'}}>{track.name}</div>
              <div style={{fontSize: '11px', color: accentColor, marginTop: '8px', fontWeight: 'bold'}}>{track.hz}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;