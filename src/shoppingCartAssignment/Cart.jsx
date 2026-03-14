import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
      <h3>Cart</h3>
      {cart.map(item => (
        <p key={item.id}>
            {item.name} x {item.quantity} = ₹{item.price * item.quantity} 
        </p>
      ))}
    </div>
  )
}

export default Cart
