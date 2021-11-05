import './ItemListContainer.css';
import { Link } from "react-router-dom";
const Producto = ({img}) => {
  return (
    <div className="card-img">
        <Link> <img src={img} class="img" alt="Imagen carrito"/></Link>
    </div>
    
  );
}
export default Producto;