import React from 'react'
import { useContextos } from '../context/context';

interface hola{
  matar:number
}

function Mensajes() {
  const {matar}=useContextos() as hola;
    const opciones = [
        "Empecemos",
        `Te quedan ${5-matar} intentos`,
        `Te quedan ${5-matar} intentos`,
        `Te quedan ${5-matar} intentos`,
        "Ya casi se muere",
        "Se murio :(",
        "Se Salvó :)"
    ];
    
  return (
    <div className="mensajes">
        <p className="men">{opciones[matar]}</p>
    </div>
  )
}

export  {Mensajes}