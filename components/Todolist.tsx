import { useState } from 'react'

export const Todolist = () => {
  const [todos, setTodos] = useState(['buy bananas', 'finish todolist'])

  return <div className="m-2"><ul className="p-4 border rounded-md border-gray-500 divide-y">{todos.map((item, idx) =>
    <li className="py-4"><label><input onClick={() => {
      todos.splice(idx, 1);
      setTodos([...todos])} }type="checkbox" />{' '}{item}</label></li>
  )}</ul><div className="flex justify-end"><button onClick={() => setTodos([...todos, ' '])} className="btn btn-primary mt-2">Add item</button></div></div>
}
