import React from 'react'
import CardHome from '../components/card-home';

function Dashboard() {
  return (

    <div className='flex h-screen'>
      <div className='mt-28 flex-grow p-5 ml-[200px]'>
        <CardHome />
      </div>
    </div>

  )
}

export default Dashboard;