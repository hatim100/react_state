import React from 'react'
import {Check} from 'lucide-react'

const Checkbox = ({label,checked,onChange,id}) => {
  return (
   <label className="flex gap-4 items-center justify-center">
    <input id={id} 
    type="checkbox" 
    className="hidden"
    onChange={onChange} 
    checked={checked}/>
    <div className={`shrink-0 size-6 flex items-center justify-center border-2 border-gray-400 rounded-md transition ${checked? "bg-accent border-none":"bg-transparent"}`}>
        {checked && <Check className="text-black size-4"/>}
    </div>
    <span
    className={`flex w-full ${checked ? "line-through text-secondary-text" : "text-white"}`}>
   {label}</span>
   </label>
  )
}

export default Checkbox
