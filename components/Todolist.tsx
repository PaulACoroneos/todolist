import { useState } from 'react'

export const Todolist = () => {
  const [todos, setTodos] = useState(['Welcome to TodoList!', 'Remove items by checking the box to the left.', 'Add items by clicking the add item checkbox.', 'Add items back to your list to previously removed with the undo button.', 'Persistence through login coming soon, but for now your data will be saved in localstorage.'])

  const [finishedTodos, setFinishedTodos] = useState<string[]>([]);

  //click handlers
  const handleAddingBlankTodo = () => setTodos([...todos, ' '])
  const handleUndoTodo = () => { const previousTodo = finishedTodos.pop() as string; setTodos([...todos, previousTodo]); setFinishedTodos(finishedTodos) }


  if (!todos.length) {
    return <div className='m-auto my-8 mx-2 text-2xl'>Great job finishing your todos! 🥳 Click to add some more.<div className='flex justify-end'><button onClick={handleAddingBlankTodo} className='btn btn-primary mt-2'>Add item</button></div></div>
  }

  return (
    <div className='mx-2 my-8'>
      <ul className='p-4 border rounded-md border-gray-500 divide-y'>
        {todos.map((item, idx) =>
          <li key={item} className='flex content-center py-4 text-xl'>
            <label>
              <input onClick={() => {
                setFinishedTodos([...finishedTodos, ...todos.splice(idx, 1)]);
                setTodos([...todos])
              }} type='checkbox' className='mr-2' />
              {' '}{item}
            </label>
          </li>
        )}
      </ul>
      <div className='flex justify-end'>
        <button onClick={handleAddingBlankTodo} className='btn btn-primary mt-2 mr-2'>Add item</button>
        {finishedTodos.length ? <button onClick={handleUndoTodo} className='btn btn-secondary mt-2'>Undo last completion</button> : null}
      </div>
    </div>
  )
}
