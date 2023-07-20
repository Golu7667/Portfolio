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

function Skills() {
  return (
    <>
         <div className='flex justify-center text-3xl font-bold'>Skills</div>
         <div className='my-12 flex justify-center gap-4 gap-y-12 flex-wrap'>
         <SiHtml5 className='h-28 w-28 bg-gray text-red-500 rounded-2xl px-6 shadow-xl shadow-indigo-900' /> 
         <DiCss3 className='h-28 w-28 text-blue-500 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
        <SiJavascript className='h-28 w-28 text-yellow-300 rounded-2xl px-6  shadow-xl shadow-indigo-900   ' />
         <FaReact className='h-28 w-28 text-blue-500 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         <FaNodeJs  className='h-28 w-28 text-green-500 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         <DiMongodb className='h-28 w-28 text-green-500 rounded-2xl px-6 shadow-xl shadow-indigo-900 ' />
         <SiRedux className='h-28 w-28 text-purple-800 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         <SiExpress className='h-28 w-28 text-blue-500 rounded-2xl px-6 shadow-xl shadow-indigo-900 ' />
         <SiChakraui className='h-28 w-28 text-green-500 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         <SiChakraui className='h-28 w-28 text-blue-500 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         <BiLogoTailwindCss className='h-28 w-28 text-blue-500 rounded-2xl px-6 shadow-xl shadow-indigo-900'/>
         </div>
    </>
    
  )
}

export default Skills