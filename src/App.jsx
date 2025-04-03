import React, { useState } from 'react';
import Portafolio from './Portafolio'; // Cambié el nombre del archivo a Portafolio

const App = () => {
  const [theme, setTheme] = useState('light'); // 'light' es el valor inicial

  return (
    <div>
      <Portafolio theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;