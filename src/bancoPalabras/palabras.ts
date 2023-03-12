
import React from 'react'
const entrada: string = "telefono mango fruta perro gato avion pendejo komanche ded garbanzo Chihiahia";

const palabra: string[] = entrada.split(' ');
type todos = {
    pal:string,
    estado:boolean
}[];
export function usePalabres(){
    const [palabras, setPalabras] = React.useState<string>("");
    const [nueva, setNueva] = React.useState(0);
    const [todo, setTodo]= React.useState<todos>([]);
    React.useEffect(
        () => {
            let letra:string='';
            do {
                 letra = palabra[Math.floor(Math.random() * palabra.length)];
                
            }while(letra===palabras);
            const cadena = letra.split("");
            const obje = cadena.map(elemento=>{
                return {
                    estado:false,
                    pal:elemento,
                }
            });
            setTodo(obje);
            setPalabras(letra);
        }
        , [nueva]);
    return { palabras, setNueva, setTodo, todo }
}