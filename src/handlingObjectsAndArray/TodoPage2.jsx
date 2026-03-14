import React, { useState } from 'react'
import TodoItem from './TodoItem';
import {Plus} from 'lucide-react'
import { Trash2 } from 'lucide-react';
import { Rabbit } from 'lucide-react';

const TodoPage2 = () => {

    const [todos, setTodos] = new useState([]);

    const [search, setSearch] = new useState("");
    const [filter, setFilter] = new useState("all");
    const [label,setLabel] = new useState("general");

    const isTodoEmpty = todos.length === 0;

    function handleFormSubmit(e){
      e.preventDefault();
      const todoText = e.target["satya"].value;
      console.log(todoText);
      if(!todoText.trim()) return;
      e.target.reset();
      let insertAt = 2;
      if(insertAt > todos.length) insertAt = 0;

      setTodos(prev => [
        ...prev.slice(0,insertAt),
        {text: todoText,
        id: crypto.randomUUID(), 
        completed: false,
        label: label
        },
        ...prev.slice(insertAt)
      ]) 
    }
    function onTodoToggle(id,isClicked){
    //  console.log(id,isClicked);
    setTodos(todos.map(item => {
        if(item.id === id){
            return {...item, completed:isClicked}
        }
        return item;
    }))
    }
    function handleSortTodos(){
        setTodos([...todos].sort(compareAndCompleteFn))
    }
    function onTodoDelete(id){
      setTodos(todos.filter(item => item.id != id));
    }
    const compareFn = (a,b) => a.text.localeCompare(b.text);
    const compareAndCompleteFn = (a,b) => {
        if(a.completed !== b.completed)
            return b.completed - a.completed;
        return a.text.localeCompare(b.text);
    }
    const isSortedTodos = todos.every((todo,index,arr) => {
     return index===0 || compareFn(arr[index-1],todo) <= 0;
    })
    function handleDeleteAll(){
        setTodos([]);
    }
    function handleUpdateTodoText(id, todoText){
        if(!todoText.trim()) return;
        setTodos(prev => prev.map(item => (item.id === id) ? {...item, text: todoText} : item));
    }
    function handleTodoMoveUp(index){
        if(index == 0) return;
        const newTodos = [...todos];
        [newTodos[index],newTodos[index-1]] = [newTodos[index-1],newTodos[index]];
        setTodos(newTodos);
       }
    function handleTodoMoveDown(index){
        if(index == todos.length-1) return;
        const newTodos = [...todos];
        [newTodos[index],newTodos[index+1]] = [newTodos[index+1],newTodos[index]];
        setTodos(newTodos);
    }
    const emptyState = <div className="mt-18 flex flex-col gap-4 items-center text-secondary-text">
        <div className="animate-half-spin">
        <Rabbit size={40}/>
        </div>
        <p>Your todo's are empty</p>
    </div>
    const completedTodos = todos.filter(item => item.completed).length;
    const filteredTodos = todos.filter(todo => 
        todo.text.toLowerCase().includes(search.toLowerCase())
    ).filter(todo => {
        if(filter === "completed") return todo.completed;
        if(filter === "incomplete") return !todo.completed;
        return true;// for all
    })
  return (
    <div className="max-w-2xl mx-auto p-10 lg:p-12 space-y-6">
      <h1 className="text-center font-display text-6xl font-bold text-accent">Super Todo</h1>
      <p className="text-lg text-center font-light text-secondary-text italic">Manage your notes with ease!</p>
      <form className="bg-gray-700 px-6 py-4 rounded-lg flex justify-between gap-4"
      onSubmit={handleFormSubmit}>
        <input 
        type="text"
        name="satya"
        placeholder="Enter your Todo here"
        required
        className="flex-1 font-body focus:outline-none"/> 
        <button className="bg-accent p-3 text-black rounded-lg cursor-pointer hover:bg-accent-hover">
          <Plus/>
        </button>
       <input 
        placeholder="🔍 Search todos..." 
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="flex-1 font-body focus:outline-none"/>
      </form>
      <select value={label} onChange={e => setLabel(e.target.value)}>
        <option value="general">🟨 General</option>
        <option value="important">🟩 Important</option>
        <option value="priority">🟥 Priority</option>
      </select>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="all">All Todos</option>
        <option value="completed">Completed Todos</option>
        <option value="incomplete">Incomplete Todos</option>
      </select>
      <div className="flex justify-center gap-6">
      {!isSortedTodos && <button className="px-4 py-2 ring-2 ring-accent hover:bg-accent rounded-lg cursor-pointer hover:text-black" onClick={handleSortTodos}>Sort Todos</button>}
      {!isTodoEmpty && <button className="px-4 py-2 ring-2 ring-red-400 rounded-lg flex gap-2 items-center hover:bg-red-400 hover:text-black cursor-pointer" onClick={handleDeleteAll}>
      <Trash2 /> Delete All</button>}
      </div>
      {!isTodoEmpty && <p>{completedTodos}/{todos.length} Completed</p>}
      {!isTodoEmpty ? (      
        <div>
        <ul className="flex flex-col gap-2">
        {filteredTodos.length === 0 ? 
        (<p>No todos match this filter</p>):
        (filteredTodos.map((item,index) =>
        <li key={item.id}>
        <TodoItem 
        item={item} 
        onTodoToggle={onTodoToggle} 
        onTodoDelete={onTodoDelete} 
        onTodoTextUpdate={handleUpdateTodoText} 
        onMoveUp={handleTodoMoveUp}
        onMoveDown={handleTodoMoveDown}
        index={index}
        todoCount={todos.length}
        />
        </li>
      ))}
        </ul>
      </div>): emptyState}
    </div>
  )
}

export default TodoPage2
