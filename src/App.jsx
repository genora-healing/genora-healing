import React, { useState } from 'react';

function App() {
  const [view, setView] = useState('landing');
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px', fontFamily: 'sans-serif' }}>
      
      {/* LOGO TEMPORAL */}
      <div style={{ cursor: 'pointer', textAlign: 'center', marginBottom: '50px' }} onClick={() => { setView('landing'); setActiveCategory(null); }}>
        <h1 style={{ fontSize: '28px', letterSpacing: '10px', fontWeight: '200', margin: 0 }}>GENORA</h1>
        <p style={{ fontSize: '10px', letterSpacing: '5px', color: '#64748b', margin: 0 }}>HEALING</p>
      </div>

      {/* VISTA LANDING */}
      {view === 'landing' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '80%', maxWidth: '300px' }}>
          <button 
            onClick={() => { setView('menu'); setActiveCategory('GENORA'); }}
            style={{ padding: '20px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', letterSpacing: '3px', cursor: 'pointer' }}
          >
            SISTEMA GENORA
          </button>
          <button 
            onClick={() => { setView('menu'); setActiveCategory('FRECUENCIAS'); }}
            style={{ padding: '20px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', letterSpacing: '3px', cursor: 'pointer' }}
          >
            FRECUENCIAS MASTER
          </button>
        </div>
      )}

      {/* VISTA MENÚ */}
      {view === 'menu' && (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '14px', letterSpacing: '4px', color: '#4EC7C3' }}>{activeCategory}</h2>
          <p style={{ color: '#64748b', marginTop: '20px' }}>Cargando frecuencias...</p>
          <button onClick={() => setView('landing')} style={{ marginTop: '40px', background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer' }}>VOLVER</button>
        </div>
      )}
    </div>
  );
}

export default App;