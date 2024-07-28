import React from "react";
import myimg from "../asset/myimg.jpg";
import { BsPersonVcard } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

import { TbFileDownload } from "react-icons/tb";

function Home() {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pt-4 pb-20"
    >
      <div
        className="flex flex-col items-center justify-center px-4 h-full w-full 
        mx:auto md:flex-row "
      >
        <div className="flex flex-col justify-center h-full mt-20">
          <h2 className="sm:text-7xl font-bold text-4xl text-white">
            Gunjan Dhoke
          </h2>
          <h3 className="text-gray-400 font-bold text-3xl mt-5 ">MERN Stack Developer</h3>

          <p className="py-6 text-gray-500 max-w-md">
             
            Highly motivated Software Engineer with a strong foundation in computer science principles 
            and hands-on experience through academic projects and internships. 
            Proficient in multiple
             programming languages, including Java, Kotlin, and C++, and skilled in software development, 
             debugging, and testing. Demonstrates excellent problem-solving abilities, a keen eye for detail, and a commitment 
             to continuous learning and professional growth. Ready to contribute to dynamic teams and innovative projects in a 
             fast-paced environment.
          </p>

          <div>
            {/* <button className="
            //    text-2xl font-bold px-6 py-3 leading-none
            //  text-gray-200 border border-gray-800 rounded-lg focus:outline-none
            //   focus:shadow-outline bg-gradient-to-b
            //    hover:from-indigo-500 from-gray-900 to-black
            // group text-white w-fit bg-sky-400 px-6 py-3 my-2 flex items-center 
            // rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold
            ">
              Resume
              <span className="ml-1 text-2xl">
                <TbFileDownload/>
              </span>
            </button> */}
            <button class=" animate-bounce focus:animate-bounce relative inline-flex items-center 
            justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 
            rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400
             hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
             >

              <span class="  group relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 
              rounded-md group-hover:bg-opacity-0">
                <a href="https://drive.google.com/file/d/1NtxygeWk1nDHG7wd1qwuudp89oOtSSv0/view?usp=drive_link" 
                // download={true}
                // target="_blank"
                // rel="noreferrer"
                //collapse navbar-collapse
                
        
                > <IoMdPerson className=" relative	inline-block mr-1 mb-1" />Resume 
                </a>
              </span>
            
              <span className="ml-1 text-2xl  group-hover:-translate-2 p-2 text-black  ">
                
                <a href="https://drive.google.com/file/d/1NtxygeWk1nDHG7wd1qwuudp89oOtSSv0/view?usp=drive_link"
                ><TbFileDownload /> 
                </a>
              </span>
             
           
            </button>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////// */}
        <div>
          <img
            src={myimg}
            className=" rounded-full mx-auto  w-1/2  md:w-80  p-5 ml-6 mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
