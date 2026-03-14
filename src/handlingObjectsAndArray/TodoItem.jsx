import React, { useState } from 'react'
import {Check, ChevronUp, Trash2} from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import {SquarePen} from 'lucide-react'
import { X } from 'lucide-react';
import Checkbox from './Checkbox';

const TodoItem = ({item, onTodoToggle, onTodoDelete, onTodoTextUpdate: onTodoTextUpdate, onMoveUp, onMoveDown, index, todoCount}) => {

    const [showEditTodo,setShowEditTodo] = useState(false);

    function handleEditFormSubmitted(e){
       e.preventDefault();
       const todoText = e.target["todo"].value;
       onTodoTextUpdate(item.id, todoText);
       setShowEditTodo(false);
    }

    function getColor(label){
        if (label === "important") return "#d4f8d4";
        if (label === "priority") return "#ffd6d6";
        return "#fff7cc";
    }
    const todoEditForm = (
        <div className="flex justify-between items-center bg-gray-900 px-6 py-4 rounded-lg min-h-20">
          <form className="flex flex-1 gap-6" onSubmit={handleEditFormSubmitted}>
            <input className="flex-1 border-2 border-secondary-text px-4 py-2 rounded-lg font-body" type="text" name="todo" required defaultValue={item.text} />
            <button className="bg-hover"><Check/></button>
            <button className="text-red-400 bg-hover" onClick={() => setShowEditTodo(false)}><X/></button>
          </form>
        </div>
    )


    const todoItemDiv = (
    <div className="flex gap-4 items-stretch hover:bg-gray-700 rounded-lg group">
     <div className="flex flex-col gap-1 h-full justify-center items-center" style={{backgroundColor: getColor(item.label), padding: "10px", borderRadius: "8px", color: "black"}}>
       {<button className="hover:bg-white rounded-md p-1 cursor-pointer" disabled={index==0} onClick={() => onMoveUp(index)}><ChevronUp /></button>}
       <button disabled={index == todoCount-1} onClick={() => onMoveDown(index)}><ChevronDown /></button> 
       </div>
       <div className="flex gap-1 items-center flex-1">
       {/* <input className="size-4" id={item.id} type="checkbox" checked={item.completed} onChange={(e) => onTodoToggle(item.id, e.target.checked)}/> */}
       <Checkbox 
       id={item.id}
       checked={item.completed}
       onChange={(e) => onTodoToggle(item.id, e.target.checked)}
       label={item.text}
         />
      {/* <label 
       style={{textDecoration: item.completed? "line-through":"none"}}
       htmlFor={item.id}>{item.text}</label> */}
       <span
       style={{
        marginLeft: "10px",
        marginRight: "5px",
        fontSize: "12px",
        fontWeight: "bold",
        display: "inline-flex",
        alignItems: "center",
        lineHeight: "1"
       }}>{item.label.toUpperCase()}</span>
       </div>
      <div className="hidden gap-1.5 group-hover:flex">
      <button onClick={() => setShowEditTodo(true)}><SquarePen /></button>
      <button className="text-red-400 p-2" onClick={() => onTodoDelete(item.id)}><Trash2/></button>
      </div>
     </div>
    )

  return (
    <div>
       {showEditTodo ? todoEditForm : todoItemDiv}
    </div>
  )
}

export default TodoItem
