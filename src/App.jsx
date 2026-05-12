import React from 'react';

function App() {
  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw', 
      backgroundColor: '#020617', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ letterSpacing: '15px', fontWeight: '200', fontSize: '40px' }}>GENORA</h1>
      <p style={{ letterSpacing: '5px', color: '#4EC7C3', marginTop: '10px' }}>SISTEMA ACTIVO</p>
      <div style={{ marginTop: '50px', padding: '20px', border: '1px solid rgba(78, 199, 195, 0.3)', borderRadius: '8px' }}>
        <p style={{ fontSize: '14px', color: '#64748b' }}>Si estás viendo esto, la conexión es un éxito.</p>
      </div>
    </div>
  );
}

export default App;