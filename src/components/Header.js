import React,{useState} from 'react'
import im from '../im.png'
import { Link } from "react-router-dom"
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
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
    <>
     
     <div className='w-full h-20 bg-gray-400  flex justify-end items-center z-10 sticky top-0 '>
     <div className='w-full flex  justify-center text-2xl font-bold text-white gap-y-6'>Golu Choudhary</div>
     {showNavList ?
    
     <AiOutlineClose className='w-12 h-12 bg-white mr-2 rounded-sm' onClick={()=>setShowNavList(false)}/>
     : <AiOutlineMenu className='w-12 h-12 bg-white mr-2 rounded-sm' onClick={()=>setShowNavList(true)}/>
     
    }
     </div>
  
    { showNavList?
     
     <div className='lg:hidden w-full h-screen bg-gray-500 flex flex-col pt-4 z-10 fixed overflow-hidden'>
      <div className='w-full flex flex-col justify-center items-center text-xl font-bold gap-y-10  text-white '>
        <div> <a href="#home" onClick={() => toggleNavList("#home")} >Home</a></div>
        <div><a href="#about" onClick={() => toggleNavList("#about")}>About</a></div>
        <div><a href="#skills "  onClick={() => toggleNavList("#skills")}>Skills</a></div> 
        <div><a to="#tools" onClick={() => toggleNavList("#tools")}>Tools</a></div>
        <div><a to="/projects" onClick={() => toggleNavList("#projects")} >Projects</a></div>
        <div><a to="/contact" onClick={() => toggleNavList("#contact")}>Contact</a></div>  
        <div>Resume</div>
        </div>
      </div> :null
      
    }

    <div className='hidden lg:block flex w-full bg-white-500 py-6 pr-2 border-none border-1 px-12  z-10 fixed top-0  justify-between overflow-hidden object-contian text-black  ' style={{backgroundColor:'black'}} >
      
      <div className=' flex '>
      <div className='w-3/12 text-2xl font-bold text-white gap-12'>Golu Choudhary</div>
      <div className='w-9/12 flex justify-end text-xl font-bold gap-10 text-white '>
        <div > <a href="/" onClick={() => toggleNavList("")} >Home</a></div>
        <div><a href="#about" onClick={() => toggleNavList("#about")}>About</a></div>
        <div><a href="#skills "  onClick={() => toggleNavList("#skills")}>Skills</a></div> 
        <div><a to="#tools" onClick={() => toggleNavList("#tools")}>Tools</a></div>
        <div><a to="/projects" onClick={() => toggleNavList("#projects")} >Projects</a></div>
        <div><a to="/contact" onClick={() => toggleNavList("#contact")}>Contact</a></div>  
        <div>Resume</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
