import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Item } from "./Item";


export const ItemDetailContainer = () => {
const {id} = useParams()
const [producto, setProducto] = useState ([]);
console.log(id)
useEffect(() =>{
    Item.filter((e) =>{
        if(e.id===id){
            return setProducto(e)
        }
        return null
    }),[]})
    console.log(producto)
    return(
        <ItemDetail title={producto.title} price={producto.price} img={producto.img}/>
        )
        
        
}
export default ItemDetailContainer;
