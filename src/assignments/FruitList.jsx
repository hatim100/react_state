import React from 'react'
import FruitButton from './FruitButton'

const FruitList = () => {
  return (
    <div>
      <ul>
        <FruitButton name = {"Mango"} number = {1}/>
        <FruitButton name = {"Orange"} number = {2}/>
        <FruitButton name = {"Jackfruit"} number = {3}/>
        <FruitButton name = {"Kiwi"} number = {4}/>
        <FruitButton name = {"Chiku"} number = {5}/>
        <FruitButton name = {"Pomgranate"} number = {6}/>
      </ul>
    </div>
  )
}

export default FruitList
