import React, { useState } from 'react'
import StateIntro from './StateIntro'

const Counter = () => {

    const [counter,setCounter] = useState(0);
    
    async function incrementCounter(){
      setCounter(prevCounter => prevCounter+1);

      await new Promise(resolve => setTimeout(resolve,2000));   

      setCounter(prevCounter => prevCounter-1);

      console.log("counter",counter)
    }
    // function DecrementCounter(){
    //     setCounter(counter-1);
    // }

    console.log("Rendered")
  return (
    <div>
     <p>{counter}</p>
     {counter<5 && <button onClick={incrementCounter}>Increase Counter</button>}
     {/* {counter>0 && <button onClick={DecrementCounter}>Decrease Counter</button>} */}
    </div>
  )
}

export default Counter
