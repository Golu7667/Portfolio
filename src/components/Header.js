import React from 'react'
import im from '../im.png'
import { Link } from "react-router-dom"

function Header() {

  const [showNavList, setShowNavList] = React.useState(false);
  const divStyle = {
    backgroundImage: `url(${im})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Add additional background properties or styles as needed

    
    };
    const toggleNavList = (id) => {
      var element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
      setShowNavList(!showNavList);
  };
  return (
    <div className='w-full mb-10 bg-white-500 py-6 pr-2 border-none border-1 px-12  z-10 fixed top-0 flex justify-between overflow-hidden object-contian text-black ' style={divStyle}>
      <div className='hidden md:block text-4xl font-bold text-black ml-8'>Golu Choudhary</div>
      <div className='flex justify-end text-xl font-bold gap-10 text-black '>
        <div > <a href="/" onClick={() => toggleNavList("")} >Home</a></div>
        <div><a href="#about" onClick={() => toggleNavList("#about")}>About</a></div>
        <div><a href="#skills "  onClick={() => toggleNavList("#skills")}>Skills</a></div> 
        <div><a to="#tools" onClick={() => toggleNavList("#tools")}>Tools</a></div>
        <div><a to="/projects" onClick={() => toggleNavList("#projects")} >Projects</a></div>
        <div><a to="/contact" onClick={() => toggleNavList("#contact")}>Contact</a></div>  
        <div>Resume</div>
      </div>
    </div>
  )
}

export default Header
