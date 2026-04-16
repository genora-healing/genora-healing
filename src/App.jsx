import React, { useState, useEffect, useRef } from 'react';

const inlineStyles = `
  @keyframes logo-breathe { 0%, 100% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.05); opacity: 1; } }
  
  /* TU ESCÁNDALO DE LUZ PERFECTO */
  @keyframes aura-supernova {
    0%, 100% { 
      transform: scale(1); 
      box-shadow: 0 0 80px rgba(34, 211, 238, 0.4), 0 0 150px rgba(34, 211, 238, 0.2); 
    }
    50% {
      transform: scale(1.03); 
      box-shadow: 
        0 0 50px rgba(34, 211, 238, 0.9),
        0 0 120px rgba(34, 211, 238, 0.6),
        0 0 250px rgba(34, 211, 238, 0.4),
        0 0 450px rgba(34, 211, 238, 0.2);
    }
  }

  .fade-in-smooth { animation: fadeIn 0.8s ease-in forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .frecuencia-card { transition: all 0.3s ease; border-radius: 35px; border: 1px solid rgba(34, 211, 238, 0.15); background: rgba(255,255,255,0.015); }
  .time-button { transition: all 0.2s ease; cursor: pointer; border-radius: 40px !important; }
  body, html { overflow-x: hidden; background-color: #020617; margin: 0; padding: 0; font-family: sans-serif; }

  .back-button-genora {
    width: 42px; height: 42px; border-radius: 50%;
    border: 1px solid rgba(34, 211, 238, 0.4);
    background: rgba(34, 211, 238, 0.05);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
  }
`;

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('frecuencias');
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500); // Tus 4.5 segundos
    return () => clearTimeout(timer);
  }, []);

  // Control de audio
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Error play:", e));
        if (selectedTime && selectedTime !== '∞') {
          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => setIsPlaying(false), selectedTime * 60000);
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, selectedTime]);

  const categories = ["MENTE", "EMOCIONES", "CUERPO", "EXPANSIÓN"];

  if (showSplash) {
    return (
      <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
        <style>{inlineStyles}</style>
        <img src="/imagenes/genora-logo-white.png" style={{ width: '200px', maxWidth: '80%', animation: 'logo-breathe 3s infinite ease-in-out' }} alt="Logo" />
        <h1 style={{ fontSize: '18px', fontWeight: '300', letterSpacing: '4px', color: '#22d3ee', textTransform: 'uppercase', marginTop: '30px' }}>RESONANCIA ORIGEN</h1>
      </div>
    );
  }

  return (
    <div className="fade-in-smooth" style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <style>{inlineStyles}</style>
      
      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <img src="/imagenes/genora-logo-white.png" style={{ height: '50px' }} alt="Logo" />
        <div style={{ fontSize: '12px', color: '#22d3ee', border: '1px solid #22d3ee', padding: '5px 15px', borderRadius: '20px' }}>ES | EN</div>
      </div>

      {/* ADN CENTRAL CON TU ANIMACIÓN AURA-SUPERNOVA */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
        <div style={{ 
          width: '180px', height: '180px', 
          borderRadius: '50%', // IMPORTANTE: Para evitar el cuadro azul
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: isPlaying ? 'aura-supernova 4s infinite ease-in-out' : 'aura-supernova 10s infinite ease-in-out'
        }}>
          <img src="/imagenes/adn-icon.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="ADN" />
        </div>
      </div>

      {/* SECCIÓN DE CATEGORÍAS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {categories.map(cat => (
          <div key={cat} className="frecuencia-card" style={{ padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '14px', letterSpacing: '2px' }}>{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;