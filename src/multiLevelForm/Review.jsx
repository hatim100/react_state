import React from 'react'

const Review = ({data}) => {
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Address: {data.address}</p>
    </div>
  )
}

export default Review
