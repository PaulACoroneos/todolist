import React, { FormEventHandler, useState } from 'react'

export const Todolist = () => {
  const [todos, setTodos] = useState(['Welcome to TodoList!', 'Remove items by checking the box to the left.', 'Add items by clicking the add item checkbox.', 'Add items back to your list to previously removed with the undo button.', 'Persistence through login coming soon, but for now your data will be saved in localstorage.'])

  const [newTodo, setNewTodo] = useState('');
  const [finishedTodos, setFinishedTodos] = useState<string[]>([]);

  //click handlers
  const handleAddingTodo = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setTodos([...todos, newTodo])
    setNewTodo('');
  }

  const handleUndoTodo = () => { const previousTodo = finishedTodos.pop() as string; setTodos([...todos, previousTodo]); setFinishedTodos(finishedTodos) }

  const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event?.currentTarget.value);
  }

  if (!todos.length) {
    return <div className='m-auto my-8 mx-2 text-2xl'>Great job finishing your todos! 🥳 Click to add some more.</div>
  }

  return (
    <div className='mx-2 my-8'>
      <ul className='p-4 border rounded-md border-gray-500 divide-y'>
        {todos.map((item, idx) =>
          <li key={item} className='py-4 text-xl'>
            <label className="flex justify-between items-center flex-grow-0">
              <div>
                <input onClick={() => {
                  setFinishedTodos([...finishedTodos, ...todos.splice(idx, 1)]);
                  setTodos([...todos])
                }} type='checkbox' className='mr-2' />
                {' '}{item}
              </div>
              <button className="btn btn-secondary ml-2">Edit</button>
            </label>
          </li>
        )}
      </ul>
      <div className='w-full pt-2'>
        <form onSubmit={handleAddingTodo}>
          <input type="text" value={newTodo} onChange={handleNewTodoChange} className="w-full text-xl p-2" />
          <input type="submit" className='btn btn-primary mt-2 mr-2' value="Add item" />
          {finishedTodos.length ? <button onClick={handleUndoTodo} className='btn btn-secondary mt-2'>Undo last completion</button> : null}
        </form>
      </div>
    </div>
  )
}
