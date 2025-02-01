import React, { useContext } from 'react'
import { CartContext } from './ContextProvider'



const CartProduct = ({product}) => {

    const {cart,dispatch} =useContext(CartContext)
    const increase = (id)=>{
  const Index = cart.findIndex(p=>p.id===id)
  if (cart[Index].quantity<10){
    dispatch({type:"increase",id})
  }
    }
    const decrease = (id)=>{
        const Index = cart.findIndex(p=>p.id===id)
        if (cart[Index].quantity>1){
          dispatch({type:"decrease",id})
        }
    }
  return (
    <div className="  ">
      <div className="flex justify-center items-center md:bg-gray-100 m-5 ">
        <img
          className="flex justify-center mx-5 rounded-4xl object-cover w-45"
          src={product.thumbnail}
          alt=""
        />
        <div className=" block">
          <h4 className="m-3 ">{product.title}</h4>
          <h5 className="mx-3 hover:bg-red-500 hover:rounded-full hover:m-3">
            ${product.price}
          </h5>
          <button className='grid grid-cols-3 justify-evenly'>

          <div className=' bg-amber-50 w-30 rounded-2xl'>
            <button className='m-2' onClick={()=>decrease(product.id)}>-</button>
            <button className='m-2' >{product.quantity}</button>
            <button className='m-2'  onClick={()=>increase(product.id)}>+</button>
          </div>
          </button>
          <button onClick={()=>dispatch({type:"remove",id:product.id})} className="mx-1 cursor-pointer  bg-blue-500 rounded-xl  w-20 block m-3  border-none ">
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct