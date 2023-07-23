import React from 'react'
import { SiVisualstudiocode, SiPostman , SiCodesandbox , SiNetlify ,SiVercel } from "react-icons/si";
import { VscGithub  } from "react-icons/vsc";

function Tools() {
  return (<>
         <div className=' font-bold flex flex-col items-center'>
         <div className='text-lg text-blue-600'>Tools</div>
         <div className='w-16 h-16 shadow-2xl shadow-green-900 rounded-xl '>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="tools"><path d="M3.135 6.89c.933-.725 1.707-.225 2.74.971.116.135.272-.023.361-.1.088-.078 1.451-1.305 1.518-1.361.066-.059.146-.169.041-.292a36.238 36.238 0 0 1-.743-.951c-1.808-2.365 4.946-3.969 3.909-3.994-.528-.014-2.646-.039-2.963-.004-1.283.135-2.894 1.334-3.705 1.893-1.061.726-1.457 1.152-1.522 1.211-.3.262-.048.867-.592 1.344-.575.503-.934.122-1.267.414-.165.146-.627.492-.759.607-.133.117-.157.314-.021.471 0 0 1.264 1.396 1.37 1.52.105.122.391.228.567.071.177-.156.632-.553.708-.623.078-.066-.05-.861.358-1.177zm5.708.517c-.12-.139-.269-.143-.397-.029L7.012 8.63a.289.289 0 0 0-.027.4l8.294 9.439c.194.223.53.246.751.053l.97-.813a.54.54 0 0 0 .052-.758L8.843 7.407zM19.902 3.39c-.074-.494-.33-.391-.463-.182-.133.211-.721 1.102-.963 1.506-.24.4-.832 1.191-1.934.41-1.148-.811-.749-1.377-.549-1.758.201-.383.818-1.457.907-1.59.089-.135-.015-.527-.371-.363-.357.164-2.523 1.025-2.823 2.26-.307 1.256.257 2.379-.85 3.494l-1.343 1.4 1.349 1.566 1.654-1.57c.394-.396 1.236-.781 1.998-.607 1.633.369 2.524-.244 3.061-1.258.482-.906.402-2.814.327-3.308zM2.739 17.053a.538.538 0 0 0 0 .758l.951.93c.208.209.538.121.746-.088l4.907-4.824-1.503-1.714-5.101 4.938z"></path></svg>
         </div>
         </div>
         <div className='my-12   flex gap-6 flex-wrap justify-center'>
      
            
         <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}  >Visualstudiocode</div>

            <SiVisualstudiocode className='h-28 w-28 text-blue-500 border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110 ' />
            </div>
            <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}  >Codesandbox</div>
            <SiCodesandbox className='h-28 w-28 text-black border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900  transform transition-transform hover:scale-110'  />
            </div>
            <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}  >Postman</div>
            <SiPostman className='h-28 w-28 text-red-500 border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110 '/>
           </div>
            <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}  >Github </div>
            <VscGithub    className='h-28 w-28 text-black border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110' /> 
           </div>
            
           
           <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}  >Netlify</div>
            <SiNetlify className='h-28 w-28 text-green-500 border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900  transform transition-transform hover:scale-110' />
           </div>
           <div className='h-32 w-32 flex flex-col justify-center items-center'>
         <div className='text-md text-green-500 font-bold' style={{ fontFamily: 'serif' }}  >Vercel</div>
            <SiVercel  className='h-28 w-28 text-black-500 border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110'/>
           </div>
          
        
         </div>
  </>
    

  )
}

export default Tools