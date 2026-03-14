import React, { useState } from 'react'

const CountryPicker = () => {
    const [country,setCountry] = useState();
  return (
   <select 
   value={country}
    onChange={e => {
    console.log("VALUE:", e.target.value); 
    setCountry(e.target.value);}}>
        <option value="">Choose country</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
   </select>
  )
}

export default CountryPicker
