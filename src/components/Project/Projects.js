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
    {
      id: "11",
      img: "https://i.postimg.cc/28kFZXb7/countdownapp.png",
      des: "Through Next.js, my countdown timer app meticulously tracks time's passage, ticking away seconds, a digital guardian of moments.",
      name: "CountDown Timer App",
      deployurl: "https://github.com/Golu7667/Countdown-Timer-App",
      githuburl: "https://github.com/Golu7667/Countdown-Timer-App",
    },
    {
      id: "12",
      img: "https://i.postimg.cc/05XDzGmz/imagetopdf.png",
      des: "Unlock seamless image-to-PDF conversions with my Next.js app—effortlessly transform JPEG, PNG, and JPG files, preserving quality and user-friendly with real-time previews.",
      name: "Image-To-Pdf-App",
      deployurl: "https://github.com/Golu7667/Image-To-Pdf-App",
      githuburl: "https://github.com/Golu7667/Image-To-Pdf-App",
    },
    {
      id: "13",
      img: "https://i.postimg.cc/mkdg5SYK/drawingapp.png",
      des: "Empower your creativity with our innovative drawing app, offering a canvas for limitless expression and artistic exploration in every stroke.",
      name: "Drawing App",
      deployurl: "https://github.com/Golu7667/Drawing-App",
      githuburl: "https://github.com/Golu7667/Drawing-App",
    },
    {
      id: "14",
      img: "https://i.postimg.cc/rwz2jkYV/speakertext.png",
      des: "The Text-to-Speech Converter App seamlessly transforms text into spoken words, enhancing accessibility and providing a user-friendly reading experience for all.",
      name: "Text To Speech Converter App",
      deployurl: "https://github.com/Golu7667/Text-To-Speech-Converter",
      githuburl: "https://github.com/Golu7667/Text-To-Speech-Converter",
    },
    {
      id: "15",
      img: "https://i.postimg.cc/dV2kvgYK/texttospeech.png",
      des: "In my Next.js project, I've implemented a text-to-speech feature using the Web Speech API. Users can effortlessly listen to the content on their web browsers, enhancing accessibility and providing a more engaging user experience.",
      name: "Text To Speech Converter App",
      deployurl: "https://github.com/Golu7667/Text-To-Speech-App",
      githuburl: "https://github.com/Golu7667/Text-To-Speech-App",
    },
    {
      id: "16",
      img: "https://i.postimg.cc/5y0V6YTV/locationfinder.png",
      des: "In my Next.js location finder project, I've developed a feature that allows users to easily discover longitude and latitude coordinates for any location, enhancing location-based services and applications.",
      name: "Location Finder App",
      deployurl: "https://github.com/Golu7667/Location-Finder-App",
      githuburl: "https://github.com/Golu7667/Location-Finder-App",
    },
    {
      id: "17",
      img: "https://i.postimg.cc/NfZkChg8/wordcounterapp.png",
      des: "Empowering users with real-time word count analysis, our Next.js-based Word Counter app offers a seamless interface for efficiently tracking and managing word content",
      name: "Word Counter App",
      deployurl: "https://github.com/Golu7667/Word-Counter-App",
      githuburl: "https://github.com/Golu7667/Word-Counter-App",
    },
    {
      id: "18",
      img: "https://i.postimg.cc/fLWFK3sg/dateapp.png",
      des: "Empowering with Next.js, my app showcases the current date elegantly, merging tech prowess with seamless user experience",
      name: "Date App",
      deployurl: "https://github.com/Golu7667/Date-App",
      githuburl: "https://github.com/Golu7667/Date-App",
    },
    {
      id: "19",
      img: "https://i.postimg.cc/440fYGbT/nextjsinsidemongoose.png",
      des: "In my Next.js project, MongoDB is directly integrated, eliminating the need for Express and Node.js. This streamlined approach simplifies development, creating efficient, serverless web applications.",
      name: "MongoDB-Next.js-Expressless-App",
      deployurl: "https://github.com/Golu7667/MongoDB-Next.js-Expressless-Efficiency",
      githuburl: "https://github.com/Golu7667/MongoDB-Next.js-Expressless-Efficiency",
    },
    {
      id: "20",
      img: "https://i.postimg.cc/Nfg0hD4K/otpemailapp.png",
      des: "Crafted with React, this project seamlessly integrates Nodemailer for secure email OTP verification. Featuring a user-friendly login page leading to a dynamic dashboard, the application ensures a smooth experience with an intuitive signup process.",
      name: "Login-With-Email-Otp App",
      deployurl: "https://github.com/Golu7667/Login-With-Email-Otp",
      githuburl: "https://github.com/Golu7667/Login-With-Email-Otp",
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
