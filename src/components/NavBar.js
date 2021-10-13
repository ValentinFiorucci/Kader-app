import './NavBar.css';
export const Navbar = () => {
    const styles = { backgroundColor: 'grey' }
    const menu = {backgroundColor: 'darkcyan'}
    return (
        <body style={styles}>
        <div className="container">
            <ul style={menu} className="menu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Carro</a></li>
                <a className="marca">KaderShop</a>
            </ul>
        </div>
        </body>
    );
}