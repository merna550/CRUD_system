import React, { useState , useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalWrapper';

function PopUp() {
  const [className, setClassName] = useState('');
  const navigate = useNavigate();
  const { addClass, handleClosePopup } = useContext(GlobalContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addClass(className); // Call the function to add the class
    navigate('/classes'); // Redirect to the classes table page
  };
  return (
    <div className="flex justify-center items-center p-8 ">
      <div className="relative max-w-xl rounded-lg bg-gray-100 p-6 shadow-sm ">
        <button
          type="button"
          className="absolute -end-1 -top-1 rounded-full border border-gray-200 bg-white p-1 text-gray-400"
          onClick={handleClosePopup}
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img
            alt=""
            src={require('../assets/images/classroom.png')}
            className="h-full w-full rounded-xl "
          />

          <div>
            <h2 className="text-2xl font-medium">
              Create a new Class
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-lg shadow-sm"
                placeholder="Create a class"
                required
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />

              <div className="mt-6 sm:text-right">
                <button
                  type='submit'
                  className="inline-block rounded-lg bg-blue-500 px-7 py-2 text-lg font-medium text-white hover:bg-blue-700 duration-300 transition-all ease-out"
                >
                  Create
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUp;