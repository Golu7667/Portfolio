import React from "react";
import About from "./About";
import Skills from "./Skills";
import Tools from "./Tools";
import { Projects } from "./Project/Projects";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <About id="#about" />
      <Skills id="#skills" />
      <Tools id="#tools" />
      <Projects id="#projects" />
      <Contact id="#contact" />
    </>
  );
}

export default Home;
