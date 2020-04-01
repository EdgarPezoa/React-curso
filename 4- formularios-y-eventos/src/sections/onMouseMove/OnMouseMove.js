import React, { Component } from 'react';

class OnMouseMove extends Component{
    constructor(props){
        super(props);
        this.state = { mouseX:0, mouseY:0 };
        // this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        this.setState({ mouseX: clientX, mouseY: clientY });
    }

    handleClick(event){
        console.log(event);
        alert("Clickeado desde funcion");
    }
    
    render(){
        return(
            <div onMouseMove={ this.handleMouseMove }>
                <button onClick={ this.handleClick } >Boton</button>
                <p>Mouse X: { this.state.mouseX }, Mouse Y: { this.state.mouseY }</p>
            </div>
        )
    };
}

export default OnMouseMove;