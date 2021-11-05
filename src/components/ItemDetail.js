import ItemCount from "./ItemCount";
const ItemDetail = ({id ,title, price ,img, stock}) =>{
  return (
<div>
  <div>
    <img src={img} />
  </div>
    <p>{price}</p>
    <h5>{title}</h5>
    <p>{stock}</p>
    <div><ItemCount/></div>
</div>
  )
}

export default ItemDetail;