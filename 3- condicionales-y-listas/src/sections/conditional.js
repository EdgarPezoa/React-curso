import React, { Component } from 'react';

class ComponenteA extends Component{
    render(){
        return(
            <p>Componente A</p>
        )
    }
}

class ComponenteB extends Component{
    render(){
        return(
            <p>Componente B</p>
        )
    }
}

function useConditionalRendering(mostrarA){
    if(mostrarA){
        return <ComponenteA />
    }
    return <ComponenteB />
}

class LoginButtom extends Component{
    render(){
        return(
            <button>Iniciar Sesión</button>
        )
    }
}

class LogoutButtom extends Component{
    render(){
        return(
            <div>
                <p>Bienvenido, Usuario!</p>
                <button>Cerrar Sesión</button>
            </div>
        )
    }
}



export default class ConditionalSection extends Component {
    constructor(props){
        super(props);
        this.state = { mostrarA: true, isUserLogged: true };
    }
    render(){
        // const conditionalComponent = useConditionalRendering(this.state.mostrarA);
        const conditionalComponent = this.state.mostrarA ? <ComponenteA /> : <ComponenteB />;
        return(
            <div>
                <h4>Conditional Rendering</h4>
                { useConditionalRendering(this.state.mostrarA) }
                { conditionalComponent }
                {this.state.mostrarA ? <ComponenteA /> : <ComponenteB />}
                {this.state.isUserLogged ? <LogoutButtom /> : <LoginButtom />}
            </div>
        )
    }   
}
