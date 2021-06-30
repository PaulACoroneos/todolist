import { useState } from 'react'

export const Todolist = () => {
  const [todos, setTodos] = useState(['buy bananas', 'finish todolist'])

  if (!todos.length) return <div className="m-auto my-8 mx-2 text-2xl">Great job finishing your todos! 🥳 Click to add some more.<div className="flex justify-end"><button onClick={() => setTodos([...todos, ' '])} className="btn btn-primary mt-2">Add item</button></div></div>

    return <div className="mx-2 my-8"><ul className="p-4 border rounded-md border-gray-500 divide-y">{todos.map((item, idx) =>
      <li className="flex content-center py-4 text-xl"><label><input onClick={() => {
        todos.splice(idx, 1);
        setTodos([...todos])
      }} type="checkbox" />{' '}{item}</label></li>
    )}</ul><div className="flex justify-end"><button onClick={() => setTodos([...todos, ' '])} className="btn btn-primary mt-2">Add item</button></div></div>
}
