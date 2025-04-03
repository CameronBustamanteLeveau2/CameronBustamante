import React from 'react';
import curriculum from './assets/curriculum.png';  // Importa el archivo desde src
import './portafolio.css';
export const DescargarCV = () => {
  return (
    <div>
      <a href={curriculum} download>
        <button className="cv-button">Descargar CV</button>
      </a>
    </div>
  );
};

export default DescargarCV;
