import React, { useState } from 'react';
import Biografia from './components/Biografia';
import RedesSociales from './components/RedesSociales';
import AcercaDeMi from './components/AcercaDeMi';
import './App.css'; // o cualquier otro archivo CSS para tus estilos

const App = () => {
  const [mostrarAcercaDeMi, setMostrarAcercaDeMi] = useState(false);

  const handleNextClick = () => {
    setMostrarAcercaDeMi(true);
  };

  const handleBackClick = () => {
    setMostrarAcercaDeMi(false);
  };

  return (
    <div className="app">
      <RedesSociales />
      {mostrarAcercaDeMi ? (
        <AcercaDeMi onBackClick={handleBackClick} />
      ) : (
        <Biografia onNextClick={handleNextClick} />
      )}
    </div>
  );
};

export default App;
