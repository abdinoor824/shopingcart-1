import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from './ContextProvider';


const Navbar = () => {
  const {cart} =useContext(CartContext)
  return (
    <div>
      <div className=' flex justify-around bg-gray-300 h-12 fixed top-0 items-center w-full'>
        <Link to="/" className='text-red-300 '>shop now </Link>
        <div>
        <Link to = "/cart" className='w-20 flex  relative '><AiOutlineShoppingCart  /></Link>
        <div className='absolute top-0 mx-3'> {cart ? cart.length : 0}</div>
        </div>
      
        
      
    </div>
      </div>
    
  )
}

export default Navbar
