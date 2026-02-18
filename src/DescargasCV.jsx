import React from 'react';
import curriculum from './assets/curriculum.pdf';
import './portafolio.css';
export const DescargarCV = () => {
  return (
    <div>
      <a href={curriculum} download >
        <button className="cv-button">DOWNNLOAD CV</button>
      </a>
    </div>
  );
};

export default DescargarCV;
