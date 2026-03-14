import React, { useState } from 'react'

const StepOne = ({onNext}) => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
  return (
    <div>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={() => onNext({name,email})}>
        Next
      </button>
    </div>
  )
}

export default StepOne
