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
              An inquisitive and highly motivated full stack web developer with specialization in MERN stack. Have relevant hands-on experience in building multiple websites from scratch. Seeking to pursue a career in a challenging environment to hone industry skill.
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
      <div className='w-full flex justify-center text-3xl font-bold text-black'>About</div>
      <div className=' w-full h-auto mt-10 md:flex   md:flex-row md:h-5/6'>
        {/* <div className='w-60 h-60 border-2 border-indigo-600 mt-8 ml-12'> */}
        <div className='w-full flex  justify-center md:block md:w-4/12 mb-10 '>
        <img src="https://avatars.githubusercontent.com/u/103061012?s=400&u=8178651e4df3cf4728b69320b49df961f5226d84&v=4" className='w-60 h-60 border  rounded-2xl ' />
        </div>
       {/* </div> */}
       <div style={{position:'relative',width:'80%',height:'100px',paddingRight:'5px'}} className='border border-blue-200 rounded-lg shadow-lg shadow-blue-400'>
        <div className='w-full  p-4 md:w-full font-bold text-md text-slate-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-400' style={{position:'absolute',}}>
            Hi Everyone, I am Golu Choudhary from Bhagalpur, Bihar. I have completed my Higher Secondary Education at Sabour Collage Sabour,Bhagalpur.
            Apart from coding, some other activities that I love to do!
            <Typewriter
              options={{
                strings: ["A Full Stack Developer", "A MERN Stack Developer", "2000+ Hours Of Coding Experience", "Solved aound 300+ DSA question"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          
        </div>
        </div>
      </div>

    </>
  )
}

export default About