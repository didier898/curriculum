// ExperienciaLaboralYEducacion.js
import React from 'react';

const ExperienciaLaboralYEducacion = ({ onBackClick,onNextClick }) => {
  return (
    <div className='experiencia-laboral-y-educacion'>
      <h2>Experiencia Laboral y Educación</h2>
      <ul>
        <li>
          <strong>2020-12 - 2021-12</strong>
          <p>Tesis de Pregrado: “Análisis de la utilización de Drones como técnica de fumigación de cultivos de banano en el corregimiento de Orihueca, Zona Bananera, Colombia. [Tesis de pregrado, Universidad Cooperativa de Colombia]. Repositorio Institucional Universidad Cooperativa de Colombia. <a href="https://repository.ucc.edu.co/entities/publication/0220183c-ef40-4829-b775-84c43e330196">Link</a></p>
        </li>
        <li>
          <strong>2022-03</strong>
          <p>Docente Auxiliar de proyectos de investigación y Matemáticas, I.E.D Rodrigo vives de Andreis, Orihueca, Zona Bananera. Desarrollo de proyectos y programas. Trabajo en equipo para facilitar el cumplimiento de objetivos.</p>
        </li>
        <li>
          <strong>2017-02 - 2022-03</strong>
          <p>PROFESIONAL EN INGENIERÍA ELECTRÓNICA, Universidad Cooperativa de Colombia, Santa Marta.</p>
        </li>
        <li>
          <strong>2023-03 - 2024-03</strong>
          <p>ESPECIALISTA EN DESARROLLO DE SOFTWARE, Universidad del Magdalena, Santa Marta.</p>
        </li>
      </ul>
      <button onClick={onBackClick}>Atrás</button>
      <button onClick={onNextClick}>Siguiente</button>
    </div>
  );
};

export default ExperienciaLaboralYEducacion;
