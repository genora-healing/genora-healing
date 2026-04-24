import React, { useState, useEffect } from 'react';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // 🧱 PASO 1: SPLASH SCREEN BLINDADO (Tu código original)
  if (showSplash) {
    return (
      <div style={{
        backgroundColor: '#020617',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'sans-serif',
        padding: '20px'
      }}>
        <img 
          src="/imagenes/genora-logo-white.png" 
          style={{ width: '180px', height: 'auto', marginBottom: '30px' }} 
          alt="Genora Logo" 
        />
        
        <h1 style={{
          fontSize: '20px',
          fontWeight: '300',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          textAlign: 'center',
          color: '#22d3ee', 
          marginBottom: '15px'
        }}>
          RESONANCIA ORIGEN
        </h1>

        <p style={{
          fontSize: '11px',
          fontWeight: '300',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          textAlign: 'center',
          color: '#22d3ee', 
          opacity: 0.6
        }}>
          Activando tu consciencia genética
        </p>
      </div>
    );
  }

  // 🧱 PASO 2: PANTALLA DE INICIO (HOME) RESTAURADA
  return (
    <div style={{
      backgroundColor: '#020617', 
      minHeight: '100vh', 
      color: 'white', 
      padding: '20px', 
      fontFamily: 'sans-serif'
    }}>
      
      {/* HEADER GENORA BLINDADO */}
      <div style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        maxWidth: '500px', 
        margin: '0 auto 50px',
        width: '100%'
      }}>
        <img 
          src="/imagenes/genora-logo-white.png" 
          style={{ height: '35px', width: 'auto' }} 
          alt="Logo Sutil" 
        />
        
        <div style={{ display: 'flex', gap: '15px', fontSize: '12px', letterSpacing: '2px' }}>
          <span style={{ color: '#22d3ee', cursor: 'pointer', fontWeight: 'bold' }}>ES</span>
          <span style={{ color: '#444', cursor: 'pointer' }}>EN</span>
        </div>
      </div>

      {/* CUERPO CENTRAL: ADN Y "ELIGE TU CAMINO" */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
        
        {/* ADN CENTRAL CON RESPLANDOR (Sin círculo azul oscuro) */}
        <div style={{ 
          width: '200px', 
          height: '200px', 
          marginBottom: '60px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.4))'
        }}>
          <img 
            src="/imagenes/adn-icon.png" 
            style={{ width: '90%', height: 'auto' }} 
            alt="ADN Pulsante" 
          />
        </div>

        <h2 style={{ 
          fontSize: '11px', 
          letterSpacing: '6px', 
          color: '#22d3ee', 
          marginBottom: '30px', 
          textTransform: 'uppercase',
          fontWeight: '300'
        }}>
          ELIGE TU CAMINO
        </h2>

        {/* BOTONES PRINCIPALES (Preparados para la siguiente fase) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', alignItems: 'center' }}>
          <button style={buttonStyle('#22d3ee')}>RESONANCIA</button>
          <button style={buttonStyle('#a855f7')}>INMERSIÓN</button>
          <button style={buttonStyle('#d4af37')}>💎 ALQUIMIA GENÉTICA</button>
        </div>
      </div>
    </div>
  );
};

// Estilo base para los botones del Home
const buttonStyle = (color) => ({
  width: '90%',
  maxWidth: '350px',
  padding: '22px',
  borderRadius: '50px',
  textTransform: 'uppercase',
  letterSpacing: '4px',
  fontSize: '13px',
  cursor: 'pointer',
  color: 'white',
  background: 'rgba(255,255,255,0.03)',
  border: `1px solid ${color}66`, // Borde con color sutil
  transition: '0.3s'
});

export default App;