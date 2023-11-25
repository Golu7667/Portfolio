import React from 'react'
import {
    SiRedux,
    SiHtml5,
    SiMaterialui,
    SiExpress,
    SiChakraui,
    SiTailwindcss,
  } from "react-icons/si"; 
  import { FaReact, FaNodeJs } from "react-icons/fa";
  import { DiCss3, DiMongodb } from "react-icons/di";
  import { SiJavascript } from "react-icons/si";
  import { BiLogoTailwindCss } from "react-icons/bi";
import skill from '../skill.png'

function Skills() {
  return (
    <>
         <div className='mt-20 flex flex-col items-center  font-bold'>
         <div  style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "bolder",
          fontFamily:'monospace',
          color:'rgb(37 99 235)'
        }}>Skills</div>
        
         </div>
         <div className='my-12 flex justify-center gap-4 gap-y-12 flex-wrap  '>
         <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}  >Html</div>
         <SiHtml5 className='h-28  w-28 bg-gray text-red-500 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110'/>
         
         </div>
         <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold'  style={{ fontFamily: 'serif' }}>Css</div>
         <DiCss3 className='h-28 w-28 text-blue-500 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110' />
         </div>
         <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}>Javascript</div> 
        <SiJavascript className='h-28 w-28 text-yellow-300 rounded-2xl px-6  shadow-xl shadow-indigo-900  transform transition-transform hover:scale-110 ' />
        </div>
        <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}>React</div>
         <FaReact className='h-28 w-28 text-blue-500 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110' />
         </div>
         <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}>NodeJs </div>
         <FaNodeJs  className='h-28 w-28 text-green-500 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110' />
         </div>
         <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}>Mongodb</div>
         <DiMongodb className='h-28 w-28 text-green-500 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110' />
         </div>
         <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}>Redux</div>
         <SiRedux className='h-28 w-28 text-purple-800 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110 ' />
         </div>
         <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}>Express</div>
         <SiExpress className='h-28 w-28 text-blue-500 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110' />
         </div>
         <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}>Chakraui</div>
         <SiChakraui className='h-28 w-28 text-green-500 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110' />
         </div>
         <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}>Chakraui</div>
         <SiChakraui className='h-28 w-28 text-blue-500 rounded-2xl px-6 shadow-xl shadow-indigo-900  transform transition-transform hover:scale-110' />
         </div>
         <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}>TailwindCss</div>
         <BiLogoTailwindCss className='h-28 w-28 text-blue-500 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110'/>
         </div>
         </div>
    </>
    
  )
}

export default Skills