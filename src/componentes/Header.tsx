import React from 'react'
import { useContextos } from '../context/context';
type Contexto={
    setNueva:Function
}
export function Header():JSX.Element{
    const {setNueva}=useContextos() as Contexto;
    const reiniciar=()=>{
        const nueva = Math.random()*1000;
        setNueva(nueva);

    }
    return (
        <header className="titulo">
            <h1>Juego ahorcado</h1>
            <button className='boton' onClick={reiniciar}>Reinicar</button>
        </header>
    );
}