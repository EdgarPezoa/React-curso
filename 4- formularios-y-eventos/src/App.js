import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OnMouseMove from './sections/onMouseMove/OnMouseMove';
import Formulario from './sections/formularios/Formulario';

class App extends Component  {
  
  render(){
    return (
      <div className="App">
        <h1>Formularios y Eventos</h1>
        <h2>Eventos</h2>
        <OnMouseMove />
        <hr />
        <Formulario />
      </div>
    );
  }
}

export default App;
