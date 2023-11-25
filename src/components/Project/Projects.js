import React from "react";
import "./Projects.css";
import { Button, ButtonGroup } from "@chakra-ui/react";

export const Projects = () => {
  const projects = [
    {
      id: "1",
      img: "https://i.postimg.cc/bw0CVpC7/flipkartimg.png",
      des: "Flipkart clone in MERN (MongoDB, Express, React, Node.js) - An e-commerce web application with admin and user roles, enabling users to browse and purchase products, manage their accounts, and make secure payments. The admin can manage products, categories, and orders, providing a comprehensive shopping experience.",
      name: "Flipkart Clone",
      deployurl: "https://flipkartmern.vercel.app/",
      githuburl: "https://github.com/Golu7667/Flipkart-Clone",
    },
    {
      id: "2",
      img: "https://i.postimg.cc/Hkxmgg3R/chatapp.png",
      des: "Develop a real-time MERN chat application utilizing Socket.io for seamless communication. This app integrates MongoDB, Express, React, and Node.js, enabling users to exchange messages instantly. Socket.io enhances the experience by providing live updates and smooth synchronization in a user-friendly interface.",
      name: "Chat App",
      deployurl: "https://chat-app-two-pi-40.vercel.app/",
      githuburl: "https://github.com/Golu7667/Chat-App",
    },
    {
      id: "3",
      img: "https://i.postimg.cc/057K6LDb/videoapp.png",
      des: "A WebRTC project enhances real-time communication in a MERN (MongoDB, Express.js, React, Node.js) project, enabling seamless audio and video interactions, enriching the user experience.",
      name: "Video Streaming",
      deployurl: "https://videocall-mauve.vercel.app/",
      githuburl: "https://github.com/Golu7667/Video-streaming",
    },
    {
      id: "4",
      img: "https://i.postimg.cc/cCpN3NDX/googleauthlogin.png",
      des: "In this mini project, i am implement Google OAuth 2.0 for a simplified login and signup process. Users can quickly log in or sign up using their Google accounts, ensuring a secure and user-friendly experience.",
      name: "Google-Outh2O",
      deployurl: "https://google-oauth-pearl.vercel.app/login",
      githuburl: "https://github.com/Golu7667/Google-Outh2O",
    },
    {
      id: "5",
      img: "https://i.postimg.cc/0NDZ51m9/speedmeterapp.png",
      des: `Experience the pulse of your connection with our Next.js Internet Speed Test app, delivering real-time insights into your network's Mbps within a single click.`,
      name: "Internet-Speed-Test-App",
      deployurl: "https://simple-golu7667.vercel.app/",
      githuburl: "https://github.com/Golu7667/Internet-Speed-Test-App",
    },
    {
      id: "6",
      img: "https://i.postimg.cc/5Nzg1FCZ/calculator.png",
      des: "A mini calculator project using HTML, CSS, and JavaScript, allowing users to perform basic arithmetic operations. It will have a user-friendly interface, responsive design, and accurate calculations for a smooth user experience.",
      name: "Calculator",
      deployurl: "https://calculator-project-omega.vercel.app/",
      githuburl: "https://github.com/Golu7667/Calculator",
    },
    {
      id: "7",
      img: "https://i.postimg.cc/sXK8YGcn/todolist.png",
      des: `Next.js empowers a responsive to-do list, enabling effortless task creation and deletion through React's state management and event handling, delivering a seamless user experience.`,
      name: "To-Do-List-App",
      deployurl: "https://github.com/Golu7667/To-Do-List-App",
      githuburl: "https://github.com/Golu7667/To-Do-List-App",
    },
    {
      id: "8",
      img: "https://i.postimg.cc/GtCFmXYV/mysqlnextjs.png",
      des: `In my Next.js project with MySQL, I seamlessly integrated a robust Sequelize model for the 'User' entity. With dedicated API routes, I implemented efficient CRUD operations, enabling smooth data management and interactions within the application.`,
      name: "Nextjs-With-Mysql",
      deployurl: "https://github.com/Golu7667/Nextjs-With-Mysql",
      githuburl: "https://github.com/Golu7667/Nextjs-With-Mysql",
    },
    {
      id: "9",
      img: "https://i.postimg.cc/8cp7Y9Lp/tictactoeapp.png",
      des: `Using Next.js, I've crafted a dynamic Tic-Tac-Toe app, leveraging React's component-based structure for a seamless, enjoyable gaming interface. Play, strategize, and enjoy the game in a smooth, Next.js-powered environment!`,
      name: "Tic-Tac-Toe-App",
      deployurl: "https://github.com/Golu7667/Tic-Tac-Toe-App",
      githuburl: "https://github.com/Golu7667/Tic-Tac-Toe-App",
    },
    {
      id: "10",
      img: "https://i.postimg.cc/Z5xKGVK0/timerapp.png",
      des: "Next.js powers my timer app, accurately tracking hours, minutes, and seconds with seamless start, stop, and reset functionality, offering precision and ease in time management.",
      name: "Timer App",
      deployurl: "https://github.com/Golu7667/Timer-App",
      githuburl: "https://github.com/Golu7667/Timer-App",
    },
  ];

  return (
    <>
      <h1
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "bolder",
          fontFamily:'monospace',
          color:'rgb(37 99 235)'
        }}
      >
        Projects
      </h1>
      {projects.map((item) => (
        <div className="sec">
          <div className="projects_container">
            <div className="project">
              <div className="project_videocontainer">
                <div data-aos="fade-right">
                  <img
                    src={item.img}
                    style={{ width: "100%", height: "100%" }}
                    alt="Flipcart clone"
                  />
                </div>
              </div>
              <div className="project_information" data-aos="fade-right">
                <h2 style={{ color: "green", fontWeight: "bolder" }}>
                  {item.name}
                </h2>
                <p>{item.des}</p>

                <div style={{ display: "block" }}>
                  <Button colorScheme="whatsapp"
                   style={{ width: "20vw" ,marginTop:'20px' ,marginRight:'20px'}}
                  >
                    <a
                      href={item.githuburl}
                      target="_blank"
                      rel="noreferrer"
                     
                    >
                       Url
                    </a>
                  </Button>
                  <Button colorScheme="whatsapp" style={{width: "20vw",marginTop:'20px' }}>
                    <a
                      href={item.githuburl}
                      target="_blank"
                      rel="noreferrer"
                      
                    >
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
