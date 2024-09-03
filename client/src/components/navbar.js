import React from 'react'

function Navbar() {
  return (
    <nav className=" mx-auto max-w-screen sm:px-6 lg:px-8 fixed top-0 left-0 m-auto w-full flex-row py-2 px-6 shadow-xl z-30 transition-all duration-300 ease-in-out ">
      <div className='flex h-16 sm:items-center sm:justify-between  sm:gap-3 md:items-center md:justify-between md:gap-3 items-center justify-between gap-3'>
        <div className='flex flex-row'>
          <a className="flex-none font-extrabold text-3xl lg:text-4xl transition-all duration-300 ease-in-out" href="#"><span className='text-blue-800'>E</span>du<span className='text-blue-800'>S</span>ys</a>
        </div>
        <div className='w-auto space-x-2 items-center flex  '>
          <span className='text-xl lg:text-2xl transition-all duration-300 ease-in-out'>Teacher Name</span>
          <img src={require('../assets/images/avatar1.jpg')} alt='Avatar Logo' className=' inline-block h-9 w-9 rounded-full ring-4 lg:h-11 lg:w-11 transition-all duration-300 ease-in-out' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;