import { Item } from './Item.js';
import { useEffect,useState } from 'react/cjs/react.development';

const Productos = () =>{
    const [products, setProductos] = useState([]);
    
    const renderProductos =() =>(
        <div>
            {products.map((data => (
                <Item
                key={data.id}
                title={data.title}
                price={data.price}
                stock={data.stock}
                img={data.img}/>
                ))}
                </div>
            )
const getProductos = () => {
    Item.get('./Item.js').then(res =>{
        setProductos(res.data);
    })
};

useEffect(() =>{
    getProductos();
}, 4000, [])


return(
    <div>
        <h5></h5>
        <img></img>
        <p></p>
    </div>
)
};
