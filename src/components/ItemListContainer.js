const Producto = ({title, price, img}) =>{
    return(
            <div>
                <div>
                    <img src={img} class="card-img" alt="Imagen carrito"/>
                </div>
                <div>
                    <div>
                        <h5>{title}</h5>
                        <p>${price}</p>
                    </div>
                </div>
            </div>
    );
}
export default Producto;