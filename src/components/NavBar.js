import App from '../App';
import { Widget } from './CartWidget';
import './NavBar.css';
import './CartWidget';
import img from './img/carrito.png'
export const Navbar = () => {
    const styles = { backgroundColor: 'black' }
    const menu = {backgroundColor: 'black'}
    return (
        <body style={styles}>
        <div className="container">
            <ul style={menu} className="menu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Carro</a></li>
                <img width="50px" src={img}/>
                <a className="marca">KaderShop</a>
            </ul>
        </div>
        </body>
    );
}
export default App