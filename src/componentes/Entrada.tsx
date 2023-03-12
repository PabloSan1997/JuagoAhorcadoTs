import React from 'react'
import { useContextos } from '../context/context'
type todos = {
  pal: string,
  estado: boolean
}[];
type content = {
  setTodo: Function,
  todo: todos,
  setContar: Function,
  setError: Function,
  matar: number,
  setMatar: Function
};
function Entrada() {
  const { setTodo, todo, setContar, setError, matar, setMatar } = useContextos() as content;
  const [escribir, setEscribir] = React.useState<string>("");
  const mira = () => {
    let ver = 0;
    if (escribir.length != 1) {
      alert("Escriba solo una letra");
    } else {
      if (matar < 5) {
        const list = todo.map(ele => {
          if (ele.pal === escribir) {
            setContar(true);
            ver++;
            return {
              ...ele,
              estado: true
            }
          } else {

            return {
              ...ele
            }
          }
        });
        setTodo(list);
        const ganar = todo.findIndex(elem => elem.estado === false);
        if (ganar === -1) {
          setMatar(6);
          setContar(false);
          setError(Math.random() * 10000);
        }
        if (ver === 0) {
          setError(Math.random() * 10000);
        }

      }
    }
  }
  return (
    <div className="entrada">
      <label htmlFor="#entrada">Escriba alguna letra</label>
      <input type="text" placeholder='Escribir' id="entrada" value={escribir} onChange={e => setEscribir(e.target.value)} />
      <button className='boton' onClick={mira}>Checar</button>
    </div>
  )
}

export { Entrada }