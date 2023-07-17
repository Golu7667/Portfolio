import React from 'react'
import im from '../im.png'


function Header() {
  const divStyle = {
    backgroundImage: `url(${im})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Add additional background properties or styles as needed
  };
  return (
    <div className='w-full mb-10 bg-white-500 py-6 pr-2 border-none border-1 px-12  z-10 fixed top-0 flex justify-between overflow-hidden object-contian text-black ' style={divStyle}>
      <div className='hidden md:block text-4xl font-bold text-black ml-8'>Golu Choudhary</div>
      <div className='flex justify-end text-xl font-bold gap-10 text-black '>
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
