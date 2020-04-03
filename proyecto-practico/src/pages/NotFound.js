import React from 'react';
import { ButtonBackHome } from '../components/ButtonBackHome';

export const NotFound = () =>{
    return (
        <div>
            <h1 className="title">404</h1>
            <h2 className="subtitle">La pagina no existe</h2>
            <ButtonBackHome />
        </div>
    )
}