import React, { useState } from 'react'
import ProductList from './ProductList';
import Cart from './Cart';
import CartTotal from './CartTotal';

const Shop = () => {

    const [cart,setCart] = useState([])
    const products = [
        {id: 1, name: "Laptop", price: 50000, quantity: 1 },
        {id: 2, name: "Phone", price: 20000, quantity: 1},
        {id: 3, name: "Headphones", price: 3000, quantity: 1}
    ];
    const addToCart = (product) => {
        setCart(prev => 
      { const existing = prev.find(item => item.id === product.id);
      if(existing){
        return prev.map(item => 
            item.id === product.id? {...item, quantity: item.quantity + 1}:item);
      };
    return [...prev,{...product,quantity:1}]})}
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ProductList products={products} addToCart={addToCart}/>
      <Cart cart={cart}/>
      <CartTotal cart={cart}/>
    </div>
  )
}

export default Shop
