import React, { Component } from 'react';

const ANIMAL_IMAGES = {
    cat: 'https://image.shutterstock.com/image-photo/beautiful-cat-blue-eyes-isolated-260nw-1555307555.jpg',
    dolphin: 'https://media.gettyimages.com/photos/bottlenose-dolphin-jumping-in-caribbean-sea-picture-id906390518?s=612x612',
    panda: 'https://www.dw.com/image/39558053_303.jpg'
};

class AnimalImage extends Component{
    state = { src: ANIMAL_IMAGES[this.props.animal]};

    componentWillReceiveProps(nextProps){
        //Cada vez que se actualiza una prop aparece este metodo
        this.setState({ src: ANIMAL_IMAGES[this.props.animal]});
    }

    shouldComponentUpdate(nextProps){
        return this.props.animal !== nextProps.animal;
    }

    render(){
        return(
            <div>
                {console.log('->render'+this.props.animal)}
                <p>Selected {this.props.animal}</p>
                <img alt={this.props.animal} src={this.state.src} width='250' />
            </div>
        )
    }
}
AnimalImage.defaultProps ={
    animal:'panda'
}

class Montaje extends Component{
    constructor(props){
        console.log("Constructor");
        super(props);
        this.state = { mensajeInicial: 'HolaMundo', animal:'panda' };
    }

    componentWillMount(){
        console.log("componentWillMount");
        this.setState({
            mensajeInicial: "Datos de bases de datos"
        });
    }

    componentDidMount(){ 
        console.log("componentDidMount");
    }

    componentDidUpdate(){

    }

    render(){
        console.log("Render");
        return(
            <div>
                <AnimalImage animal={this.state.animal} />
                <button onClick={()=>{ this.setState({animal:'panda'}) }}>
                    Panda
                </button>
                <button onClick={()=>{ this.setState({animal:'dolphin'}) }}>
                    Dolphin
                </button>
                <button onClick={()=>{ this.setState({animal:'cat'}) }}>
                    Cat
                </button>
                <h2>{this.state.mensajeInicial}</h2>
            </div>
        )
    }
}

export default Montaje;