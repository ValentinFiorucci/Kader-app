const ProductoDos = ({ title, price, img, stock }) => {
  return (
    <div className="center-card">
    <div className = "card-Producto">
    <div>
        <img src={img} class="card-img" alt="Imagen carrito"/>
    </div>
    <div className = "texto-Card">
            <h5>{title}</h5>
            <p>buzo cuello redondo</p>
            <p>material: 100% algodon </p>
    </div>
</div>
</div>
  );
}
export default ProductoDos;