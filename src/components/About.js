import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import i from '../happy.json'
import Typewriter from "typewriter-effect";
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {BiMessage} from 'react-icons/bi'
import {IoMdCall} from 'react-icons/io'

function About() {
  return (
    <>
      <div className='w-full  h-auto mt-6  flex flex-col-reverse md:flex-row md:h-5/6 '>
        <div className='w-full px-6 md:w-1/2 '>
          <div className='text-5xl font-bold mt-0 text-blue-800 my-6 ' style={{ fontFamily: 'Arvo' }}>Hi, I am Golu Choudhary
            <div className='text-3xl mt-6 ml-6'><Typewriter
              options={{
                strings: ["A Full Stack Developer", "A MERN Stack Developer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            /></div>
          </div>
            <div className='text-lg font-bold px-6 text-black    ' style={{ fontFamily: 'Arvo' }} >
             
Motivated MERN stack web developer with hands-on experience in building websites from scratch. Eager to contribute skills in a challenging environment, driven by curiosity and a passion for coding. Specialized in full-stack development, seeking a career opportunity to further refine industry expertise. Ready to take on new challenges and make meaningful contributions to innovative projects. Dedicated to continuous learning and staying updated with the latest web development trends. Excited about the prospect of bringing creativity and technical proficiency to a dynamic team. Open to new opportunities that allow for professional growth and skill enhancement.
            </div>
           <div className='mt-20 flex gap-12 mb-8'>
              <a href="https://github.com/golu7667">
                <AiFillGithub className='w-12 h-12'/>
              </a>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl">
                <BiMessage className='w-12 h-12 text-yellow-300'/>
              </a>
               <IoMdCall className='w-12 h-12 text-green-500'/>
               <a href="https://www.linkedin.com/in/golu-choudhary-976199253">
               <AiFillLinkedin className='w-12 h-12 text-blue-600'/>
               </a>
           </div>
        </div>
        <div className='w-full md:w-1/2 rounded-full ' >
          <Lottie animationData={i} autoplay loop />
        </div>
      </div>
      <div  style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "bolder",
          fontFamily:'monospace',
          color:'rgb(37 99 235)'
        }}>About</div>
      <div className=' w-full h-auto mt-10 md:flex   md:flex-row md:h-5/6'>
        {/* <div className='w-60 h-60 border-2 border-indigo-600 mt-8 ml-12'> */}
        <div className='w-full flex  justify-center md:block md:w-4/12 mb-10 '>
        <img src="https://avatars.githubusercontent.com/u/103061012?s=400&u=8178651e4df3cf4728b69320b49df961f5226d84&v=4" className='w-60 h-60 border  rounded-2xl ' />
        </div>
       {/* </div> */}
      
        <div className='w-full  p-4 md:w-full font-bold text-lg text-black ' style={{fontFamily:'Arvo'}} >
       Hi , I am Golu Choudhary. Recent graduate venturing into MERN Full Stack Development with a keen passion for crafting user-friendly projects. Having successfully built 28 projects, my focus lies on ensuring responsiveness, accessibility, SEO, and optimal performance. Specializing in transforming websites into Progressive Web Apps (PWAs) for both mobile and desktop platforms. I am driven by the goal of infusing creativity and honed skills into a collaborative team. My objective is to contribute to the creation of seamless, accessible, and innovative digital experiences. Committed to maintaining a balance between aesthetics and functionality, I bring a fresh perspective to web development. Eager to embark on new challenges, I aim to further develop my skills and make meaningful contributions in a dynamic professional environment.
            <span style={{color:'green'}}>
            <Typewriter
              options={{
                strings: ["A Full Stack Developer", "A MERN Stack Developer",],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </span>
        </div>
        
      </div>

    </>
  )
}

export default About