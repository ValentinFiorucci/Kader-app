import './ItemListContainer.css';
import ItemCount from './ItemCount'
import ProductoDos from './ItemDetail';
const Producto = ({ title, price, img, stock }) => {
  return (
    <div className="center-card">
    <div className = "card-Producto">
    <div>
        <img src={img} class="card-img" alt="Imagen carrito"/>
    </div>
    <div className = "texto-Card">
            <h5>{title}</h5>
            <p>${price}</p>
            <div><ItemCount/></div>
            <button onClick={ProductoDos}> Detalle</button>
    </div>
</div>
</div>
  );
}
export default Producto;