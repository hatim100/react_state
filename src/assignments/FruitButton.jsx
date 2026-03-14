import React from 'react'

const FruitButton = (props) => {
    const print = (s) => {
      console.log(s)
    }
  return (
   <button onClick={() => print(props.name)}>Fruit {props.number}</button>
  )
}

export default FruitButton
