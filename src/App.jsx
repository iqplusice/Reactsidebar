import React, { useState } from 'react'

const App = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex'>
      <div className={`${open ? "w-72" : "w-20" } duration-300 h-screen bg-dark-purple relative`}>
        <img 
          src="./src/assets/control.png" 
          className={`absolute cursor-pointer bg-white rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className='flex gap-x-4 items-center'>
          <img 
            src="./src/assets/logo.png" 
            className={`cursor-pointer duration-500 w-10 h-10`}
          />
          <h1 className={`text-white origin-left font-medium text-xl duration-300`}>Designer</h1>
        </div>
      </div>
      <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default App