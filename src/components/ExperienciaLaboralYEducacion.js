// ExperienciaLaboralYEducacion.js
import React from 'react';

const ExperienciaLaboralYEducacion = ({ onBackClick, onNextClick }) => {
  return (
    <div className='experiencia-laboral-y-educacion'>
      {/* Contenido de la experiencia laboral y educación */}
      <button onClick={onBackClick}>Atrás</button>
      <button onClick={onNextClick}>Siguiente</button>
    </div>
  );
};

export default ExperienciaLaboralYEducacion;
