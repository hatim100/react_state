import React, { useState } from 'react'

const TextArea = () => {
    const [text,setText] = useState("");
  return (
    <div>
      <textarea 
      value={text} 
      onChange={e => setText(e.target.value)} 
      placeholder="write something"/>
      <p>You typed: {text}</p>
    </div>
  )
}

export default TextArea
