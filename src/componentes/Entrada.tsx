import React from 'react'

function Entrada() {
  return (
    <div className="entrada">
        <label htmlFor="">Escriba alguna letra</label>
        <input type="text" placeholder='Escribir' />
        <button>Checar</button>
    </div>
  )
}

export  {Entrada}