import { createContext, useContext, useState } from "react"

export const CountContext = createContext(null);
//eslint-disable-next-line
const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{count, setCount}}>
        {children}
    </CountContext.Provider>
  )
}

const useCount = () => useContext(CountContext)
//eslint-disable-next-line
export { useCount, ContextProvider };