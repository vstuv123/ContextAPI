
import './App.css'
import Counter from './components/Counter'
import { useCount } from './context/CountContext'
import Item from './components/Item';
import Cart from './components/Cart'

function App() {
  const { count } = useCount();

  return (
    <div>
      <center>
        <h1>Count is {count}</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </center>
      <center>
        <Item name="MacBook Pro" price={10000} />
        <Item name="PenDrive" price={4000} />
        <Item name="Mobile" price={35000} />
      </center>
      <center>
        <Cart />
      </center>
    </div>
  )
}

export default App
