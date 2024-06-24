
import { useCart } from "../context/CartContext"


const Cart = () => {
    const { items } = useCart();
    // let total_price = 0;
    // items.forEach(item => {
    //     total_price = total_price + item.price
    // });
    const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="cart">
        <h1>Cart</h1>
      {
        items.map((item, index) => (
            <li key={index}>{item.name} -- ${item.price}</li>
        ))
      }
      <h5>Total Bill: ${total}</h5>
    </div>
  )
}

export default Cart
