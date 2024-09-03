import React,{useContext} from 'react'
import { UsersIcon, ClockIcon ,BookOpenIcon ,RectangleStackIcon} from '@heroicons/react/24/solid'
import { GlobalContext } from '../context/GlobalWrapper';
function CardHome() {
  const { totalClasses } = useContext(GlobalContext);
  
  const Cards = [
    { title: "Classes number", icon: <UsersIcon className="w-12 h-12" /> , value: totalClasses  },
    { title: "Total Lessons", icon: <BookOpenIcon className="w-12 h-12" /> ,value: 15 },
    { title: "Tests Taken", icon: <RectangleStackIcon className="w-12 h-12" />,value: 8 },
    { title: "Total Hours  ", icon: <ClockIcon  className="w-12 h-12" />,value: 50  },
    
  ];

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full '>
    {Cards.map((card,index)=> (
      <a href="#" className="block rounded-lg p-4 shadow-lg shadow-blue-100 flex-grow  ">
        <div className="mt-2 flex flex-col justify-center items-center p-6 ">
          {card.icon}
          <h2 className="font-extrabold text-2xl  p-6">{card.title}</h2>
          <h2 className="font-extrabold text-2xl  text-green-800 ">{card.value}</h2>
        </div>
      </a>
    
    
    ))}
      
      
    </div>
  )
}

export default CardHome;