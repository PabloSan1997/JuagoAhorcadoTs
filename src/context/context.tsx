import React from 'react'
import { usePalabres } from '../bancoPalabras/palabras';


type props={
    children:JSX.Element | JSX.Element[]
}

const Contexto = React.createContext({});
function ProvedorContexto({children}:props){
    const {palabras, setNueva}=usePalabres();
    return (
        <Contexto.Provider
        value={
            {
                palabras,
                setNueva
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