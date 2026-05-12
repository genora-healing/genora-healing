import React, { useState } from 'react';

export default function App() {
  const [view, setView] = useState('inicio');

  const estiloBoton = {
    padding: '20px',
    margin: '10px',
    background: 'transparent',
    border: '1px solid #4EC7C3',
    color: 'white',
    letterSpacing: '3px',
    cursor: 'pointer',
    width: '280px',
    fontSize: '14px'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '40px', letterSpacing: '12px', fontWeight: '200', margin: 0 }}>GENORA VIVA</h1>
        <p style={{ fontSize: '12px', letterSpacing: '6px', color: '#64748b', margin: 0 }}>HEALING</p>
      </div>

      {view === 'inicio' ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button style={estiloBoton} onClick={() => setView('sistema')}>SISTEMA GENORA</button>
          <button style={estiloBoton} onClick={() => setView('frecuencias')}>FRECUENCIAS MASTER</button>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ letterSpacing: '4px', color: '#4EC7C3' }}>{view.toUpperCase()}</h2>
          <p style={{ color: '#64748b' }}>Conexión establecida con éxito.</p>
          <button style={{ ...estiloBoton, border: 'none', fontSize: '10px' }} onClick={() => setView('inicio')}>VOLVER AL INICIO</button>
        </div>
      )}
    </div>
  );
}