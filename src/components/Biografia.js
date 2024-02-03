// Biografia.js
import React from 'react';

const Biografia = () => {
  return (
    <div className='biografia'>
      <img src="/images/Foto.jpg" alt="Foto de perfil" className="foto-perfil" />
      <h1>Didier Silva </h1>
      <p><i className="fas fa-tools"></i>Ingeniero Electrónico | <i className="fas fa-laptop"></i>Desarrollador de Software</p>
      <p>
        <i className="far fa-envelope"></i> Email: didier002010@gmail.com
      </p>
      <p>
        <i className="fas fa-phone-alt"></i> Teléfono: +57 3012758256
      </p>
      <p>
      <i className="fas fa-home"></i>Dirección: Concepción, Santa Marta. Disponibilidad para viajar<i className="fas fa-plane"></i>
      </p>
    </div>
  );
};

export default Biografia;
