import React from 'react'

const ProductList = ({products,addToCart}) => {
  return (
    <div>
      <h3>Products</h3>
     {products.map(product => (
        <div key={product.id}>
         {product.name} - ₹{product.price}
         <button onClick={() => addToCart(product)}>Add</button>
        </div>
     ))}
    </div>
  )
}

export default ProductList
