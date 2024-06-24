import { createContext, useContext, useState } from "react"
const CartContext = createContext(null)
//eslint-disable-next-line
const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])
  return (
    <CartContext.Provider value={{ items, setItems }}>
      { children }
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);
//eslint-disable-next-line
export { useCart, CartProvider }
