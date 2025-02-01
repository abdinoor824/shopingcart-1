import React, { useState } from 'react';
import Data from '../../Data.json';
import Product from './product';

const Products = () => {
  const [products, setProducts] = useState(Data.products);

  return (
    
   
    
    <div className='grid md:grid-cols-3 my-20 overflow-hidden font-medium '>
      {products.map(p => (
        <Product key={p.id} product={p} />
      ))}
    </div>
   
  );
};

export default Products;
