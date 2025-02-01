import React, { Children, useReducer } from 'react'
import { createContext } from 'react'
import CartReducer from './ContextReducer';
export const CartContext = createContext();


const ContextProvider = ({children}) => {

    const [cart, dispatch] = useReducer(CartReducer,[])
  return (
    <div>
  <CartContext.Provider value={{cart,dispatch}}>
    {children}
  </CartContext.Provider>

    </div>
  )
}

export default ContextProvider