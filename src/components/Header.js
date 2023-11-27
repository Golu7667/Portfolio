import React,{useState} from 'react'
import { MdMenuOpen } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import resume from '../Images/Golu_Choudhary_Resume.pdf';


function Header() {

  const [showNavList, setShowNavList] = React.useState(false);
 
 
    
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
    
     <MdMenuOpen className='w-12 h-12 bg-white mr-4 rounded-md' onClick={()=>setShowNavList(false)}/>
     : <IoMenuOutline className='w-12 h-12 bg-white mr-4 rounded-md' onClick={()=>setShowNavList(true)}/>
     
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
        <div> <a
              href={resume}
              onClick={()=>{window.open("https://drive.google.com/file/d/1eLUF4M5UNTXHDNxvMqHHlC4ruRr1HoNb/view" , "blank")}}
              target="_blank"
              rel="noreferrer"
            
              download={"Golu-Chaudhary-Resume"}
            >
              Resume
            </a></div>
        </div>
      </div> :null
      
    }

    <div className='hidden lg:block flex w-full bg-white-500 py-6 pr-2 border-none border-1 px-12  z-10 fixed top-0  justify-between overflow-hidden object-contian text-black bg-gray-400 '  >
      
      <div className=' flex '>
      <div className='w-3/12 text-2xl font-bold text-white gap-12'>Golu Choudhary</div>
      <div className='w-9/12 flex justify-end text-xl font-bold gap-10 text-white '>
        <div > <a href="/" onClick={() => toggleNavList("")} >Home</a></div>
        <div><a href="#about" onClick={() => toggleNavList("#about")}>About</a></div>
        <div><a href="#skills "  onClick={() => toggleNavList("#skills")}>Skills</a></div> 
        <div><a to="#tools" onClick={() => toggleNavList("#tools")}>Tools</a></div>
        <div><a to="/projects" onClick={() => toggleNavList("#projects")} >Projects</a></div>
        <div><a to="/contact" onClick={() => toggleNavList("#contact")}>Contact</a></div>  
        <div> <a
              href={resume}
              onClick={()=>{window.open("https://drive.google.com/file/d/1eLUF4M5UNTXHDNxvMqHHlC4ruRr1HoNb/view" , "blank")}}
             
              target="_blank"
              rel="noreferrer"
            
              download={"Golu-Chaudhary-Resume"}
            >
              Resume
            </a></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
