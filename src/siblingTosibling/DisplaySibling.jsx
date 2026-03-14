import React from 'react'

const DisplaySibling = ({user}) => {
  return (
    <div>
      <h3>Live Preview</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default DisplaySibling
