
import { useCart } from "../context/CartContext"

//eslint-disable-next-line
const Item = ({ name, price }) => {
  const { items, setItems } = useCart()

  const handleCart = () => {
    setItems([...items, { name: name, price: price}])
  }
  const RemoveCart = (name) => {
    let leftItems = items.filter(item => item.name !== name);
    setItems(leftItems);
  }
  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleCart}>Add To Cart</button>
      <button onClick={() => RemoveCart(name)}>Remove From Cart</button>
    </div>
  )
}

export default Item
