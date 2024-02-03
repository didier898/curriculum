
import React from 'react';
import Biografia from './components/Biografia';
import RedesSociales from './components/RedesSociales';
import './App.css'; // o cualquier otro archivo CSS para tus estilos

const App = () => {
  return (
    <div className="app">
      <RedesSociales />
      <Biografia />
      {/* Otras secciones pueden ir aquí */}
    </div>
  );
};

export default App;
