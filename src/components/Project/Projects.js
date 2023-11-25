import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,

  SiChakraui,
  SiExpress,
  SiRedux,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";


export const Projects = () => {
  const projects=[
    {id:'1',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'Flipkart clone in MERN (MongoDB, Express, React, Node.js) - An e-commerce web application with admin and user roles, enabling users to browse and purchase products, manage their accounts, and make secure payments. The admin can manage products, categories, and orders, providing a comprehensive shopping experience.',name:'Flipkart Clone',deployurl:'https://flipkartmern.vercel.app/',githuburl:'https://github.com/Golu7667/Flipkart-Clone'},
    {id:'2',img:'https://i.postimg.cc/Hkxmgg3R/chatapp.png',des:'Develop a real-time MERN chat application utilizing Socket.io for seamless communication. This app integrates MongoDB, Express, React, and Node.js, enabling users to exchange messages instantly. Socket.io enhances the experience by providing live updates and smooth synchronization in a user-friendly interface.',name:'Chat App',deployurl:'https://chat-app-two-pi-40.vercel.app/',githuburl:'https://github.com/Golu7667/Chat-App'},
    {id:'3',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'4',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'5',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'6',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'7',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'8',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'9',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'10',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'11',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'12',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'13',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'14',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'15',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'16',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'17',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'18',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'19',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'20',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'21',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'22',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'23',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'24',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'25',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'26',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'27',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    {id:'28',img:'https://i.postimg.cc/bw0CVpC7/flipkartimg.png',des:'',name:'',deployurl:'',githuburl:''},
    
]





  return (
    <>
    <h1 style={{width:'100vw' ,display:'flex',justifyContent:'center',fontSize:'30px',fontWeight:'bolder'}}>Projects</h1>
      {
        projects.map((item)=>(

       
     
          <div className="sec">
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={item.img} style={{width:'100%',height:'100%'}} alt="Flipcart clone" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>{item.name}</h2>
              <p>
              {item.des}
              </p>
              <div style={{display:'flex'}}>
                <FaReact />
                <SiExpress />
                <DiMongodb />
               
                <SiChakraui />
                <SiRedux />
                <FaNodeJs />
                <SiJavascript />
              </div>
              <div>
                <a
                  href={item.deployurl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href={item.githuburl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
       
    
        
        ))
      }
      
    </>
  );
};