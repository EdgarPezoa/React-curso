import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
  // PROPS POR DEFECTO
// class Title extends Component {
//   render(){
//     return <h1>{this.props.text}</h1>
//   }
// }

// Title.defaultProps ={
//   text: 'Titulo por defecto'
// }

class Contador extends Component{
  constructor(props){
    super(props);
    this.state = { contador: this.props.contadorInicial }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }
  
  render(){
    return <ContadorNumero numero={ this.state.contador }  />
  }
}

Contador.defaultProps ={
  contadorInicial: 0
}


class ContadorNumero extends Component{
  render(){
    console.log("Ejecutando render");
    return <span>{this.props.numero}</span>
  }
}


function App() {
  return (
    <div className="App">
      {/* <Title text="otro valor por props" /> */}
      <Contador contadorInicial={100} />
    </div>
  );
}

export default App;
