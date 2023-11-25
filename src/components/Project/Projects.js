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
    {id:'3',img:'https://i.postimg.cc/057K6LDb/videoapp.png',des:'A WebRTC project enhances real-time communication in a MERN (MongoDB, Express.js, React, Node.js) project, enabling seamless audio and video interactions, enriching the user experience.',name:'Video Streaming',deployurl:'https://videocall-mauve.vercel.app/',githuburl:'https://github.com/Golu7667/Video-streaming'},
    {id:'4',img:'https://private-user-images.githubusercontent.com/103061012/282239696-c42c47f0-d785-4c42-b3ef-77fd62c6fc2d.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5MDYwOTIsIm5iZiI6MTcwMDkwNTc5MiwicGF0aCI6Ii8xMDMwNjEwMTIvMjgyMjM5Njk2LWM0MmM0N2YwLWQ3ODUtNGM0Mi1iM2VmLTc3ZmQ2MmM2ZmMyZC5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNVQwOTQ5NTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hZjJiYjhiM2NhNjYxYTE3MmI3Y2U5MjAzNzc5NDIyYjk3YWM1OTcwODA3M2U2MDI5YjY2ZjBjNjM4OWFmNGE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Y1cLZ-bVxCIhZi9O_wF-ozAs78L_JDRB8H3JTXA6I-E',des:'In this mini project, i am implement Google OAuth 2.0 for a simplified login and signup process. Users can quickly log in or sign up using their Google accounts, ensuring a secure and user-friendly experience.',name:'Google-Outh2O',deployurl:'https://google-oauth-pearl.vercel.app/login',githuburl:'https://github.com/Golu7667/Google-Outh2O'},
    {id:'5',img:'https://private-user-images.githubusercontent.com/103061012/282237984-dc090cc2-021e-44e6-aed1-b9a65df06e80.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5MDY0MDcsIm5iZiI6MTcwMDkwNjEwNywicGF0aCI6Ii8xMDMwNjEwMTIvMjgyMjM3OTg0LWRjMDkwY2MyLTAyMWUtNDRlNi1hZWQxLWI5YTY1ZGYwNmU4MC5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNVQwOTU1MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MTE4ZDlhM2U3YzA3MGU2MjBhZWQ5MjkxYTVkOTM2MDFmZDU2OGIyYzBkODM3NWNlNThiNDgzYmRiNjgzZTIxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.oIPRmnjECD-gCtlQakL998YxQgG0EPQpWF7G7niUywk',des:`Experience the pulse of your connection with our Next.js Internet Speed Test app, delivering real-time insights into your network's Mbps within a single click.`,name:'Internet-Speed-Test-App',deployurl:'https://simple-golu7667.vercel.app/',githuburl:'https://github.com/Golu7667/Internet-Speed-Test-App'},
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
              <h2 style={{color:'green',fontWeight:'bolder'}}>{item.name}</h2>
              <p>
              {item.des}
              </p>
              <div style={{display:'flex',height:'auto'}}>
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