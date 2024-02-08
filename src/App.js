// App.js
import React, { useState } from 'react';
import Biografia from './components/Biografia';
import RedesSociales from './components/RedesSociales';
import AcercaDeMi from './components/AcercaDeMi';
import ExperienciaLaboralYEducacion from './components/ExperienciaLaboralYEducacion';

import './App.css'; // o cualquier otro archivo CSS para tus estilos

const App = () => {
  const [mostrarAcercaDeMi, setMostrarAcercaDeMi] = useState(false);
  const [mostrarExperiencia, setMostrarExperiencia] = useState(false);

  const handleNextAcercaDeMiClick = () => {
    setMostrarAcercaDeMi(true);
  };

  const handleNextExperienciaClick = () => {
    setMostrarExperiencia(true);
  };

  const handleBackClick = () => {
    // Aquí manejamos el comportamiento del botón "Atrás"
    // Si estamos en la sección "Experiencia Laboral y Educación", volvemos a "Acerca de Mí"
    if (mostrarExperiencia) {
      setMostrarExperiencia(false);
      setMostrarAcercaDeMi(true);
    } else {
      // Si estamos en "Acerca de Mí", volvemos a "Biografía"
      setMostrarAcercaDeMi(false);
    }
  };

  return (
    <div className="app">
      <RedesSociales />
      {mostrarExperiencia ? (
        <ExperienciaLaboralYEducacion onBackClick={handleBackClick} />
      ) : mostrarAcercaDeMi ? (
        <AcercaDeMi onNextClick={handleNextExperienciaClick} onBackClick={handleBackClick} />
      ) : (
        <Biografia onNextClick={handleNextAcercaDeMiClick} />
      )}
    </div>
  );
};

export default App;
