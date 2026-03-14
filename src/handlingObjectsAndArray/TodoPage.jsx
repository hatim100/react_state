import React, { useState } from 'react'

const TodoPage = () => {

    const [person,setPerson] = useState({
        name:"Satyajit",
        age: 0,
    })

    function handleIncreaseAge() {
        setPerson((person) => ({...person,age: person.age+1}));
    }

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </div>
  )
}

export default TodoPage
