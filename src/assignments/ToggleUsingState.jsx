import { useState } from "react";

import React from 'react'

const ToggleUsingState = () => {

    const toggle = () => {
        const [dark,setDark] = useState(false);
        document.body.classList.toggle("dark")
    }
  return (
   <button onClick={toggle}>Toggle</button>
  )
}

export default ToggleUsingState
