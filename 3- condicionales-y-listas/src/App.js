import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional';
import ListasSection from './sections/listas';

function App() {
  return (
    <div className="App">
      <ConditionalSection />
      <br/>
      <ListasSection />
    </div>
  );
}

export default App;
