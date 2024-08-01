import React, { useState } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function Navbar() {

    const [nav , setNav] = useState(false);
    
    const arr=[
        {
            id : 1,
            link:"Home",
            path:"#home",
        },
        {
            id : 2,
            link:"About",
            path:"#about",
        },
        {
            id : 3,
            link:"Skills",
            path:"#skills",
        },
        {
            id : 4,
            link:"Education",
            path:"#education",
        },
        {
            id : 5,
            link:"Experience",
            path:"#experience",
        },
    ];

  return (
    <>
    <nav>
    <div className=" flex justify-between items-center px-4 font-medium  w-full h-20 z-10
     bg-black text-cyan-50 fixed" data-aos="fade-down"
     data-aos-duration="2000" >
        <div>
            <h1 className="text-lg ml-2 font-light text-orange-500 ">|| Jay Shri Ram ||</h1>
        </div>

        <ul className=" hidden md:flex ">
            {arr.map(({id,link,path})=>(
                  <li key={id} className="px-4 mr-4 font-medium text-gray-500 hover:cursor-pointer 
                  hover:scale-105 duration-50 hover:text-white">
                    <a href={path} className="nav_items"> {link}</a>
        </li>
            ))}
        </ul>

        <div onClick={()=>setNav(!nav)}

         className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden hover:border-l-white">
            {nav ? <FaTimes fontSize={30}/> : <FaBarsStaggered fontSize={30}/>}            
        </div>

{nav && 
        <div className="flex flex-col justify-center items-center absolute text-5xl top-0 left-0 
                 w-full h-screen bg-gradient-to-b from-black to-gray-800">
                <ul>
                {
                arr.map(({id,link})=>(

                  <li key={id} className=" px-4 text-gray-500 cursor-pointer py-5">

                    {link}
                  </li>
               

                
            ))}
        
                </ul>
            </div>
}
        </div>

        </nav>
        <Outlet />
        </>

  )
}

export default Navbar