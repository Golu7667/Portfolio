import React from 'react'

function Header() {
  return (
    <div className='w-full mb-10 bg-white-500 py-6 pr-2 border-none border-1 bg-midnight  z-10 fixed top-0  '>
      <div className='flex justify-end text-lg font-bold gap-10 text-white '>
        <div >Home</div>
        <div>About</div>
        <div>Skills</div> 
        <div>Tools</div>
        <div>Projects</div>
        <div>Contact</div>
        <div>Resume</div>
      </div>
    </div>
  )
}

export default Header
