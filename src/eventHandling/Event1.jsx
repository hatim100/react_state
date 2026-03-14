import React from 'react'

const Event1 = () => {
    const handleClick = (e) => {
        console.log(e)
        alert("I was clicked!")
      }
      const handleMouse = () => {
        console.log("Hovered Satyajit")
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form was submitted",e)
      }
      const handleUserNameChanged = (e) => {
        const username = e.target.value;
        console.log(username)
      }
      return (
        <>
          <div>
             {/* <button onClick={handleClick} onMouseMove={handleMouse}>Click Me</button> */}
             <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="username" onChange={handleUserNameChanged}/>
    
              <label htmlFor="password">Password</label>
              <input id="password" type="text" name="password"/>
    
              <button onClick={() => alert("Form Submitted")}>Submit</button>
             </form>
          </div>
        </>
      )
}

export default Event1
