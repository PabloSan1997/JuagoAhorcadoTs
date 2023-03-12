
import { useContextos } from "../context/context"
import parte1 from "./parte1.svg"
import parte2 from "./parte2.svg"
import parte3 from "./parte3.svg"
import parte4 from "./parte4.svg"
import parte5 from "./parte5.svg"
import parte6 from "./parte6.svg"

const elementos = [parte1, parte2, parte3, parte4, parte5, parte6];
interface conte{
    matar:number
}
export function Muneco():JSX.Element{
    const {matar}=useContextos() as conte;
    return (
        <div className="contenedorImagen">
            <img src={elementos[matar]} alt="" />
        </div>
    );
}
