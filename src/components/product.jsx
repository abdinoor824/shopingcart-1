import React, { useContext } from "react";
import { CartContext } from "./ContextProvider";
import Cart from "./cart";


const Product = ({ product }) => {
  const{dispatch } = useContext(CartContext)
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
          <button onClick={()=>dispatch({type:"Add",product:product})} className="mx-1 cursor-pointer  bg-blue-500 rounded-xl  w-24 block m-3  border-none ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
