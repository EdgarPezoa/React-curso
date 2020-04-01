import React, { Component } from 'react';
import Article from './sections/Article';
import './App.css';

// npm install prop-types -SE
function App() {
  return (
    <div className="App">
      <h1>Children y PropTypes</h1>
      <hr/>
      <Article
          title = { 'Articulo sobre la prop children' }
          author = { 'Miguel' }
          date = { new Date().toLocaleDateString() }
        >
         <p>Enviando contenido desde children utilizando this.props.children</p> 
         <strong>Y mantiene las etiquetas y todo lo añadido</strong>
      </Article>
    </div>
  );
}

export default App;
