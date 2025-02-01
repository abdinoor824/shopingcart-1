import React, { createContext, useContext } from 'react'
import CartProduct from "./CartProduct"
import { CartContext } from './ContextProvider'
import { TotalItem, TotalPrice } from './ContextReducer'
import { Link } from 'react-router-dom'
import Products from './products'




const Cart = () => {
    const {cart} = useContext(CartContext)
  return (
    <div className='md:grid md:grid-cols-2 '>
      <div className='  my-20 overflow-hidden font-medium '>
      {cart.map(p => (
        <CartProduct  key={p.id} product={p} />
      ))}
    </div>
    <div className=' mt-20  '>
    <div className=' flex justify-end sm:rounded-2xl mb-3 my-4'>
            {cart.length > 0 && (
        <div className='bg-gray-400 h-40  w-100 rounded-2xl' >
            <h4 className='m-3'>total items:{TotalItem(cart)}</h4>
            <h4 className='m-3'>total price:${TotalPrice(cart)}"</h4>
            <div className='flex justify-center'>

            <button className='   rounded-full bg-amber-500 w-40'>check out</button>
            </div>
        </div>
        
        
            )}
      
            
    </div>
    </div>
   
    </div>
  )
}

export default Cart
