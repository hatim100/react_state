import React from 'react'

const FormSibling = ({user, setUser}) => {

    const handleChange = (e) => {
      setUser(prev => ({
        ...prev,
        [e.target.name] : e.target.value
      }))
    }
  return (
    <div>
        <h3>Form</h3>
        <input
        name="name"
        placeholder="Enter name" 
        value={user.name}
        onChange={handleChange}
        />
        <input
        name="email"
        placeholder="Enter email"
        value={user.email}
        onChange={handleChange}
        />
    </div>
  )
}

export default FormSibling
