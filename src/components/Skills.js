import React from 'react'
import cpp from "../asset/c++.png";
import firebase from "../asset/firebase.png";
import githubw from "../asset/github-white.png";
import githubb from "../asset/github-black.png";
import android from "../asset/android.png";
import html from "../asset/html.png";
import java100 from "../asset/java100.png";
import MERN from "../asset/MERN-logo.png";
import mongo from "../asset/mongo.png";
import express from "../asset/express.png";
import mern3 from "../asset/mern3.png";
import javascript from "../asset/javascript.png";
import nodejs from "../asset/nodejs.png";
import react from "../asset/react.png";
import tailwindcss from "../asset/tailwindcss.png";
import xml from "../asset/xml.png";
import css from "../asset/css.png";

function Skills() {

    const tech = [
        {
            id:1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500',
        },
        {
            id:2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500',
          
        },
        {
            id:3,
            src: xml,
            title: "XML",
            style: 'shadow-amber-600',
            
        },
        {
            id:4,
            src: javascript,
            title: "JavaScript",
            style: 'shadow-yellow-500',
        },
          
        {
            id:5,
            src: react,
            title: "React JS",
            style: 'shadow-cyan-500',
        },
        {
            
            id:6,
            src: nodejs,
            title: "Node JS",
            style: 'shadow-lime-500',
            
        },
        {
            id:7,
            src: tailwindcss,
            title: "Tailwind css",
            style: 'shadow-cyan-500',
           
        },
        {
            id:8,
            src: cpp,
            title: "C++",
            style: 'shadow-blue-500',
           
        },
        {
            id:10,
            src: java100,
            title: "Java",
            style: 'shadow-orange-500',
            
        },
        {
            id:11,
            src: firebase,
            title: "Firebase",
            style: 'shadow-yellow-500',
        },
        {
            id:12,
            src: android,
            title: "Android",
            style: 'shadow-lime-400',
        
        },
        {
            id:13,
            src: mongo,
            title: "Mongo DB",
            style: 'shadow-green-500',
        
        },
        {
            id:14,
            src: express,
            title: "Express JS",
            style: 'shadow-gray-400',
        
        },


    ]

  return (
    <div name= "Skills" id="skills"
    className="bg-gradient-to-b from-gray-900 to-black w-full h-screen-lg pb-36 pt-28"
    >
        
        <div className="max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-1 inline">
                    Skills
                </p>
                <p className="py-6">These are the technologies I have work with</p>
            </div>

            <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-8 text-center py-8 px-12 ">
           
            {/* <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
            <img src={mern3} className="w-40 h-25 mx-auto "/>
            <p className="mt-4">MERN STACK</p>
            </div> */}

                {
                tech.map(({id,src,title,style}) => (
                <div 
                key={id} 
                className={` shadow-lg hover:scale-105 duration-500 py-2 mb-8 rounded-lg ${style}`}
                data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1500"
                >

                        <img src={src} className="w-15 h-10 mx-auto"/>
                        <p className="mt-4">{title}</p>
                        </div>

                    ))} 
            </div>
        </div>
    </div>
  );
};
              
export default Skills;