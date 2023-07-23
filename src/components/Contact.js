import React from 'react'
import Typewriter from "typewriter-effect";
import Lottie from 'lottie-react';
import chat from '../chat.json'
import {BiMessage} from 'react-icons/bi'
import {IoMdCall} from 'react-icons/io'

function Contact() {
  return (
    <>
       <div className='w-full text-xl font-extrabold flex flex-col items-center mt-8 text-blue-600'>
       <div className='flex'><BiMessage/>goluchoudhary7808@gmail.com</div>
       <div className='flex'><IoMdCall/>+917667798932</div></div>
      <div className='w-full h-auto flex  justify-center mb-8 mt-8 '>
      <div className='w-11/12  mb-6  shadow-lg  shadow-black rounded-xl flex flex-col justify-center sm:flex sm:flex-row'>
        <div className='w-full  text bg-yellow-300  md:w-full flex justify-center items-center rounded-t-xl  sm:rounded-s-xl'>
          <div className='w-72 h-72' > <Lottie animationData={chat} autoplay loop /></div>
        </div>  
        
        <div className='w-full flex flex-col py-4 justify-center items-center '>
            <input className="border-2   w-72 mb-6 rounded-lg pl-2 text-lg placeholder:font-bold  focus:outline-none  focus:border-sky-800" placeholder='Name' />
            <input className="border-2 w-72  mb-6 rounded-lg pl-2 placeholder:text-font text-lg placeholder:font-bold focus:outline-none  focus:border-sky-800" placeholder='Email' />
            <textarea className="border-2 w-72 h-24  mb-8 rounded-lg pl-2 placeholder:font-bold focus:outline-none  focus:border-sky-800" name='Message' placeholder="Message" />
            <button className='w-24 h-10 bg-sky-800  border-2 border-gray- rounded-lg text-white font-semibold focus:outline-none hover:bg-blue-400  transform transition-transform hover:scale-110     '>Submit</button>
            </div>
      </div>
      </div>

      <div className='bg-gray-400 h-12 text-lg font-bold flex justify-center items-center text-black'>Made By Golu choudhary</div>
    </>

  )
}

export default Contact