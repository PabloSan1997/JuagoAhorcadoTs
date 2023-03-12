import React from 'react'

function Entrada() {
  return (
    <div className="entrada">
        <label htmlFor="#entrada">Escriba alguna letra</label>
        <input type="text" placeholder='Escribir' id="entrada"/>
        <button className='boton'>Checar</button>
    </div>
  )
}

export  {Entrada}