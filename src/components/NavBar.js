import App from '../App';
import { Widget } from './CartWidget';
import './NavBar.css';
import './CartWidget';
export const Navbar = () => {
    const styles = { backgroundColor: 'grey' }
    const menu = {backgroundColor: 'darkcyan'}
    const img = ("./components/shopping-bag.png")
    return (
        <body style={styles}>
        <div className="container">
            <ul style={menu} className="menu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Carro</a></li>
                <Widget src={img}/>
                <a className="marca">KaderShop</a>
            </ul>
        </div>
        </body>
    );
}
export default App