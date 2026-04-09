import React, { useState, useEffect } from 'react';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // 🧱 PASO 1 CORREGIDO: LOGO 220PX Y FRASE BLANCA
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
        {/* LOGO GRANDE (220px) Y RESPIRANDO */}
        <img 
          src="/imagenes/genora-logo-white.png" 
          style={{ 
            width: '220px', 
            height: 'auto', 
            marginBottom: '40px', 
            animation: 'breathe 3s infinite ease-in-out' 
          }} 
          alt="Genora Logo" 
        />
        
        {/* TÍTULO EN CIAN DIAMANTE */}
        <h1 style={{
          fontSize: '20px',
          fontWeight: '300',
          letterSpacing: '8px',
          textTransform: 'uppercase',
          textAlign: 'center',
          color: '#22d3ee',
          marginBottom: '15px'
        }}>
          RESONANCIA ORIGEN
        </h1>

        {/* FRASE EN BLANCO (Fdfcf5) - RECUPERADA */}
        <p style={{
          fontSize: '11px',
          letterSpacing: '4px',
          color: '#fdfcf5', // Blanco original
          opacity: 0.8,
          textAlign: 'center',
          fontWeight: '300'
        }}>
          ACTIVANDO TU CONSCIENCIA GENÉTICA
        </p>

        <style>{`
          @keyframes breathe {
            0%, 100% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.05); opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  // De momento dejamos este mensaje para confirmar que la portada quedó bien
  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p>Portada lista. ¿Cómo la ves ahora, Pamela?</p>
    </div>
  );
};

export default App;