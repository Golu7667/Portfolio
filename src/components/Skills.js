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
  

function skills() {
  return (
    <>
         <div className='flex justify-center text-3xl font-bold'>Skills</div>
         <div className='flex gap-4  flex-wrap'>
         <SiJavascript className='h-44 w-44 border-2 text-blue-500 border-red-700 rounded-2xl px-6' />
         <SiHtml5 className='h-44 w-44 border-2 text-blue-500 border-red-700 rounded-2xl px-6' /> 
         <DiCss3 className='h-44 w-44 border-2 text-blue-500 border-red-700 rounded-2xl px-6' />
         <FaReact className='h-44 w-44 border-2 text-blue-500 border-red-700 rounded-2xl px-6' />
         <FaNodeJs  className='h-44 w-44 border-2 text-blue-500 border-red-700 rounded-2xl px-6' />
         <DiMongodb className='h-44 w-44 border-2 text-blue-500 border-red-700 rounded-2xl px-6' />
         <SiRedux className='h-44 w-44 border-2 text-blue-500 border-red-700 rounded-2xl px-6' />
         <SiExpress className='h-44 w-44 border-2 text-blue-500 border-red-700 rounded-2xl px-6' />
         <SiChakraui className='h-44 w-44 border-2 text-blue-500 border-red-700 rounded-2xl px-6' />
         <SiChakraui className='h-44 w-44 border-2 text-blue-500 border-red-700 rounded-2xl px-6' />
         </div>
    </>
    
  )
}

export default skills