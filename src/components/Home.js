import React, { useEffect, useRef } from "react";
import myimg from "../asset/myimg.jpg";
import myimg2 from "../asset/snap-2.png";
import { BsPersonVcard } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import Typed from "typed.js";

import { TbFileDownload } from "react-icons/tb";
import { render } from "@testing-library/react";

function Home() {
  // const typedRef = useRef(null);
  // useEffect(() => {
  //   const options = {
  //     strings: [
  //       "Welcome to my profile",
  //       "I'm full stack developer",
  //       "Android Developer",
  //     ],
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     backDelay: 400,
  //     // startDelay: 300,
  //     cursorChar: '',
  //     loop: true,
  //   };

  //   const typed = new Typed(typedRef.current, options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
   
  return (
    <div
      name="home" id="home"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 pb-20 "
    >
      <div
        className="flex flex-col items-center justify-center px-4 h-full w-full 
        mx:auto md:flex-row "
      >
        <div className="flex flex-col justify-center h-full mt-10" >

          <div className="sm:text-4xl font-bold text-4xl text-white">
          {/* <p  ref={typedRef} ></p> */}
          <h2 className="text-7xl text-white opacity: 1; transform: none" data-aos="fade-up" 
          data-aos-duration="1500"  >Gunjan Dhoke</h2>
          </div>
          <h2 className="text-gray-400 font-bold text-3xl mt-7 opacity: 1; transform: none" data-aos="fade-up" 
          data-aos-duration="2000" > MERN STACK Developer </h2>



          <p className="py-6 text-gray-500 max-w-md opacity: 1; transform: none" data-aos="fade-up"
           data-aos-duration="3000" >
             
            Highly motivated Software Engineer with a strong foundation in computer science principles 
            and hands-on experience through academic projects and internships. 
            <br/>
            Proficient in multiple programming languages, including Java, Kotlin, and C++, and skilled in software development, 
             debugging, and testing. 
             <br/>
             Demonstrates excellent problem-solving abilities, a keen eye for detail, and a commitment 
             to continuous learning and professional growth. Ready to contribute to dynamic teams and innovative projects in a 
             fast-paced environment.
             <br/>
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
            <button class="mt-4 animate-bounce focus:animate-bounce relative inline-flex items-center 
            justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 
            rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400
             hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
             >

              <span class="  group relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 
              rounded-md group-hover:bg-opacity-0"  >
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
        <div className="opacity: 0; transform: none " 
        data-aos="flip-left" data-aos-easing="ease-out-cubic"
         data-aos-duration="2000">
          <img
            src={myimg}
            className=" rounded-full mx-auto  w-2/3  md:w-80  p-5 ml-6 mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
