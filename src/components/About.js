import React from 'react'
import img from '../programming.svg'

function About() {
  return (
   
    <div className='w-full mx-auto mt-20  bg-cover bg-center object-cover py-9 h-screen' style={{ backgroundImage: `url(${img})` }}>
    <div className='w-11/12 h-96 scroll flex flex-col mt-0 items-center justify-center mx-auto rounded-lg'>
    <div className='text-4xl font-bold mb-6 text-blue-800'>Hi, I am Golu Choudhary</div>
    <div className='text-md font-bold px-6'>An inquisitive and highly motivated full stack web developer with specialization in MERN stack. Have relevant hands-on experience in building multiple websites from scratch. Seeking to pursue a career in a challenging environment to hone industry skill.</div>
    </div>
  </div>
    
  )
}

export default About