import React from 'react'
import { useContextos } from '../context/context'

type Contexto = {
    palabras:string
}
interface pCajas{
    letra:string
}
function Respuesta():JSX.Element {
    const {palabras}=useContextos() as Contexto;
    const arreglo = palabras.split('');
    let i=0;
  return (
    <div className="respuesta">
        {arreglo.map(elemento=>
            (<Cajas key={i++} letra={elemento}/>)
            )}
    </div>
  )
}

function Cajas({letra}:pCajas):JSX.Element{
    return (
        <div className="cajas">
            <p className="letra nel">{letra}</p>
        </div>
    );
}
export  {Respuesta}