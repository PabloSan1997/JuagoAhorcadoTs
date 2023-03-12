import React from 'react'


function Mensajes() {
    const opciones = [
        "Iniciar",
        `Te quedan n intentos`,
        "Ya case se muere",
        "Se murio :(",
        "Se Salvó :)"
    ];
    
  return (
    <div className="mensajes">
        <p className="men">{opciones[0]}</p>
    </div>
  )
}

export  {Mensajes}