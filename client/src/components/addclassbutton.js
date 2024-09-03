import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
function AddClassButton({onClick}) {
  return (
    <div className='flex justify-start w-full items-center'>
      <button onClick={onClick} className='bg-green-700 rounded-md px-6 text-white py-2 text-2xl flex w-70 justify-center items-center gap-2 ease-out transition-all duration-300 hover:scale-110'>Add Class <PlusIcon className='h-7 w-7' /> </button>
    </div>
  )
}

export default AddClassButton;