import React, { useState } from 'react'
import FormSibling from './FormSibling';
import DisplaySibling from './displaySibling';

const Parent = () => {
    const [user,setUser] = useState({
        name: "",
        email: ""
    });
  return (
    <div>
       <h2>Sibling Communication Example</h2>
       <FormSibling user={user} setUser={setUser}/>
       <DisplaySibling user={user}/>
    </div>
  )
}

export default Parent
