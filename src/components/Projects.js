import React from 'react'
import {
  SiHtml5,
  SiMaterialui,
  SiChakraui,
  SiExpress,
  SiRedux,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { FaReact, FaNodeJs } from "react-icons/fa";
import stack from '../stack.svg';
import { BiLogoTailwindCss } from "react-icons/bi";
import flipkartimg from '../flipkartimg.png';

function Projects() {
  return (
    <>
      <div className='text-3xl font-bold flex justify-center'>Projects</div>
      <div className=' h-96 border rounded-xl mx-24 flex shadow-lg shadow-stone-300'>
        <div className='w-1/2 h-96 bg-white rounded-s-xl px-4'>
          <img src={flipkartimg} className=' my-2 border-2 border-gray-700 rounded-xl' />
        </div>
        <div className='w-1/2 h-96 flex flex-col'>
          <div className=' h-96 flex flex-col '>
            <div className='flex mt-2 mx-auto gap-2'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAnFBMVEVHcEzy0UDInSPYqizbripqYVHWzHzy20Tq2F3u2VXzwTB3XBrz2D7ery315UnhsS0wcKL15k7y20oAbr4Hb7sHa7b64DH55DD82TEGheP45y8Kg9n63THxxi/4xzHuvC/+yjHlsyz80zLowysEetP/3h7vxBUHecyMp6L450G0qWhxlaQgi9hMkMB3pLTksBbWu1G0uomVnYXXyWSrIjT1AAAAFnRSTlMAcUl4/Q0a9T9Q7B20jsuoXL2GgoFsvBma+wAAAadJREFUOI11kw1zojAQhiN+BGxte+2dBoEQQggB+dL+//92uwmeIL1nnGHG53V32URCpmz9IPB35D/4r9XZUv0KftABPU+oVs/+bWJPwJnOOu2qiRup/Cd/euJ4eiSqhXTcu7wtlYOO8y9lAcAj/rQB+vS7U0GvpjM0Bux+ZvYYH+MuRLqCMYbreHVfW4XQxvqw0RDAKeJ/CmEFeBtpdQIJOJ+JBAqDuqm11nkuGfOJf1eOAouHQ44kiZQrErAZ32ETQfUxwBeB4hpGUWi08wkXK+LflaPDQI0DJBjgK7Kzml4793YRgM8BvUyER4hk0kK7yNLYTO0KiC0symomv030INxkdoQ9nhXoob4ZcwFatO3lUmdZyqHAAQ+DS5nkuc5hN9ooCNz6Pttk2diBkLXERJrCR7eqVKregE7TlIt3dyH2Ugjrcx0pFSn0NsDHG/XChRQ4dTJAgbLpXYBz734nPQHATLxWZVle+rHA+nGtPW4DwkBA3fqFhy57LCJaKKBqV8Ajcw5QRGAHha+QvW8Xf87tej9goIQlHF4W2mU+/vz++vBm9i+r/FSYRl4w2gAAAABJRU5ErkJggg==" className='w-6 h-6 ' />
              <div className='text-xl font-bold text-blue-800 '>Flipkart Clone </div>
            </div>
            <div className='text-md mt-2' style={{ fontFamily: 'Arvo' }}>Flipkart is an ecommerce platform from that sells dresses shoes and many more things.</div>
          </div>

          <div className='flex gap-24 justify-center mb-4'>
            <div className='w-24 h-12 border-2 border-black rounded-lg text-md font-bold flex justify-center items-center'>Open</div>
            <div className='w-24 h-12 border-2 border-black rounded-lg text-md font-bold flex justify-center items-center'>View Code</div>
          </div>
        </div>
      </div>
      <div className='mx-24 h-23 flex justify-between border rounded-xl mt-2 shadow-lg shadow-stone-300'>
        <div className='w-16 h-16 font-bold '><img src={stack} /></div>
        <div className=' flex gap-8'>

          <FaReact className='w-16 h-16  text-blue-500 rounded-xl px-2 ' />
          <BiLogoTailwindCss className='w-16 h-16  text-blue-600 rounded-xl px-2 ' />
          <SiExpress className='w-16 h-16  text-black rounded-xl px-2 ' />
          <DiMongodb className='w-16 h-16  text-green-500 rounded-xl px-2' />
          <SiRedux className='w-16 h-16  text-purple-700 rounded-xl px-2 ' />
          <FaNodeJs className='w-16 h-16  text-green-500 rounded-xl px-2 ' />
          <SiJavascript className='w-16 h-16  text-yellow-300 rounded-xl px-2' />
        </div>
      </div>
    </>

  )
}

export default Projects