import React from 'react'
import { useContextos } from '../context/context';

type Contexto={
    setNueva:Function,
    setContar:Function,
    setMatar:Function
}

export function Header():JSX.Element{
    const {setNueva, setContar, setMatar}=useContextos() as Contexto;
    const reiniciar=()=>{
        const nueva = Math.random()*1000;
        setNueva(nueva);
        setContar(false);
        setMatar(0);
    }
    return (
        <header className="titulo">
            <h1>Juego ahorcado</h1>
            <button className='boton' onClick={reiniciar}>Reinicar</button>
        </header>
    );
}