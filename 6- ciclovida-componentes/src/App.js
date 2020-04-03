import React from 'react';
import Montaje from './sections/Montaje';
import FetchApi from './sections/FetchApi';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ciclo de vida y Componentes</h1>
      <hr/>
      <Montaje />
      <hr/>
      <FetchApi />
    </div>
  );
}

export default App;
