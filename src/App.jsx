import React, { useState } from 'react';
import Portafolio from './Portafolio'; 

const App = () => {
  const [theme, setTheme] = useState('light'); 

  return (
    <div>
      <Portafolio theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
