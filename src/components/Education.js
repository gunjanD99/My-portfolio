import React from 'react'
import school from "../asset/port/school-icon.png"
import school2 from "../asset/port/education.png"

function Education() {
  return (
    <div name="education" id="education"
    className=" w-full h-screen-lg  pb-32 pt-28 bg-gradient-to-b from-black to-gray-900
     "
    >
       <div className="max-w-screen-lg mx-auto flex flex-col justify-center 
       h-full w-full p-4">
       
       <div className="pb-6">
       <p className=" text-4xl text-white font-bold flex justify-center items-center" 
       data-aos="fade-up" 
       data-aos-duration="2000"
       >EDUCATION</p>
       </div>
            <div className="text-white flex flex-wrap justify-evenly 
             gap-16 px-5  mt-32 lg:flex-row font-semibold lg:text-left"  data-aos="fade-right" 
             data-aos-duration="2000">

            <div className="ml-5 opacity-1 transform:none ">
            <p className="text-xl mt-17 text-cyan-500">G.H. Raisoni College of</p>
            <p className="text-xl text-cyan-500"> Engineering (GHRCE), Nagpur </p>
            <p  className="text-gray-600 mt-1">B-TECH / Bachelor's</p>
            <p className="font-serif">2021 - 2025</p>
            </div>

            <div className=" opacity-1 transform:none ">
            <p className="text-xl mt-17 text-cyan-500 ">
            Shri Mathuradas Mohota 
            </p>
            <p className="text-xl text-cyan-500" >College of Science,Nagpur </p>
            <p  className="text-gray-600 mt-1 font-mono">12th / HSC</p>
            <p className="font-serif">2019 - 2021</p>
            </div>

            <div className=" opacity-1 transform:none ">
            <p className="text-xl mt-17 text-cyan-500">
            Shri Rajendra High School 
            </p>
            <p className="text-gray-600 mt-1 font-mono">10th / SSC</p>
            <p className="font-serif">2018 - 2019</p>
            </div>

          {/* gbfgbfgb/////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            </div>
        </div>
    </div>
  )
}

export default Education