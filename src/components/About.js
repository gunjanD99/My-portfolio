import React from 'react'

function About() {
  return (
    <div name="about" id="about"
    className=" w-full h-screen-lg  pt-28 pb-32  bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300"
    >
       <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full w-full p-4" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" 
      data-aos-duration="2000">
       <div className="pb-8" >
       <p className=" text-4xl font-bold inline border-b-4 border-gray-500" >About Me</p>
       </div>

            <p className="text-xl mt-17">
            I am Gunjan Dhoke. I am 21 years old and dedicated individual with a passion for full-stack development. 
            I enjoy the entire process, from conceptualization to actual implementation. 
            I am particularly interested in overcoming challenges that push me beyond my comfort zone. Throughout my journey, 
            I have experience in developing and designed various web pages and android applications.

            </p>
            <br/>

            <p className="text-xl">
            Highly motivated Web Developer & Android Developer with a strong foundation in HTML, CSS, JavaScript, ReactJS, Xml, MongoDB, 
            Android Studio and hands-on experience through academic projects and internships. Skilled in creating 
            responsive and user-friendly Applications, with a keen eye for design and detail. Eager to apply 
            problem-solving skills and a passion for continuous learning to contribute to innovative web development projects. 
            Ready to collaborate with dynamic teams to deliver high-quality digital solutions.
            </p>
        </div>
    </div>
  )
}

export default About