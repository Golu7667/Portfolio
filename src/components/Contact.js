import React from 'react'
import Typewriter from "typewriter-effect";
import Lottie from 'lottie-react';
import chat from '../chat.json'
function Contact() {
  return (
    <>
    
      <div className='w-full h-96 flex justify-center mb-8 mt-8'>
      <div className=' w-8/12 h-96  mb-6  shadow-lg  shadow-black rounded-xl flex justify-center '>
        <div className='w-1/2 h-96  text bg-yellow-300 rounded-s-xl flex justify-center items-center'>
          <div className='w-72 h-72' > <Lottie animationData={chat} autoplay loop /></div>
        </div> 
        <div className='w-1/2 h-96 flex flex-col items-center justify-center  '>
        <form >
        <div className='flex flex-col'>
            <input className="border-2   w-72 mb-6 rounded-lg pl-2 text-lg placeholder:font-bold  focus:outline-none  focus:border-sky-800" placeholder='Name' />
            <input className="border-2 w-72  mb-6 rounded-lg pl-2 placeholder:text-font text-lg placeholder:font-bold focus:outline-none  focus:border-sky-800" placeholder='Email' />
            <textarea className="border-2 w-72 h-24  mb-8 rounded-lg pl-2 placeholder:font-bold focus:outline-none  focus:border-sky-800" name='Message' placeholder="Message" />
            <button className='w-24 h-10 bg-sky-800  border-2 border-gray- rounded-lg text-white font-semibold'>Submit</button>
            </div>
        </form>
        </div>
      </div>
      </div>
      <div className='bg-yellow-900 h-12 text-3xl font-bold flex justify-center items-center text-white'>Golu choudhary</div>
    </>

  )
}

export default Contact