import './ItemListContainer.css';
import {Item} from './Item';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import ProductoDos from './ItemListContainer';
function GetItem () {
  const [productos, setProductos] = useState([]);
    useEffect (() => {
        const task = new Promise ((resolve) => {
            setTimeout(() =>{
                resolve (Item);
            }, 2000);
        });
        task.then (
            (result) =>{
                setProductos(result);
                return "retorno uno"
            },
            (error) =>{
                console.log(error)
                return "error"
            },
        )
        .catch((err)=>{
            console.log("soy el catch ", err)
        })
        .finally(()=>{
            console.log("me ejecuto siempre")
        })
    }, []);
    useEffect(() => {

    },[productos])
    
    console.log("productos ", productos)
        return(
            <div className="app">
                {productos && productos.map((productoDos)=> {
    return( <ProductoDos key={productoDos.id} name={productoDos.title} price={productoDos.price} img={productoDos.img} stock={producto.stock} />)
                })}
            </div>
        )
              }
  export default GetItem;