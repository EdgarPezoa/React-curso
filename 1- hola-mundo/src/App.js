import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello(props){
//   return <h2>{props.title}</h2>
// }

// const Hello = (props) => {
//   return <h2>{props.title}</h2>
// }

class Hello extends Component{
  render(){
    return <h2>{this.props.title}</h2>
  }
}

class Texto extends Component{
  render(){
    const { texto, numero, multiplicador, boolean, objeto, array, elemento } = this.props
    const textoSegunBoolean = this.props.boolean ? "Verdadero": "Falso";
    // const mappedNumbers = this.props.array.map((numero)=>{
    //   return numero * 2;
    // })
    const mappedNumbers = array.map(multiplicador);
    return(
      <div>
        {/* <p>{this.props.texto}</p>
        <p>{this.props.numero}</p>
        <p>{textoSegunBoolean}</p> */}
        {/* <p>{this.props.array.join(', ')}</p> */}
        {elemento}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{ objeto.key2 }</p>
      </div>
    )
     
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hola Mundo" />
        <Texto 
          array={[1, 2, 3, 4]}
          objeto={{ key: 'Value' , key2: 'Value2' }}
          boolean={ true }
          numero={ 2 }
          texto="Modificando el app.js"
          multiplicador={(n)=> n * 2}
          elemento = {<h1>Elemento h1</h1>}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
