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
  

function Skills() {
  return (
    <>
         <div className='flex justify-center text-3xl font-bold'>Skills</div>
         <div className='flex gap-4  flex-wrap'>
        <SiJavascript className='h-36 w-36 border-2 text-red-500 border-red-700 rounded-2xl px-6  shadow-xl shadow-indigo-900   ' />
        
         <SiHtml5 className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900' /> 
         <DiCss3 className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         <FaReact className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         <FaNodeJs  className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         <DiMongodb className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900 ' />
         <SiRedux className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         <SiExpress className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900 ' />
         <SiChakraui className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         <SiChakraui className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         </div>
    </>
    
  )
}

export default Skills