import React, { useRef } from 'react'
import Typewriter from "typewriter-effect";
import Lottie from 'lottie-react';
import chat from '../chat.json'
import {BiMessage} from 'react-icons/bi'
import {IoMdCall} from 'react-icons/io'
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const notify = () => toast("Wow so easy!");

  const initialValues = {
    Name: "",
    EmailS: "",
    Message: "",
  }
  const SendMail = (templateParams) => {
    emailjs.send("service_s927f1e", "template_jg0nk9b", templateParams,"ZcGFUlFp0ItkveQsu")
      .then((response) => {
        toast.success("E-mail Sent Successfully", {
          icon: "🚀",
          theme: "colored",
          duration: 5000,
          position: "bottom-center", 
        });
        
        
        
      }) .catch ((err) => {
        toast.error("Failed Correct Your Email", {
          icon: "🚀",
          theme: "colored",
          duration: 5000,
          position: "bottom-center", 
        });
      });
      
  }

  const { values,handleBlur, handleChange, handleSubmit, setValues } = useFormik({
    initialValues,
    onSubmit: (values, action) => {
      action.resetForm()
      setValues(initialValues)
      SendMail({ "name": values.Name, "user-email": values.EmailS, "message": values.Message})
    }
  })

  
  

  return (
    <>
       <div className='w-full text-xl font-extrabold flex flex-col items-center mt-8 text-blue-600'>
       <div className='flex'><BiMessage/>goluchoudhary7808@gmail.com</div>
       <div className='flex'><IoMdCall/>+917667798932</div></div>
      <div className='w-full h-auto flex  justify-center mb-8 mt-8 '>
      <div className='w-10/12  mb-6  shadow-lg  shadow-black rounded-xl flex flex-col justify-center sm:flex sm:flex-row'>
        <div className='w-full  text bg-yellow-300  md:w-full flex justify-center items-center rounded-t-xl  sm:rounded-s-xl'>
          <div className='w-72 h-72' > <Lottie animationData={chat} autoplay loop /></div>
        </div>  
        
        <div className='w-full flex flex-col py-4 justify-center items-center '>
            
            
        <form className="flex flex-col mx-auto max-w-md p-4">
      <input
        type="text"
        name="Name"
        value={values.Name}
        onChange={handleChange}
        onBlur={handleBlur}
        className="user mb-4 p-2 rounded-md border"
        placeholder="Name"
      />
      <input
        type="email"
        name="EmailS"
        value={values.EmailS}
        onChange={handleChange}
        onBlur={handleBlur}
        className="user mb-4 p-2 rounded-md border"
        placeholder="Email"
      />
      <textarea
        name="Message"
        value={values.Message}
        onChange={handleChange}
        onBlur={handleBlur}
        className="user mb-4 p-2 rounded-md border"
        placeholder="Message"
      />
      <button
        onClick={handleSubmit}
        className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        type="button"
      >
        Send
      </button>
    </form>
        <ToastContainer className="flex items-center" />
    </div>
      </div>

      </div>
       


      <div className='bg-gray-400 h-12 text-lg font-bold flex justify-center items-center text-black'>Made By Golu choudhary</div>
    </>

  )
}

export default Contact