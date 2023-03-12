import React from 'react'
import { useContextos } from '../context/context'
type todos = {
    pal:string,
    estado:boolean
}[];
type Contexto = {
    todo:todos
}
interface pCajas{
    letra:string,
    estado:boolean
}
function Respuesta():JSX.Element {
    const {todo}=useContextos() as Contexto;
    let i=0;
  return (
    <div className="respuesta">
        {todo.map(elemento=>
            (<Cajas key={i++} letra={elemento.pal} estado={elemento.estado}/>)
            )}
    </div>
  )
}

function Cajas({letra, estado}:pCajas):JSX.Element{
    return (
        <div className="cajas">
            <p className={!estado?"letra nel":"letra"}>{letra}</p>
        </div>
    );
}
export  {Respuesta}