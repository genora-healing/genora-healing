import React, { useState, useEffect } from 'react';

// Estilos CSS manuales para asegurar animaciones suaves
const inlineStyles = `
  @keyframes breathe {
    0%, 100% { transform: scale(1); opacity: 0.95; }
    50% { transform: scale(1.03); opacity: 1; }
  }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('frecuencias');

  // DATOS BASE FIEL AL PASO 2.5
  const tracks = [
    { id: "01", name: "Alpha Integración", hz: "8 – 10 Hz", type: "frecuencias" },
    { id: "02", name: "Alpha Creator", hz: "8 – 12 Hz", type: "frecuencias" },
    { id: "03", name: "Alpha Void", hz: "8 – 13 Hz", type: "frecuencias" },
    { id: "04", name: "Alpha Origen", hz: "8 Hz", type: "frecuencias" },
    { id: "05", name: "Gaia Vision", hz: "8,3 Hz", type: "frecuencias" },
    { id: "06", name: "Alpha Voice", hz: "8,22 Hz", type: "frecuencias" },
    { id: "M1", name: "Coherencia del Ser", hz: "963 Hz", type: "meditaciones" }
  ];

  // EFECTOS (Paso 1 del manual)
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // PORTADA PERFECTA (La que ya validamos)
  if (showSplash) {
    return (
      <>
        <style>{inlineStyles}</style>
        <div style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <img src="/imagenes/genora-logo-white.png" style={{ width: '220px', height: 'auto', marginBottom: '30px', animation: 'breathe 3s infinite ease-in-out' }} alt="Logo" />
          <h1 style={{ fontSize: '20px', fontWeight: '300', letterSpacing: '8px', color: '#22d3ee', textTransform: 'uppercase' }}>RESONANCIA ORIGEN</h1>
          <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#fdfcf5', opacity: 0.8, marginTop: '15px', fontWeight: '300' }}>ACTIVANDO TU CONSCIENCIA GENÉTICA</p>
        </div>
      </>
    );
  }

  const accentColor = activeTab === 'frecuencias' ? '#22d3ee' : '#a855f7';
  const deepBlue = '#003366'; // Tono azul profundo manual

  return (
    <>
      <style>{inlineStyles}</style>
      <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '15px', fontFamily: 'sans-serif' }}>
        
        {/* 🧱 HEADER LOGO AUMENTADO (85px) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', padding: '0 10px' }}>
          <img src="/imagenes/genora-logo-white.png" style={{ height: '85px', width: 'auto' }} alt="Logo Header" />
          <div style={{ fontSize: '12px', letterSpacing: '2px', color: accentColor, fontWeight: 'bold', border: `1px solid ${accentColor}33`, padding: '5px 15px', borderRadius: '20px' }}>ES | EN</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* 🧱 ADN MAJESTUOSO: FUSIÓN DE ESTILOS */}
          <div style={{ 
            position: 'relative',
            width: '180px', 
            height: '180px', 
            marginBottom: '35px', 
            borderRadius: '50%', 
            // 💧 FUSIÓN MANUAL 1: Aro Azul Profundo
            border: `3px solid ${deepBlue}`, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            overflow: 'hidden', 
            backgroundColor: '#020617', 
            // 💧 FUSIÓN MANUAL 2: Resplandor Cian Aumentado 5 veces
            boxShadow: `0 0 15px ${accentColor}44, 0 0 30px ${accentColor}33, 0 0 50px ${accentColor}22, 0 0 70px ${accentColor}11, 0 0 100px ${accentColor}05`,
            // 💧 FUSIÓN MANUAL 3: Respiración Suave
            animation: 'breathe 4s infinite ease-in-out',
            transform: 'translateZ(0)' // Fuerza la aceleración por hardware
          }}>
            <img src="/imagenes/adn-icon.png" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.3)' }} alt="ADN Circular" />
          </div>

          {/* NAVEGACIÓN (Paso 2.3) */}
          <div style={{ display: 'flex', gap: '35px', marginBottom: '35px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
            <span onClick={() => setActiveTab('frecuencias')} style={{ cursor: 'pointer', fontSize: '13px', letterSpacing: '3px', color: activeTab === 'frecuencias' ? '#22d3ee' : '#444', borderBottom: activeTab === 'frecuencias' ? '2px solid #22d3ee' : 'none', paddingBottom: '10px', textTransform: 'uppercase', fontWeight: '300' }}>Frecuencias</span>
            <span onClick={() => setActiveTab('meditaciones')} style={{ cursor: 'pointer', fontSize: '13px', letterSpacing: '3px', color: activeTab === 'meditaciones' ? '#a855f7' : '#444', borderBottom: activeTab === 'meditaciones' ? '2px solid #a855f7' : 'none', paddingBottom: '10px', textTransform: 'uppercase', fontWeight: '300' }}>Meditaciones</span>
          </div>

          {/* 🧱 CUADRÍCULA: BOTONES OVALADOS PERFECTOS */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%', maxWidth: '500px' }}>
            {tracks.filter(t => t.type === activeTab).map(track => (
              <div key={track.id} 
                className="frecuencia-card" // Usaremos clase para el hover manual
                style={{ 
                  // 💧 AJUSTE MANUAL: Forma ovalada y compacta (Paso 2.5)
                  padding: '18px 10px', 
                  borderRadius: '25px', // Súper ovalado
                  textAlign: 'center', 
                  cursor: 'pointer',
                  border: `1.5px solid ${accentColor}33`, 
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: '300', letterSpacing: '1px', color: '#fff' }}>{track.name}</div>
                <div style={{ fontSize: '11px', color: accentColor, marginTop: '7px', fontWeight: 'bold', letterSpacing: '2px', opacity: 0.8 }}>{track.hz}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </style>
  );
};

export default App;