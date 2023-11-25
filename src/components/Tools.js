import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiCodesandbox,
  SiNetlify,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

function Tools() {
  return (
    <>
      <div className=" font-bold flex flex-col items-center">
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: "bolder",
            fontFamily: "monospace",
            color: "rgb(37 99 235)",
          }}
        >
          Tools
        </div>
      </div>
      <div className="my-12   flex gap-6 flex-wrap justify-center">
        <div className="h-32 w-32 flex flex-col justify-center items-center">
          <div
            className="text-md text-green-500 font-bold"
            style={{ fontFamily: "serif" }}
          >
            Visualstudiocode
          </div>

          <SiVisualstudiocode className="h-28 w-28 text-blue-500 border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110 " />
        </div>
        <div className="h-32 w-32 flex flex-col justify-center items-center">
          <div
            className="text-md text-green-500 font-bold"
            style={{ fontFamily: "serif" }}
          >
            Codesandbox
          </div>
          <SiCodesandbox className="h-28 w-28 text-black border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900  transform transition-transform hover:scale-110" />
        </div>
        <div className="h-32 w-32 flex flex-col justify-center items-center">
          <div
            className="text-md text-green-500 font-bold"
            style={{ fontFamily: "serif" }}
          >
            Postman
          </div>
          <SiPostman className="h-28 w-28 text-red-500 border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110 " />
        </div>
        <div className="h-32 w-32 flex flex-col justify-center items-center">
          <div
            className="text-md text-green-500 font-bold"
            style={{ fontFamily: "serif" }}
          >
            Github{" "}
          </div>
          <VscGithub className="h-28 w-28 text-black border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110" />
        </div>

        <div className="h-32 w-32 flex flex-col justify-center items-center">
          <div
            className="text-md text-green-500 font-bold"
            style={{ fontFamily: "serif" }}
          >
            Netlify
          </div>
          <SiNetlify className="h-28 w-28 text-green-500 border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900  transform transition-transform hover:scale-110" />
        </div>
        <div className="h-32 w-32 flex flex-col justify-center items-center">
          <div
            className="text-md text-green-500 font-bold"
            style={{ fontFamily: "serif" }}
          >
            Vercel
          </div>
          <SiVercel className="h-28 w-28 text-black-500 border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110" />
        </div>
        <div className="h-32 w-32 flex flex-col justify-center items-center">
          <div
            className="text-md text-green-500 font-bold"
            style={{ fontFamily: "serif" }}
          >
            Render
          </div>
          <SiRender className="h-28 w-28 text-blue-500 border-gray-700 rounded-2xl px-6 shadow-xl shadow-indigo-900 transform transition-transform hover:scale-110" />
        </div>
      </div>
    </>
  );
}

export default Tools;
