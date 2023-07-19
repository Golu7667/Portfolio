import React from 'react'
import { SiVisualstudiocode, SiPostman , SiCodesandbox , SiNetlify ,SiVercel } from "react-icons/si";
import { VscGithub  } from "react-icons/vsc";

function Tools() {
  return (<>
         <div className='text-3xl font-bold flex justify-center'>Tools</div>
         <div className='border-2 border-indigo-800 w-full h-96 flex gap-6 flex-wrap justify-center'>
      
            <VscGithub    className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900' /> 
         
            <SiVisualstudiocode className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
         
            <SiPostman className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900'/>
            
            <SiCodesandbox className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900'  />
           
            <SiNetlify className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900' />
           
            <SiVercel  className='h-36 w-36 border-2 text-blue-500 border-red-700 rounded-2xl px-6 shadow-xl shadow-indigo-900'/>
           
          
        
         </div>
  </>
    

  )
}

export default Tools