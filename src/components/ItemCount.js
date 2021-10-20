import { useState } from "react";
import img from './img/img.jpg'
import './ItemCount.css';
export const ItemCount = () => {
    const [Carrito, setCarrito] = useState(0)
    const add = () =>{
        if (Carrito <10){
            setCarrito(Carrito +1)
        } else { alert('No hay más stock disponible!')}
    }
    const decreace = () => {
        if (Carrito > 0) setCarrito(Carrito -1)
    }
    return (
        <div className="card-ubicada">
            <img width="300px" src={img} />
            <div>
                <h1>Remera</h1>
                <p>
                    Remeras añadidas :{Carrito}
                </p>
                <button onClick={add}>agregar</button>
                <button onClick={decreace}>eliminar</button>
            </div>
        </div>
    )
}