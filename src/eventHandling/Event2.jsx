import React from 'react'

const ChildA = (props,e) => {
    return (
    <button onClick={(e) => props.satyajit(Math.floor(Math.random()*100),e)}>Click Child A</button>
    )
}

const ChildB = (props) => {
    return (
       <button onClick={() => props.satyajit()}>Click Child B</button>
    )
}

const Event2 = () => {

    const test = (s,e) => {
        alert(`Hi, welcome programmer!,your token number is: ${s}`)
        e.stopPropagation();
    }

    const programming = () => {
        alert("Hello World!");
    }
  return (
    <div onClick={() => alert("Clicked from parent")}>
        <ChildA satyajit = {test}/>
        <ChildB satyajit = {programming}/>
    </div>
  )
}

export default Event2
