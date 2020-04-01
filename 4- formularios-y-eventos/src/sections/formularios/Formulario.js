import React, { Component } from 'react';

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        // let name = document.getElementById('name').value;
        const name = this.inputName.value;
        const email = document.getElementById('twitter').value;
        console.log({ name, email });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // const name = this.inputName.value;
        // const email = this.inputTwitter.value;
        // console.log({ name, email });
        console.log(this.state);


    }

    handleChange = (event) => {
        console.log(event.target.checked);
        this.setState({ inputTerms: event.target.checked });
    }

    render(){
        return(
            <div>
                <h2>Formulario</h2>
                <form onSubmit={ this.handleSubmit }>
                    <p>
                        <label htmlFor="name">Nombre:</label>
                        <input 
                        id = 'name'
                        name ='userName'
                        placeholder = 'Introduce el nombre'
                        ref = { inputName => this.inputName = inputName }
                        value = { this.state.inputName }
                        onChange = { (event)=>{ this.setState({ inputName: event.target.value }) } }
                        />
                    </p>
                    <p>
                        <label htmlFor="twitter" >Twitter:</label>
                        <input 
                        id = 'twitter'
                        name ='twitterAccount'
                        placeholder = 'Introduce tu Twitter'
                        ref = { inputTwitter => this.inputTwitter = inputTwitter }
                        value = { this.state.inputTwitter }
                        onChange = { (event)=>{ this.setState({ inputTwitter: event.target.value }) } }
                        />
                    </p>
                    <p>
                        <label>
                            <input checked={ this.state.inputTerms } onChange={ this.handleChange } type="checkbox" />
                            Aceptar terminos y condiciones
                        </label>
                        
                    </p>
                    {/* <button onClick={ this.handleClick } >Enviar</button> */}
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}

export default Formulario;