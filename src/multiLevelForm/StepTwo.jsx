import React, { useState } from 'react'

const StepTwo = ({onNext}) => {
  
  const[address,setAddress] = useState("");

  return (
    <div>
      <input placeholder="Address" onChange={e => setAddress(e.target.value)} />
      <button onClick={e => onNext({address})}>
        Next
      </button>
    </div>
  )
}

export default StepTwo
