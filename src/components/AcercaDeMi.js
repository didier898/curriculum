// AcercaDeMi.js
import React from 'react';

const AcercaDeMi = ({ onBackClick}) => {
  return (
    <div className='acercademi'>
      <img src="/images/Foto.jpg" alt="Foto de perfil" className="foto-perfil" />
      <h2>Acerca de Mí</h2>
      <p>
        Soy Ingeniero Electrónico especializado en desarrollo de software. Poseo conocimientos en diseño de bases de datos, manejo de Frameworks, construcción de páginas web, desarrollo ágil, infraestructura y control de dispositivos electrónicos. Mantengo una actualización constante con las últimas tecnologías. Me caracterizo por mi sólida ética de trabajo y mi capacidad para mantener la calma bajo presión. Soy proactivo y orientado a resultados, siempre buscando maneras de mejorar procesos y superar metas. Mi enfoque colaborativo se complementa con excelentes habilidades de comunicación, facilitando la interacción efectiva con clientes; disfruto trabajar en equipo. La curiosidad intelectual y la voluntad de asumir nuevos desafíos me definen, impulsándome a explorar continuamente oportunidades para expandir mis conocimientos y habilidades.</p>
        <p>
            Además de mis habilidades técnicas y mi compromiso con la excelencia, ofrezco a cualquier equipo en el que me integre una capacidad probada para abordar desafíos complejos y diseñar soluciones eficientes. Mi experiencia en el desarrollo ágil y la gestión de proyectos me permite entregar productos de alta calidad en plazos ajustados. Estoy particularmente enfocado en optimizar procesos para aumentar la eficiencia y reducir costos, contribuyendo así al éxito a largo plazo de la empresa. Mi capacidad para adaptarme rápidamente a nuevas tecnologías y mi enfoque orientado a resultados me permiten aportar soluciones innovadoras que impulsan el crecimiento y la competitividad de la organización. Estoy entusiasmado por la oportunidad de aplicar mis habilidades y conocimientos para llevar a la empresa hacia nuevos niveles de éxito.
        </p>
        <button onClick={onBackClick}>Atrás</button>
    </div>
  );
};

export default AcercaDeMi;
