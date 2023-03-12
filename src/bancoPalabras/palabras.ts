
import React from 'react'
const entrada: string = "telefono mango fruta perro gato avion pendejo komanche ded garbanzo Chihiahia";

const palabra: string[] = entrada.split(' ');

export function usePalabres(){
    const [palabras, setPalabras] = React.useState<string>("");
    const [nueva, setNueva] = React.useState(0);
    React.useEffect(
        () => {
            let letra:string='';
            do {
                 letra = palabra[Math.floor(Math.random() * palabra.length)];
                
            }while(letra===palabras);
            setPalabras(letra);
        }
        , [nueva]);
    return { palabras, setNueva }
}