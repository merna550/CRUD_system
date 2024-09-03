import React from "react";
import { HomeIcon, UsersIcon, QuestionMarkCircleIcon, AcademicCapIcon, ArrowRightStartOnRectangleIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";


const SideBar = () => {

  const Menus = [
    { title: "Dashboard", icon: <HomeIcon className="w-6 h-6" />, path: "/" },
    { title: "Classes  ", icon: <BuildingOffice2Icon className="w-6 h-6" />, path: "/classes" },
    { title: "Students", icon: <UsersIcon className="w-6 h-6" />, path: "/students" },
    { title: "Quizzes", icon: <QuestionMarkCircleIcon className="w-6 h-6" />, path: "/quizzes" },
    { title: "Marks  ", icon: <AcademicCapIcon className="w-6 h-6" />, path: "/marks" },
    { title: "Logout  ", icon: <ArrowRightStartOnRectangleIcon className="w-6 h-6" />, path: "/logout" },
  ];

  return (

    <div
      className='fixed h-screen p-7 pt-8 bg-blue-400 top-20 '
    >
      <ul className="pt-28">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 mt-5 cursor-pointer ease-out transition-all duration-300  hover:text-white hover:scale-110 text-xl gap-x-3 lg:text-2xl
              `}
          >
            <Link to={Menu.path} className="flex items-center gap-x-3">
              {Menu.icon}
              <span className='origin-left' >
                {Menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>

  );
};
export default SideBar;