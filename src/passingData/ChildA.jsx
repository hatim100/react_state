import React from 'react'

const ChildA = (props) => {

    function handleChildButtonClick(){
       props.handleChildButtonClick();
    }
  return (
    <div>
      <p>Child A Count: {props.count}</p>
      <button onClick={handleChildButtonClick}>Child A Button</button>
    </div>
  )
}

export default ChildA