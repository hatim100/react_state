import React from 'react'

const CartTotal = ({cart}) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div>
      <h3>Total: ₹{total}</h3>
    </div>
  )
}

export default CartTotal
