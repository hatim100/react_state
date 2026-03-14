import React from 'react'
import FruitButton from './FruitButton';

const FruitListUsingMap = () => {

    const fruits = ["Mango", "Orange", "Jackfruit", "Kiwi", "Chiku", "Pomegranate"];

  return (
    <div>
      {fruits.map((fruit,index) => <FruitButton key={fruit} name={fruit} number={index+1}/>)}
    </div>
  )
}

export default FruitListUsingMap
