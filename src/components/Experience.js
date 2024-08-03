import React from "react";
import { FaLink } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

function Experience() {
  return (
    <div
      name="experience"
      id="experience"
      className=" w-full h-screen-lg  pt-32 pb-20  bg-gradient-to-b from-gray-900 to-gray-900
     flex flex-col justify-center items-center"
    >
      <div
        className="text-white font-bold text-4xl"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        Work Experience
      </div>

      <div
        className="flex flex-col justify-center items-center mt-32 text-left"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="mb-8 w-full">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-cyan-500">
              Backend Web Developer
            </h2>
            <a
              href="https://www.remostarts.com"
              className="text-cyan-600 flex items-center gap-2"
            >
              <p>Remostarts</p>
              <FaLink />
            </a>
            <div className="flex text-gray-500">
              <p>July 2024</p>
              <p className="px-4">-</p>
              <p>Present</p>
            </div>
            <p className="text-gray-500 font-serif">6 Month</p>
            <div className="text-gray-500 flex items-center">
              <FaLocationArrow size={20} />
              <p className="ml-1 font-serif mb-2 ">Legos, Nigeria - (Remote)</p>
            </div>
            <ul className="text-gray-500 ">
              <li className="flex items-center">
                <GoDotFill size={10} className="mr-2" />Developed and maintained server-side logic using Node.js and Express, 
                contributing to the overall functionality and scalability of web applications.
              </li>
              <li className="flex items-center">
                <GoDotFill size={10} className="mr-2" /> Designed and implemented database schemas with MongoDB, 
                ensuring efficient data storage and retrieval.
              </li>
              <li className="flex items-center">
                <GoDotFill size={10} className="mr-2" /> Collaborated with front-end developers to ensure seamless 
                integration of backend services with user interfaces.
              </li>
              <li className="flex items-center">
                <GoDotFill size={10} className="mr-2" /> Optimized database queries and performed data migrations, 
                resulting in improved application performance and efficiency.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////// */}

      {/* ////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}

export default Experience;
