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
      img: "https://private-user-images.githubusercontent.com/103061012/282239696-c42c47f0-d785-4c42-b3ef-77fd62c6fc2d.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5MDYwOTIsIm5iZiI6MTcwMDkwNTc5MiwicGF0aCI6Ii8xMDMwNjEwMTIvMjgyMjM5Njk2LWM0MmM0N2YwLWQ3ODUtNGM0Mi1iM2VmLTc3ZmQ2MmM2ZmMyZC5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNVQwOTQ5NTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hZjJiYjhiM2NhNjYxYTE3MmI3Y2U5MjAzNzc5NDIyYjk3YWM1OTcwODA3M2U2MDI5YjY2ZjBjNjM4OWFmNGE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Y1cLZ-bVxCIhZi9O_wF-ozAs78L_JDRB8H3JTXA6I-E",
      des: "In this mini project, i am implement Google OAuth 2.0 for a simplified login and signup process. Users can quickly log in or sign up using their Google accounts, ensuring a secure and user-friendly experience.",
      name: "Google-Outh2O",
      deployurl: "https://google-oauth-pearl.vercel.app/login",
      githuburl: "https://github.com/Golu7667/Google-Outh2O",
    },
    {
      id: "5",
      img: "https://private-user-images.githubusercontent.com/103061012/282237984-dc090cc2-021e-44e6-aed1-b9a65df06e80.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5MDY0MDcsIm5iZiI6MTcwMDkwNjEwNywicGF0aCI6Ii8xMDMwNjEwMTIvMjgyMjM3OTg0LWRjMDkwY2MyLTAyMWUtNDRlNi1hZWQxLWI5YTY1ZGYwNmU4MC5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNVQwOTU1MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MTE4ZDlhM2U3YzA3MGU2MjBhZWQ5MjkxYTVkOTM2MDFmZDU2OGIyYzBkODM3NWNlNThiNDgzYmRiNjgzZTIxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.oIPRmnjECD-gCtlQakL998YxQgG0EPQpWF7G7niUywk",
      des: `Experience the pulse of your connection with our Next.js Internet Speed Test app, delivering real-time insights into your network's Mbps within a single click.`,
      name: "Internet-Speed-Test-App",
      deployurl: "https://simple-golu7667.vercel.app/",
      githuburl: "https://github.com/Golu7667/Internet-Speed-Test-App",
    },
    {
      id: "6",
      img: "https://private-user-images.githubusercontent.com/103061012/282239584-30e20d82-aa77-4205-a102-4cd28c5b3b52.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5MDcxNDQsIm5iZiI6MTcwMDkwNjg0NCwicGF0aCI6Ii8xMDMwNjEwMTIvMjgyMjM5NTg0LTMwZTIwZDgyLWFhNzctNDIwNS1hMTAyLTRjZDI4YzViM2I1Mi5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNVQxMDA3MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lN2I4OTE1MWYyNWEyNmUyNDRmYmJlMTI0YzYyODE2ZTQyNGM4OWZmODEzNjdkMjE1MDQ2ZmJiOGE4ZjQyYWVmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.IzZF4fiEqBb6Iyps0t7uVXV8aVMVZkfSrTAytdBOi6Y",
      des: "A mini calculator project using HTML, CSS, and JavaScript, allowing users to perform basic arithmetic operations. It will have a user-friendly interface, responsive design, and accurate calculations for a smooth user experience.",
      name: "Calculator",
      deployurl: "https://calculator-project-omega.vercel.app/",
      githuburl: "https://github.com/Golu7667/Calculator",
    },
    {
      id: "7",
      img: "https://private-user-images.githubusercontent.com/103061012/282223200-bf99bddf-2947-4ba9-9cd2-d930d7c94cfa.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5MDc1MjYsIm5iZiI6MTcwMDkwNzIyNiwicGF0aCI6Ii8xMDMwNjEwMTIvMjgyMjIzMjAwLWJmOTliZGRmLTI5NDctNGJhOS05Y2QyLWQ5MzBkN2M5NGNmYS5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNVQxMDEzNDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00Nzc4YjkwNzdkMjA4M2Y5ODhjYzE2ZDY4ZWZkMjViZTIwMDQ0MTQ1MTRjZDRiNjZiNjgxMjAzZTdlMjdhOThlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.CtYf4BKRBBooxvclbv5Y3Jai9bXYkYU9pbWOa4VkpIY",
      des: `Next.js empowers a responsive to-do list, enabling effortless task creation and deletion through React's state management and event handling, delivering a seamless user experience.`,
      name: "To-Do-List-App",
      deployurl: "https://github.com/Golu7667/To-Do-List-App",
      githuburl: "https://github.com/Golu7667/To-Do-List-App",
    },
    {
      id: "8",
      img: "https://private-user-images.githubusercontent.com/103061012/284056423-939ffe6d-42e6-4512-b78f-1deb9f9e133c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5MDc5MzIsIm5iZiI6MTcwMDkwNzYzMiwicGF0aCI6Ii8xMDMwNjEwMTIvMjg0MDU2NDIzLTkzOWZmZTZkLTQyZTYtNDUxMi1iNzhmLTFkZWI5ZjllMTMzYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNVQxMDIwMzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NWQwYTg1MjE3OTlhZTdjZDE1YWJlNTBiNDZmZWIzNjUwMDYyYWY0MDk1YjBiN2JkNmU2MDBkYWJhMTM5Nzg1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.HuWwZJMxvfv9mpMlCz5oVtQl6V2SOI1ad3jdFLe95jE",
      des: `In my Next.js project with MySQL, I seamlessly integrated a robust Sequelize model for the 'User' entity. With dedicated API routes, I implemented efficient CRUD operations, enabling smooth data management and interactions within the application.`,
      name: "Nextjs-With-Mysql",
      deployurl: "https://github.com/Golu7667/Nextjs-With-Mysql",
      githuburl: "https://github.com/Golu7667/Nextjs-With-Mysql",
    },
    {
      id: "9",
      img: "https://private-user-images.githubusercontent.com/103061012/281997377-e16158be-fe8e-4480-99d6-43af42c13132.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5MDg0ODYsIm5iZiI6MTcwMDkwODE4NiwicGF0aCI6Ii8xMDMwNjEwMTIvMjgxOTk3Mzc3LWUxNjE1OGJlLWZlOGUtNDQ4MC05OWQ2LTQzYWY0MmMxMzEzMi5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNVQxMDI5NDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kYWE3ZGQ5YTU2YmQ2MDBjYjQ1MTUzMjI3MjU0NmI2YzE2NDRhMWI3YzE1M2M3NGZlZjU3YzA2NzgyOTgwNDQ2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.yxEjPuKmayMewoTtIpE75bmFHAJ09wfA-mJBY2n_C-Y",
      des: `Using Next.js, I've crafted a dynamic Tic-Tac-Toe app, leveraging React's component-based structure for a seamless, enjoyable gaming interface. Play, strategize, and enjoy the game in a smooth, Next.js-powered environment!`,
      name: "Tic-Tac-Toe-App",
      deployurl: "https://github.com/Golu7667/Tic-Tac-Toe-App",
      githuburl: "https://github.com/Golu7667/Tic-Tac-Toe-App",
    },
    {
      id: "10",
      img: "https://private-user-images.githubusercontent.com/103061012/282027585-2ff772ac-d1d3-4237-900d-9e9093b47b43.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5MDg2NzMsIm5iZiI6MTcwMDkwODM3MywicGF0aCI6Ii8xMDMwNjEwMTIvMjgyMDI3NTg1LTJmZjc3MmFjLWQxZDMtNDIzNy05MDBkLTllOTA5M2I0N2I0My5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNVQxMDMyNTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYWFiMjNkZTA0YzY5NTM2Zjc3MDViZGJhNDA3ODY3NDAyZDE1ZWRkM2VlOTczZjc3ODFlYzNkMDU2NzNkOTgyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.tlCkfEyI7PeuYBnz9NIBfFBUA1P2bKjK5z0eWCKvdV4",
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
