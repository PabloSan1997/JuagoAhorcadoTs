import React from 'react'
import { usePalabres } from '../bancoPalabras/palabras';


type props={
    children:JSX.Element | JSX.Element[]
}

const Contexto = React.createContext({});
function ProvedorContexto({children}:props){
    const {palabras, setNueva, setTodo, todo}=usePalabres();
    const [contar, setContar]=React.useState<boolean>(false);
    const [matar, setMatar]=React.useState<number>(0);
    const [error, setError]=React.useState<number>(0);

    React.useEffect(
        ()=>{
            let ver:number = matar;
            if(contar){
                setMatar(ver+1);
            }
        }
        ,[error]);
        console.log(matar, error, contar);
    return (
        <Contexto.Provider
        value={
            {
                palabras,
                setNueva,
                setTodo,
                todo,
                contar,
                setContar,
                setError,
                setMatar,
                matar
            }
        }
        >
            {children}
        </Contexto.Provider>
    );
}
const useContextos=():object=>{
    const auth = React.useContext(Contexto);
    return auth;
}

export{useContextos, ProvedorContexto}