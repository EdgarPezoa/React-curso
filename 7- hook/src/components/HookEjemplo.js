import React, { useState } from 'react';

const useContador = (init) => {
    const [count, setCount] = useState(init);

    const incrementar = () => {
        setCount(count + 1);
    }
    return {count, incrementar};
}

export const HookEjemplo = ()=>{
    const { count, incrementar } = useContador(0);
    return(
        <div>
            { count }
            <button onClick={ incrementar }>Incrementar</button>
        </div>
    )
}