import React, { useState } from 'react'
import Counter from './Counter'

const StateIntro = () => {

    const [showCounter, setShowCounter] = useState(true);
  return (
    <div>
      {showCounter && <Counter/>}
      <button onClick={() => setShowCounter(!showCounter)}>Toggle Counter</button>
    </div>
  )
}

export default StateIntro
