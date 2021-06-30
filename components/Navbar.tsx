import { useState } from 'react'

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  const isAuthenticated = false
  return (
    <nav className='flex justify-between'>
      <div className='font-bold text-3xl p-1 text-indigo-500'>
        Todolist
      </div>
      <div className='p-1'>
        {!isAuthenticated
          ? <><button className='btn btn-primary mx-1'>Sign Up</button>
            <button className='btn btn-secondary mx-1'>Login</button></>
          : <><button className='btn btn-secondary mx-1'>Menu</button><button className='btn btn-primary mx-1'>Logout</button></>}
      </div>
    </nav>
  )
}
