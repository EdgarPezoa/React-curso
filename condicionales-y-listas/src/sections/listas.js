import React, { Component } from 'react';
import cars from '../data/cars.json'

class CarItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {car} = this.props;
        return(
            <li>
                <p>Nombre: {car.name}</p>
                <p>Marca: {car.company}</p>
            </li>
        )
    }
}

export default class ListasSection extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const numbers = [1, 1, 2, 3, 4];
        return(
            <div>
                <h1>Listas</h1>
                { numbers.map((numero, indice) => { return <p key={ indice }>El numero { numero }</p>}) }
                <ul>
                    {cars.map((car)=>{
                        return <CarItem key={car.id} car={car} />
                    })}
                </ul>
            </div>
        )
    {}
}}