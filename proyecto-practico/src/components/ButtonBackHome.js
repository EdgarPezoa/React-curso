import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBackHome = ()=>{
    return <Link className="button is-info" to={ `/` } >Volver a la portada</Link>
}